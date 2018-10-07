# Mediumish Theme

This theme for gohugo is a customized port based on the [Mediumish Jekyll-Theme](//github.com/wowthemesnet/mediumish-theme-jekyll) by [WowThemesNet](//github.com/wowthemesnet). The original theme ships with a few more features than this ported version but i also added features which the original version did not include.

## Features
+ Landingpage
+ 404-Page
+ Posts
++ tags can be used
++ shareable via socialmedia
+ Custom pagination
+ Prev/Next-Links
+ Tag-Overview in Jumbotron
+ Integrations:
++ Disqus Comments
++ Google Analytics
++ *Mailchimp Integration* (in the future)

## Installation
Inside the folder of your Hugo site run:

    $ cd themes
    $ git clone https://github.com/lgaida/mediumish-gohugo-theme

## Preface
Most of the images e.g logo, author-image, post-images should be placed somewhere in the static folder of your gohugo-site. You can then reference them via the config.toml or the post.md-files. I would suggest placing all your config-specific images under `static/images` and all post-related images under a arbitrary folder like `static/images/posts`.
However your folder-structure will be there is one exception: you need a file named `jumbotron.jpg` to be present under `static/images` since this one is referenced in the .css

## Post Example
To create a simple post use the hugo new command as usual.
```
hugo new blog/my-first-post.md
```

You then have a few options which i want to point out in the following.
```
---
title: "My first post"
date: 2018-10-01T15:25:19+02:00
lastmod: 2018-10-08T18:55:29+02:00
image: "/images/Test.jpg"
tags: ["post", "interesting"]
type: "post"
comments: false
---
# Lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper libero quis dictum dapibus. Nulla egestas vitae augue eu rutrum. Duis ullamcorper dictum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tortor dui, fermentum non dapibus id, volutpat non odio.
```

`lastmod`: is displayed as a updated-hint
`image`: is displayed in the list- and single-view
`tags`: are used as usual, just add the tags you want to use. They are displayed in the jumbotron on the list-view, and on the bottom of each single-view
`comments`: true/false to turn on/off disqus-comments


## Static Content
I added a customized layout for content of type "static", which means that posts in the folder "static" are displayed as standalone pages. I also disabled the list-layout for this folder.

For example: to create an impress, simply go with the following command and add your markdown-text.
```
hugo new static/impress.md
```

## Configuration
You should at least specify the following default params in your config.toml
```toml
baseURL = "http://yourdomain.com"
languageCode = "en-us"
title = "The one and only techblog"
theme = "mediumish-gohugo-theme"
summaryLength = 25
copyright = "yourdomain.com - All rights reserved"
disqusShortname = "shortDisquis"
googleAnalytics = "UA-1XXXXXXX1-X"
```
`title`: is displayed on the postlist and on each post as the title
`summaryLength`: feel free to play around with this
`copyright`: is displayed in the footer next to the copyright-logo
`disqusShortname`: provide your disqusShortname
`googleAnalytics`: provide your googleAnalytics-Code

### General Params
```toml
[params]
  logo = "/images/logo.png"
  description ="hands on tech!"
```
`logo`: is displayed in titlebar and alertbar
`description`: is displayed under title

HIER SCREENSHOTS REIN

### Author Params
```toml
[params.author]
  name = "John Doe"
  thumbnail = "/images/author.jpg"
  description = "Creator of this blog!"
```
HIER SCREENSHOTS REIN

### Landingpage Params
```toml
[params.index]
  picture = "/images/author.jpg"
  title = "John Doe"
  subtitle = "B.Sc Computer Science"
  mdtext = '''This is the mdtextfield, where you can write markdown to provide more information than just a few textlines'''
```
HIER SCREENSHOTS REIN

## Contributing

Feel free to use the [issue tracker](//github.com/lgaida/mediumish-gohugo-theme/issues) if you want to contribute in any possible way.
You can also create a [pull request](//github.com/lgaida/mediumish-gohugo-theme/pulls) if you have already implemented a new feature that you want to share.

## License

Like the original jekyll-theme this ported theme is released under the MIT License. Read more at the [License](//github.com/lgaida/mediumish-gohugo-theme/blob/master/LICENSE) itself.
