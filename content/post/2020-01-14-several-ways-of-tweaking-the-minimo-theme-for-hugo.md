---
title: Several Ways of Tweaking the Minimo Theme for Hugo
author: ''
date: '2020-01-14'
slug: several-ways-of-tweaking-the-minimo-theme-for-hugo
categories: []
tags:
  - RSS
  - web_dev
authors: []
---

This is a collection of methods and tutorials about how I transformed the Hugo Minimo theme to my current website appearance (as of January 14th, 2020).
First of all, thank you Munif Tanjim for creating this pretty Hugo theme! The sample site of Minimo can be found [here](https://minimo.netlify.com/).

For more information, this website was created using the blogdown package for R. Then, it was published by Netlify via my Github repo. A very good book about blogdown and website development is the *blogdown: Creating Websites with R Markdown*, which can be found [here](https://bookdown.org/yihui/blogdown/).

{{< center >}}
_1. Change the Theme Color and Icon_
{{< /center >}}

Well, to be honest, after I changed the theme color in config.toml, I still see some default yellow color on my page. Therefore, I used searching function of my computer within the website folder, find every file that contained the default color code, replaced them with the new color code, and saved. For the icon, it’s the same idea. I overwrote the original icon file (I believe it’s called “favicon.ico”) with my new icon file using the same name.

{{< center >}}
_2. Change Font_
{{< /center >}}

I like the rendered default fonts if I am using Mac OS. However, the website will render a font with serif if I browse my website using Windows. The Windows version also renders a very unsatisfying font for Chinese as well. Therefore, I changed the font settings by creating the “custom.css” in “website_folder/static/css”.

 ```
@font-face {
  font-family: "Helvetica Neue"，"Arial",  "STHeiti Light ", "Microsoft YaHei", sans-serif;
}
body {
  font-family:  "Helvetica Neue", "Arial", "STHeiti Light", "Microsoft YaHei"
}
blockquote {
  font-size: .95em;
}
 ```


{{< center >}}
_3. Syntax Highlighting_
{{< /center >}}

Previously, all my code blocks were rendered as one color. The comments, variables, and function components were all black colors. This was not convenient and visually appealing. After trying several methods, I followed Step 1 and 2 from Amber’s blog that can be found [here](https://amber.rbind.io/2017/11/15/syntaxhighlighting/). This worked well for Minimo Theme.

{{< center >}}
_4. Setting Up RSS_
{{< /center >}}

When I tried to subscribe to my website post using RSS, I found that the full contents were not showing up but the first few sentences. I fixed it by setting up an RSS template. The detailed tutorial can be found here: [Set Up RSS for Hugo Theme Minimo](/post/set-up-rss-for-hugo-theme-minimo/).

{{< center >}}
_5. Change Max Width of Content_
{{< /center >}}





The original webpage looks great on my personal laptop. It looks less great on a huge wide screen as the right half of the screen would be blank. Therefore, I changed the maximum width of the content from 740 px to 900 px. I inspected the theme website using Chrome, and found that there’s a max-width rule to .container.

<img src="https://github.com/adventuremeng/website_img/blob/master/post/config_theme/Screen%20Shot%202020-01-14%20at%207.21.43%20PM.png?raw=true" alt="" width=400px />


Then, in “website_folder/static/css/custom.css”, I added:
 ```
.container{
    max-width: 900px
}
 ```
Also in config.toml, I added 

 ```
[[params.customCSS]]
 href = "pathToFileUnderStatic"
 ```

{{< center >}}
_6. Enable Comments Using utteranc.es_
{{< /center >}}

Utteranc.es is a static commenting system which is easy to set up for the Minimo Theme. There are only two steps: give utterances bot access to the GitHub repo; and enable utterances comments in config.toml. More information can be found [here ](https://utteranc.es/).




{{< center >}}
_7. Configuring Video Style_
{{< /center >}}

Some of the posts, I embedded videos from Bilibili. However, the default Bilibili embed code will create a tiny box. If I only change the width of the iframe to 800 pixel or something, this will cause a problem if viewing from a phone browser: more than half of the iframe will disappear. Setting the width to 100% will not solve the problem either. Therefore, I configured a style for videos, so that the videos will show up normally on a big screen, and show up as a portrait black box on a small screen with the full screen button ready to use. Again, in “website_folder/static/css/custom.css”, I added:

 ```
.myvideo{
    width:100%;
    height:500px;
    display:block;
    float:left;
}
 ```

{{< center >}}
_8. Delete Double Head Lines_
{{< /center >}}

In the theme website, the post title and path are displayed twice. If you want to delete or hide the line in red box below, you can disable the header.widgets by adding the following line to custom css:
 ```
.header-widgets {
  display: none;
}
 ```
<img src="https://github.com/adventuremeng/website_img/blob/master/post/config_theme/WechatIMG120.jpeg?raw=true" alt="" width=400px />
 
 
(However, I used a very stupid method for my website which was deleting the .header-widgets components in the theme folder partials html. Don’t do this lol)



There is also a similar discussion of hiding/deleting the site title and description on the theme Github Repo Issue [here](https://github.com/MunifTanjim/minimo/issues/145).





### P.S.:

I have this fear that I've been spending more time on tweaking the website's appearance than working on actual meaningful content (for example, urban studies). I should stop paying more attention to the appearance, styles, and layouts and pay more time on actual works.
