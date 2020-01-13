---
title: Two Ways of Creating Random Address Points Using RStudio
author: ''
date: '2020-01-09'
slug: two-ways-of-creating-random-address-points-using-rstudio
categories: []
tags:
  - R
  - GIS
  - Raster
authors: []
---


### Introduction

This study shows two ways of selecting random points sample by using selecting random parcel shapefiles within the City of Seattle as an example. During my urban studies using R, I have encountered the need to select sample points of a geographic units or sample address points within a city. After generating a proper amount of samples, I wouldn’t need to run analysis on the raw datasets, which in this case, there are 183916 parcels within the City of Seattle. The results are shown below, with the blue parcels selected by method one using st_sample, and the red parcels selected by method two using st_nn. 

*(There’s also the interactive map at the end of this page.)*

<img src="https://user-images.githubusercontent.com/53570321/72079423-e8467100-32c8-11ea-964d-afba958aadd5.PNG" alt="" width=100% />


```
library(maps)
library(nngeo)
library(tidyverse)
library(stringr) 
library(sf)   
library(raster)
library(sp)
library(mapview)
library(tmap)
library(leaflet)
library(rgeos)

#Read the parcel shapefile:
base_seattle<-st_read("Parcels_for_King_County_with_Address_with_Property_Information__parcel_address_area.shp")

nrow(base_seattle)		#183916

#Preparing and wrangling the base data: transform into a proper coordinate reference system, 
#filter by land use code to only include low-density homes, and drop all other columns that I am not interested in:

#https://www.spatialreference.org/ref/esri/102348/
#NAD 1983 HARN StatePlane Washington North FIPS 4601
use_seattle <- base_seattle %>% st_transform(crs = 102348) %>% 
  filter(PREUSE_DES %in% c("Single Family(Res Use/Zone)", "Townhouse Plat", "Duplex", "Triplex")) %>%
  subset(select=c(ADDR_NUM, ADDR_FULL, ZIP5, LAT, LON, APPRLNDVAL, APPR_IMPR, TAX_IMPR, TAX_LNDVAL, Shape_Area, PREUSE_DES))
nrow(use_seattle )		#154639
```

### First Method

The first method of selecting random sample point is to use the **st_sample** function, it creates sample points on or in (sets of) spatial features. After setting the number of samples within a spatial feature, you can also pruning these points to be at least some distance apart from each other. After that, spatial join the sample points with the parcel layer. The method of pruning data is inspired by the [blog](https://www.jla-data.net/eng/creating-and-pruning-random-points-and-polygons/) from JLA Data/ Jindra Lacko.




```
#Set the sample size to be 1000:
st_seattle <- st_sample(use_seattle,1000) %>% st_sf() %>%  # ... to data frame ...
  st_transform(crs=102348)  # ... and a metric CRS

nrow(st_seattle)  #1000

#####Set minimum distance as 50 meters to avoid selecting overlayed parcels:

i <- 1 # iterator start

buffer_size <- 50 # minimal distance to be enforced (in meters)

repeat( {
  #  create buffer around i-th point
  buffer <- st_buffer(st_seattle[i,], buffer_size ) 
  
  offending <- st_seattle %>%  # start with the intersection of master points... 
    st_intersects(buffer) %>% # ... and the current buffer
    as_data_frame() %>% # as a data frame
    pull(row.id) # and take only the row.id column as a vector
  
  # remove the first element from the vector as it is not truly 
  # offending (it is the original point)
  offending <- offending[-1]
  
  # if there are any offending points - re-assign the master points, 
  # with the offending ones excluded / this is the main pruning part :)
  if (!is_empty(offending)) st_seattle <- st_seattle[-offending,] 
  
  if ( i >= nrow(st_seattle)) {
    # the end was reached; no more points to process
    break 
  } else {
    # rinse & repeat
    i <- i + 1 
  }
  
} )

nrow(st_seattle)		#963. Thirty seven points were filtered out due to close proximity.


#########Select by location/spatial join:

st_joined <- use_seattle[st_seattle, ]		#The default method of select by location using square bracket here is intersect.

nrow(st_joined)
#963. It means that every sample point is joined to a parcel, which is inherently true,
#because the st_sample function selected a sample of parcel centroids.

plot(st_joined$geometry)
```

<img src="https://user-images.githubusercontent.com/53570321/71931419-b4a20480-316b-11ea-9643-2cbc73da8f10.jpg" alt="" width=47% />

### Second Method

The second method is to create a fishnet and grids of points as selector using raster function, and spatial join the points with the parcel using the **nearest** selection, which means each sample point will be joined to the nearest parcel.

```
#Create a bounding box as the extent of fishnet:
bbox <- st_as_sfc(st_bbox(use_seattle, crs = 102348))  #Get the numeric vector of length four, with xmin, ymin, xmax and ymax values;

grid <- raster(xmn=380589, xmx=394331, ymn=56110, ymx=82783, crs=102348, resolution= 500)
 #I tested several values of resolution here to generate proper amount of grid points. 
 #The higher the resolution number, the smaller the sample size.

grid1 <- rasterToPolygons(grid) %>% st_as_sf()  #convert to sf object

fn_seattle <- st_centroid(grid1)     #Convert the fishnet to grid points
st_crs(fn_seattle)=102348

nrow(fn_seattle)	#1431
```

Here, if I use the same “select by location square bracket” method to select the parcel, only 333 parcels will be selected. It is because a lot of sample points fall onto water surface, street surface, and non-residential area. Therefore, a select by nearest location must be performed to generate enough sample. The function **st_nn** is useful here as it is described: “The function returns the indices of layer y which are nearest neighbors of each feature of layer x. The number of nearest neighbors k and the search radius maxdist can be modified.” However, this function will take a long time because here in this study, 1431*154639 distances are calculated and compared. The returned indices of layer will be used to select the parcel.



```
nn_seattle <- st_nn(fn_seattle, use_seattle, sparse = TRUE, k = 1, maxdist = Inf,
      returnDist = FALSE, progress = TRUE)

#Subset  parcel by the list:
nn_seattle <- unlist(nn_seattle)
n1_seattle <- use_seattle[nn_seattle, ]

tm_shape(n1_seattle) +
  tm_dots(col = "#00ccff") 
```  

<img src="https://user-images.githubusercontent.com/53570321/71931426-b66bc800-316b-11ea-84ee-247ccc7b92d6.jpg" alt="" width=60% />

```
#Create a map:
tmap_mode("view")

tm_shape(n1_seattle) +
  tm_borders(col = "red", lwd = 2) + 
  tm_shape(st_joined) +
  tm_borders(col = "#00ccff", lwd = 2) 
```
<iframe src="/doc/seattle_sample.html" allowfullscreen="true" width = 90% height = 500px> </iframe>

### Conclusion

As a conclusion, the first st_sample method creates a more random sample, and the second st_nn method creates a more (spatially) evenly distributed sample. The method should be chosen based on different scenarios and uses of the sample. 

The first method is simple and easy. However, the nearest distance between samples need to be set carefully to capture enough sample size. 

The second method takes more computing power, but the sample size is more promising. However, a lot of grid points on the water surface were joined to the nearest coastal parcels, and created a cluster parcels on the shore. This method can be fixed by setting the maxdist parameter within the st_nn function. As a result, it might lead to the decrease of sample size as well.
