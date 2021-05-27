---
title: Migrate blogdown Website Package to a New Computer
author: ''
date: '2021-05-26'
slug: migrate-blogdown-website-package-to-a-new-computer
categories: []
tags:
  - R
  - web_dev
authors: []
---

I recently replaced my old Macbook with a new Macbook. One of the important thing to do is to migrate my blogdown-Hugo-Github-Netlify website package to my new computer so that I can continue editing it. One of the best resources regarding creating a website using RStudio can be found [here](https://alison.rbind.io/blog/2020-12-new-year-new-blogdown/). So, here’s what happened.

First of all, after cloning my Github repo to my new computer (including my R Project file), installed all the libraries needed, installed Hugo, when I run serve_site, the site won’t build, saying there’s something wrong with the header widget or something weird. I tried to delete the widget html file in the Theme folder (don’t copy me this is bad), and couldn’t fix it. In the end, I found out that my *Hugo Theme is out of date*. So I ended up re-installed the theme and now I can build the site again. I guess that the reason for this is that some of the components of the old theme were not supported by the new version of Hugo anymore.

My second challenge is that all the images linked using a url are not showing up. Internal images are showing up fine. I did a bunch of Googling and found out that the reason is that in the new package, I need to enable renderer for unsafe content. I found the answer [here](https://github.com/rstudio/blogdown/issues/465). The solution is to add these code to the Config.toml file:

  ```
[markup]
    [markup.goldmark.renderer]
      unsafe = true
  ```    
My third challenge is that, when I committed changes after I fixed the previous issues, Netlify won’t render the page, or the rendering had failed. I figured that this was due to the Hugo version settings. When I built my site back in August 2019, I used Hugo Version 0.56.3. Now I have 0.82.1. The fix was simple, in Netfily, change the Environment Variables-Hugo Version to the one I installed. And finally, my website is up and running again with my new computer!

<img src="https://github.com/adventuremeng/website_img/blob/master/post/migrate_package/hugo-version.png?raw=true" width=500px />
