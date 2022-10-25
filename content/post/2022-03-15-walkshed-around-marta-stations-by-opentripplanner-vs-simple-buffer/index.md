---
title: Walkshed Around MARTA Stations by OpenTripPlanner vs. Simple Buffer
author: ''
date: '2022-03-15'
slug: walkshed-around-marta-stations-by-opentripplanner-vs-simple-buffer
categories: []
tags:
  - R
  - GIS
  - web_dev
  - QGIS
authors: []
---

## Introduction 

Isochrone is the area accessible from a point within a certain time threshold calculated using the actual street network. A few years ago, [Baidu Map](https://map.baidu.com) conducted a study that compared the theoretical services area (500-meter buffer) and actual service areas (500-meter isochrone) of bus stops in Nanjing City (See image below). The study overlaid the isochrones on top of the buffers, which gave people a clear idea on how well the bus stop locations connect to the adjacent blocks. 

I got curious and replicated this method on all the MARTA train stations. Instead of 500 meters, I used a quarter mile as the walkable distance in the US. I used [OpenTripPlanner](https://www.opentripplanner.org/) to calculate the isochrones, and mapped the isochrones, the buffer, the train stations and alignments on the map using QGIS, and published the map as html using [Qgis2web](https://plugins.qgis.org/plugins/qgis2web/) tool. Below is the result:

<embed src="/images/otp_isochrone" style="width:95%; height: 500px;">


<a href="/images/otp_isochrone/" target="_blank">Click here</a> to view the map in the new window.


<img src="https://github.com/adventuremeng/website_img/blob/master/post/2022-03-15-walkshed-around-marta-stations-by-opentripplanner-vs-simple-buffer/baidu.jpg?raw=true" alt="" width=550px style="border: 1px solid black" />

*Image above: “Between dream and reality, a distance that looks so near on the map is so far on the foot.”*

## Result and Reflection

The train stations with top three coverage percentages are: Chamblee (54%), Hamilton E. Holmes (37%), and College Park (30%). The average coverage percentage is 19%. The train stations with the lowest coverage percentages are: Civic Center (2%), Bankhead (5%), and Doraville (6%).




<details>
  <summary><b><u>Click here to expand the results for all the stops ↓</u></b></summary>

  <p>
  
| STATION                 | Isochrone Acreage | Percentage | Rank |
|-------------------------|---------|------------|------|
| Chamblee                |   68.18 |       0.54 |    1 |
| Hamilton E. Holmes      |    46.2 |       0.37 |    2 |
| College Park            |   37.51 |        0.3 |    3 |
| Lindbergh Center        |   36.58 |       0.29 |    4 |
| Edgewood-Candler Park   |   29.72 |       0.24 |  5.5 |
| Lenox                   |   30.76 |       0.24 |  5.5 |
| Inman Park-Reynoldstown |   28.71 |       0.23 |    7 |
| Oakland City            |   27.62 |       0.22 |  8.5 |
| Medical Center          |    27.9 |       0.22 |  8.5 |
| Decatur                 |   26.59 |       0.21 | 11.5 |
| East Lake               |   26.65 |       0.21 | 11.5 |
| Brookhaven              |   26.37 |       0.21 | 11.5 |
| Dome/GWCC/Philips/CNN   |   26.26 |       0.21 | 11.5 |
| Lakewood-Ft. McPherson  |   25.07 |        0.2 | 15.5 |
| Kensington              |   25.52 |        0.2 | 15.5 |
| Midtown                 |   25.04 |        0.2 | 15.5 |
| Five Points             |   25.49 |        0.2 | 15.5 |
| Georgia State           |   23.94 |       0.19 | 18.5 |
| West Lake               |   24.23 |       0.19 | 18.5 |
| Avondale                |    22.4 |       0.18 | 21.5 |
| Arts Center             |   22.83 |       0.18 | 21.5 |
| Peachtree Center        |   22.56 |       0.18 | 21.5 |
| East Point              |    22.2 |       0.18 | 21.5 |
| Dunwoody                |   21.04 |       0.17 |   24 |
| Vine City               |   20.55 |       0.16 |   25 |
| Ashby                   |   16.21 |       0.13 |   26 |
| West End                |   15.68 |       0.12 | 28.5 |
| Sandy Springs           |   15.35 |       0.12 | 28.5 |
| North Springs           |   15.61 |       0.12 | 28.5 |
| Buckhead                |      15 |       0.12 | 28.5 |
| Indian Creek            |    11.6 |       0.09 |   31 |
| Airport                 |    8.69 |       0.07 |   32 |
| Doraville               |    7.21 |       0.06 |   33 |
| Bankhead                |    5.71 |       0.05 |   34 |
| Civic Center            |    2.27 |       0.02 |   35 |

  </p>
  
</details>

  
However, I found the results not satisfactory, given my actual experience riding MARTA. When exiting Doraville Station, one can actually walk to Buford Highway using Central Ave within 5 minutes, and that didn’t show up on the isochrones by OTP. Also, for Chamblee Station, according to Google map, one can walk to Clairmont Road within the time/distance threshold, but the isochrone by OTP was smaller.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/2022-03-15-walkshed-around-marta-stations-by-opentripplanner-vs-simple-buffer/chamblee.PNG?raw=true" alt="" width=300px />
<img src="https://github.com/adventuremeng/website_img/raw/master/post/2022-03-15-walkshed-around-marta-stations-by-opentripplanner-vs-simple-buffer/chamblee2.PNG" alt="" width=350px />

*Image above: Chamblee isochrone on OTP and Google Map.*


What’s more, King Memorial, Garnett, and North Ave Stations returned no isochrones by OpenTripPlanner; for Civic Center Station, the isochrone didn’t contain the station at all. I believe this all due to the lack of pedestrian tunnels and access paths from OpenStreetMap, as OpenTripPlanner probably won’t automatically adjust the origin locations to the closest street. Users can manually do that before running OTP to avoid errors.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/2022-03-15-walkshed-around-marta-stations-by-opentripplanner-vs-simple-buffer/civic%20center.PNG?raw=true" alt="" width=350px />


*Image above: Civic Center isochrone error.*


Some train stops have multiple exits on different streets. Using different exits can result in fairly different results. Potentially, one can collect and use all the access points for each train station, run the isochrone and buffer analysis for all the access points, then merge all the polygons.

OpenTripPlanner’s isochrone tool cannot specify travel distance, and cannot specify whether the input point is the origin or the destination, in other words,  change the trip direction. Alternatively, one can use Google Map API to calculate the isochrones. However, due to [Google API restrictions](https://developers.google.com/maps/api-security-best-practices), contents created using Google Map API cannot be plotted on non-Google maps. Therefore, integration of such content with QGIS will be prohibited. ESRI’s Network Analysis is another good option, but using ESRI’s products require fairly expensive licenses and credits.

Other tools with isochrone functions that are worth exploring: Bing Map API and [Openrouteservice](https://openrouteservice.org/).

## Technical Details

This section dives into the technical details of this study. 

**Prepare OTP Graph**

I used [opentripplanner](https://cran.r-project.org/web/packages/opentripplanner/vignettes/opentripplanner.html) for R package to query OTP in bulk.

The OTP Graph built for this study required three data sources: MARTA GTFS, OpenStreetMap road network, and elevation raster downloaded from R package [elevatr](https://cran.r-project.org/web/packages/elevatr/vignettes/introduction_to_elevatr.html#Get_Raster_Elevation_Data). 

For OSM data, I downloaded using QGIS plugin “Download OSM by rectangle selection”. The downloaded file was in .osm format, and it was too big (1.5 Gb for the Atlanta region). Then, I used osmosis to extract the highways ( a term used by OSM that contains all street networks) and export as osm.pbf format.

  ```
osmosis --read-xml test1.osm --tf accept-ways highway=* --used-node --wb filtered.osm.pbf
  ```
  
 
The OTP graph was then successfully running.


<img src="https://github.com/adventuremeng/website_img/blob/master/post/2022-03-15-walkshed-around-marta-stations-by-opentripplanner-vs-simple-buffer/Capture.PNG?raw=true" alt="" width=600px />

**Calculate the Isochrone**

OpenTripPlanner can only specify the walking time of the isochrone, not the walking distance. Therefore, I used 324 seconds (about 5 minutes) as an estimate for  a quarter-mile walk, as I tested on multiple scenarios after building the OTP graph, finding the average walking speed that OTP uses for this graph is 2.87 miles per hour. The time for creating the isochrones was 9:30pm on a Tuesday.

I created an R function to calculate the isochrone and loop through all the locations for MARTA train stations.

  ```r
get_marta_iso <- function(i){
  iso =otp_isochrone(
  Otpcon,    #OTP connection object which will allow R to connect to the OTP
  fromPlace =c( marta[i,4], marta[i,5]),   #referring to the long and lat in the MARTA dataset
  fromID = NULL,
  mode = "WALK",
  date_time = Sys.time(), 
  arriveBy = FALSE,
  #maxWalkDistance doesn't really matter in this function
  routingOptions = NULL,
  cutoffSec=c(314), #set walking time to 314 seconds
  ncores = 1,
  timezone = otpcon$timezone   #use the system time for calculation
)
iso2 = iso %>% mutate(identifier=i)    #add an id for table joining
iso2
}
  ```
  
**Export to Webmap**


After exporting the isochrones in shapefile, I organized everything together on a map and exported as webmap using Qgis2web. 

For basemap, I used Stamen Toner Black and White. In QGIS, I lowered the Saturation, lowered the Contrast, and elevated the Brightness for better visualization. But such settings won’t reflect in the webmap, so I created a white box with some transparency between the basemap and other layers.

 By default, Qgis2web exports the map as an html using the canvas size, for example, 1200px by 900px. This doesn’t work well if I want to embed the webmap in another website, for example, this page. Therefore, I referenced [this page](https://gis.stackexchange.com/questions/357308/qgis2web-canvas-size-problem
) and set the export size to “full-screen”, so it can fit in any web page or window.

### Data Source and References

[OpenTripPlanner:
MARTA GTFS (Effective Date: 12/18/2021)]( https://www.itsmarta.com/app-developer-resources.aspx)

[MARTA Route Shapefile](https://opendata.atlantaregional.com/datasets/98972b03b8ed488ebaf2f54122b7cc3f/explore?location=33.769429%2C-84.376794%2C10.72)

[MARTA Stop Shapefile](https://gisdata.fultoncountyga.gov/datasets/COSS::marta-stops/explore?location=33.769097%2C-84.376629%2C10.72)


[Stamen Toner Black and White basemap](http://maps.stamen.com/#toner)


[Qgis2web](https://www.qgistutorials.com/en/docs/web_mapping_with_qgis2web.html)



[Osmosis](https://learnosm.org/en/osm-data/osmosis/)



