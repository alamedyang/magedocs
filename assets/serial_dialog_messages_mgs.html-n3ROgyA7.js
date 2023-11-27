import{_ as s,o as a,c as e,a as o}from"./app-oGoBbKgC.js";const l={},n=o(`<h1 id="serial-dialog-messages-mgs" tabindex="-1"><a class="header-anchor" href="#serial-dialog-messages-mgs" aria-hidden="true">#</a> Serial Dialog Messages (MGS)</h1><p>NOTE: This syntax is used for <a href="../mgs/mgs_natlang">MGS Natlang</a> <a href="../mgs/serial_dialogs_mgs">serial dialogs</a>, not <a href="../dialogs/serial_dialogs_json">JSON serial dialogs</a>.</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">serial dialog</span><span style="color:#9CDCFE;"> sample</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">wrap</span><span style="color:#9CDCFE;"> messages</span><span style="color:#D4D4D4;"> to </span><span style="color:#B5CEA8;">60</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;Hey, can anyone hear me? Hello?&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">#</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Yes, I can hear you.&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#9CDCFE;">script </span><span style="color:#DCDCAA;">sampleYes</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">#</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;What did you say?&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#9CDCFE;">script </span><span style="color:#DCDCAA;">sampleNo</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br></div></div><p>A serial dialog message is any <a href="../mgs/variables/quoted_string">quoted string</a>.</p><ul><li>To maximize compatibility, best to limit these to ASCII characters.</li><li>Each message is printed on its own line.</li><li>Some characters must be escaped in the message body, such as double quote (<code>\\&quot;</code>) (depending on the quotes you&#39;re using to wrap these). <ul><li><code>\\t</code> (tabs) are auto-converted to four spaces.</li><li><code>\\n</code> (new lines) are honored, but since text is wrapped automatically, don&#39;t worry about hard wrapping your messages unless you want to put line breaks in arbitrary places.</li></ul></li><li>Word processor &quot;smart&quot; characters such as ellipses (…), emdashes (—), and smart quotes (“”) are auto converted to ASCII equivalents (<code>...</code>) (<code>--</code>) (<code>&quot;</code>).</li><li>These messages may be given ANSI <a href="../mgs/serial_styles">styles</a>. Use the built-in styling syntax for best results.</li></ul>`,5),t=[n];function r(i,p){return a(),e("div",null,t)}const d=s(l,[["render",r],["__file","serial_dialog_messages_mgs.html.vue"]]);export{d as default};
