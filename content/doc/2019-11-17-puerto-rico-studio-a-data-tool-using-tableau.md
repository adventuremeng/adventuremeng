---
title: 'Puerto Rico Studio: A Data Tool Using Tableau'
author: ''
date: '2019-11-17'
slug: puerto-rico-studio-a-data-tool-using-tableau
categories: []
tags:
  - GIS
  - Tableau
authors: []
---


From 2018 Fall to 2019 Spring, I participated in the graduate planning studio: [Puerto Rico Disaster Mitigation and Recovery Studio](https://planning.gatech.edu/masters-studios). I took a leading role in building a data management and visualization system (tool) that was low-cost, easy-to-use, interactive, and visual-friendly. The system includes using Windows Server, QGIS, Excel, and Tableau. The product is a Tableau dashboard showing interactive parcel maps with pop-up information, project overlay, and GANTT chart.

### Illustration of the Tool

<iframe src="https://player.vimeo.com/video/373533042" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


**This study serves as an example for organizations with limited resources to create an affordable, interactive, and visually friendly data management tool with little GIS operations required. Using Tableau, one can create a pretty interactive map while easily managing the fields in Excel.**

### Studio Background

The Puerto Rico Studio is a student-driven studio that Georgia Tech students and faculty partnered up with University of Puerto Rico's Graduate School of Planning, worked for the independent governmental organization ‘Corporación del Proyecto ENLACE del Caño Martín Peña’ (ENLACE) as our client. 

**Overall, the studio had two main objectives:**

• To develop a transferable model to channel planning assistance to other vulnerable communities – one which captures local and institutional resources and talent.

• To enhance the capacity of next-generation planners to manage climate change issues and devise transferable tools and analytics that strengthen the planning capability of local communities and organizations.

At the end of the studio session, we delivered work products including project management study, data analysis and visualization, financing mechanisms, findings and recommendations.**The full report can be downloaded through Georgia Tech [here.](https://smartech.gatech.edu/handle/1853/61348)**


Throughout the academic year, in addition to the data management tool illustrated earlier, I was also responsible for the preliminary research on informal housing conditions, and data collection, analysis, and visualization works.  I worked closely with my group buddies (Carson Cooper and Nick Johnson) and ENLACE, created socioeconomic analysis for each neighborhood, the study area, and the whole San Juan.  




### More About the Tool

**This system met ENLACE’s needs of:**

An easy-to-use interactive dashboard for parcel information look-up;

Shared data source to avoid disparity and versioning;

An interactive map showing property management status;

Different access abilities for different staff groups.

**ENLACE’s existing workflow:**

ENLACE updates parcel information in multiple Excel tables by several staff. ENLACE updates parcel shapefile information using QGIS by staff A. Staff A is the only employee who can use QGIS.





**Our workflow:**

1. Export the existing parcel shapefile as Excel table, clean the table to contain only parcel ID and important/necessary fields. Add new columns necessary for property management. This is the Property Tracking Excel Table.

2. Create a new parcel shapefile containing only parcel ID and neighborhood fields.This is the Empty Parcel Shapefile.

3. Prepare the ACS Demographic Excel Table which contains aggregated socioeconomic information for each neighborhood for 2014 and 2017.

4. Create a separate Excel table with parcel ID and columns that only administrators can access. This is the Property Tracking Admin Excel Table.

5. Create Project Timeline Excel Table with project names.

6. Create Project/Neighborhood Boundary Shapefile by merging the project boundary shapefile and neighborhood boundary shapefile using QGIS. Keep the fields of neighborhood names and project names.

7. Store all shapefile and tables on MySQL or Windows Remote Desktop. Store “Property Tracking Admin Excel Table” under admin-only directory.

8. In Tableau, join all the tables and shapefiles according to the following diagram:


<img src="https://user-images.githubusercontent.com/53570321/69013636-65500c80-0950-11ea-94ce-c292fa45f029.png" alt="" width=100% />

9. Configure in Tableau to show two layers of shapefile, pop-up information, filter check-box, and dashboard showing color-coded interactive map and project management Gantt Chart on the same page.


<img src="https://user-images.githubusercontent.com/53570321/69013665-cbd52a80-0950-11ea-8702-abf23f5ecce5.png" alt="" width=80% />


Image of Georgia Tech and UPR students on the bicicaño tour. Photo courtesy of Mirit Friedman.
