@page home DocumentCSS
@hide sidebar
@hide title
@hide footer
@hide container
@hide article
@body

<section style="width: 800px; margin:100px auto 20px auto; overflow:hidden;">
<div style="border-right: 1px solid #ccc; padding-right:20px; margin-right:50px; float:left;">
<img src="theme/docjs-landing-page-logo.png" alt="StealJS Logo" />
</div>  
<div style="float:left; width: 340px; padding-top: 36px;">
<p style="-webkit-font-smoothing: antialiased; font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; font-weight: 300; ">Create a detailed style guide with live demos that change every time your design does.
<br><small><i>Powered by <a href="http://documentjs.com">DocumentJS</a></i></small></p>
</div>
</section>
<section style="width: 800px; margin:0 auto; overflow:hidden;">
<p>Document your CSS, LESS, or SASS Files:</p>

```css
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

```

</section>  

<section style="width: 800px; margin:0 auto; overflow:hidden;">
<p>Automatically generate a live style guide with examples that change when your design does:</p>
<div style="overflow: hidden; height: 550px;">
<div style="position: relative">
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 550px;"></div>
</div>
<iframe scrolling="no" src="/examples/variables.less.html" style="width: 100%; height: 620px; margin-top: -70px; border: 0px;"></iframe>
</div>

</section>