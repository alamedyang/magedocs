import{_ as e,r as o,o as l,c as t,b as n,d as s,e as c,a as i}from"./app-MrF-XoWp.js";const p="/magedocs/assets/script-alice-k9eXNGhF.png",r={},D=i(`<h1 id="scripts-json" tabindex="-1"><a class="header-anchor" href="#scripts-json" aria-hidden="true">#</a> Scripts (JSON)</h1><p>#updateme</p><div class="custom-container warning"><p class="custom-container-title">THIS PAGE IS DEPRECATED</p><p><code>goto index</code> and other features of <a href="../mgs/mgs_natlang">MGS Natlang</a> make this kind of script management unnecessary; this page belongs in a museum!</p><p>Still, in case you need to work on a JSON script file:</p></div><p>Remember that strings, including property names, must always be enclosed in double quotes. Numbers and booleans (<code>true</code>/<code>false</code>) must not have quotes. Multiple items in a single object literal or array must be separated by commas.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;show_dialog-alice-start&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;CHECK_SAVE_FLAG&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;save_flag&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;alice-backstory&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;expected_bool&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;success_script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;show_dialog-alice-summary&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SHOW_DIALOG&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;dialog&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;dialog-alice-start&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SET_SAVE_FLAG&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;save_flag&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;alice-backstory&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;bool_value&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;show_dialog-alice-summary&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SHOW_DIALOG&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;dialog&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;dialog-alice-summary&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SET_ENTITY_INTERACT_SCRIPT&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;entity&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;%SELF%&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;show_dialog-alice-start&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This demonstrates the simple branching that scripts use to produce different entity behaviors.</p><p>In this case, we want Alice to give her backstory the first time you speak to her, and a summary of her backstory thereafter.</p><p>When we interact with Alice, her <a href="../scripts/on_interact"><code>on_interact</code></a> script is run: <code>show_dialog-alice-start</code>, which is found on line 2. During the course of this script, we set a save flag (<code>alice-backstory</code>) to <code>true</code> (line 14). After the last action is run, the script ends.</p><p>The next interaction will run the last <code>on_interact</code> script used, which happens to be her start script again. But this time, since <code>alice-backstory</code> is <code>true</code>, the script immediately branches, and instead the game runs the script called <code>show_dialog-alice-summary</code>, found on line 19.</p><p>After showing the alternate dialog, the script sets Alice&#39;s <code>on_interact</code> script to her start script (line 25). Note that if we didn&#39;t do this, interacting with her after hearing her backstory summary would result in <code>show_dialog-alice-summary</code> being run again, which in this case is actually what we want. But if there were more than one branch in Alice&#39;s logic, failing to reset the <code>on_interact</code> would result in the other branches being completely ignored. Therefore, all branches should end by setting the entity&#39;s <code>on_interact</code> script to their start script.</p><p><img src="`+p+'" alt="flowchart of Alice&#39;s behavior"></p>',11),d={href:"https://app.diagrams.net/",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,[s("For subsequent examples, I'll be using this flow-chart-esque format to demonstrate script behaviors. For these charts, each column represents a different script (named at the top of each column by a rectangle), and the script under the stick figure indicates the entity's default "),n("code",null,"on_interact"),s(" script.")],-1);function y(h,m){const a=o("ExternalLinkIcon");return l(),t("div",null,[D,n("p",null,[s("For scripts with very complex branching, it can be beneficial to plot them out (and color code them!). This chart was done with "),n("a",d,[s("diagrams.net"),c(a)]),s(", but other graphics software (or a pen and paper) might be used instead.")]),u])}const b=e(r,[["render",y],["__file","scripts_json.html.vue"]]);export{b as default};
