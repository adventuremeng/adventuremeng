getwd()

library(blogdown)
blogdown::new_site(theme = "MunifTanjim/minimo", theme_example = TRUE)
blogdown:::new_post_addin()
blogdown::hugo_version()

blogdown::serve_site()
install.packages('slickR')
library(slickR)