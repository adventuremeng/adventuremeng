---
title: ArcGIS Pro Show GTFS Lines in Coded Color
author: ''
date: '2021-05-26'
slug: arcgis-pro-show-gtfs-lines-in-coded-color
categories: []
tags:
  - GIS
authors: []
---

It might be a simple operation but I myself find it very confusing and tricky to show GTFS routes with their coded color, so I decided to write this down as a post. If you have a shapefile, one of the columns is the color code or name for each item, you can use this method to show different rows in the designated color. 

First step, clicking on the symbology for the layer, click on “Enable attribute-driven symbology”. I forgot to take the screenshot for this step but this should be a simple step to search online.

Second, double click on the “line” in the highlighted area below.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/GTFS_Color/gtfscolor1.png?raw=true" alt="" width=400px />

Third, click on “Property”, and click on the database symbol next to “Color”.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/GTFS_Color/gtfscolor2.png?raw=true" alt="" width=400px />

Fourth, define the color. Standard GTFS uses hexadecimal color code without having the “#” in the front. Therefore, the code for this step would be `“#” + $feature.route_color`

<img src="https://github.com/adventuremeng/website_img/blob/master/post/GTFS_Color/gtfscolor3.png?raw=true" alt="" width=400px />

Last step, click on “apply”. This should give you the desired symbology!

<img src="https://github.com/adventuremeng/website_img/blob/master/post/GTFS_Color/gtfscolor4.png?raw=true" alt="" width=400px />
