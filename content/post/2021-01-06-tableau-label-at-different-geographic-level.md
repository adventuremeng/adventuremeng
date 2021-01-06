---
title: Tableau Label at Different Geographic Level
author: ''
date: '2021-01-06'
slug: tableau-label-at-different-geographic-level
categories: []
tags:
  - Tableau
  - GIS
authors: []
---

When using Tableau to visualize a shapefile, I often come to the problem when I want to show the detail of one geographic level, while labelling using another geographic level. For example, I want to show the five Counties of Atlanta, Georgia using Census block groups. When dragging “Geometry” to the worksheet and dragging “County” to both the Color Card and the Label Card, everything looks fine. 

However, we can’t see the Geoid of each block groups. After we drag GEOID to “Detail” card, this enables the selection and block groups level information in Tooltip. However, this also makes the labelling ugly by duplicating the same County name for hundreds of times. Like the image below.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/tableau_diff_level/label_overlay.JPG?raw=true" alt="" width=600px />

**How can me maintain the block groups level details of the map, while only label once for each County? How can we remove the duplicated labels?**


The easier way I find is to utilize Tableau 2020.4’s new function: Add a Marks Layer. Simply drag “Geometry” again to the “Add a Marks Layer” Card, and then this creates two overlaying shapefiles on the map. 

<img src="https://github.com/adventuremeng/website_img/blob/master/post/tableau_diff_level/addlayer.JPG?raw=true" alt="" width=600px />

Then, we only drag the “County” to the Detail Card, and drag “County” to the Label Card. This forces Tableau to label once for one County. Then, under color, we change this layer to 0% Opacity and None border. This makes the top layer transparent and we can still see and interact with the previous layer ( with block groups level details). 

<img src="https://github.com/adventuremeng/website_img/blob/master/post/tableau_diff_level/color.JPG?raw=true" alt="" width=600px />

Also, remember to disable selection for the top layer so we are only keeping the labels from this layer.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/tableau_diff_level/deselect.JPG?raw=true" alt="" width=200px />

And the final product looks like below: an interactive map with one level of detail and another level of labelling:

<img src="https://github.com/adventuremeng/website_img/blob/master/post/tableau_diff_level/finalmap.JPG?raw=true" alt="" width=600px />




This method is much easier than using GIS software to dissolve the block groups shapefile, getting the County border shapefile, and then linking that GIS shapefile back with the block groups shapefile. Everything is done within Tableau within minutes.
