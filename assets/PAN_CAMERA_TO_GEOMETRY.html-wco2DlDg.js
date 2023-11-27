import{_ as a,o as s,c as n,a as e}from"./app-MrF-XoWp.js";const o={},l=e(`<h1 id="pan-camera-to-geometry" tabindex="-1"><a class="header-anchor" href="#pan-camera-to-geometry" aria-hidden="true">#</a> PAN_CAMERA_TO_GEOMETRY</h1><p>Pans the camera to the first vertex of a <a href="../maps/vector_objects">geometry object</a>.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;PAN_CAMERA_TO_GEOMETRY&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;duration&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;geometry&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vector object name&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">pan</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">camera</span><span style="color:#D4D4D4;"> to </span><span style="color:#9CDCFE;">geometry</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;"> over </span><span style="color:#B5CEA8;">1000ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entry" tabindex="-1"><a class="header-anchor" href="#dictionary-entry" aria-hidden="true">#</a> Dictionary entry</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">pan camera to geometry $geometry:string over $duration:duration (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,9),t=[l];function p(r,c){return s(),n("div",null,t)}const i=a(o,[["render",p],["__file","PAN_CAMERA_TO_GEOMETRY.html.vue"]]);export{i as default};
