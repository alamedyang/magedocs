import{_ as s,o as a,c as e,a as l}from"./app-QP0mOFOG.js";const n={},o=l(`<h1 id="dialogs-mgs" tabindex="-1"><a class="header-anchor" href="#dialogs-mgs" aria-hidden="true">#</a> Dialogs (MGS)</h1><p>In <a href="../mgs/mgs_natlang">MGS Natlang</a>, <strong>dialogs</strong> are found within <a href="../mgs/dialog_block">dialog blocks</a> and related <a href="../mgs/blocks#combination-blocks">combination blocks</a>.</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">dialog</span><span style="color:#9CDCFE;"> dialogName</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4EC9B0;">SELF</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Dialogs go here!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#6A9955;">//or</span></span>
<span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">dialog</span><span style="color:#CE9178;"> dialogName</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#4EC9B0;">SELF</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Dialogs go here!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// or</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">dialog</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#4EC9B0;">SELF</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Dialogs go here!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br></div></div><h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h2><ol><li><a href="#dialog-identifier">Dialog identifier</a>: exactly 1</li><li><a href="#dialog-parameter">Dialog parameter</a>: 0+</li><li><a href="#dialog-message">Dialog message</a>: 1+</li><li><a href="#dialog-option">Dialog option</a>: 0-4x</li></ol><p>Multiple dialogs can occur back-to-back inside their parent block.</p><h2 id="dialog-identifier" tabindex="-1"><a class="header-anchor" href="#dialog-identifier" aria-hidden="true">#</a> Dialog Identifier</h2><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">dialog</span><span style="color:#9CDCFE;"> sampleDialog</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4EC9B0;">SELF</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alignment</span><span style="color:#569CD6;"> BOTTOM_RIGHT</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">emote</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;Messages...&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;So many messages!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;Don&#39;t you think?&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Not really.&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#9CDCFE;">script </span><span style="color:#DCDCAA;">sampleScript1</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Definitely.&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#9CDCFE;">script </span><span style="color:#DCDCAA;">sampleScript2</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br></div></div><p>The <strong>dialog identifier</strong> identifies the &quot;speaker&quot; of the <a href="#dialog-messages">dialog messages</a> that immediately follow. For most cases, this will be a specific entity (with option #1 or #2 below), though you could also build up a dialog from its component pieces instead (with option #3).</p><p>The three options:</p><ol><li><code>$bareword</code><ul><li>The <a href="../mgs/variables_mgs#bareword">bareword</a> identifier refers to a dialog label within a <a href="../mgs/dialog_settings_block">dialog settings block</a>. <ul><li>If no dialog label is found, this is assumed to be an entity name instead. This usage also provides the entity name as an <code>entity</code> <a href="../mgs/dialogs_mgs#dialog-parameters">parameter</a> for the dialog.</li><li>Entity names with spaces or other special characters are not eligible for this usage.</li></ul></li><li>REMINDER: A <a href="../mgs/variables_mgs#quoted-string">quoted string</a> is NOT allowed here! This string <em>must</em> be a <a href="../mgs/variables_mgs#bareword">bareword</a>!</li></ul></li><li><code>entity $string</code><ul><li><a href="../mgs/variables_mgs#string">String</a>: an entity&#39;s given name (i.e. the entity&#39;s name within the Tiled map).</li><li>This usage also provides the entity name as an <code>entity</code> <a href="#dialog-parameters">parameter</a> for the dialog.</li><li>The entities <a href="../relative_references#player"><code>%PLAYER%</code></a> and <a href="../relative_references#self"><code>%SELF%</code></a> must use this pattern (and not the bareword pattern) because they contain special characters. As this can be cumbersome, it&#39;s probably best to set up a <a href="../mgs/dialog_settings_target_block">dialog settings</a> label for them so you can use a bareword as an identifier instead.</li></ul></li><li><code>name $string</code><ul><li><a href="../mgs/variables_mgs#string">String</a>: the dialog&#39;s display name.</li><li>This usage also provides a <code>name</code> <a href="#dialog-parameters">parameter</a> for the dialog.</li><li>If you don&#39;t want a name displayed, use an empty quoted string (<code>name &quot;&quot;</code>).</li></ul></li></ol><h2 id="dialog-parameters" tabindex="-1"><a class="header-anchor" href="#dialog-parameters" aria-hidden="true">#</a> Dialog Parameters</h2><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">dialog</span><span style="color:#9CDCFE;"> sampleDialog</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4EC9B0;">SELF</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alignment</span><span style="color:#569CD6;"> BOTTOM_RIGHT</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">emote</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;Messages...&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;So many messages!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;Don&#39;t you think?&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Not really.&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#9CDCFE;">script </span><span style="color:#DCDCAA;">sampleScript1</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Definitely.&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#9CDCFE;">script </span><span style="color:#DCDCAA;">sampleScript2</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br></div></div><p>Dialog parameters are a <a href="../dialogs#properties">dialog property</a> and value pair. Multiple dialog parameters can occur back-to-back in a single (show) dialog block or a <a href="../mgs/dialog_settings_target_block">dialog settings target block</a>.</p><ul><li><code>entity $string</code><ul><li><a href="../mgs/variables_mgs#string">String</a>: the &quot;given name&quot; of the entity (i.e. the entity&#39;s name on the Tiled map). (Wrapping this name in <code>%</code>s is unnecessary and will in fact confuse the <a href="../encoder">encoder</a>.) <ul><li>Can be <a href="../relative_references#player"><code>%PLAYER%</code></a> or <a href="../relative_references#self"><code>%SELF%</code></a>.</li></ul></li><li>A dialog can inherit a <code>name</code> and a <code>portrait</code> if given an <code>entity</code> parameter.</li><li>The inherited <code>name</code> is a relative reference; the dialog display name will be whatever that entity&#39;s name is at that moment.</li></ul></li><li><code>name $string</code><ul><li><a href="../mgs/variables_mgs#string">String</a>: a fixed string of no more than 12 ASCII characters. For an <a href="../variables#printing-current-values">entity&#39;s current name</a>) instead, wrap a specific entity&#39;s given name in <code>%</code>s. <ul><li>Can be <a href="../relative_references#player"><code>%PLAYER%</code></a> or <a href="../relative_references#self"><code>%SELF%</code></a>.</li></ul></li><li>Overrides names inherited via the <code>entity</code> parameter.</li><li>If this string is empty (<code>name &quot;&quot;</code>), the dialog box label will be absent entirely. (Sometimes you want this!)</li></ul></li><li><code>portrait $string</code><ul><li><a href="../mgs/variables_mgs#string">String</a>: the name of a MGE portrait.</li><li>Overrides portraits inherited via the <code>entity</code> parameter.</li></ul></li><li><code>alignment $string</code><ul><li><a href="../mgs/variables_mgs#string">String</a>: one of the following: <ul><li><code>TR</code> (or <code>TOP_RIGHT</code>)</li><li><code>BR</code> (or <code>BOTTOM_RIGHT</code>)</li><li><code>TL</code> (or <code>TOP_LEFT</code>)</li><li><code>BL</code> (or <code>BOTTOM_LEFT</code>) (default)</li></ul></li></ul></li><li><code>border_tileset $string</code><ul><li><a href="../mgs/variables_mgs#string">String</a>: the name of a MGE tileset.</li><li>The default tileset is used if none is provided.</li></ul></li><li><code>emote $number</code><ul><li><a href="../variables_mgs#number">Number</a>: the id of the &quot;emote&quot; in that entity&#39;s entry in <code>portraits.json</code>.</li><li>The default emote (<code>0</code>) will display if not specified.</li></ul></li><li><code>wrap messages (to) $number</code><ul><li><a href="../mgs/variables_mgs#number">Number</a>: the number of chars to auto wrap the contents of dialog messages.</li><li>42 is default.</li></ul></li></ul><h2 id="dialog-messages" tabindex="-1"><a class="header-anchor" href="#dialog-messages" aria-hidden="true">#</a> Dialog Messages</h2><p>A dialog message is any <a href="variables_mgs#quoted-string">quoted string</a>.</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">dialog</span><span style="color:#9CDCFE;"> sampleDialog</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4EC9B0;">SELF</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alignment</span><span style="color:#569CD6;"> BOTTOM_RIGHT</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">emote</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;Messages...&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;So many messages!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;Don&#39;t you think?&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Not really.&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#9CDCFE;">script </span><span style="color:#DCDCAA;">sampleScript1</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Definitely.&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#9CDCFE;">script </span><span style="color:#DCDCAA;">sampleScript2</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div></div><ul><li>Each message is a new &quot;text screen&quot; in the game.</li><li>Only ASCII characters will be printed.</li><li>Insert an entity&#39;s <a href="../variables#printing-current-values">current name</a>) by wrapping their given name in <code>%</code>s. <ul><li><a href="../relative_references#player"><code>%PLAYER%</code></a> and <a href="../relative_references#self"><code>%SELF%</code></a> are also allowed, which target the player entity or the entity that is running the script, respectively.</li><li>Words wrapped in <code>%</code>s will count as 12 chars when the dialog message is auto-wrapped.</li></ul></li><li>Insert the current value of a MGE variable by wrapping its name in <code>$</code>s. <ul><li>Words wrapped in <code>$</code>s will count as 5 chars when the dialog message is auto-wrapped.</li></ul></li><li>Some characters must be escaped in the message body, such as double quote (<code>\\&quot;</code>) (for messages wrapped in double quotes). <ul><li><code>\\t</code> (tabs) are auto-converted to four spaces.</li><li><code>\\n</code> (new lines) are honored, but since text is wrapped automatically, don&#39;t worry about hard wrapping your messages unless you want to put line breaks in arbitrary places.</li><li><code>%</code> and <code>$</code> are printable characters unless <a href="../variables#printing-current-values">used in pairs</a> within a single line, in which case the only way to print them is to escape them (e.g. <code>\\%</code>).</li></ul></li><li>Word processor &quot;smart&quot; characters such as ellipses (…), em dashes (—), and smart quotes (“”) are auto converted to ASCII equivalents (<code>...</code>) (<code>--</code>) (<code>&quot;</code>).</li></ul><h2 id="dialog-options-mgs" tabindex="-1"><a class="header-anchor" href="#dialog-options-mgs" aria-hidden="true">#</a> Dialog Options (MGS)</h2><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">dialog</span><span style="color:#9CDCFE;"> sampleDialog</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4EC9B0;">SELF</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alignment</span><span style="color:#569CD6;"> BOTTOM_RIGHT</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">emote</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">3</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;Messages...&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;So many messages!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&quot;Don&#39;t you think?&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Not really.&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#9CDCFE;">script </span><span style="color:#DCDCAA;">sampleScript1</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Definitely.&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto </span><span style="color:#9CDCFE;">script </span><span style="color:#DCDCAA;">sampleScript2</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div></div><p>Syntax:</p><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">&gt; $label:quotedString : (goto) (script) $script:string</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div><ul><li>You may have up to 4 dialog options per dialog.</li><li>As each of these &quot;branches&quot; results in a script jump, no dialog messages afterward will be seen. Therefore, dialog options must come last within the dialog.</li><li>The <strong>label</strong> is the text that will be shown to the player. As the cursor (approximated with <code>&gt;</code>) takes up some room, assume you will only have 39 characters instead of the usual 42. <ul><li>The label behaves like <a href="#dialog-messages">dialog messages</a> in terms of inserting variables (with <code>$</code> or <code>%</code>), escaped characters, etc.</li><li><strong>Must</strong> be wrapped in <a href="../mgs/variables_mgs#quoted-string">quotes</a>.</li></ul></li><li>In the MGE, dialog options are displayed underneath the final dialog message. Therefore, final dialog message (before any options) should consist of a single line of no more than 42 characters.</li><li>The words <code>goto</code> and <code>script</code> are optional. Any <a href="../mgs/variables_mgs#string">string</a> given after the <code>:</code> (other than <code>goto</code> and <code>script</code>) is assumed to be the script name.</li></ul>`,24),t=[o];function i(r,p){return a(),e("div",null,t)}const d=s(n,[["render",i],["__file","dialogs_mgs.html.vue"]]);export{d as default};