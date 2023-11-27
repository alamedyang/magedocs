import{_ as s,o as a,c as n,a as e}from"./app-oGoBbKgC.js";const l={},t=e(`<h1 id="set-entity-glitched" tabindex="-1"><a class="header-anchor" href="#set-entity-glitched" aria-hidden="true">#</a> SET_ENTITY_GLITCHED</h1><p>Set the glitched render flag on an <a href="../entities">entity</a>.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SET_ENTITY_GLITCHED&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;bool_value&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;entity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">make</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">glitched</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">make</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">unglitched</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entries" tabindex="-1"><a class="header-anchor" href="#dictionary-entries" aria-hidden="true">#</a> Dictionary entries</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">make entity $entity:string glitched (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: bool_value = true</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">make entity $entity:string unglitched (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: bool_value = false</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,9),o=[t];function p(c,r){return a(),n("div",null,o)}const i=s(l,[["render",p],["__file","SET_ENTITY_GLITCHED.html.vue"]]);export{i as default};
