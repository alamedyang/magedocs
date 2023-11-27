import{_ as a,o as s,c as e,a as n}from"./app-oGoBbKgC.js";const o={},l=n(`<h1 id="show-dialog" tabindex="-1"><a class="header-anchor" href="#show-dialog" aria-hidden="true">#</a> SHOW_DIALOG</h1><p>Plays the named <a href="../dialogs">dialog</a>.</p><p>A script cannot execute any other actions until the dialog is entirely finished. To give a <a href="../techniques/cutscenes">cutscene</a> sophisticated choreography, you will need to either split the dialog into multiple pieces or prepare additional scripts to manage concurrent behavior.</p><p>While a dialog screen is showing, the player can only advance to the next dialog message or choose a multiple choice option within that dialog (if any); the player cannot hack, interact with another <a href="../entities">entity</a>, move, etc.</p><p>This action is also available as a <a href="../mgs/combination_block">combination block</a>: <a href="../mgs/show_dialog_block">show dialog block</a>.</p><p>A script can close an open dialog with <a href="../actions/CLOSE_DIALOG">CLOSE_DIALOG</a>.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SHOW_DIALOG&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;dialog&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;dialogName&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">dialog</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">dialogName</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entry" tabindex="-1"><a class="header-anchor" href="#dictionary-entry" aria-hidden="true">#</a> Dictionary entry</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">show dialog $dialog:string (;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,13),t=[l];function i(c,p){return s(),e("div",null,t)}const d=a(o,[["render",i],["__file","SHOW_DIALOG.html.vue"]]);export{d as default};
