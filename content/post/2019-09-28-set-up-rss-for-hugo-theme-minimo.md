---
title: Set Up RSS for Hugo Theme Minimo
author: ''
date: '2019-09-28'
slug: set-up-rss-for-hugo-theme-minimo
categories: []
tags:
  - RSS
authors: []
---

<img src="https://themes.gohugo.io//theme/minimo/images/logo.png" alt="" width=10% "/>

Image: Minimo Theme logo.

If you have spent some time on my website, and know some Chinese, you might have found that I put different posts under three categories: 
More professional posts under /post;
More personal posts (written in Chinese) under /cn_post;
And archiving planning projects posts under /doc.
The problem is that looking at the /post page, one cannot read all the posts. (Despite that I set this up intentionally.) Therefore, I would like to set up an RSS feed of my website so that my fans (if I have any) will know whenever I post something under any category.

I set up my website using the Minimo theme initially because I like the following elements on the website: Side Search Bar, Side Key Word Text Cloud, and its clean layout. However, I found that the Minimo theme package created by blogdown doesn’t have RSS configurations. This is not good news for me who know nearly nothing about coding. After reading a ton of website pages and Github posts, I finally set up my RSS! Yay!

Firstly, I found my website’s RSS URL to be https://www.adventuremeng.com/index.xml by Viewing Page Source function of Chrome.

Then, I downloaded an RSS reader on my phone. (I used an App called “Creek”. This App is only 15MB and it allows me to read articles without having an account. The interface is very clean. I liked it a lot so far.) After adding the previous RSS, I found that the articles are not showing up full content. It only showed the first few sentences without formatting.

The way I fixed this by using methods mentioned in the following two links:

[Link 1](https://github.com/rstudio/blogdown/issues/337)

[Link 2](https://yongfu.name/2018/12/13/hugo_rss.html#fn:jekyll)

**Steps of setting up:**

1. I created the “layouts” folder in the root folder of my website. Then, I created a “rss.xml” file in the “layouts” folder.

2. Copy the default [RSS template](https://gohugo.io/templates/rss/#the-embedded-rss-xml), 

3. Change <description>{{ .Summary | html }}</description> to   <description>{{ "<![CDATA[" | safeHTML }}
  {{ .Content }}]]>
</description>

4. Save.

Ta-da, I can read the full article (also with formatting) in Creek now!

Conclusion: the introduction of blogdown and these multiple articles about “creating a website in 10 minutes” are a trap. It lured me into the swamp of html/markdown/css/etc. I spent a ton of time trying to configure my website since I set it up. 

Yihui in his book [blogdown: Creating Websites with R Markdown](https://bookdown.org/yihui/blogdown/) said: 

> If you do not understand HTML, CSS, or JavaScript, and have no experience with Hugo themes or templates, it may take you about 10 minutes to get started with your new website, since you have to accept everything you are given (such as the default theme); if you do have the knowledge and experience (and desire to highly customize your site), it may take you several days to get started. Hugo is really powerful. Be cautious with power.

This is so true. However, I definitely enjoy the feeling of managing my website.


