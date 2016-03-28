@page home DocumentCSS
@hide sidebar
@hide title
@hide container
@hide article 
@body


<div class="hero">
  <h1 class="lead">Create live style guides with interactive examples, that change as your design does.</h1>
  <p class="hero-note">Powered by <a href="http://documentjs.com">DocumentJS</a></p>

  <div class="hero-cta">
    <a href="docs/index.html">
      <button class="btn btn-primary btn-lg">Get Started</button>
    </a>
    <!-- <button href="examples/styles/variables.less.html" class="btn btn-secondary">View Example</button> -->
  </div>
</div>

<div class="homepage-section">
  <p>Using a combination of custom tags and markdown <strong>DocumentCSS</strong> parses coments on your CSS, LESS, or SASS and autogenerates a site with your documentation.</p>
  <div class="left">
    <h2>How it Looks</h2>
    <img src="static/img/style-guide-demo.png"/>
  </div>
  <div class="right">
    <h2>How it Works</h2>
<pre><code class="language-css">
/**
 * @@styles color-palette Color Palette
 * 
 * @@description
 * Variables used to define the site's color palette.
 * @@iframe demos/variables/color-palette/demo.html 630
 **/
@@night: #000000; 
@@darkSkies: #484848; 
@@thunderStorm: #706f70;  
@@cloud: #999999; 
@@haze: #cccccc;  
@@fog: #eae9e9;
@@clear: #ffffff; 
@@nightRain: #165489;
@@rain: #1f54c6; 
@@sunrise: #f7f8c3; 
@@sunset: #d9534f;

</code></pre>
  </div>
</div>  

<section class="homepage-closing">
<h2 class="lead-in">DocumentCSS makes it easy to incorporate style documentation as part of your design workflow.</h2>

<div class="hero-cta">
  <a href="docs/index.html">
    <button class="btn btn-primary btn-lg">Get Started</button>
  </a>
  <a href="/examples/styles/variables.less.html">
    <button class="btn btn-secondary btn-lg">View Live Example</button>
  </a>
</div>
</section>

