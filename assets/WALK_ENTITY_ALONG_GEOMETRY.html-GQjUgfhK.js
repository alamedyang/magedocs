import{_ as a,o as s,c as n,a as e}from"./app-MrF-XoWp.js";const o={},t=e(`<h1 id="walk-entity-along-geometry" tabindex="-1"><a class="header-anchor" href="#walk-entity-along-geometry" aria-hidden="true">#</a> WALK_ENTITY_ALONG_GEOMETRY</h1><p>Moves the <a href="../entities">entity</a> along the <a href="../maps/vector_objects">geometry object</a> named (or the entity&#39;s assigned path if <code>geometry</code> is <code>%ENTITY_PATH%</code>) over a period of time.</p><p>NOTE: Unless you want the entity to teleport to the geometry&#39;s origin point, you should probably use <a href="../actions/WALK_ENTITY_TO_GEOMETRY">WALK_ENTITY_TO_GEOMETRY</a> first.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;WALK_ENTITY_ALONG_GEOMETRY&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;duration&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1000</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;entity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;geometry&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vector object name&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">walk</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> along </span><span style="color:#9CDCFE;">geometry</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;"> over </span><span style="color:#B5CEA8;">1000ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entry" tabindex="-1"><a class="header-anchor" href="#dictionary-entry" aria-hidden="true">#</a> Dictionary entry</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">walk entity $entity:string along geometry $geometry:string over $duration:duration (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,10),l=[t];function p(r,c){return s(),n("div",null,l)}const D=a(o,[["render",p],["__file","WALK_ENTITY_ALONG_GEOMETRY.html.vue"]]);export{D as default};
