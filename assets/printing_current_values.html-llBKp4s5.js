import{_ as e,o as a,c as s,a as n}from"./app-7-tBH-Mq.js";const t={},r=n(`<h1 id="printing-current-values" tabindex="-1"><a class="header-anchor" href="#printing-current-values" aria-hidden="true">#</a> Printing Current Values</h1><p>The values of <a href="../scripts/integer_variables">integer variables</a> and the <strong>current names</strong> of any <a href="../entities">entity</a> can be inserted into a dialog message, dialog label, or similar places.</p><h2 id="current-variable-value" tabindex="-1"><a class="header-anchor" href="#current-variable-value" aria-hidden="true">#</a> Current Variable Value</h2><p>Enclose the name of the variable in dollar signs: <code>&quot;I have $appleCount$ apples for sale today!&quot;</code></p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">exampleScript</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">mutate</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">appleCount</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">10</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">serial dialog</span><span style="color:#D4D4D4;"> { </span><span style="color:#CE9178;">&quot;I have </span><span style="color:#569CD6;">$appleCount$</span><span style="color:#CE9178;"> apples for sale today!&quot;</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>becomes</p><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">I have 10 apples for sale today!</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&gt;_</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div><p>For text wrapping, it&#39;s recommended that these names be counted as taking up 5 characters. (<a href="../mgs/mgs_natlang">MGS Natlang</a> will wrap text automatically.)</p><h2 id="current-entity-name" tabindex="-1"><a class="header-anchor" href="#current-entity-name" aria-hidden="true">#</a> Current Entity Name</h2><p>Wrap an entity&#39;s <strong>given name</strong> (the name assigned to it in Tiled) in percent signs (<code>%</code>) to insert the entity&#39;s name as it currently exists in RAM: <code>&quot;Hi, there! My name is %Bob%!&quot;</code></p><p>Unlike with <a href="../entities/relative_entity_references">relative entity references</a> (like <a href="../entities/SELF"><code>%SELF%</code></a> and <a href="../entities/PLAYER"><code>%PLAYER%</code></a>), this usage will not work when trying to target an entity with an action. Instead, use the entity&#39;s given name.</p><p>For text wrapping, it&#39;s recommended that these names be counted as taking up 12 characters. (<a href="../mgs/mgs_natlang">MGS Natlang</a> will wrap text automatically.)</p>`,12),l=[r];function o(i,p){return a(),s("div",null,l)}const d=e(t,[["render",o],["__file","printing_current_values.html.vue"]]);export{d as default};