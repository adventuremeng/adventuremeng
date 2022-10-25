---
title: NN Work Share:Optimizing Transit Running Time Window
author: ''
date: '2022-10-24'
slug: nn-work-share-optimizing-transit-running-time-window
categories: []
tags:
  - R
  - Transit
authors: []
---


Note: This content was developed by me and was presented to Nelson Nygaard Staff at a Lunch and Learn webinar on Thursday, October 6th, 2022. You can also find this content on the [Nelson Nygaard R Training Blog](https://perkinsandwill.github.io/nn_r_training/posts/workshare-session-5/).




## Summary

I showed the R scripts used to calculate the best running time range that will capture the highest percentages of on-time performance records. This method will utilize AVL datasets (client provided) containing scheduled and actual running times between time points at different day of week, route, direction, etc. I created a function to loop through all records for each combination and calculate the on-time percentages for every possible on-time window. Then, the function will be looped through the datasets to get the result of best running time window for each scenario. This result can help assist schedulers to assess and modify bus schedules.

## Introduction

Traditionally, transit planners and schedulers analyze on-time performance and running time separately. However, there is an opportunity to combine the two analyses by identifying best running time window to capture best OTP results. Usually, transit agencies will consider trips between 1 minute early and 5 minutes late as on time. Therefore, when the scheduled running time between time point A and time point B is 10 minutes, we can say that a running time window between 9 and 15 minutes would be considered on time if the trip started on schedule. The following R scripts will take the AVL datasets provided by clients and calculate the 6-minutes on time window that captures the highest percentages of trips, for each route, direction, day of week, etc. combinations.

## Scripts

Step one, import the AVL datasets which contains the actual running time between time points. We need to assign a group id for the desired categories. Then, we need to divide the dataset into two groups: narrow and wide. For the narrow group, the differences between minimum and maximum running time are smaller than 6 minutes. Therefore, we can take any number from the possible running time as the scheduled running time. For the wide groups, we need to loop through all possible running time windows.



```r
library(dplyr)
library(data.table)
library(readxl)
library(stringr)
avl <- read.csv("input_avl.csv")
avl <- avl %>% group_by( Route , Direction , Day_of_Week,  Trip_Start_Time, TP_Pair)%>%
  mutate(trip_group=cur_group_id())  #assign group id


narrow<- avl %>% group_by(trip_group)%>% mutate(window=max(act)-min(act))%>% filter(window <=6)

wide <- avl %>% group_by(trip_group)%>% mutate(window=max(act)-min(act))%>% filter(window >6)


```


Step two is to create a function that loops through all possible on time windows. For example, if the minimum running time is 3 and the maximum is 11 minutes, then we need to calculate OTP percentages for 3-9 minutes, 4-10 minutes, and 5-11 minutes.


```r

#create an empty container to store the results, with one column taking the minimum of the on time window, one column as the percentages
df <- data.frame()
one <- data.frame(matrix(ncol = 2, nrow = 0))

#provide column names
colnames(one) <- c('min', 'perc')

#write the function
#make sure the actual running time column name is "act"
getwindow <- function(data, group_id){
  testing <- data %>% filter(trip_group == group_id)
  max <- max(testing$act)-6
  min <- min(testing$act)
  
  for (i in min:max){filtered= testing %>% filter(act>=i) %>% filter(act<=(i+6)) %>%nrow()
  perc=round(filtered/nrow(testing), 2)
  one[1,1]=i
  one[1,2]=perc
  df <- rbind(df, one)
  }
  
  df$ID <- group_id
  
  return(df)}

#Create a list of group id within the wide dataset

ids1 <- wide %>% group_by(trip_group)%>% slice(1) %>% select(trip_group)


#now run through all the loops
#first delete unnecessary columns from wide dataset
wide <- wide %>% select(act, trip_group)
#create a data container

datacontainer <- data.frame()

#run the loop. Use print(i) to see the progress.
for (i in 1:nrow(ids1)){onerecord <- getwindow(wide, paste(ids1[i,1]))
datacontainer <- rbind(datacontainer, onerecord)
print(i)
}

```



The last step is to combine the wide results with the narrow results, and then join trip information to the results.



```r

#Filter out the maximum results
maxwindow <- datacontainer %>%group_by(ID)%>% filter(perc==max(perc))
maxwindow <- maxwindow %>%group_by(ID)%>% slice(1)
wideinfo<-onecombine %>% group_by(trip_group)%>% slice(1)%>% 
  select(trip_group,  Route , Direction , Day_of_Week,  Trip_Start_Time, TP_Pair )
wideinfo <- wideinfo%>% rename(ID=trip_group)
maxwindow <- left_join(maxwindow, wideinfo)

narrow <- narrow %>% select(trip_group,  Route , Direction , Day_of_Week,  Trip_Start_Time, TP_Pair, act) %>%
  group_by(trip_group) %>% filter(act==min(act))
narrow <- narrow %>% rename(ID=trip_group, min=act)%>% group_by(ID)%>% slice(1)%>% mutate(perc=1)


#combine the narrow and wide records
allrecord <- rbind(narrow, maxwindow)

#create a table with detailed trip information for each group id
detail <- avl %>% group_by( Route , Direction , Day_of_Week,  Trip_Start_Time, TP_Pair)%>%
  slice(1)

otp_window <- left_join(detail, allrecord)

#export the results
write.csv(otp_window, "your_result.csv")

```


## Limitations

* The output numbers are inherently smaller than the scheduled running time, in most cases. For example, if the on-time window is 5-11 minutes, we would set the new running time to 6 minutes. However, the scheduled running time is probably 10 minutes, while most trips have a running time larger than 6 minutes.

* The calculation consumes large amounts of time and computing power. It is tested that the speed is about 3000 combinations per hour for a large dataset. It can easily take 10 hours of time to loop through 30k combinations.

* Due to the previous limitation, it would be either challenging or impossible to build a Shiny app, while allowing users to change the on-time thresholds.

* For certain running time combinations, multiple windows will capture the highest percentages. They might look quite different. For example, if we have a series of running time like 1, 2, 3, 3, 3, 6, 6, 6, 9, 9, 9, 12, 12, 12, 13; then both 3-9 minutes and 6-12 minutes will capture most records.