import{_ as s,o as n,c as a,a as o}from"./app-7-tBH-Mq.js";const e={},t=o(`<h1 id="comments-json" tabindex="-1"><a class="header-anchor" href="#comments-json" aria-hidden="true">#</a> Comments (JSON)</h1><p>If a JSON property isn&#39;t used by an <a href="../actions">action</a>, it will be entirely ignored by the <a href="../encoder/mge_encoder">MGE encoder</a>. This is the only way documentation or notes can be written in JSON script files, since JSON doesn&#39;t support comments.</p><p>Below is an example, where <code>&quot;summary&quot;</code> and <code>&quot;to do&quot;</code> are being used for the script writer&#39;s notes:</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#CE9178;">&quot;show_dialog-example&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SHOW_DIALOG&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;dialog&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;dialog-example-start&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;summary&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Oh, hi player! This is an example dialog summary!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SET_ENTITY_INTERACT_SCRIPT&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;entity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;%SELF%&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;show_dialog-example-end&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;to do&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;redo with save flags so the branching persists&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre></div><p>Putting a small segment of dialog (enough to identify it) with each <a href="../actions/SHOW_DIALOG">SHOW_DIALOG</a> segment makes it <em>dramatically</em> easier to manage them.</p>`,5),l=[t];function p(c,r){return n(),a("div",null,l)}const i=s(e,[["render",p],["__file","comments_json.html.vue"]]);export{i as default};