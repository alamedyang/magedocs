import{_ as s,o as a,c as e,a as l}from"./app-MrF-XoWp.js";const n={},o=l(`<h1 id="serial-dialog-settings-block" tabindex="-1"><a class="header-anchor" href="#serial-dialog-settings-block" aria-hidden="true">#</a> Serial Dialog Settings Block</h1><p>One of the root level <a href="../mgs/block">blocks</a> in <a href="../mgs/mgs_natlang">MGS Natlang</a>.</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">settings</span><span style="color:#D4D4D4;"> for </span><span style="color:#9CDCFE;">serial dialog</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"><span style="color:#6A9955;">//or</span></span>
<span class="line"><span style="color:#569CD6;">settings</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">serial dialog</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"></span></code></pre></div><p>Use these blocks to set global settings for <a href="../mgs/serial_dialogs_mgs">serial dialogs</a>.</p><p><strong>Block contents</strong>: any number of <a href="../mgs/serial_dialog_parameters_mgs">serial dialog parameters</a> (<a href="../dialogs/serial_dialog_properties">serial dialog property</a> and value pairs) in any order. For example:</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">settings</span><span style="color:#D4D4D4;"> for </span><span style="color:#9CDCFE;">serial dialog</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">wrap</span><span style="color:#9CDCFE;"> messages</span><span style="color:#D4D4D4;"> to </span><span style="color:#B5CEA8;">80</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior" aria-hidden="true">#</a> Behavior</h2><p>Serial dialog settings are applied to serial dialogs in order as the parser encounters them; a serial dialog settings block partway down the file will affect only the serial dialogs afterward, and none before.</p><p>Parameters given in a serial dialog&#39;s body will override any other settings, however.</p><p>Settings only apply to multiple files with the use of <a href="advanced_syntax#include"><code>include!()</code></a>.</p>`,10),r=[o];function t(i,p){return a(),e("div",null,r)}const d=s(n,[["render",t],["__file","serial_dialog_settings_block.html.vue"]]);export{d as default};
