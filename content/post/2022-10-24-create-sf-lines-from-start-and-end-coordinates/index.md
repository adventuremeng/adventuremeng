---
title: Create sf Lines from Start and End Coordinates
author: ''
date: '2022-10-24'
slug: create-sf-lines-from-start-and-end-coordinates
categories: []
tags:
  - R
  - GIS
authors: []
---


As I couldn't believe it myself, but there's not a developed function in R that creates a sf object that contains several lines, deriving from the start and end coordinates (latitude and longitude) of each line. For example, I have a simple table with the line id and start and end point coordinates, like this:




| Pair_ID       |  O_Lat    | O_Lon  |  D_Lat |D_Lon
|---------------------------------------|-------|------|---|---|
| 1 |   47.6408    |    -122.3359  | 47.6911  |  -122.4516 |
| 2 |   47.6081    |   -122.0917   | 47.5152  |-122.2197   |
| 3 |     47.7023  |  -122.2591    |  47.6526 | -122.2096  |

Then, I created a function to convert this table into a single sf object that contains three lines:



```r

library(dplyr)
library(sf)
library(sp)
library(leaflet)

###The table above is imported as "od" here.


od_coords_to_sf <- function(df) {
  #prepare the table from wide to long
  
  part1 <-df[,c(1,2,3)]  %>%
    mutate(shape_pt_sequence =1)%>%
    rename(shape_pt_lat=O_Lat,
           shape_pt_lon=O_Lon)
  
  part2 <-df[,c(1,4,5)]  %>%
    mutate(shape_pt_sequence =2)%>%
    rename(shape_pt_lat=D_Lat,
           shape_pt_lon=D_Lon)
  
  allpart <- rbind(part1, part2)
  allpart<-allpart %>% arrange(colnames(df[1]))
  m <- as.matrix(allpart[order(allpart$shape_pt_sequence),
                    c("shape_pt_lon", "shape_pt_lat")])
  m <- sf::st_linestring(m)
  shape_linestrings <- sf::st_sfc(m, crs = 4326)
  shapes_sf <- sf::st_sf(Pair_ID =allpart$Pair_ID, geometry = shape_linestrings)
  shapes_sf <-shapes_sf %>% distinct(Pair_ID, .keep_all = TRUE)
  return(shapes_sf)
}


#Now run a loop to go through all the pt pairs


#run loop

all_segment <- data.frame()

for (i in 1:nrow(od)){
  one_seg <- od[i,] %>% od_coords_to_sf()
  all_segment <- rbind(all_segment, one_seg)
}

plot(all_segment)

#map the segments using leaflet

map <- leaflet(data=all_segment)%>% addTiles()%>% addPolylines()

map

```

And the final results look like:





<img src="https://github.com/adventuremeng/website_img/blob/master/post/two_coords_line/coords_to_line.PNG?raw=true" alt="" width=500px />


And, the end, tada!


P.S. I recently came up with [this page](https://stackoverflow.com/questions/61958296/convert-character-linestring-to-geometry-in-sf) talking about converting text strings directly to sf. If this works it would be so much simpler than the method above. However, I haven't been able to successfully run it. Will continue to test this out.
