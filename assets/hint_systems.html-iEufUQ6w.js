import{_ as r,r as a,o as l,c as h,b as t,e,d as s,w as c,a as n}from"./app-oGoBbKgC.js";const p={},d=t("h1",{id:"hint-systems",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#hint-systems","aria-hidden":"true"},"#"),e(" Hint Systems")],-1),u={class:"custom-container warning"},g=t("p",{class:"custom-container-title"},"OUT OF DATE",-1),y=n('<p>For the BMG2020, we implemented a hints system: whenever a player engaged with an <a href="../entities">entity</a> involving a quest, a hint was triggered so the entity designated to be the &quot;hint man&quot; could provide a hint for the player.</p><p>There were two methods we used to do this, and both are viable. Depending on how many hints (or equivalent behavior) you&#39;ll need to manage, you might use either method.</p><h2 id="save-flag-hints" tabindex="-1"><a class="header-anchor" href="#save-flag-hints" aria-hidden="true">#</a> Save Flag Hints</h2><p>With this method, there is a separate <a href="../scripts/save_flags">save flag</a> for each hint.</p><p><strong>Triggering a hint</strong>: If the player talks to a quest entity and triggers &quot;backstory&quot; dialog or otherwise engages the entity in a way that indicates they are involved in a quest, set all other hint flags to <code>false</code> and set the hint flag for the quest line to <code>true</code>.</p><p>You should have a separate script for setting all hint flags in the game to <code>false</code>. Use <a href="../actions/COPY_SCRIPT">COPY_SCRIPT</a> to &quot;invoke&quot; that script right before setting the target hint to <code>true</code>.</p><p><strong>Clearing a hint</strong>: Once the player has completed a quest line, set the hint flag for the quest line to <code>false</code>.</p><p>The advantage of this technique is that it&#39;s effortless to reset only the target hint. Say, for instance, that the current hint is the &quot;goose&quot; hint but the player triggered the completion of the Bender quest sort of by accident. Bender&#39;s wrapup script might set his own hint flag to <code>false</code>, but this doesn&#39;t interfere with the current hint flag (the goose hint) and so the hint for the goose quest remains <code>true</code>.</p><p>This technique will likely require maintaining a list of hint flags and being very careful about setting them, since it&#39;s possible to have multiple hint flags set to <code>true</code> at the same time. And if your &quot;set all hint flags to false&quot; script is incomplete, hints might be left on by accident.</p><p>For games with a large number of hints this method can be difficult to debug. Another disadvantage of this technique is its susceptibility to typos, as every hint flag is a string.</p><p>For BMG2020 we moved away from this technique because we were setting hint flags <em>a lot</em> — every time a hint flag was set, every other hint flag was <em>also</em> set. (The reset script set them all to <code>false</code>, even if they were already <code>false</code>.) We were going to log the <a href="../scripts/save_flags">save flags</a> triggered by play testers to do story timing analytics, but found that hint flags overwhelmed everything.</p><h2 id="integer-hints" tabindex="-1"><a class="header-anchor" href="#integer-hints" aria-hidden="true">#</a> Integer Hints</h2><p>With this method, there is a single <a href="../scripts/integer_variables">integer variable</a> for all hints. Let&#39;s call this the &quot;hintiger.&quot;</p><p><strong>Triggering a hint</strong>: If the player talks to a quest entity and triggers &quot;backstory&quot; dialog or otherwise engages the entity in a way that indicates they are involved in a quest, set the hintiger to the value associated with that quest line.</p><p><strong>Clearing a hint</strong>: Once the player has completed a quest line, set the hintiger to <code>0</code>.</p><p>Optionally, first check whether the hintiger is associated with the quest line being solved, and leave the hintiger alone if the current hintiger is for a different quest. (This makes hint deactivation much more complicated — a disadvantage of this technique.)</p><p>The biggest advantage is that only one hint can be set at a time. Typos are far less likely for ints than strings, too. It is, however, much harder to tell which hint is which from the value of the int alone (as opposed to strings, which can be much more self explanatory).</p><h3 id="hint-variations" tabindex="-1"><a class="header-anchor" href="#hint-variations" aria-hidden="true">#</a> Hint Variations</h3><p>You might need multiple hints per quest line. For BMG2020, we had several values per quest line depending on what triggered the hint — we used the ones digit to indicate the context of the trigger and the tens (overflowing to the hundreds) digit to indicate which quest line it was. For our game, <code>2-</code> meant baker, <code>-0</code> meant the hint was triggered by Bert, and <code>-1</code> meant the hint was triggered by the entity itself, etc.:</p><p><code>20</code> = The player heard about the baker from Bert, which meant the hint man had to only describe where the baker was and something about what he wanted in general.</p><p><code>21</code> = The player actually talked to the baker and heard his backstory in person (long form or short form), which meant the hint man had to give a hint about how to solve the problem the baker mentioned verbally.</p><p>If we continued with this pattern, we might have used <code>22</code> for if the player got partway through the quest and needed a hint about the second half, etc.</p><p>Incorporating hint variations will likely require more frequent hint logic checks. For instance, if the current hint is <code>21</code> (continuing from the above example) we wouldn&#39;t want speaking to Bert to set it to <code>20</code>, which is a more basic hint. To prevent this, we might check the relevant backstory <a href="../scripts/save_flags">flag</a> or the current hintiger to decide whether to set it to <code>20</code>. This is fairly easy to do in the case of BMG2020 because the tens (and hundreds) digit determine the hint quest line, so we can divide the current hintiger by 10 (after copying it into another <a href="../scripts/integer_variables">variable</a>) to procedurally detect which quest line the hint was for.</p><h3 id="hintiger-abstraction" tabindex="-1"><a class="header-anchor" href="#hintiger-abstraction" aria-hidden="true">#</a> Hintiger Abstraction</h3>',24),f={href:"https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants",target:"_blank",rel:"noopener noreferrer"},D=n(`<h4 id="mgs-natlang-constants" tabindex="-1"><a class="header-anchor" href="#mgs-natlang-constants" aria-hidden="true">#</a> MGS Natlang Constants</h4><p>In <a href="../mgs/mgs_natlang">MGS Natlang</a>, the <code>const!()</code> macro allows you to define compile-time constants, and was implemented to prevent magic numbers.</p><p>You could create a whole list of these constants for all your hints, perhaps in their own MGS file, then use the <code>include!()</code> macro to pull that file in to each of your other MGS files.</p><h4 id="copy-script" tabindex="-1"><a class="header-anchor" href="#copy-script" aria-hidden="true">#</a> <code>COPY_SCRIPT</code></h4><p>There is another way to abstract the value of an integer, though: <a href="../actions/COPY_SCRIPT">COPY_SCRIPT</a>. This method does not require <a href="../mgs/mgs_natlang">MGS Natlang</a>; it can be done with JSON alone.</p><p>If you make a series of <a href="../actions/MUTATE_VARIABLE">MUTATE_VARIABLE</a> scripts that set your hintiger to each of the values you need, you can then use <a href="../actions/COPY_SCRIPT">COPY_SCRIPT</a> alone to control the current value of your hintiger. This way, your integer-hint assignments happen only once (instead of every time the hint needs to be set) and only in one place (instead of spread out between each of the entity&#39;s ques tline scripts).</p><p>An example pair of scripts to manage Bender&#39;s hints:</p><div class="language-JSON" data-ext="JSON"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#CE9178;">&quot;set-hint-bender-from-bert&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">	{</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MUTATE_VARIABLE&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;variable&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;hint-tracking&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;value&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">50</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;operation&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SET&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#CE9178;">&quot;set-hint-bender&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MUTATE_VARIABLE&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;variable&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;hint-tracking&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;value&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">51</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;operation&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SET&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre></div><p>Then, everywhere you need Bender to change the hint to his own quest line, all you will need is a single <code>COPY_SCRIPT</code> action, e.g.:</p><div class="language-JSON" data-ext="JSON"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;action&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;COPY_SCRIPT&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;script&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;set-hint-bender&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div>`,10);function m(q,b){const o=a("RouterLink"),i=a("ExternalLinkIcon");return l(),h("div",null,[d,t("div",u,[g,t("p",null,[e("Be aware that this entry predates "),s(o,{to:"/mgs/mgs_natlang.html"},{default:c(()=>[e("MGS Natlang")]),_:1}),e(".")])]),y,t("p",null,[e("Hintigers might count as "),t("a",f,[e("magic numbers"),s(i)]),e(", which are to be avoided when possible. Solutions include:")]),D])}const v=r(p,[["render",m],["__file","hint_systems.html.vue"]]);export{v as default};
