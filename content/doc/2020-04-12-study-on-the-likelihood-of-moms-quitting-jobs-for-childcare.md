---
title: Study on the Likelihood of Moms Quitting Jobs for Childcare
author: ''
date: '2020-04-12'
slug: study-on-the-likelihood-of-moms-quitting-jobs-for-childcare
categories: []
tags:
  - R
  - shiny
  - GIS
  - women
authors: []
---

According to a survey by [Care.com in 2019, ](https://www.care.com/c/stories/2423/how-much-does-child-care-cost/) among the mom respondents, more than 50% said they’ve asked for more flexible schedule or switched to part-time to save money on child care, and 26% left workforce.
As childcare cost is relatively very unaffordable (15% or more of the household income) for most families, a lot of them are not aware of this fact before they decide to have a baby. 

However, the influences of childcare cost on families are apparently different in different cities. This study calculated a “percentage” indicating the ratio between the money one family saved by paying less taxes and no day care cost if the mom quits her job, and her original annual income. The study units are 66 major U.S. cities. The assumption is that the higher the percentage, the more likely that moms in this city will quit their jobs. Similarly, the lower the percentages, the more friendly the cities are to full-time moms. As a result, all females in this study will have **at least 42%** of their income saved if they quit the workforce for their new-born babies.
 
I also created a [Shiny App](https://menggao.shinyapps.io/fulltime_mom/) to navigate the data on the map, as well as to explore the relationships between any two variables.

<iframe width="90%" height="900" scrolling="yes" frameborder="1"  src="https://menggao.shinyapps.io/fulltime_mom/"> </iframe>
 
## Methodology


**Download Data**

Childcare annual cost data (both in-center and at home nannies) were collected from [care.com](https://www.care.com/care-index) for metro areas. Then, median income in the past past 12 months by sex data were downloaded from Amercian Community Survey 2014-2018 5-Year Estimates at the “Place” (City) level.In this dataset, we have the male income, female income, male income who worked full time, and female income who worked full time.

**Calculate Tax**


First of all, I was assuming that the family model I used in this study included one male, one female, and they just have one new born baby. Federal taxes were calculated for all the four types of incomes mentioned above. The tax breaks for 2018 were used. Assuming that deduction was standard in all situations and the number of exemptions is 3. I calculated the tax for the whole family, the taxable amount was female income plus male income, and the method was married filed jointly. Then, I calculated the tax assuming the female was not making money, therefore the taxable amount was the male’s income. 
 
State taxes were also estimated by multiplying State tax top marginal rate and the income. Then, I multiplied the state tax amount by 0.8 to adjust the number lower. For example, in Georgia, the top marginal tax rate was 5.75% for 2018, and the top bracket is $7,000. Then, the estimated State tax for a Georgia family making $80,000 would be 80000*0.0575*0.8=$3,680. This estimation method will have larger errors for lower income groups.
 
**Calculate the Percentage**

The percentage of tax saved money plus day care cost compared to the mom’s income was calculated for every city. The formula is:

*[(Federal and State tax when both parents are working)-(Federal and State tax when only the male is working)+(In Center Child Care Cost)]/Female Income*

**Run the Same Calculation Based on Full-time Situation**

All numbers were calculated in the full-time scenario, where I used the full-time income for both female and male. I was trying to explore and compare the impact between all families and families with two full-time parents.

**Some Findings of the Data**

The ratio of male and female income, and leftover money (female income minus saved tax money and minus day care cost money) were also calculated to observe patterns.You can view this information in the Shiny App above.

The median income for female in this study is $24,437 for normal scenario, and $40,759 for full-time scenario.

The median percentage in the normal scenario is 56.7%, in the full-time scenario is 43.5%.

The median left over money is $10,543, or $23,290 for full-time scenario.

The following two scatter plots indicated that the higher the female’s income, the more expensive the childcare cost and the less percentage that women will save on tax and childcare. 

<img src="https://github.com/adventuremeng/website_img/blob/master/post/mom/income-cost.png?raw=true" alt="" width=350px />
<img src="https://github.com/adventuremeng/website_img/blob/master/post/mom/income-percentage.png?raw=true" alt="" width=350px />


The top three and bottom three cities of the percentage in this study are:

**Normal Scenario:**

*Minimum percentage City:*

&nbsp;&nbsp;&nbsp;Little Rock, Arkansas, 42.78%

&nbsp;&nbsp;&nbsp;Seattle, Washington,  47.17%

&nbsp;&nbsp;&nbsp;Orlando, Florida, 47.54%

*Max percentage city:*

&nbsp;&nbsp;&nbsp;Providence, Rhode Island, 80.76%

&nbsp;&nbsp;&nbsp;San Jose, California, 76.13%

&nbsp;&nbsp;&nbsp;Oxnard, California, 75.17%


**Full-time Scenario:**

*Minimum percentage city:*

&nbsp;&nbsp;&nbsp;Tampa, Florida, 34.68%

&nbsp;&nbsp;&nbsp;Houston, Texas, 36.02%

&nbsp;&nbsp;&nbsp;Little Rock, Arkansas, 36.22%


*Max percentage city:*

&nbsp;&nbsp;&nbsp;San Jose, California, 62.12%

&nbsp;&nbsp;&nbsp;San Francisco, California, 58.52%

&nbsp;&nbsp;&nbsp;Oxnard, California, 55.23%

## Some Initial Conclusions

According to the two scatter plot charts above, we can say that despite the child care costs being higher in cities where women are making more money, the percentage of savings are lower. Therefore, cities where women can make more money are more friendly to moms who want to keep their jobs. 

The percentages for the full-time scenario are much lower than the normal scenario. On the one hand, moms who are not working full-time might not need full-time day care or any day care service at all. On the other hand, these moms are more likely to further reduce their work hours due to the high percentage of the saved money compared to the money they are making.

For the full-time scenario, the top three percentage cities are all in California. Among the three, women in San Francisco’s leftover money is $31,433. This amount is much higher than most of the cities in this study. Therefore, despite moms in big California cities are paying more percentage of their income on tax and chidcare, they still have a lot more money left than other cities. As a result, moms in San Francisco might be less likely to quit their jobs than some other cities with lower percentages.

Comparatively, women in bigger cities are making more money, and the percentages for these cities are smaller. I would recommend women who want to keep up with their career, sending their kids to childcare while making financial sense, should try to pursue a career in big cities. For example, San Francisco, Seattle, San Jose, Boston, New York, Portland, etc.
 
## Limitations

Limitations and errors may appear due to the following reasons:

Median income for male and female might not reflect the group of people this study is targeting for: people in their 20s~40s who are having a first baby;

Child care cost might not reflect the actual care cost;

Errors appear when calculating State taxes;

Other deductions and family situations are not counted.
