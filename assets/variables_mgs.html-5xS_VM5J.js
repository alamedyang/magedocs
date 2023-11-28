import{_ as e,o as a,c as t,a as o}from"./app-oyGKrQVR.js";const n={},s=o(`<h1 id="variables-mgs" tabindex="-1"><a class="header-anchor" href="#variables-mgs" aria-hidden="true">#</a> Variables (MGS)</h1><p>In this documentation&#39;s example syntax for <a href="../mgs/mgs_natlang">MGS Natlang</a>, variables are marked with <code>$</code>. This documentation uses two formats to indicate a variable, each with a <code>$</code> at the front:</p><ul><li><code>$TYPE</code><ul><li>e.g. <code>$number</code> (which means any valid <a href="#number">number</a>)</li></ul></li><li><code>$LABEL:TYPE</code><ul><li>e.g. <code>$jump_index:number</code> (which means any valid <a href="#number">number</a>, and also the JSON property name for that value is <code>jump_index</code>)</li></ul></li></ul><p>You can ignore the label when writing <a href="mgs_natlang">MGS Natlang</a> most of the time, as the &quot;natural language&quot; context of the rest of the phrase will provide more information about the variable&#39;s purpose than the label itself might.</p><p>In Natlang at least, variable <strong>types</strong> and <strong>values</strong> are far more important:</p><p>For the example syntax <code>entity $string</code>:</p><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">entity Alice       // variable value = &quot;Alice&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">entity Bob         // variable value = &quot;Bob&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">entity Charlie     // variable value = &quot;Charlie&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">entity &quot;Tom Honks&quot; // variable value = &quot;Tom Honks&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">                   // for all, variable type = string</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div><p>A variable&#39;s <strong>value</strong> is what populates the meat of the JSON output, but its <strong>type</strong> affects how each word is validated against patterns in the MGS Natlang syntax tree, and in most cases will also affect how the word is allowed to be formatted in the natlang.</p><h2 id="variable-decay" tabindex="-1"><a class="header-anchor" href="#variable-decay" aria-hidden="true">#</a> Variable Decay</h2><p>A special property of variable types is <strong>decay</strong>, which means a variable of a specific type may satisfy a variable&#39;s requirement for a different type.</p><p>Example #1: an action that wants a duration (syntax <code>wait $duration</code>)</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">testScript1</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">150ms</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// &quot;duration&quot; = ok</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">150</span><span style="color:#D4D4D4;">;   </span><span style="color:#6A9955;">// &quot;number&quot; is fine, too</span></span>
<span class="line"><span style="color:#D4D4D4;">              </span><span style="color:#6A9955;">//   (because it decays to &quot;duration&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>Example #2: an action that wants a number (syntax: <code>load slot $number</code>)</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">testScript2</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">load</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">slot</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;    </span><span style="color:#6A9955;">// &quot;number&quot; = ok</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">load</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">slot</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1ms</span><span style="color:#D4D4D4;">;  </span><span style="color:#6A9955;">// &quot;duration&quot; won&#39;t work!</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>In most cases, human intuition is enough to predict whether a variable can decay into another type. (And most things can decay into a <a href="#bareword">bareword</a>, e.g. <code>true</code> and <code>1000ms</code>.)</p><div class="custom-container tip"><p class="custom-container-title">Most importantly:</p><p>A variable wanting to be a <a href="#string">string</a> will be satisfied by either a <a href="#bareword">bareword</a> string or a <a href="#quoted-string">quoted string</a>, but a variable wanting to be a bareword specifically cannot be satisfied by a quoted string — and vice versa.</p></div><h2 id="types-and-examples" tabindex="-1"><a class="header-anchor" href="#types-and-examples" aria-hidden="true">#</a> Types and Examples</h2><p>Note that all numbers must be whole numbers and, unless indicated otherwise in the action dictionary entry, must be positive.</p><p>(It&#39;s all JavaScript under the hood. Be kind!)</p><h3 id="duration" tabindex="-1"><a class="header-anchor" href="#duration" aria-hidden="true">#</a> Duration</h3><p>Number + <code>ms</code> or <code>s</code></p><ul><li>e.g. <code>1000ms</code> or <code>1s</code></li><li>Seconds are translated into milliseconds automatically.</li></ul><h3 id="distance" tabindex="-1"><a class="header-anchor" href="#distance" aria-hidden="true">#</a> Distance</h3><p>Number + <code>px</code> or <code>pix</code></p><ul><li>e.g. <code>32px</code> or <code>128pix</code></li></ul><h3 id="quantity" tabindex="-1"><a class="header-anchor" href="#quantity" aria-hidden="true">#</a> Quantity</h3><p>Number + <code>x</code></p><ul><li>e.g. <code>1x</code> or <code>10x</code></li><li>The <a href="#bareword">barewords</a> <code>once</code>, <code>twice</code>, and <code>thrice</code> also count.</li><li>Note that the <code>x</code> comes <em>after</em> the number, not before!</li></ul><h3 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h3><p>Number (positive or negative)</p><ul><li>e.g. <code>-1</code> or <code>100</code></li><li>While negative numbers will all validate to the <code>number</code> type, not all actions permit negative numbers.</li><li>Variables that can decay to number (duration, distance, quantity) cannot be negative.</li></ul><h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> Color</h3><p>A CSS-style hex color.</p><ul><li>e.g. <code>#FFF</code> or <code>#00EF39</code></li><li>Some bare color names will also work, e.g. <code>black</code> or <code>white</code>.</li></ul><h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> Boolean</h3><p>A binary option.</p><ul><li>True: <code>true</code>, <code>yes</code>, <code>on</code>, <code>open</code></li><li>False: <code>false</code>, <code>no</code>, <code>off</code>, <code>closed</code>, <code>close</code></li></ul><p>Some actions will prefer specific pairs of booleans when being translated from JSON, but when translating the other way, any of the above words will work. E.g.</p><ul><li><code>turn player control open;</code></li><li><code>turn player control on;</code></li><li><code>turn player control true;</code></li></ul><p>(WARNING: This may become stricter someday, so best use the boolean that feels most coherent for the phrase!)</p><h3 id="operator" tabindex="-1"><a class="header-anchor" href="#operator" aria-hidden="true">#</a> Operator</h3><p>NOTE: Tokens are given this type by the lexer if they are straight-up punctuation, but when an action calls for one, it usually wants you to use something from one of the following <a href="../enums">enums</a>:</p><h4 id="comparator" tabindex="-1"><a class="header-anchor" href="#comparator" aria-hidden="true">#</a> Comparator</h4><p>See: <a href="../enums#comparators">Enums#Comparators</a></p><table><thead><tr><th>symbol</th><th>meaning</th></tr></thead><tbody><tr><td><code>&lt;</code></td><td>less than</td></tr><tr><td><code>&lt;=</code></td><td>less than or equal to</td></tr><tr><td><code>==</code></td><td>equal to</td></tr><tr><td><code>&gt;=</code></td><td>greater than or equal to</td></tr><tr><td><code>&gt;</code></td><td>greater than</td></tr></tbody></table><p>Not equals (<code>!=</code>) is coming but not available yet. Instead, invert the <code>is</code> to <code>is not</code> in the Natlang phrase. (NOTE: the <code>is</code>/<code>is not</code> is likely being phased out at some point as a part of a <a href="mgs_natlang#revisions">Natlang revision</a>)</p><h4 id="operation" tabindex="-1"><a class="header-anchor" href="#operation" aria-hidden="true">#</a> Operation</h4><p>See: <a href="../enums#operations">Enums#Operations</a></p><table><thead><tr><th>symbol</th><th>op</th><th>meaning</th></tr></thead><tbody><tr><td><code>=</code></td><td><code>SET</code></td><td>set the variable to that value</td></tr><tr><td><code>+</code></td><td><code>ADD</code></td><td>add that value to the variable</td></tr><tr><td><code>-</code></td><td><code>SUB</code></td><td>subtract that value from the variable</td></tr><tr><td><code>*</code></td><td><code>MUL</code></td><td>multiply that value with the variable</td></tr><tr><td><code>/</code></td><td><code>DIV</code></td><td>divide that variable by the value (integer division; rounds down to whole number)</td></tr><tr><td><code>%</code></td><td><code>MOD</code></td><td>apply that modulo to the variable (≈ division remainder)</td></tr><tr><td><code>?</code></td><td><code>RNG</code></td><td>set that variable to a random number between 0 and 1 + the given value</td></tr></tbody></table><p>Symbols used in the first column will become the item in the second column when turned into JSON.</p><p>Natlang actions that call for an operator will also accept the corresponding bare words <code>SET</code>, <code>ADD</code> etc. (But maybe not indefinitely….)</p><h3 id="bareword" tabindex="-1"><a class="header-anchor" href="#bareword" aria-hidden="true">#</a> Bareword</h3><p>These are limited to alphanumeric characters, plus a handful of punctuation:</p><ul><li>hyphen: <code>-</code></li><li>underscore: <code>_</code></li><li>period: <code>.</code></li><li>dollar sign: <code>$</code></li><li>pound: <code>#</code></li><li>exclamation point: <code>!</code></li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Underscores don&#39;t count as a word boundary most places, but hyphens do. Therefore, without a language server that can find matching script/dialog/etc. references, finding/renaming/managing scripts/dialogs/etc. can be problematic when they contain hyphens and when they are not wrapped in quotes.</p></div><p>Other info:</p><ul><li>Barewords satisfy the requirement for anything that calls for a <a href="#string">string</a>.</li><li>Barewords cannot start with hyphen (<code>-</code>).</li><li>If a bareword starts with a dollar sign (<code>$</code>), it will be interpreted as a constant by the <a href="../mgs/advanced_syntax#const">const!()</a> macro.</li><li>Barewords will count as <a href="#quoted-string">quoted strings</a> if wrapped in quotes, even if the bareword criteria is otherwise met.</li></ul><h3 id="quoted-string" tabindex="-1"><a class="header-anchor" href="#quoted-string" aria-hidden="true">#</a> Quoted String</h3><p>These can be just about anything as long as it&#39;s wrapped in a matching pair of double quotes (<code>&quot;</code>) or single quotes (<code>&#39;</code>).</p><p>Quotes and certain other characters must be escaped (<code>\\&quot;</code>) inside a quoted string.</p><p>Quoted strings satisfy the requirement for anything that calls for a <a href="#string">string</a>.</p><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3><p>Any <a href="#quoted-string">quoted string</a> or <a href="#bareword">bareword</a>.</p><h2 id="enums" tabindex="-1"><a class="header-anchor" href="#enums" aria-hidden="true">#</a> Enums</h2><p>Some action variables will be of a generic <a href="../mgs/mgs_natlang">MGS Natlang</a> type (such as <a href="#string">string</a>) but the action itself will only be satisfied by a value from a limited set of words. In such cases, invalid values are reported by the <a href="../encoder">encoder</a>.</p><p>See: <a href="../enums">Enums</a></p>`,66),r=[s];function i(d,l){return a(),t("div",null,r)}const p=e(n,[["render",i],["__file","variables_mgs.html.vue"]]);export{p as default};
