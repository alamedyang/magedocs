import{_ as s,o as a,c as n,a as e}from"./app-QP0mOFOG.js";const l={},o=e(`<h1 id="unregister-serial-dialog-command" tabindex="-1"><a class="header-anchor" href="#unregister-serial-dialog-command" aria-hidden="true">#</a> UNREGISTER_SERIAL_DIALOG_COMMAND</h1><ul><li><strong>Plain variant</strong>: unregisters the given command <em>and</em> all registered arguments for that command (if any).</li><li><strong>Fail variant</strong>: only unregisters the <code>fail</code> script; other registered arguments (and the plain command itself) will remain intact.</li></ul><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;UNREGISTER_SERIAL_DIALOG_COMMAND&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;command&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;map&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;is_fail&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">unregister</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">map</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">unregister</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">map</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">fail</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entries" tabindex="-1"><a class="header-anchor" href="#dictionary-entries" aria-hidden="true">#</a> Dictionary entries</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">unregister $command:string (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: is_fail = false</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">unregister $command:string fail (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: is_fail = true</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,9),t=[o];function p(r,c){return a(),n("div",null,t)}const D=s(l,[["render",p],["__file","UNREGISTER_SERIAL_DIALOG_COMMAND.html.vue"]]);export{D as default};