import{_ as s,o as a,c as n,a as l}from"./app-oGoBbKgC.js";const o={},e=l(`<h1 id="dialogs-mgs" tabindex="-1"><a class="header-anchor" href="#dialogs-mgs" aria-hidden="true">#</a> Dialogs (MGS)</h1><p>The <a href="../dialogs">dialog</a> structure for <a href="../mgs/mgs_natlang">MGS Natlang</a>, found within <a href="../mgs/dialog_block">dialog blocks</a> (and related <a href="../mgs/combination_block">combination blocks</a>). (For the JSON equivalent, see: <a href="../dialogs/dialogs_json">Dialogs (JSON)</a>)</p><h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h2><ol><li><a href="../mgs/dialog_identifier">Dialog identifier</a>: exactly 1</li><li><a href="../mgs/dialog_parameters_mgs">Dialog parameter</a>: 0+</li><li><a href="../mgs/dialog_messages_mgs">Dialog message</a>: 1+</li><li><a href="../mgs/dialog_options_mgs">Dialog option</a>: 0-4x</li></ol><p>Multiple dialogs can occur back-to-back inside their parent block.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>An example <a href="../mgs/mgs_natlang">MGS Natlang</a> <a href="../mgs/dialog_block">dialog block</a>, consisting of three <a href="../mgs/dialogs_mgs">dialogs</a>:</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">dialog</span><span style="color:#9CDCFE;"> exampleDialog</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4EC9B0;">Bob1</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;So I heard about this club....&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4EC9B0;">Bob2</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alignment</span><span style="color:#569CD6;"> BR</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;Oh, no. Don&#39;t you start.&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4EC9B0;">Bob1</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;No, no, I swear! Hear me out!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Fine. What club?&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#DCDCAA;">bobContinueScript</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;(walk away)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#DCDCAA;">bobLeaveScript</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;(smack </span><span style="color:#569CD6;">%Bob%</span><span style="color:#CE9178;"> with a rubber chicken)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#DCDCAA;">bobNoveltyScript</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>Note: white space doesn&#39;t matter, so the first option above could very well have been written this way:</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">&gt; &quot;Fine. What club?&quot; : goto bobContinueScript</span></span>
<span class="line"></span></code></pre></div>`,10),p=[e];function t(c,r){return a(),n("div",null,p)}const D=s(o,[["render",t],["__file","dialogs_mgs.html.vue"]]);export{D as default};
