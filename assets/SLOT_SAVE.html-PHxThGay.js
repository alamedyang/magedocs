import{_ as a,o as s,c as e,a as n}from"./app-QP0mOFOG.js";const t={},l=n(`<h1 id="slot-save" tabindex="-1"><a class="header-anchor" href="#slot-save" aria-hidden="true">#</a> SLOT_SAVE</h1><p>This action saves the <a href="../variables#save_data">game state</a> into the current slot (the last slot loaded).</p><p>It is not possible to write save data into an arbitrary slots, nor is it possible to copy data from one save slot into another.</p><p>Things that are saved:</p><ul><li>player name (string)</li><li><code>MEM</code> button offsets (the player can change the <code>MEM</code> button mapping)</li><li>current map id (NOTE: this is saved, but not currently used upon load)</li><li>the warp state string</li><li>hex editor clipboard contents (up to 32 bytes)</li><li>save flags (booleans)</li><li>script variables (integers)</li></ul><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SLOT_SAVE&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">save</span><span style="color:#9CDCFE;"> slot</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entry" tabindex="-1"><a class="header-anchor" href="#dictionary-entry" aria-hidden="true">#</a> Dictionary entry</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">save slot (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,12),o=[l];function i(r,c){return s(),e("div",null,o)}const d=a(t,[["render",i],["__file","SLOT_SAVE.html.vue"]]);export{d as default};