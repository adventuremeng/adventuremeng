---
title: Spatial Analysis of AirBnb Listings for Manhattan, New York
author: ''
date: '2019-11-23'
slug: spatial-analysis-of-airbnb-listings-for-manhattan-new-york
categories: []
tags: 
  - GIS
  - R
authors: []
---

*Group project by Meng Gao, Tamanna Goware, Sanskruti Joshi*

This study analyzes the spatial distribution of different types of AirBnB listings in Manhattan, New York, from 2015 to 2019. It also includes the location of 10 major transit stops and 77 major points of interests / tourist attractions. Then, the study compares the distribution of these locations with the listings, and try to find out spatial factors that influence the price of AirBnB listings. 

**AIRBNB LISTINGS HEAT MAP WITH TRANSIT STOPS AND POINT OF INTERESTS**
<embed src="/images/airbnb_heatmap.html" style="width:95%; height: 400px;">

The total number of observations obtained for New York city were over a million, challenging us to clean the data as much as we can. This was achieved by eliminating Redundant listing- One user has multiple listings/ one record has two or more rooms as separate listings, Null listings, and Ghost listings. This resulted into 47,542 listings for Manhattan. In the heat map above we can see that there’s a concentration of listings in Downtown and Midtown.

**AIRBNB LISTINGS MAP BY ROOM TYPE 2018**

<embed src="/images/airbnb2018.html" style="width:95%; height: 400px;">

It is observed from the map above that there are more private rooms in the north of Manhattan and more entire homes on the south.

<img src="https://user-images.githubusercontent.com/53570321/69485677-c70cec80-0e10-11ea-9efd-8dc5a421f897.png"" alt="" width=85% />

We conducted OLS regression analysis for price and room type. It is remarkable to observe that the prices of private and shared room are nearly the same which explains the lower accuracy of our regression as it is missing the primary factor of dependence- “location”. The highest prices were observed in a quarter mile buffer around Time Square Station and Union& 14th Station, indicating a co-relation between price and location.

<img src="https://user-images.githubusercontent.com/53570321/69660504-7d114a00-104e-11ea-9540-cba7607b33d9.jpg"" alt="" width=85% />

The graph above summarized price by distance to each major transit stop. This gives us a clear idea that point of interest and public transit are important factors in the decision making process of the guests in booking a listing rather than room type. Another, important observation is that price heatmaps have not changed significantly over time in Manhattan over the five year period as it can be observed in the raster DEM layers shown below. It means that the most expensive areas in 2014 are remaining to be the most expensive areas in 2019.

<img src="https://user-images.githubusercontent.com/53570321/69485676-c4aa9280-0e10-11ea-9fea-2695857cb95d.png"" alt="" width=100% />

<img src="https://user-images.githubusercontent.com/53570321/69485780-3afbc480-0e12-11ea-8d97-0204988423f5.png"" alt="" width=100% />


### Conclusion

Price is highly dependent on rating and number of reviews. Also, room type plays an important role in the decision-making process of booking a BnB listing. There is a much higher concentration of listings in the center compared to other parts of Manhattan. The prices of listings depend on their location more than room type or any other variable, which concludes that points of interest and transit stops are more important to the Airbnb guests in their decision-making process. 


### Data Source

https://www.airbnb.com 

https://data.cityofnewyork.us

https://gtfs.org
