import{_ as s,o as n,c as a,a as o}from"./app-oGoBbKgC.js";const l={},p=o(`<h1 id="check-entity-path" tabindex="-1"><a class="header-anchor" href="#check-entity-path" aria-hidden="true">#</a> CHECK_ENTITY_PATH</h1><p>Checks the <code>path</code> name (<a href="../maps/vector_objects">geometry</a>) of an <a href="../entities">entity</a>.</p><h2 id="example-json" tabindex="-1"><a class="header-anchor" href="#example-json" aria-hidden="true">#</a> Example JSON</h2><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;CHECK_ENTITY_PATH&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;entity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;expected_bool&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;geometry&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;success_script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;successScript&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">},</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;CHECK_ENTITY_PATH&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;entity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;expected_bool&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;geometry&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;jump_index&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">12</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="mgs-natlang" tabindex="-1"><a class="header-anchor" href="#mgs-natlang" aria-hidden="true">#</a> MGS Natlang</h2><p>The <a href="../actions/conditional_gotos">condition</a> portion of this action can be used inside an <a href="../mgs/advanced_syntax/if_and_else">if</a> condition statement, e.g.</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> is </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;">) {}</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">script</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> is </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">then</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto</span><span style="color:#DCDCAA;"> successScript</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> is </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">then</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto</span><span style="color:#9CDCFE;"> index</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">12</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> is </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">then</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto</span><span style="color:#9CDCFE;"> label</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">labelName</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> is not </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">then</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto</span><span style="color:#DCDCAA;"> successScript</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> is not </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">then</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto</span><span style="color:#9CDCFE;"> index</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">12</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;Entity Name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> is not </span><span style="color:#CE9178;">&quot;vector object name&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">then</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">goto</span><span style="color:#9CDCFE;"> label</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">labelName</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dictionary-entries" tabindex="-1"><a class="header-anchor" href="#dictionary-entries" aria-hidden="true">#</a> Dictionary entries</h3><div class="language-text" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">if entity $entity:string path is $geometry:string</span></span>
<span class="line"><span style="color:#D4D4D4;">    then goto (script) $success_script:string (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: expected_bool = true</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">if entity $entity:string path is $geometry:string</span></span>
<span class="line"><span style="color:#D4D4D4;">    then goto index $jump_index:number (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: expected_bool = true</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">if entity $entity:string path is $geometry:string</span></span>
<span class="line"><span style="color:#D4D4D4;">    then goto label $jump_index:bareword (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: expected_bool = true</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">if entity $entity:string path is not $geometry:string</span></span>
<span class="line"><span style="color:#D4D4D4;">    then goto (script) $success_script:string (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: expected_bool = false</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">if entity $entity:string path is not $geometry:string</span></span>
<span class="line"><span style="color:#D4D4D4;">    then goto index $jump_index:number (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: expected_bool = false</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">if entity $entity:string path is not $geometry:string</span></span>
<span class="line"><span style="color:#D4D4D4;">    then goto label $jump_index:bareword (;)</span></span>
<span class="line"><span style="color:#D4D4D4;">	// built-in value: expected_bool = false</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,11),e=[p];function t(D,c){return n(),a("div",null,e)}const y=s(l,[["render",t],["__file","CHECK_ENTITY_PATH.html.vue"]]);export{y as default};
