import{_ as a,o as s,c as n,a as e}from"./app-MrF-XoWp.js";const t={},o=e(`<h1 id="set-entity-direction-target-geometry" tabindex="-1"><a class="header-anchor" href="#set-entity-direction-target-geometry" aria-hidden="true">#</a> SET_ENTITY_DIRECTION_TARGET_GEOMETRY</h1><p>Make an <a href="../entities">entity</a> turn toward a vector geometry on the map.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SET_ENTITY_DIRECTION_TARGET_GEOMETRY&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;entity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;target_geometry&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vector object name&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">turn</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> toward </span><span style="color:#9CDCFE;">geometry</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entry" tabindex="-1"><a class="header-anchor" href="#dictionary-entry" aria-hidden="true">#</a> Dictionary entry</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">turn entity $entity:string toward geometry $target_geometry:string (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,9),l=[o];function r(p,c){return s(),n("div",null,l)}const D=a(t,[["render",r],["__file","SET_ENTITY_DIRECTION_TARGET_GEOMETRY.html.vue"]]);export{D as default};
