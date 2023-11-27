import{_ as s,o as n,c as a,a as e}from"./app-oGoBbKgC.js";const o={},l=e(`<h1 id="entity-types-json" tabindex="-1"><a class="header-anchor" href="#entity-types-json" aria-hidden="true">#</a> <code>entity_types.json</code></h1><p>Found in <a href="../getting_started/scenario_source_files"><code>scenario_source_files</code></a>.</p><p>This JSON file defines each <code>entity_type</code> name for each <a href="../entities/character_entity">character entity</a>, plus:</p><ul><li><code>tileset</code>: their tileset JSON file path</li><li><code>portrait</code>: the name of their portrait image, if not the same as their <code>entity_type</code> name (optional)</li><li><code>animations</code>: their <a href="../encoder/entity_management_system">animation assignments</a></li></ul><p>As an example (keeping in mind that the animation arrays have been closed so the overall structure is more clear):</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;mage&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;tileset&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;entity-mage.json&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;animations&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;idle&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;walk&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;bender_sadbutt&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;tileset&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;entity-bender_sadbutt.json&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;portrait&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;bender&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;animations&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;idle&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;walk&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;bite&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="animations" tabindex="-1"><a class="header-anchor" href="#animations" aria-hidden="true">#</a> Animations</h3><p>This part is much easier to do using the <a href="../encoder/web_encoder">web encoder</a>, but if you want to make changes to an <a href="../entities">entity</a>&#39;s <a href="../tilesets/animations">animations</a> by hand, the structure is as follows:</p><div class="language-json" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#CE9178;">&quot;idle&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;tileid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">18</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;flip_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;tileid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">16</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;flip_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;tileid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;flip_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;tileid&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">16</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;flip_x&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre></div><p>When animations are created within Tiled, they are assigned to a tile on the tileset. So for the above definitions, <code>tileid</code> refers to which tile the animation has been assigned to.</p><p>To find the <code>tileid</code>, count left-to-right and top-to-down, but remember to count starting from 0 instead of 1. Alternatively, you can select the correct tile in Tiled and see the tile ID that way.</p><p><code>flip_x</code> will flip the sprites horizontally (and <code>flip_y</code> will flip vertically), but will otherwise make no changes to the animation on that tile.</p><p>The order of the object literals in the animation is fixed:</p><ul><li>North</li><li>East</li><li>South</li><li>West</li></ul><p>Each character entity should at least have an idle, walk, and action animation. (See: <a href="../tilesets/animations">Animations</a>)</p>`,15),t=[l];function p(c,i){return n(),a("div",null,t)}const r=s(o,[["render",p],["__file","entity_types.json.html.vue"]]);export{r as default};
