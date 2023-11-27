import{_ as n,r as o,o as h,c,b as t,d as e,e as i,w as r,a as s}from"./app-MrF-XoWp.js";const d="/magedocs/assets/script-beatrice-lxQ4x0yo.png",l={},p=s('<h1 id="grand-finale-beatrice" tabindex="-1"><a class="header-anchor" href="#grand-finale-beatrice" aria-hidden="true">#</a> Grand Finale (Beatrice)</h1><div class="custom-container warning"><p class="custom-container-title">DEPRECATED</p><p>This page is deprecated and likely very out of date!</p><p>Large scripts like this were a major reason we created <a href="../mgs/mgs_natlang">MGS Natlang</a>. Now we can use <a href="../mgs/advanced_syntax#if-and-else">if and else</a> like a normal programming language. (To that point: converting this mess to natlang revealed a few redundant logic paths, even after multiple revisions of this flowchart!)</p></div><p><img src="'+d+'" alt="flowchart of Beatrice&#39;s behavior"></p>',3),u=s('<h2 id="beatrice-s-branching" tabindex="-1"><a class="header-anchor" href="#beatrice-s-branching" aria-hidden="true">#</a> Beatrice&#39;s Branching</h2><p>First comes the glitch check, overriding everything else. When she is glitched, all other aspects of branching and story status are ignored.</p><p>Next, she faces the player. This behavior is the same for all remaining branches, so is done before any other branching.</p><p>Then the largest split: determining which quest line the player is on. This cuts puts the rest of her scripts into one of two categories, and all subsequent scripts are named accordingly: <code>bea1</code> or <code>bea2</code>.</p><p>The next logic check is a more of a standard entity branch: if the quest line is done, the script jumps to a branch where Beatrice says things like &quot;Oh, thank you for fixing my husband!&quot; or &quot;Oh my God, why is he a sheep again?!&quot;</p><p>If the quest line is unfinished, the script will instead check as to whether the backstory has been heard before, which determines whether the player hears the short/summary (<code>-s</code>) version of the dialog or the long version (<code>backstory</code>).</p><p>And if <em>that</em> wasn&#39;t enough branching, most of the branches will then <em>also</em> branch depending on the status of her husband: whether he&#39;s either type of sheep entity, a man, or anything else. She says something different (and perhaps clever) in each variation, though each script will still end in one of the same ways: the backstory will have been heard, and the quest line will have either been solved or left unsolved.</p><h2 id="beatrice-s-wrapup-scripts" tabindex="-1"><a class="header-anchor" href="#beatrice-s-wrapup-scripts" aria-hidden="true">#</a> Beatrice&#39;s Wrapup Scripts</h2><h3 id="bea-wrapup-mini" tabindex="-1"><a class="header-anchor" href="#bea-wrapup-mini" aria-hidden="true">#</a> <code>bea-wrapup-mini</code></h3><p>Sets Beatrice&#39;s <a href="../scripts/on_interact"><code>on_interact</code></a> script back to her start script. This is the most basic shared wrapup behavior, and it was split mostly to future proof the branching against further complications. All of Beatrice&#39;s branches run this script, or run a script that runs it. (The chart above does not reflect this wrapup split, and still reflects the original <code>on_interact</code> reset placement.)</p><h3 id="bea1-complete-wrapup" tabindex="-1"><a class="header-anchor" href="#bea1-complete-wrapup" aria-hidden="true">#</a> <code>bea1-complete-wrapup</code></h3><p>This is the wrapup script for solving Beatrice&#39;s first quest line.</p>',12),f=t("li",null,[e("sets her "),t("a",{href:"../scripts/on_tick"},[t("code",null,"on_tick")]),e(" to "),t("a",{href:"../scripts/null_script"},"null_script"),e(" and turns her toward her husband")],-1),b=t("code",null,"bea1",-1),g=t("code",null,"bea1",-1),m=t("code",null,"true",-1),w=t("li",null,"zeroes the target hint",-1),y=t("li",null,[e("runs "),t("code",null,"bea-wrapup-mini"),e(" to finish")],-1),v=s('<p>Every branch that ends with solving her first quest line will run this script at the end, including branches that might have already set her backstory flag or might have branched due to the backstory flag being set to <code>true</code>, but the flag is set anyway in this script to simplify the logic in general — setting it <code>true</code> a second time won&#39;t ruin anything, and it means there doesn&#39;t have to be a separate wrapup script for not setting that flag. This decision was easy to make once I had everything mapped and color coded.</p><h3 id="bea1-incomplete-wrapup" tabindex="-1"><a class="header-anchor" href="#bea1-incomplete-wrapup" aria-hidden="true">#</a> <code>bea1-incomplete-wrapup</code></h3><p>This is the script that runs if you interacted with Beatrice but did not solve her first quest line.</p><ul><li>copies the script <code>set_tick-watch-player</code>, which sets her <code>on_tick</code> to <code>face-player</code></li><li>sets the <code>bea1</code> backstory flag to <code>true</code></li><li>sets the targeted hint to her first quest</li><li>runs <code>bea-wrapup-mini</code> to finish</li></ul><p>Like the above script, this script is sometimes run at the end of scripts that have already set the backstory flag or branched due to that flag already being <code>true</code>, but it&#39;s simpler to set it in all cases.</p><p>In addition, there are two other wrapup scripts for the second quest line (<code>bea2</code>): <code>bea2-complete-wrapup</code> and <code>bea2-incomplete-wrapup</code>, which mirror their <code>bea1</code> counterparts.</p><h2 id="other-common-beatrice-behavior" tabindex="-1"><a class="header-anchor" href="#other-common-beatrice-behavior" aria-hidden="true">#</a> Other Common Beatrice Behavior</h2><p>In many of the dialog segments, Beatrice turns to take a good long look at her husband, and there&#39;s a specific pattern of timing before and after the turn. During the turn, player control is temporarily disabled.</p><p>A separate script for this common behavior was invoked with <a href="../actions/COPY_SCRIPT">COPY_SCRIPT</a> each time it was needed during a dialog script so that the timing could be tuned in one place instead of everywhere it occurred. (This was left out of the script branching map because it didn&#39;t concern branching logic.) Specifically, this behavior was designed before the frame rate of the hardware was known and before consistent timing on the hardware and the desktop build was implemented, so while a long slow turn might be in-character for an old woman, at the time it anticipated a genuine need to make the choreography feel more natural. We&#39;ve found, however, that such careful timing isn&#39;t that important for most entity conversations.</p>',9);function _(k,B){const a=o("RouterLink");return h(),c("div",null,[p,t("p",null,[e("In the BMG2020, Beatrice's branching was complicated, and was very difficult to debug. But by mapping and color coding the scripts like this I was able to easily identify which sequence of actions were repeated and could be split off into wrapup scripts, and I could more easily see how I needed to arrange the branching to produce the correct behavior. (The map itself was used for planning purposes only and is out of date at this point. E.g. hints are now managed with a single "),i(a,{to:"/scripts/variables.html#integer-variables"},{default:r(()=>[e("integer")]),_:1}),e(" instead of a bajillion "),i(a,{to:"/scripts/variables.html#save-flags"},{default:r(()=>[e("save flags")]),_:1}),e(".)")]),u,t("ul",null,[f,t("li",null,[e("sets the "),b,e(" backstory and "),g,e(),i(a,{to:"/scripts/variables.html#save-flags"},{default:r(()=>[e("story flag")]),_:1}),e(" to "),m]),w,y]),v])}const T=n(l,[["render",_],["__file","grand_finale_beatrice.html.vue"]]);export{T as default};
