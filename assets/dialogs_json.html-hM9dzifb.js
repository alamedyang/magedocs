import{_ as s,o as a,c as n,a as e}from"./app-MrF-XoWp.js";const o={},l=e(`<h1 id="dialogs-json" tabindex="-1"><a class="header-anchor" href="#dialogs-json" aria-hidden="true">#</a> Dialogs (JSON)</h1><p>NOTE: With the introduction of <a href="../mgs/mgs_natlang">MGS Natlang</a>, you need not write <a href="../dialogs">dialogs</a> with JSON, but it still may be useful to understand the JSON structure for debugging purposes. See: <a href="../mgs/dialogs_mgs">Dialogs (MGS)</a></p><h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior" aria-hidden="true">#</a> Behavior</h2><p>Dialogs do nothing on their own. To show them, you must use the <a href="../actions/SHOW_DIALOG">SHOW_DIALOG</a> action within a <a href="../scripts">script</a>.</p><h2 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> Format</h2><p>Easiest might be to copy an existing dialog file and make changes to it, particularly if you&#39;re not familiar with JSON.</p><p>A simplified explanation:</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;dialog-sample1&quot;</span><span style="color:#D4D4D4;"> : [],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;dialog-sample2&quot;</span><span style="color:#D4D4D4;"> : [],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;dialog-another-one&quot;</span><span style="color:#D4D4D4;"> : []</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>At the top level of the dialog file is an object literal (indicated by curly braces) which contains several <strong>name-value</strong> pairs separated by commas. (Note that the last name-value pair does not end with a comma because it is the last in the list.)</p><p>In this case, the <strong>name</strong> (a string, wrapped in double quotes) is the name of the dialog for <code>SHOW_DIALOG</code> to use, and the <strong>value</strong> is an array (marked by square brackets) containing the dialog data. The dialog name must be unique across all dialog files in the entire game.</p><p>Within the square brackets above can be any number of object literals (marked with curly braces), each containing a number of name-value pairs for the dialog message and its properties. To expand one of the sample dialogs:</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#CE9178;">&quot;dialog-sample1&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;alignment&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;BOTTOM_RIGHT&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;entity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;%PLAYER%&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;messages&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;alignment&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;BOTTOM_LEFT&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;entity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Sample Entity&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;messages&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre></div><p>In the example above, there are three dialog properties: <code>alignment</code>, <code>entity</code>, and <code>messages</code>. There are additional or alternate properties you might use, but these three are a reasonable minimum. (See: <a href="../dialogs/dialog_properties">Dialog Properties</a>)</p><p>The property <code>messages</code> is an array containing the strings for the messages themselves (up to 255 total). Multiple messages within the array will be shown on subsequent dialog boxes, so you don&#39;t need a whole new object literal unless something else about the properties must change, such as a different character beginning to speak.</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;messages&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;What&#39;s for dinner?&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;Memory leek soup!&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;....&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;...Nah, just kidding. It&#39;s saag paneer.&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>Remember to wrap messages in double quotes and to separate them with commas.</p>`,16),t=[l];function p(r,i){return a(),n("div",null,t)}const D=s(o,[["render",p],["__file","dialogs_json.html.vue"]]);export{D as default};
