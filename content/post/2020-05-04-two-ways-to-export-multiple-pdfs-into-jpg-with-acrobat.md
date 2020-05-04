---
title: Two Ways to Export Multiple PDFs into JPG with Acrobat
author: ''
date: '2020-05-04'
slug: two-ways-to-export-multiple-pdfs-into-jpg-with-acrobat
categories: []
tags:
  - Design
authors: []
---

### Goal:

Export multiple PDF documents within one folder into multiple JPG or other image formats.

### Software:

Adobe Acrobat DC

### Method 1: Action Wizard

Use Action Wizard in the tools, click on “Create New Action…”, click on “Save”, and select “Export to JPEG”. More information can be found [here.](https://answers.acrobatusers.com/I-want-to-batch-convert-from-pdf-to-jpg-instead-of-doing-the-files-one-by-one-using-Adobe-Acrobat-Pro-q210266.aspx)

<img src="http://data.answerbase.com/Adobe/answers.acrobatusers.com/UserFiles/Answers201409/answerImage91278-11032831.jpg" alt="" width=400px />

Image source: [Acrobatusers](https://answers.acrobatusers.com/I-want-to-batch-convert-from-pdf-to-jpg-instead-of-doing-the-files-one-by-one-using-Adobe-Acrobat-Pro-q210266.aspx)

Using this method, one can specify the exported images’ file names, to preserve the original file names of the corresponding PDFs. However, this method will compress the image to reflect a lower resolution and image quality. Users have no freedom to specify exporting properties.


### Method 2: Combined PDF

First, combine all the PDF files into one using Acrobat’s “File-Create-Combine Multiple Files into a Single PDF”. Be sure to sort the pages into a logical order. Then, after we get the binder, click on “File-Export to-Image”. In the exporting window, specify the destination folder location, and click on the “Settings…” button. Here, you can change the resolution, and image quality according to the uses of the image. Generally, a good printing resolution for an image will be 300dpi or more.


<img src="https://helpx.adobe.com/content/dam/help/en/acrobat/using/file-format-options-pdf-export/_jcr_content/main-pars/image_418030296/Save-As-JPEG-Settings.png" alt="" width=400px />


Image source: Adobe

Using this method, one can specify the exported images’ resolution, quality, CMYK/RGB, etc. However, this method cannot specify the exported file names. All the images will be named as “[Binder Name] + [_Page] + [_Page Number]”. 

### Comparison:

If you care about preserving the exported image names and don’t really care about image resolutions, Method 1 is the way to go. 

If you care about image qualities and don’t care about the file names (or the PDF bundles are already in a logical and numeric order, for example, Map 1 through Map 100), Method 2 is the way to go.

**If you know a method that combines the advantages of these two methods where the user can preserve the image quality and file names, please don’t hesitate to comment or email me!**  I know it might be possible using other tools/software or using Javascript for Acrobat, or just simply change the image file names using Python, but I haven’t figured those out yet. If you have similar experiences, also don’t hesitate to contact me!


Thanks!


