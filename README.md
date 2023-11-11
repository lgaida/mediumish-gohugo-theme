# Mediumish Theme

This theme for gohugo is a customized port based on the [Mediumish Jekyll-Theme](//github.com/wowthemesnet/mediumish-theme-jekyll) by [WowThemesNet](//github.com/wowthemesnet). The original theme ships with a few more features than this ported version but i also added features which the original version did not include.

See the [Demo](https://lgaida.github.io/mediumish-gohugo-theme-demo) and [Demo-Source](https://github.com/lgaida/mediumish-gohugo-theme-demo)

![screenshot](https://raw.githubusercontent.com/lgaida/mediumish-gohugo-theme/master/images/screenshot.png)

## Features
+ Landingpage
+ 404-Page
+ Posts
    + tags can be used
    + shareable via socialmedia
+ Custom pagination
+ Prev/Next-Links
+ Tag-Overview in Jumbotron
+ Integrations:
    + Disqus Comments
    + Google Analytics
    + Mailchimp

## Installation
Inside the folder of your Hugo site run:

    $ cd themes
    $ git clone https://github.com/lgaida/mediumish-gohugo-theme

If you use Hugo 0.56 or higher, as an alternative to cloning the template you can add it as a Hugo module. Inside the folder of your Hugo site, run:

    git init
    hugo mod init (your site name)
    hugo mod get github.com/lgaida/mediumish-gohugo-theme

This will create a Go module file (`go.mod`) and checksum file (`go.sum`). Then, in your Hugo configuration (`hugo.toml` or `hugo.yaml`) add the following lines to import the module at build time:

    [module]
    [[module.imports]]
      path = 'github.com/lgaida/mediumish-gohugo-theme'

## Preface
I recommend placing image files for your site config within the `static` folder of your gohugo website. This allows them to be easily referenced from the config.toml or post.md files. You may structure the files and folders within `static` however you'd like, with one exception: There must be a file named `jumbotron.jpg` present under the path `static/images` as it is referenced in the .css.


## Post Example
To create a simple post use the `hugo new` command as usual.
This theme makes use of page bundles / page resource (see https://gohugo.io/content-management/page-bundles/).
Place any image next to your post's `index.md` file and make sure it contains the keyword "cover" inside its name.
This image will also be used for twitter and opengraph cards.

```
hugo new blog/my-first-post/index.md
```

Creating a new post will create something like this:
```
---
title: "My first post"
date: 2018-10-01T15:25:19+02:00
publishdate: 2018-10-07T11:17:14+02:00
lastmod: 2018-10-08T18:55:29+02:00
tags: ["post", "interesting"]
type: "post"
comments: false
---
# Lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper libero quis dictum dapibus. Nulla egestas vitae augue eu rutrum. Duis ullamcorper dictum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tortor dui, fermentum non dapibus id, volutpat non odio.
```

`publishdate`: is displayed at the top of the single-view\
`lastmod`: is displayed as a hint on the single-view\
`tags`: are used as usual, just add the tags you want to use. They are displayed in the jumbotron on the list-view, and on the bottom of each single-view\
`comments`: true/false to turn on/off disqus-comments


## Static Content
I added a customized layout for content of type "static", which means that posts in the folder "static" are displayed as standalone pages. I also disabled the list-layout for this folder.

For example: to create an imprint, simply go with the following command and add your markdown-text.
```
hugo new static/imprint.md
```

## Configuration
You should at least specify the following default params in your `hugo.toml`:`
```toml
baseURL = "http://yourdomain.com"
languageCode = "en-us"
title = "Mediumish"
theme = "mediumish-gohugo-theme"
summaryLength = 25
copyright = "John Doe - All rights reserved"
disqusShortname = "shortDisquis"
googleAnalytics = "G-XXXXXXXXXX"
```
`title`: is displayed on the postlist and on each post as the title\
`summaryLength`: feel free to play around with this\
`copyright`: is displayed in the footer next to the copyright-logo\
`disqusShortname`: provide your disqusShortname\
`googleAnalytics`: provide your googleAnalytics-Code

### General Params
```toml
[params]
  logo = "/images/icon.png"
  description = "the clean blog!"
  showTitles = false
  dateFormat = '2 January 2006'
  mailchimp = "you can provide a mailchimp-link here, see below"
  mailprotect = "you can provide a protector-name here, see below"
  customCSS = ["css/tweaks.css", "css/customHeader.css"]
```
`logo`: is displayed in titlebar and alertbar\
`description`: is displayed under title\
`showTitles`: whether the `title` is rendered; the default is `true`\
`dateFormat`: the format for displaying dates on posts anad post cards; the default is "Jan 2, 2006"\
`mailchimp` and `mailprotect`: provide links to a mailchimp-list and a mailchimp-protector id, the following screenshot should clarify. if not specified the alertbar for mail-subscription doesn't show up.
`customCSS`: you can add paths to your own css files here to tweak and customize the css

![mailchimp-example](https://raw.githubusercontent.com/lgaida/mediumish-gohugo-theme/master/images/mailchimp.png)

### Author Params
The `hugo.toml` configuration file contains the name, image thumbnail location, and description of the primary site author.

```toml
[params.author]
  name = "John Doe"
  thumbnail = "/images/author.jpg"
  description = "Creator of this blog."
```
![author-params](https://raw.githubusercontent.com/lgaida/mediumish-gohugo-theme/master/images/authorpost.png)

 If these parameters do not exist, the name shown in all posts is “Anonymous” and the description is “Author.”

If you need more than one author on the site or wish to have customized landing pages for each author, create `content/authors` subdirectories for each username. Each author subdirectory should have an `_index.md` page with front matter and content. For example, the directory structure might look like this:

    /content
        /authors
            /johndoe
                _index.md

...and the content of the `_index.md` page might looks like this:

    +++
    name = "John Doe"
    thumbnail = "/images/johndoe.jpg"
    description = "Creator of this blog."
    +++
    John Doe is the author of this blog. He has been blogging for the last 30 years.

Posts containing an `author` front matter field display the name, thumbnail, and description of user based on username, in this case when `author = "johndoe"`:

    +++
    title: A Picture is Worth 1,000 Words
    author: johndoe
    date: 2023-11-10 09:41:00 -0800
    +++
    Have you ever heard it said that a picture is worth 1,000 words? It’s true.

### Landingpage Params
```toml
[params.index]
  picture = "/images/author.jpg"
  title = "John Doe"
  subtitle = "I'm a unique placeholder. Working here and there!"
  mdtext = '''Currently trying to get this blog running, still don't know what the blog will be about!\
**This textblock is a demonstration of the mdtext-param.**\
### This is a markdown heading'''
  alertbar = true
```
You can currently provide your username from `github`, `linkedin`, `xing`, `twitter`, `medium`. They will be displayed as icons on the landingpage.
```toml
[params.social]
  github = "<username>"
  linkedin = "<username>"
  xing = "<username>"
  medium = "<username>"
  twitter = "<username>"
  instagram = "<username>"
```
![landingpage-params](https://raw.githubusercontent.com/lgaida/mediumish-gohugo-theme/master/images/landing.png)

### Front Matter

Individual posts (in the `/posts` directory) can contain front matter parameters that control how the page is rendered singly or in lists.

`description`: if supplied, the description is displayed at the top of the post, underneath the title. If not supplied, Hugo's summary of the article (the .Summary parameter) is used instead.
`image`: if supplied, the image will be displayed as the “featured image” in lists of posts. If not supplied, and the post is organized as a leaf bundle with images contained inside a nested directory, images whose names contain the word `cover` will be displayed instead.
`comments`: if Disqus has been configured and the value of this parameter is `true` (the default), comments are allowed on the page. Otherwise, comments are not allowed.

### Other

The Mediumish theme supports __favicons__. By default, the template looks for a favicon at the path `favicon.ico`. To customize the favicon, you can place a file named `favicon.ico` in the `static` directory. For more fine-grained control, override the default by creating your own partial `favicons.html` in `layouts/partials/_shared`. For example, [favicon generators](https://realfavicongenerator.net) can produce appropriate favicons for a variety of devices.

If you need to use __custom CSS__, you can add the CSS file to your `assets/css` directory and then reference it in `hugo.toml` as follows:

    params:
      customcss:
        - /css/my-custom-css.css

## Contributing

Feel free to use the [issue tracker](//github.com/lgaida/mediumish-gohugo-theme/issues) if you want to contribute in any possible way.
You can also create a [pull request](//github.com/lgaida/mediumish-gohugo-theme/pulls) if you have already implemented a new feature that you want to share.

## License

Like the original jekyll-theme this ported theme is released under the MIT License. Read more at the [License](//github.com/lgaida/mediumish-gohugo-theme/blob/master/LICENSE) itself.
