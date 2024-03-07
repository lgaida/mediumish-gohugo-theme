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
```
`title`: is displayed on the postlist and on each post as the title\
`summaryLength`: feel free to play around with this\
`copyright`: is displayed in the footer next to the copyright-logo\

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
  [params.disqus]
    api_key = "your Disqus API key"
[services]
  [services.disqus]
    shortname = "shortDisqus"
  [services.googleAnalytics]
    ID = "G-XXXXXXXXXX"
```
`logo`: is displayed in titlebar and alertbar\
`description`: is displayed under title\
`showTitles`: whether the `title` is rendered; the default is `true`\
`dateFormat`: the format for displaying dates on posts anad post cards; the default is "Jan 2, 2006"\
`mailchimp` and `mailprotect`: provide links to a mailchimp-list and a mailchimp-protector id, the following screenshot should clarify. if not specified the alertbar for mail-subscription doesn't show up.
`customCSS`: you can add paths to your own css files here to tweak and customize the css\
`disqus > api_key`: if you have registered your app with Disqus and have obtained an API key, you can retrieve the number of likes and comments and displey them on your posts\
`services > disqus > shortname`: provide your disqusShortname\
`services > googleAnalytics > ID`: provide your Google Analytics code

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
[params]
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

`author`: if supplied, the name of the author will be displayed at the top of the post, underneath the title. If not supplied, the author will default to the primary site author defined in `hugo.toml`, and if _that_ parameter is not supplied, the author will be “Anonymous.”
`summary`: if supplied, the top of the post will display a brief synopsis of the article underneath the title. If not supplied, the post will show a [generated summary](https://gohugo.io/content-management/summaries/) of the article (the `.Summary` parameter) instead.
`image`: if supplied, the image will be displayed as the “featured image” in lists of posts. If not supplied, and the post is organized as a leaf bundle with images contained inside a nested directory, images whose names contain the word `cover` will be displayed instead.
`comments`: if Disqus has been configured and the value of this parameter is `true` (the default), comments are allowed on the page. Otherwise, comments are not allowed.

### Favicons

The Mediumish theme supports __favicons__. By default, the template looks for a favicon at the path `favicon.ico`. To customize the favicon, you can place a file named `favicon.ico` in the `static` directory. For more fine-grained control, override the default by creating your own partial `favicons.html` in `layouts/partials/_shared`. For example, [favicon generators](https://realfavicongenerator.net) can produce appropriate favicons for a variety of devices.

If you need to use __custom CSS__, you can add the CSS file to your `assets/css` directory and then reference it in `hugo.toml` as follows:

    params:
      customcss:
        - /css/my-custom-css.css

### Comments

The Medium website displays the number of "claps" and comments each posts receives. If you have supplied your Disqus API key in the configuration above, the Mediumish theme will simulate this using the [Disqus API](https://help.disqus.com/en/articles/1717086-available-public-api-data), following the general strategy outlined in [this article](https://stackoverflow.com/questions/16243972/showing-disqus-comment-count-in-a-div-or-span-not-a-href). A small JavaScript snippet obtains the number of likes and comments by making a GET call to the Disqus method `threads/details.jsonp`, which returns a JSON object that looks like this (additional attributes omitted for brevity):

    {"code":0,
     "response":{
         "id":"12289588930",
         "forum":"shortDisqus",
         "title":"A Picture is Worth 1,000 Words",
         "link":"http://yourdomain.com/posts/picture.worth.1000.words/",
         "posts":0, // The number of comments
         "likes":0} // The number of likes
    }

The script then injects these values into elements with the IDs `#disqus-comments-count` and `disqus-likes-count`, respectively. Note that the Disqus free plan limits the number of API calls to 1,000 per hour, whichs is probably fine for low-volume personal sites.

[This page](https://github.com/bradvin/social-share-urls) maintains a list of up-to-date social media sharing URLs.

## Contributing

Feel free to use the [issue tracker](//github.com/lgaida/mediumish-gohugo-theme/issues) if you want to contribute in any possible way.
You can also create a [pull request](//github.com/lgaida/mediumish-gohugo-theme/pulls) if you have already implemented a new feature that you want to share.

# Authors

Mediumish supports multiple authors out of the box. Authors maintain their own personal pages under the `/authors/` directory. Each author page can define a unique thumbnail, set of social media handles, and author bio. To associate an author with a content page, just add the author name to the `authors` front matter parameter.

## Setting up Hugo to support Authors

As described in the [documentation](https://gohugo.io/content-management/taxonomies/), Hugo supports categories and tags as default taxonomies. To add author support, you must add the following to your site configuration (`hugo.toml` or `hugo.yaml`):

    taxonomies:
      author: authors
      category: categories
      tag: tags

...which adds authors as a custom taxonomy, and adds back the categories and tags taxonomies, which would otherwise be removed.

## Adding a new Author to the site

Add an author to the site by adding a new author page to the `authors` directory like so:

    hugo new content authors/luke/_index.md

In this example, this command generates a new content page for Luke Skywalker at `/content/authors/luke-skywalker/_index.md`, pre-populates the front matter fields `name`, in Initial Caps; `title`, based on the site-wide `title` from `hugo.toml`; and a default `thumbnail`. The generated author page leaves the `linkedin`, `twitter`, and `email` fields blank, and adds a generated sample bio into the content section. For example:

    ---
    name: "Luke Skywalker"
    title: Writer, Lucasfilm
    linkedin:
    twitter:
    email:
    thumbnail: /images/author.png
    ---
    Luke Skywalker is a writer for Lucasfilm.

To add an author to a content page, add the author’s key&mdash;in this example, “Luke Skywalker”&mdash; to the page’s `authors` front matter:

    ---
    title: "A New Hope"
    authors:
      - Luke Skywalker
    date: 1977-05-27 15:00:00 -0800
    tags:
      - star wars
      - droids
    ---

By default, the post template will display the author’s full name and title, and will render a Follow link to the author’s LinkedIn profile, if supplied.

## Using usernames in front matter

If adding `Luke Skywalker` to each post’s front matter is too cumbersome (or potentially error-prone), and you would rather use a short username instead, you can instead create author pages with usernames and then change the author page’s `name` parameter to suit. For example, to create the initial author page using a short name `luke`:

     hugo new content authors/luke/_index.md

...and then in `authors/luke/_index.md`, change the `name` property to read `Luke Skywalker`. Content pages can now simply specify `luke` as an author.

## Displaying Author properties

Mediumish renders author properties in the following contexts:

| Where | What is Rendered |
|---|---|
| Author index at `/authors/` | Name<br>Title<br>Thumbnail<br>LinkedIn “Follow” link<br>Links to LinkedIn, Twitter, and email<br>Link to `id` in `/authors/` index page |
| Posts, such as `/posts/my-post/` | Name<br>Title<br>Thumbnail<br>LinkedIn “Follow” link<br>Link to `id` in `/authors/` index page |
| Post cards, such as the “More From” and “Featured” asides | Name<br>Thumbnail<br>Link to `id` in `/authors/` index page |

Mediumish will use a stock image thumbnail if the author page does not supply a `thumbnail`, and will default to the username if the page does not specify a `name`.

As with other taxonomies, such as with tags and categories, the `authors` page parameter supports multiple entries. However, the post template will only render the first one.

# Styling the Mediumish Theme

The Mediumish theme attempts to be faithful to the style conventions of the Medium website. Nonetheless, you can customize the theme easily.

## Cascading Style Sheets

The primary cascading style sheet (CSS) used to style Mediumish is the theme’s `assets\css\medium.css` file. The page markup will also look for and load `assets\css\additional.css`, which is zero-length by default. For simple CSS tweaks, the easiest way to customize the appearance of your site is to create and populate `assets\css\additional.css` in your project.

If you need to make heavier customizations to CSS, make a copy of `assets\css\medium.css`. The Mediumish style sheet makes heavy use of root variables to define key font and color styles. Explanations follow.

### Fonts

These variables define the fonts used by Mediumish:

| CSS Variable | Purpose |
|---|---|
| `--mediumish-primary-font` | Default font used throughout the theme. | 
| `--mediumish-heading-font` | Page and post headings |
| `--mediumish-post-headline-font` | Post headlines |
| `--mediumish-post-summary-font` | Post summary at top of page |
| `--mediumish-post-header-font` | Post metadata at top of page |
| `--mediumish-post-font` | Post body |
| `--mediumish-table-font` | Tables |
| `--mediumish-code-font` | Preformatted blocks, code blocks, and inline `<code>` |

### Colors

These variables define the color scheme.

| CSS Variable | Purpose |
|---|---|
| `--mediumish-background-color` | Background color for the “Written By” and “More From” asides that appear at the bottoms of posts and some section indexes |
| `--mediumish-primary-text-color` | Default font color |
| `--mediumish-secondary-text-color` | Alternative font color, used by post summaries and meta elements |
| `--mediumish-link-color` | For hyperlinks, tags, and Follow badges |
| `--mediumish-link-highlight-color` | Highlight color when a hyperlink, tag, or badge is hovered over; blue by default |
| `--mediumish-reversed-color` | Badge text color, white by defailt |
| `--mediumish-accent-color` | Vertical bar accompanying blockquotes |
| ` --mediumish-code-color` | Preformatted blocks, code blocks, and `<code>` elements
| `--mediumish-medium-gray` | Horizontal rules and a few borders
| `--mediumish-light-gray` | Border for the Share popover and index numbers for featured posts |

## Font-sizes, padding and margins

As a general rule, CSS `font-size` declarations are specified in `rem` units, which are multiples of the root `font-size` declaration for the `html` element, which is 16 pixels high by default. Using rems allows font sizes below the root to be scaled predictably. Below the root `html` element, the Mediumish theme employs the following strategy for other sizing-related declarations:

- __Top and bottom margins__ are specified in _ems_, which gives them a fixed proportion relative to the font sizes of their containing elements. What this means is if the `font-size` for a given element changes, its vertical margins and paddings will change as well.
- __Line heights__ and __letter-spacings__ are specified in _ems_ so that they can scale relative to the containing element’s `font-size`.
- __Left and right margins__ are specified in _rems_, which gives them a fixed proportion relative to the root font size. Changing the `font-size` for an element will not change its horizontal padding or margin, unless the root changes.
- __Absolute widths__ for elements are specified in _px_, which gives them a fixed size relative to the screen.

These CSS variables specify the font sizes used throughout the theme:

| CSS Variable | Root Ems | Size | Purpose |
|---|---|---|---|
| `--mediumish-font-base` | 1 | 16px | Default size specified in the root <html> element. Also used by card titles, post headers, tables |
| `--mediumish-font-xs` | 0.813 | 13px | Card text default, page footers, alertbar |
| `--mediumish-font-s` | 0.875 | 14px | Card subtitles and text, post dates, pre tags, nav bar |
| `--mediumish-font-base-plus` | 1.25 | 20px Post bullets, post card titles |
| `--mediumish-font-m` | 1.375 | 21.6 | Heading 2/Heading 3, Article summaries |
| `--mediumish-font-l` | 1.5 | 24px | Heading 1, page titles, author card/written by titles |
| `--mediumish-font-xl` | 2 | 32px | Aside index numbers |
| `--mediumish-font-xxl` | 2.625 | 42px Post headlines |

## Changing Layouts

The Mediumish theme uses HTML 5 [semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp) to make the structure of pages more obvious, and less dependent on `<div>` elements.

### Structure

The `layouts\_default\baseof.html` file enforces a consistent structure for the home page, post pages, section index pages, 404s, and other pages. The top-level elements under `<body>` are the `<header`>, `<main>`, and `<footer>`, elements for the page navigation, page, and footer content, respectively. The general page structure looks like this:

    body
      header
        nav
      main
        article | section
          header
      aside [0..n]
        section
      footer

| Layout | Layout File | `<main>` CSS Classes  | Content element | Additional Included elements |
|---|---|---|---|---|
| Homepage | `layouts/index.html` | `.hugo-home` | `section` | `aside.featured` |
| Post pages | `layouts/posts/single.html` | `.hugo-page .posts` | `article` | `aside.written-by`<br>`aside.more-from`<br>`aside.jumbotron` |
| Other pages | `layouts/_default/single.html` | `.hugo-page`<br>_`.section`_ | `article` |
| Authors index page | `layouts/_default/author.terms.html` | `.hugo-taxonomy`<br>`authors` | `section` | `aside.more-from` |
| Tag pages | `layouts/_default/list.html` | `.hugo-term`<br>`tags` | `section`
| 404 | `layouts/404.html` | `.hugo-404` | `section`

So that they can be reliably used in CSS rules, the `baseof.html` layout adds the `<main>` CSS classes automatically based on the values of `.Kind` and `.Section`.

### Asides

As shown in the table above, Mediumish includes several _asides_ in its default templates. Asides are HTML elements that show information that is related to, but not part of, the content on the page. The out-of-the-box asides are as follows:

| Aside | Layout file | Contents |
|---|---|---|
| Jumbotron | `layouts\partials\_shared\jumbotron.html` | List of tags all posts |
| Written By | `layouts\single-partials\_shared\writtenby.html` | Picture of the author and an abbreviated bio, based on the summary from the author’s page
| More From | `layouts\partials\_shared\morefrom.html` | List of all posts with the front matter value `featured` set to `true`, other than the current page
| Featured | Inside `layout\index.html` | List of all posts with the front matter value `featured` set to `true` |

### Cards

Mediumish renders certain kinds of content as [Bootstrap cards](https://getbootstrap.com/docs/4.0/components/card/) in lists and asides. These kinds include:

- __Posts__. The layout file `layouts/partials/list-partials/postcard.html` defines how posts appear in lists and the “More From” and “Featured” asides. The default layout displays the post’s featured image at the top, followed by the picture and name of the author, post title, two-line summary, and meta information (reading time and date). In the “Featured” aside, the image, summary, and save button are hidden.
- __Authors__. The layout file `layouts/partials/list-partials/author.html` defines how authors appear on the authors index page. The default layout displays the author’s using the author’s page `thumbnail` front matter, the `title` and `company` propoerties from the author’s entry in the `dataa/authors.yaml` files, links to social media if supplied, and the author’s biography, which is from the author’s `_index.html` file under `authors/` directory.

# License

Like the original Mediumish Jekyll-theme and lgaida's port to Hugo, this ported theme is released under the MIT License. Read more at the [License](//github.com/lgaida/mediumish-gohugo-theme/blob/master/LICENSE) itself.
