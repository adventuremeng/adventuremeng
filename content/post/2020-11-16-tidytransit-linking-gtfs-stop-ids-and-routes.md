---
title: Tidytransit Linking GTFS Stop Ids and Routes
author: ''
date: '2020-11-16'
slug: tidytransit-linking-gtfs-stop-ids-and-routes
categories: []
tags:
  - R
  - Transit
authors: []
---

[Tidytransit](https://github.com/r-transit/tidytransit) is a really nice and helpful package in R dealing with transit data, to be specific, GTFS datasets. However, there is one function missing: linking stop ids to route ids. For some GTFS feeds from some of the transit agencies, there are no columns or information about corresponding route(s) for each stop. This can be fixed by using left_join function after we understand the data structure of GTFS feeds:

<img src="https://github.com/adventuremeng/website_img/blob/master/post/gtfsstructure1.PNG?raw=true" alt="" width=95% />




Then, we know that using the three ids: Route ID, Trip ID, Stop ID, we can link the routes with the stops.

First of all, use read_gtfs function to import the GTFS file:


```
  gtfs <- read_gtfs("Your_GTFS_Zip_Directory")
```



Then, we can create a function to take out the tables that we need to use here, and join them accordingly.

  ```

route_stop_link <- function(gtfs){routes <- gtfs$routes
  trips <- gtfs$trips
  stop_times <- gtfs$stop_times
  stops <- gtfs$stops
  links <- routes %>%
    left_join(trips %>% select(trip_id, route_id, shape_id)) %>%
    left_join(stop_times %>% select(trip_id, stop_id)) %>%
    left_join(stops) %>% group_by(stop_id) %>%slice(1) 
  links
  }

  ```

Let’s test this out by using Washington D.C. WMATA/Washington Metropolitan Area Transit Authority GTFS from April 16, 2020. (data downloaded from [here](https://transitfeeds.com/p/wmata/75) )

The result table head is like this:

<img src="https://github.com/adventuremeng/website_img/blob/master/post/gtfsstructure2.PNG?raw=true" alt="" width=95% />


Lastly, I want to recommend this [ArcGIS toolbox](https://esri.github.io/public-transit-tools/TransitNetworkAnalysisTools.html). If you are using ESRI GIS product, and you simply want to convert GTFS zip files into route shapefile, this tool is the way to go. Just import the tool without installation, and the user interface is the same as all other Arc Tool Box tools.

