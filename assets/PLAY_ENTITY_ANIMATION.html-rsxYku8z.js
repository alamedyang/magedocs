import{_ as a,o as s,c as n,a as e}from"./app-oGoBbKgC.js";const t={},l=e(`<h1 id="play-entity-animation" tabindex="-1"><a class="header-anchor" href="#play-entity-animation" aria-hidden="true">#</a> PLAY_ENTITY_ANIMATION</h1><p>The <a href="../entities">entity</a> will play the given <a href="../tilesets/animations">animation</a> the given number of times, and then will return to its default animation.</p><p>A <a href="../scripts">script</a> that runs this action will not execute any further actions until the play count has been satisfied.</p><p>If an entity is compelled to move around on the map, it will abort this animation playback.</p><p>See <a href="../tilesets/animations">entity animations</a> for what numbers correspond to which animations.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;PLAY_ENTITY_ANIMATION&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;animation&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;entity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;play_count&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">play</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">animation</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">twice</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entry" tabindex="-1"><a class="header-anchor" href="#dictionary-entry" aria-hidden="true">#</a> Dictionary entry</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">play entity $entity:string animation $animation:number $play_count:quantity (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,12),o=[l];function p(i,r){return s(),n("div",null,o)}const D=a(t,[["render",p],["__file","PLAY_ENTITY_ANIMATION.html.vue"]]);export{D as default};
