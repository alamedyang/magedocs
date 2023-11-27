import{_ as a,o as s,c as n,a as e}from"./app-oGoBbKgC.js";const l={},o=e(`<h1 id="blocking-delay" tabindex="-1"><a class="header-anchor" href="#blocking-delay" aria-hidden="true">#</a> BLOCKING_DELAY</h1><p>This pauses the entire game, including all other <a href="../scripts">script</a> and <a href="../tilesets/animations">animations</a>, for the given duration.</p><p>As this might make the game appear broken, you should probably use a <a href="../actions/NON_BLOCKING_DELAY">NON_BLOCKING_DELAY</a> instead.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;BLOCKING_DELAY&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;duration&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1000</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">block</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1000ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entry" tabindex="-1"><a class="header-anchor" href="#dictionary-entry" aria-hidden="true">#</a> Dictionary entry</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">block $duration:duration (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,10),t=[o];function r(p,c){return s(),n("div",null,t)}const d=a(l,[["render",r],["__file","BLOCKING_DELAY.html.vue"]]);export{d as default};
