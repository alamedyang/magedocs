import{_ as s,o as a,c as n,a as e}from"./app-oGoBbKgC.js";const l={},o=e(`<h1 id="set-hex-editor-control" tabindex="-1"><a class="header-anchor" href="#set-hex-editor-control" aria-hidden="true">#</a> SET_HEX_EDITOR_CONTROL</h1><p>This action enables or disables player access to to the <a href="../hardware/hex_editor">hex editor</a>. This is on by default.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SET_HEX_EDITOR_CONTROL&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;bool_value&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">turn</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">hex control</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">turn</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">hex control</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entries" tabindex="-1"><a class="header-anchor" href="#dictionary-entries" aria-hidden="true">#</a> Dictionary entries</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">turn $bool_value:boolean hex control (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">turn hex control $bool_value:boolean (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,9),t=[o];function p(r,c){return a(),n("div",null,t)}const i=s(l,[["render",p],["__file","SET_HEX_EDITOR_CONTROL.html.vue"]]);export{i as default};
