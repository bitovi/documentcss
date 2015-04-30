@page home DocumentCSS
@hide sidebar
@hide title
@hide footer
@hide container
@hide article
@body


<section class="homepage-section">
    <h1 style="-webkit-font-smoothing: antialiased; 
                text-align: center;
                font-size: 2.3em;
                color: #706f70;
                font-weight: 300;">
               Create live style guides with interactive examples, that change as your design does.
    </h1>
    <p style="text-align: center;">
      <small><i>Powered by <a href="http://documentjs.com">DocumentJS</a></i></small>
    </p>

<div style="width: 246px; margin: 40px auto 60px">
  <a href="guides/index.html" class="button" style="background-color: #1D978E; border-color: #156F68; font-size: 1em;">Get Started</a>
  <a href="examples/variables.less.html" class="button" style="background-color: #706f70; border-color: #484848; font-size: 1em;">View Example</a>
</div>
    
<img src="static/img/style-guide-demo.png"/>
</section>

<section style="width: 800px; margin:0 auto; overflow:hidden;">
<h2>How it Works</h2>
<p>Using a combination of custom tags and markdown <strong>DocumentCSS</strong> parses coments on your CSS, LESS, or SASS and autogenerates a site with your documentation.</p>
<pre><code class="language-css">
/**
 * @styles color-palette Color Palette
 * 
 * @description
 * Variables used to define the site's color palette.
 * @iframe demos/variables/color-palette/demo.html 630
 **/
@@night: #000000; 
@@darkSkies: #484848; 
@@thunderStorm: #706f70;  
@@cloud: #999999; 
@@haze: #cccccc;  
@@fog: #eae9e9; 
@@clear: #ffffff; 
@@nigthRain: #165489;
@@rain: #1f54c6; 
@@sunrise: #f7f8c3; 
@@sunset: #d9534f;
</code></pre>
</section>  

<section style="background-color: #cccccc; width: 100%; overflow:hidden; margin: 30px 0 0;">
<section style="width: 800px; margin:40px auto 0; overflow:hidden;">
<h2 style="color: #484848; text-align: center; font-size: 1.8em;">DocumentCSS makes it easy to incorporate style documentation as part of your design workflow.</h2>

<div style="width: 246px; margin: 40px auto 60px">
<a href="guides/index.html" class="button" style="background-color: #1D978E; border-color: #156F68; font-size: 1em;">Get Started</a>
<a href="examples/variables.less.html" class="button" style="background-color: #706f70; border-color: #484848; font-size: 1em;">View Example</a>
</div>
</section>
</section>

