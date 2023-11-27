import{_ as s,o as e,c as n,a}from"./app-oGoBbKgC.js";const o={},l=a(`<h1 id="if-and-else" tabindex="-1"><a class="header-anchor" href="#if-and-else" aria-hidden="true">#</a> If and Else</h1><p><a href="../../mgs/advanced_mgs_natlang_syntax">Advanced MGS Natlang Syntax</a> for <a href="../../mgs/scripts_mgs">MGS Natlang scripts</a>.</p><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">if ( CONDITION ) { BEHAVIOR/BODY }</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div><ul><li>The <code>if</code> <strong>condition</strong> is wrapped with parentheses, and the <code>if</code> <strong>body</strong> is wrapped with curly braces.</li><li>The <code>if</code> body may contain additional <code>if</code>s.</li><li>Normal actions can occur before and after the <code>if</code>.</li><li>Actions that occur after the <code>if</code>/<code>else</code> chain will happen regardless of whether the <code>if</code> condition is met.</li></ul><p><code>if</code> statements can be followed by <code>else if</code> and <code>else</code> in the standard manner, wherein the script logic will take one of many mutually-exclusive paths.</p><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">if ( CONDITION ) { BEHAVIOR/BODY }</span></span>
<span class="line"><span style="color:#D4D4D4;">else if ( CONDITION ) { BEHAVIOR/BODY }</span></span>
<span class="line"><span style="color:#D4D4D4;">else { BEHAVIOR/BODY }</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">// or, more commonly:</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">if ( CONDITION ) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  BODY</span></span>
<span class="line"><span style="color:#D4D4D4;">} else if ( CONDITION ) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  BODY</span></span>
<span class="line"><span style="color:#D4D4D4;">} else {</span></span>
<span class="line"><span style="color:#D4D4D4;">  BODY</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div><ul><li>If an <code>if</code> or <code>else if</code> condition is met, no other conditions in that chain is checked.</li><li><code>else</code> defines behavior that happens if none of the above <code>if</code> or <code>else if</code> conditions are met.</li><li>Any number of <code>else if</code>s is allowed, but only one <code>else</code> is allowed.</li><li>Shared behavior will resume after an <code>else</code> body or after the last <code>else if</code> body.</li></ul><p>Remember: An <code>if</code> and <code>else if</code> is <em>not</em> equivalent to two <code>if</code>s!</p><h2 id="compound-conditions" tabindex="-1"><a class="header-anchor" href="#compound-conditions" aria-hidden="true">#</a> Compound conditions</h2><p>Multiple conditions can be checked at the same time with <code>||</code> (boolean OR), which indicates that <em>any</em> of the given conditions can be true for the branching behavior to occur:</p><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">  if ( condition-A || condition-B ) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    behavior-AB</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div><p>The equivalent boolean AND (<code>&amp;&amp;</code>) is not implemented, however. If you need an AND, you will need to invert the conditions and use OR:</p><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">// NOT ALLOWED:</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">if ( you have money &amp;&amp; the game is for sale ) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  buy the game</span></span>
<span class="line"><span style="color:#D4D4D4;">} else {</span></span>
<span class="line"><span style="color:#D4D4D4;">  don&#39;t buy the game</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">// INSTEAD:</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">if ( you don&#39;t have money || the game is not for sale ) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  don&#39;t buy the game</span></span>
<span class="line"><span style="color:#D4D4D4;">} else {</span></span>
<span class="line"><span style="color:#D4D4D4;">  buy the game</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,13),c=[l];function i(p,t){return e(),n("div",null,c)}const r=s(o,[["render",i],["__file","if_and_else.html.vue"]]);export{r as default};
