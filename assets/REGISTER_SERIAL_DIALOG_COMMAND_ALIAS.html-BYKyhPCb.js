import{_ as a,o as s,c as e,a as n}from"./app-60F4FVZl.js";const l={},o=n(`<h1 id="register-serial-dialog-command-alias" tabindex="-1"><a class="header-anchor" href="#register-serial-dialog-command-alias" aria-hidden="true">#</a> REGISTER_SERIAL_DIALOG_COMMAND_ALIAS</h1><p>This action registers an &quot;alias&quot; for a <a href="commands">command</a>. For example, you might register <code>i</code> as an alias for <code>inventory</code>.</p><p>To unregister an alias, use <a href="#unregister_serial_dialog_alias">UNREGISTER_SERIAL_DIALOG_COMMAND_ALIAS</a></p><p>Aliases are not included in the list provided by the default serial command HELP, which lists all currently-registered commands.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;REGISTER_SERIAL_DIALOG_COMMAND_ALIAS&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;command&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;map&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">register</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">alias</span><span style="color:#D4D4D4;">  = </span><span style="color:#CE9178;">map</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entry" tabindex="-1"><a class="header-anchor" href="#dictionary-entry" aria-hidden="true">#</a> Dictionary entry</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">register alias $alias:string = $command:string (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,11),r=[o];function t(i,c){return s(),e("div",null,r)}const d=a(l,[["render",t],["__file","REGISTER_SERIAL_DIALOG_COMMAND_ALIAS.html.vue"]]);export{d as default};
