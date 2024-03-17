import{_ as s,o as a,c as n,a as e}from"./app-60F4FVZl.js";const o={},l=e(`<h1 id="serial-dialogs" tabindex="-1"><a class="header-anchor" href="#serial-dialogs" aria-hidden="true">#</a> Serial Dialogs</h1><p><strong>Serial dialogs</strong> are a means to print messages on the serial <a href="terminal">terminal</a> (new as of the chapter 2+ version of the MGE).</p><p>They need not function as <a href="entities">character</a> <a href="dialogs">dialog</a>, strictly speaking; they can be anything, including <a href="debug_tools#debug-scripting">debug messages</a>, ASCII maps, room or character descriptions, etc.</p><p>Serial dialogs do nothing on their own. To show them, you must use the <a href="actions/SHOW_SERIAL_DIALOG">SHOW_SERIAL_DIALOG</a> action within a <a href="scripts">script</a>.</p><p>Serial dialog names must be unique throughout the entire game project, though <a href="mgs/mgs_natlang">MGS Natlang</a> will auto generate dialog names when they are not declared.</p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><p>The only required serial dialog property is <code>messages</code>, though there are two types of dialog options: multiple choice and free response.</p><p>Serial dialog messages are not wrapped by default (unless handled by <a href="mgs/mgs_natlang">MGS Natlang</a>).</p><h2 id="json-structure" tabindex="-1"><a class="header-anchor" href="#json-structure" aria-hidden="true">#</a> JSON Structure</h2><div class="custom-container warning"><p class="custom-container-title">Slightly Deprecated</p><p>With the introduction of <a href="mgs/mgs_natlang">MGS Natlang</a>, you need not write serial dialogs with JSON, but it still may be useful to understand the JSON structure for debugging purposes.</p></div><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;serialDialog1&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;messages&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;Hi there!&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;Each new message&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;gets printed on a&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;new line.&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;serialDialog2&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;messages&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;THIS IS REALLY STRAIGHTFORWARD&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="multiple-choice" tabindex="-1"><a class="header-anchor" href="#multiple-choice" aria-hidden="true">#</a> Multiple Choice</h3><p>After <code>messages</code>, you may include a second property named <code>options</code>.</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
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
<span class="line"></span></code></pre></div><p>These will appear in the <a href="terminal">terminal</a> as numbered options.</p><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">What&#39;s your name?</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">    0: I&#39;m not telling you!</span></span>
<span class="line"><span style="color:#D4D4D4;">    1: Wait. Tell me yours first.</span></span>
<span class="line"><span style="color:#D4D4D4;">    2: Oh, sure. My name is Bub.</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div><p>If the player fails to choose one of the provided options, the serial dialog will repeat.</p><h2 id="free-response" tabindex="-1"><a class="header-anchor" href="#free-response" aria-hidden="true">#</a> Free Response</h2><p>You can instead use the property <code>text_options</code> to create free response answers. At the prompt, the player can type any of the responses given to jump to the indicated script. If the player fails to type one of the choices, the next action below the <a href="actions/SHOW_SERIAL_DIALOG">SHOW_SERIAL_DIALOG</a> script will execute instead, falling through.</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
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
<span class="line"></span></code></pre></div>`,21),p=[l];function t(r,c){return a(),n("div",null,p)}const i=s(o,[["render",t],["__file","serial_dialogs.html.vue"]]);export{i as default};
