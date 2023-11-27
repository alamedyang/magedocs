import{_ as s,o as a,c as o,a as n}from"./app-MrF-XoWp.js";const e={},l=n(`<h1 id="multiple-choice-dialogs-json" tabindex="-1"><a class="header-anchor" href="#multiple-choice-dialogs-json" aria-hidden="true">#</a> Multiple Choice Dialogs (JSON)</h1><p>For the <a href="../mgs/mgs_natlang">MGS Natlang</a> equivalent, see <a href="../mgs/dialog_options_mgs">Dialog Options (MGS)</a>.</p><p>For a multiple choice prompt in a <a href="../dialogs/dialogs_json">dialog</a>, there are additional dialog properties. An example:</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;messages&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;Would you like to save the game?&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;response_type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SELECT_FROM_SHORT_LIST&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;options&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Yes&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;save_game-yes&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;No&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;save_game-no&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>Since there are five rows within the dialog box, you can have up to four <code>options</code>. But also take into account how many lines the string in <code>messages</code> is.</p><p><strong><code>response_type</code></strong> — Currently only <code>SELECT_FROM_SHORT_LIST</code> is implemented.</p><p><strong><code>label</code></strong> — How the multiple choice option appears within the game. Normally there is room for 42 characters per line, but since the select cursor takes up a few columns of space, you should instead plan on no more than 39 characters for each of these.</p><p><strong><code>script</code></strong> — This is the name of the <a href="../scripts">script</a> that runs if the player chooses that option.</p>`,8),p=[l];function t(c,r){return a(),o("div",null,p)}const D=s(e,[["render",t],["__file","multiple_choice_dialogs_json.html.vue"]]);export{D as default};
