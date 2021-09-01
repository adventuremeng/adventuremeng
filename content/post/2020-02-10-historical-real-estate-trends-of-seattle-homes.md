---
title: Historical Real Estate Trends of Seattle Homes
author: ''
date: '2020-02-10'
slug: historical-real-estate-trends-of-seattle-homes
categories: []
tags:
  - R
  - Real_Estate
  - GIS
authors: []
---

*This study analyzes historical trends of Seattle home’s price, housing type, size, number of bedrooms, and other real estate information.*

From my [previous post](/post/two-ways-of-creating-random-address-points-using-rstudio/), I described two methods of selecting address samples using R Studio based on random locations and fixed distance fishnet. I used the first method and created a sample of 1902 homes (single family, townhome, duplex and triplex) within the City of Seattle. The [base parcel shapefile](https://gis-kingcounty.opendata.arcgis.com/datasets/parcels-for-king-county-with-address-with-property-information-parcel-address-area) I downloaded contained the tax information for each home: land appraisal value, improvement appraisal value, address, and home type. 

Then, I used [Zillow Deep Search API](https://www.zillow.com/howto/api/GetSearchResults.htm) and queried each home address to acquire the real estate information for these homes. The real estate information I collected included lot size, total building square footage, number of bedrooms, built year, and last sold price. 

When I map the home type on the map, we can see that most homes I selected in the sample are single-family homes.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/seattle_home/type_location.png?raw=true" alt="" width=300px />



The first data point I look at is the land appraisal value per square feet. Then I put it on the map as following left.This map shows that land value is strongly influenced by location. Lands near Madison Park, Northlake, and Sunset Hill are relatively more expensive.

The second data point I look at is the last sold price per square feet. This information does not show home values at the same time because all the homes were sold in different years. As we map this information on the map in the following right, we can see similar geographic distributions of more expensive homes with the land value map. However, expensive homes are scattered around the city.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/seattle_home/land_location.png?raw=true" alt="" width=300px />
<img src="https://github.com/adventuremeng/website_img/blob/master/post/seattle_home/price_location.png?raw=true" alt="" width=300px />

When we compare the relationship between land price (square root of land price per square foot) and last sold price (square root of sold price per square foot), we can see a positive linear regression line. It is obvious that homes in more expensive areas were sold at higher prices.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/seattle_home/ols.png?raw=true" alt="" width=70% />


Then, I In this and following charts, I include a vertical line in 2014 to show homes built within the last 5 years or so as recently built homes. The following chart shows the count for each home type built in each year. We can see a lot of construction activities for single-family homes in the 1940s and 1950s. In recent years, we see steady increases of homes built.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/seattle_home/type_year.png?raw=true" alt="" width=70%  />


When we look at the average size (building square footage) per year per home type, we can see an increasing trend after 1950: all homes have become larger. Single family homes are much larger than townhouses.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/seattle_home/size_year.png?raw=true" alt="" width=70%  />

Together with the increasing home sizes, the average numbers of bedrooms also increased after 1950. The trend for single-family homes is more accurate due to the larger size of the sample.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/seattle_home/bedroom_year.png?raw=true" alt="" width=70%  />

As an assumption in this study, the improvement price of a home is the difference between the last sold price and the land appraisal value. The following chart shows the relationship between the year built and square root of improvement price. We can see a positive relationship here as well. It indicates that the improvement price of home has become more expensive in time. This might be a result of increasing home size, and increasing construction cost.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/seattle_home/price_year.png?raw=true" alt="" width=70%  />



### Conclusion

According to this sample: 

Seattle homes are getting bigger and bigger with more and more bedrooms; 

Single family is the dominating housing type;

Most homes are built in the 1950s;

Townhomes are built in more recent years;

Home construction and sold prices are more and more expensive;

Homes in more expensive neighborhoods are sold at the highest prices.


*Zillow Disclaimer*


© Zillow, Inc., 2006-2016. Use is subject to [Terms of Use](https://www.zillow.com/corp/Terms.htm)
[What's a Zestimate?](https://www.zillow.com/wikipages/What-is-a-Zestimate/)

