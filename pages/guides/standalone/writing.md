@page lsg-quickstart-writing Writing
@parent howTo.standalone-lsg-steps 2

## Documenting a Stylesheet

*The next few pages will be very information-dense. If you're the kind of person who takes breaks, now would be a good time a good time.*

To document a stylesheet, we're going to need to use two more tags:

- `@stylesheet` to create a page for each stylesheet documented
- `@styles` to document individual styles

When all of these are put together, a documented stylesheet file (`css`, `less`, or `scss`) will look something like this:

```css
/**
 *  @@stylesheet typeography.less Typography
 *  
 *  Global style definitions for all typographic elements 
 *  including headings, paragraphs, lists, and blockquotes.
 */

/**
 * @@styles headings Headings
 *
 * H tags defining a typographical heirarchy
 */
h1,h2,h3,h4,h5,h6{
    margin: 0;
    margin-bottom: 10px;
}

```

As a result our styleguide will start to look like [this page](/examples/styles/typography.less.html). Don't worry about the live demos just yet--we'll get to that soon.

## New Tag: `@@stylesheet`

The `@@stylesheet` tag creates an individual page to document a stylesheet. Instead of creating a separate file, you'll use this tag.

### Example

In a file like `typography.less`:

```css
/**
 *  @@stylesheet typeography.less Typography
 *  
 *  Global style definitions for all typographic elements 
 *  including headings, paragraphs, lists, and blockquotes.
 */
```

This will create a page in the `stylesheet` directory called `typography.less.html`. Like with the `@@page` tag, anything you write below the tag will be used as a description in the page.

### Arguments

The @@stylesheet tag behaves similarly to the @@page tag, so it has the same arguments.

```markdown
@@stylesheet NAME TITLE
```

`NAME` is the unique name of the page for reference purposes (and will determine the name of the `html` file). It is often going to make sense to just make `NAME` the name of the file (on the [example Live Style Guide](/examples/styles/typography.less.html) you will see file names listed under the titles for this reason).

`TITLE` is the title that will be displayed on the page.

## New Tag: `@@styles`

The `@@styles` tag allows you to define an individual set of styles. 

>**Whenever you use this tag in a stylesheet that already used the @@stylesheet tag, your `@@styles` documentation will be included in that stylesheet. When using this tag, the comments you may already have been writing will automatically become a part of your live style guide.**

### Example

In a file like `typography.less` (that already has a `@@stylesheet` tag at the start of the file):

```css
/**
 * @styles headings Headings
 * 
 * H tags defining a typographical heirarchy
 */
h1,h2,h3,h4,h5,h6{
    margin: 0;
    margin-bottom: 10px;
}
```

*Note: the actual styles declared below the comments will not be included in the styleguide. They are only shown for context.*

### Arguments

```markdown
@@styles NAME TITLE
```

`NAME` is the unique name of the page for reference purposes (but is less important in this case). `TITLE` is the title of the heading that will be displayed on the generated stylesheet page.

## Organizing Your Styleguide


After you've documented your first stylesheet, if you [generate the site](/docs/lsg-quickstart-generate.html) you won't see your stylesheet page anywhere in the sidebar. Even though the page has been generated, it isn't linked up to the rest of the site because you need to tell DocumentJS where to put it.

We have two more tags so you can organize your style guide:

- `@@parent` to tell DocumentJS where to put links to your pages and stylesheets
- `@@group` to organize links in the sidebar


## New Tag: `@@parent`

The `@@parent` tag organizes your site by telling DocumentJS where to put a link to your page or stylesheet.

### Example

The following tells DocumentJS that the parent page of `Typography` is our main page, `styleguide`. After using this tag, the `Typography` page will show up in the sidebar in the first position.

```less
/**
 * @@stylesheet typography.less Typography
 * @@parent styleguide 0
 */
```

### Arguments

```markdown
@@parent NAME ORDER
```

The `NAME` argument is the unique name *of the parent*. The `ORDER` argument allows you to specify the order in which this child shows up in the sidebar. By default, children will be ordered alphabetically.

## New Tag: `@@group`

The `@@group` tag organizes pages with headings in the sidebar. On the left of this page, the groups are "INTRO," "SETUP", "YOUR FIRST PAGE", "WRITING", and "CUSTOMIZING".

### Example

The group tag is used on a parent page. In this case, you will want to specify groups in `stylesheet.md`:

```markdown
@@page my-styleguide My Style Guide
@@group styleguide-theme 0 Theme
@@group styleguide-baseline 1 Baseline Elements
@@group styleguide-docs 2 API
@@group styleguide-other 3 Other
```

### Arguments

```markdown
@@group NAME ORDER TITLE 
```

The `NAME` argument is the unique name. You'll use this as an argument for `@@parent` in pages or stylesheets that belong in this group.

The `ORDER` specifies the order in which groups should appear in the sidebar. By default, they will be organized alphabetically.

The `TITLE` is displayed as a heading in the sidebar.

## Putting Stylesheets into Groups

Once you've specified groups in `stylesheet.md`, you just need to make those groups the `@@parent` of your stylesheets (instead of using the base page). If you want to make put your Typography stylesheet in the "Baseline Elements" group, put this in `typography.less`

```
/**
 * @@stylesheet typography.less Typography
 * @@parent styleguide-baseline 0
 * 
 * Global style definitions for all typographic elements including headings, paragraphs, lists, and blockquotes.
 **/
```

Notice that we are using the name we declared as a `@@group` as the parent.

## Live Demos

The last thing you'll need in your Live Style Guide is the Live Demos. There are two more tags you'll use for this:

- `@@demo` to show a live demo as well as sample HTML for that demo
- `@@iframe` to show a live demo on its own

### Creating Demos

Before you link to your demos, you'll need to create an individual page for each of them. In your `demos` directory, create an HTML file for any demo you want to show and link to your project's relevant stylesheet(s). **Since your demos and your overall project use the same source styles, your live demos will change whenever your design changes**.

These demo pages are not generated or changed by DocumentJS, so you need to put them together manually as you would any web page and you need to be able to link to them from your project. As long as you followed the instructions for [file organization](/docs/lsg-quickstart-file-organization.html) and [site generation](/docs/lsg-quickstart-generate.html) so far, you should be able to follow along with the examples below if you put your demo files in the `demos` directory. Otherwise, you may need to figure some things out on your own.

## New Tag: `@@demo`

The `@@demo` tag displays a live demo and the markup for that demo.

### Example

In the following example, the demo page must be located at `demos/forms.html`.

In `base.less`:
```css
/**
 * @@stylesheet base-styles Base Styles
 * @@parent styleguide-baseline 0
 */

/**
 * @@styles forms Forms 
 * 
 * @@demo demos/forms.html
 */
```

On the "Base Styles" stylesheet page generated from `base.less`, there will now be a demo showing whatever page is at `demos/forms.html`. In the [Example Style Guide](/examples/styles/base.less.html), that looks like this:

@demo examples/demos/forms.html


### Arguments

```markdown
@@demo FILEPATH
```

The `FILEPATH` argument is a link to the location of the demo page.

## New Tag: `@@iframe`

Sometimes you'll want a live demo without displaying any markup. To do this, just use the `@@iframe` tag instead.

### Example

In the following example, the live demo must be located located at `demos/headings.html`.

In `typography.less`:
```css
/**
 * @@stylesheet typography.less Typography
 * @@parent styleguide-baseline 1
 */

/**
 * @@styles headings Headings
 *
 * @@demo demos/headings.html
 */
```

Similar to above, but without the "HTML" tab, there will be a demo. In the [Example Style Guide](/examples/styles/typography.less.html), that looks like this:

@iframe examples/demos/headings.html


### Arguments

```markdown
@@iframe FILEPATH
```

Just like with the `@@demo` tag, the `FILEPATH` argument is a link to the location of the demo page.

[Next Page](/docs/lsg-custom-styles.html)