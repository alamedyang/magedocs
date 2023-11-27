import{_ as a,o as s,c as e,a as n}from"./app-oGoBbKgC.js";const o={},t=n(`<h1 id="teleport-camera-to-geometry" tabindex="-1"><a class="header-anchor" href="#teleport-camera-to-geometry" aria-hidden="true">#</a> TELEPORT_CAMERA_TO_GEOMETRY</h1><p>Moves the camera to the first vertex of the specified <a href="../maps/vector_objects">geometry object</a>.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;TELEPORT_CAMERA_TO_GEOMETRY&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;geometry&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vector object name&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">teleport</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">camera</span><span style="color:#D4D4D4;"> to </span><span style="color:#9CDCFE;">geometry</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entry" tabindex="-1"><a class="header-anchor" href="#dictionary-entry" aria-hidden="true">#</a> Dictionary entry</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">teleport camera to geometry $geometry:string (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,9),l=[t];function r(p,c){return s(),e("div",null,l)}const d=a(o,[["render",r],["__file","TELEPORT_CAMERA_TO_GEOMETRY.html.vue"]]);export{d as default};