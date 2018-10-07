# Mediumish Theme

This theme for gohugo is a customized port based of the [Mediumish Jekyll-Theme](//github.com/wowthemesnet/mediumish-theme-jekyll) by [WowThemesNet](//github.com/wowthemesnet). The original theme ships with a few more features than this ported version but i also added features which the original version did not include.

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


## Configuration
You should at least specify the following default params in your config.toml
```toml
baseURL = "http://yourdomain.com"
languageCode = "en-us"
title = "The one and only techblog"
theme = "medium"
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
