import{_ as s,o as a,c as n,a as o}from"./app-7-tBH-Mq.js";const l={},p=o(`<h1 id="serial-dialog-options-json" tabindex="-1"><a class="header-anchor" href="#serial-dialog-options-json" aria-hidden="true">#</a> Serial Dialog Options (JSON)</h1><p>For the <a href="../mgs/mgs_natlang">MGS Natlang</a> equivalent, see <a href="../mgs/serial_dialog_options_mgs">Serial Dialog Options (MGS)</a>.</p><h2 id="multiple-choice" tabindex="-1"><a class="header-anchor" href="#multiple-choice" aria-hidden="true">#</a> Multiple Choice</h2><p>In the <a href="../dialogs/serial_dialogs_json">entry for a serial dialog</a>, you can include a second property named <code>options</code>.</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;serialDialog&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;messages&quot;</span><span style="color:#D4D4D4;">: [ </span><span style="color:#CE9178;">&quot;What&#39;s your name?&quot;</span><span style="color:#D4D4D4;"> ],</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;options&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">&quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;I&#39;m not telling you!&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">&quot;script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;refusalScript&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">&quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Wait. Tell me yours first.&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">&quot;script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;rebuttalScript&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">&quot;label&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Oh sure. My name is %PLAYER%.&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">&quot;script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;acceptanceScript&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>These will appear in the <a href="../hardware/terminal">terminal</a> as numbered options.</p><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">What&#39;s your name?</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">    0: I&#39;m not telling you!</span></span>
<span class="line"><span style="color:#D4D4D4;">    1: Wait. Tell me yours first.</span></span>
<span class="line"><span style="color:#D4D4D4;">    2: Oh, sure. My name is Bub.</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div><p>If the player fails to choose one of the provided options, the dialog will repeat.</p><h2 id="free-response" tabindex="-1"><a class="header-anchor" href="#free-response" aria-hidden="true">#</a> Free Response</h2><p>You can instead use the property <code>text_options</code> to create free response answers. At the prompt, the player can type any of the responses given to jump to the indicated script. If the player fails to type one of the choices, the next action below the <a href="../actions/SHOW_SERIAL_DIALOG">SHOW_SERIAL_DIALOG</a> script will execute instead, falling through.</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;serialSphinx&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;messages&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;When you arrive at the Sphinx,&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;it speaks in a slow, monotone voice:&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;WHEN DO THE FLYING TOASTERS COME OUT?&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;text_options&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;after dark&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;sphinxSuccess&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;before dark&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;sphinxWTF&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div>`,11),e=[p];function t(c,D){return a(),n("div",null,e)}const i=s(l,[["render",t],["__file","serial_dialog_options_json.html.vue"]]);export{i as default};
