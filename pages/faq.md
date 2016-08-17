@page faq Frequently Asked Questions

@hide sidebar

## Configuration Questions

### Does DocumentCSS support .scss/.less/.whatever files? 
Yes! DocumentCSS supports all styling languages (and most development languages, this is a sibling to <a href="http://documentjs.com">DocumentJS</a> after all). 

You can read more about how to tell it which languages you're using on the <a href="docs/setup.html#section=section_Configuration">configuration page</a> of the guides.


### How do I tell DocumentCSS what files to look for?

DocumentCSS looks for the file types defined in your `documentjs.json` file. You'll want to edit the `"glob"` section with file paths and extensions:
<pre><code>{
  "sites": {
    "styles": {
      "glob": "styles/**/*.{less,md}", //<-Looking for LESS and Markdown files in folders inside the styles folder.
      "dest": "styleguide",
      "parent": "styles" 
    }
  }
}</code></pre>

You can read more about this on the <a href="docs/setup.html#section=section_Configuration">configuration page</a> of the guides.


### Is there a simple project I can download that works out of the box?
There is! <a href="https://github.com/brandonreid">Brandon Reid</a> awesomely put a two-pagestyle guide together for people to play around with. You can find it on Github at: <a href="https://github.com/brandonreid/documentcss_starter-kit">DocumentCSS Starter Kit</a>.


## Customization Questions

### How do I override DocumentCSS styles?
Here's a high-level overview of the process: You tell `documentjs.json` to look for your custom template/LESS files, and then these new files need to match the DocumentJS <a href="docs/setup.html#section=section_FileOrganization">file structure</a>. 

The easiest way to go about this is to copy the <a href="https://github.com/bitovi/documentjs/tree/master/site/default">default DocumentJS theme</a> to your own project and modify it. We also have a few different themes you can use on our <a href="https://github.com/bitovi/bootdocs/tree/master/themes">Bootdocs</a> project.

You can get a full breakdown of how to customize your version of DocumentCSS in the <a href="/docs/customize.html">customizing look and feel</a> section of the guides.  We hope that future versions of DocumentJS will have an easier theming engine. 


### Can I restyle DocumentCSS in SCSS instead of LESS?
Short answer: not easily. 

DocumentCSS is built in LESS and stripping that out in favor of writing styles in another language would be a huge task. With enough time and patience, anything is possible though.


### How do I update the menu?
The top menu is of your Living Style Guide is hardcoded into the theme files. You can learn how to update by following [this guide](/docs/use.html#section=section_UpdatingtheTopMenu).


### Why isn't my theme updating?
To save time, DocumentJS doesn’t re-build the theme every time the site is generated. In order to get the theme or main navigation to update you have to force the documentjs task. You can do this with the `-f` flag:
<pre><code>> documentjs -f</code></pre>

You can force and watch at the same time too:
<pre><code>> documentjs -f -w</code></pre>

Depending on the size of your documentation site, this can take a long time. So we recommend dropping the `-f` unless you're editing the template itself. Documentation comments and demos shouldn't need to be forced.


## Troubleshooting Questions

### Why are demos returning 404s?
This is because of one of two issues:

1. The path is wrong/there's a typo. Double-check the location of your demo files in relation to the compiled documentation files. If you follow our <a href="/docs/setup.html#section=section_FileOrganization">file structure</a> in the guides, you demos should be accessible by using this path:
    <pre><code>@demo demos/forms.html</code></pre>

2. The demo doesn't exist yet. I pre-link to demos in documentation comments and then forget to actually create the demo all the time.

> **It’s important to know that DocumentJS does not move or copy your demos to the generated site folder. Using `@demo` only tells DocumentJS to create a link to that location. We hope that future versions of DocumentJS will handle this for us.**


### Why aren't demos pulling the right styles?
The demos are highly manual right now and embedded in iframes. What this means is that you'll need to manually link to the compiled stylesheet for your application. You can either use a relative path to the distribution folder your application compiles to, or if your css is hosted online, you can link to that.

Example: For the demos in our DocumentCSS documentation of Bootstrap elements, <a href="https://github.com/bitovi/bootdocs">Bootdocs</a>, we linked to the Bootstrap CDN so our demos will always reflect any changes Bootstrap makes.
<pre><code>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" /&gt;
</code></pre>

For the demos on this website, <a href="/examples/styles/index.html">documenting the styles these guides are using</a>, we used a relative path.
<pre><code>&lt;link rel="stylesheet" href="./static/bundles/static.css" /&gt;
</code></pre>

So if you have:
<pre><code>@demo demos/forms.html</code></pre>

Then the `forms.html` file should have a reference to the CSS in the `<head>` of the HTML. We hope future versions of DocumentJS will automate the inclusion of CSS in demos to make this easier. 


### How do I get the '@' symbol to display in my documentation? I keep getting a warning!

If your style guide includes content with the `@ `symbol, like a LESS variable name or media queries, DocumentJS returns a warning because this is the same character it uses to denote relationships and content within the style guide. 

So if you see:
<pre><code> WARNING!!
 There is no @foo tag. did you mean @add ? </code></pre>

Simply use two '@'s like so: `@@@variable-name`.
