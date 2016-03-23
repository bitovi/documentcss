@page faq Frequently Asked Questions
@parent lsg.guides 

@hide sidebar


## Configuration Questions

### Does DocumentCSS support .scss/.less/.whatever files as stylesheets? 
Yes! DocumentCSS supports all styling languages (and most development languages, this is a sibling to <a href="http://documentjs.com">DocumentJS</a> after all). 

You can read more about how to tell it which languages you're using on the <a href="/docs/lsg-quickstart-configuration.html">configuration page</a> of the guides.

### How do I tell DocumentCSS what files to look for?

DocumentCSS looks where you tell it to in the `documentjs.json` file. You'll want to edit the `"glob"` section with file paths and extentions:
<pre><code>{
  "sites": {
    "styles": {
      "glob": "styles/**/*.{less,md}", //<-Looking for LESS and Markdown files in folders inside the styles folder.
      "dest": "styleguide",
      "parent": "styles" 
    }
  }
}</code></pre>

You can read more about this on the <a href="/docs/lsg-quickstart-configuration.html">configuration page</a> of the guides.

### Is there a pre-built project that I can download that works out of the box?
There is! Brandon Reid took the awesome intiative to put one together for people to play around with. You can find it on Github at: <a href="https://github.com/brandonreid/documentcss_starter-kit">DocumentCSS Starter Kit</a>.



## Customization Questions

### How do I override DocumentCSS styles?
Here's a high-level overview of the process: You'll tell `documentjs.json` there are new template/LESS files, and then the new files need to match our style strucutre to more effectively override attributes you don't want. 

You can get a full breakdown of customizing your version of DocumentCSS in the <a href="/docs/lsg-custom-styles.html">customizing look and feel</a> section of the guides.

### Can I restyle DocumentCSS in SCSS instead of LESS?
Short answer: not easily. 

DocumentCSS is built in LESS and stripping that out in favor of writing styles in another language would be a huge task. With enough time and patience, anything is possible though.

### Why isn't my template updating?
In order to get the template to update you have to force the documentjs task. You can do this with the `-f` flag:
<pre><code>> documentjs -f</code></pre>

You can force and watch at the same time too:
<pre><code>> documentjs -f -w</code></pre>

Depending on the size of your documentation site, this can take a long time. So we recommend dropping the `-f` unless you're editing the template itself. Documentation comments and demos shouldn't need to be forced.



## Troubleshooting Questions

### Why are demos returning 404s?
This is because of one of two issues:

1. The path is wrong/there's a typo. Doublecheck the location of your demo files in relation to the compiled documentation files. If you follow our <a href="/docs/lsg-quickstart-file-organization.html">file structure</a> in the guides, you demos should be accessible by using this path:
<pre><code>@demo demos/forms.html</code></pre>

2. The demo doesn't exist yet. I pre-link to demos in documentation comments and then forget to actually create the demo all the time.

### Why aren't demos pulling the right styles?
The demos are both highly manual right now, and embedded in iframes. What this means is that you'll need to manually link to the compiled stylesheet for your application. You can either use a relative path to the distribution folder your application compiles to, or if your css is hosted online, you can link to that.

Example: For the demos in our DocumentCSS documentation of Bootstrap elements, <a href="https://github.com/bitovi/bootdocs">Bootdocs</a>, we linked to the Bootstrap CDN so our demos will always reflect any changes Bootstrap makes.
<pre><code>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" /&gt;
</code></pre>

For the demos on this website, <a href="/examples/styles/index.html">documenting the styles these guides are using</a>, we used a relative path.
<pre><code>&lt;link rel="stylesheet" href="./static/bundles/static.css" /&gt;
</code></pre>


### How do I get the '@' symbol to display in my documentation? I keep getting a warning!

DocumentCSS uses the '@' symbol to denote tags for structure and functionality. Example: `@@page` for high level pages, `@@parent` for navigation levels. If you're trying to talk about '@' (as a LESS variable for example), or you're seeing this error:

<pre><code> WARNING!!
 There is no @foo tag. did you mean @add ? </code></pre>


Simply use two '@'s like so: `@@@variable-name`. Then DocumentCSS knows you're not talking to it.