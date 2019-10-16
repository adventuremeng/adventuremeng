---
title: 'Simple Shiny App: Stardew Valley Bundle Query Tool'
author: ''
date: '2019-10-15'
slug: simple-shiny-app-stardew-valley-bundle-query-tool
categories: []
tags:
  - shiny
  - R
authors: []
---
Recently I've been learning how to create Shiny apps, and the following is a simple app I created to query Stardew Valley bundle information by season and bundle. I found the original data [here](https://docs.google.com/spreadsheets/d/1RM1bS3vz8LVP3YK0zu2y8bqKiKew5W0ld0f7zJCD2cI/edit#gid=871831787).

I did some formatting work of the spreadsheet and imported into R, tested around and made my first Shiny app. I learned a lot from [this post.](https://gist.github.com/wch/4211337) The display of the app embedded on my website is not great. The link to the app is [here](https://menggao.shinyapps.io/stardew/).



One fun fact when making the app:

I was trying to make Shiny display the whole table when no season and bundle are selected. Therefore, I tried to use `is.null` function. When I launched the app, the table will show up for 0.01 second and disappear. Afterwards, Nathan helped me find that the empty input is actually "". Therefore, I changed the structure to something similar to `if(input$StadewSeasons=="")`.

Overall, it's a pretty interesting experience for me!

<iframe width="100%" height="600" scrolling="yes" frameborder="no"  src="https://menggao.shinyapps.io/stardew/"> </iframe>