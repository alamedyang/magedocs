import{_ as e,r as p,o as t,c,b as s,d as n,e as l,w as o,a as D}from"./app-MrF-XoWp.js";const r={},i=s("h1",{id:"copy-script-uses",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#copy-script-uses","aria-hidden":"true"},"#"),n(" COPY_SCRIPT Uses")],-1),y=s("p",null,[s("a",{href:"../actions/COPY_SCRIPT"},[s("code",null,"COPY_SCRIPT")]),n(" is one of the most powerful "),s("a",{href:"../actions"},"actions"),n(" in the Mage Game Engine (MGE).")],-1),h=s("a",{href:"../scripts"},"script",-1),d=s("code",null,"COPY_SCRIPT",-1),C=s("code",null,"COPY_SCRIPT",-1),g=s("code",null,"COPY_SCRIPT",-1),u=D(`<p>NOTE: <code>COPY_SCRIPT</code> can trigger an infinite loop in the encoder if it tries to copy a script that copies the script trying to copy it. Try to keep this from happening.</p><h2 id="abstracting-behavior" tabindex="-1"><a class="header-anchor" href="#abstracting-behavior" aria-hidden="true">#</a> Abstracting Behavior</h2><p>In all things programming, don&#39;t write something identical several times. Instead write it once and use it several times. (This is the closest thing we currently have to functions!)</p><p>In the MGE2020, the shepherd nervously looks back and forth twice when giving his backstory. A simplified depiction, using <a href="../mgs/mgs_natlang">MGS Natlang</a>:</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">show_dialog-shepherd-backstory</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">dialog</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">turn</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">player control</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">off</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">200ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">rotate</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#569CD6;">%SELF%</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">500ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">rotate</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#569CD6;">%SELF%</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;"> -</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">500ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">rotate</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#569CD6;">%SELF%</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">200ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">turn</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">player control</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">dialog</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">turn</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">player control</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">off</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">200ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">rotate</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#569CD6;">%SELF%</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">500ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">rotate</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#569CD6;">%SELF%</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;"> -</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">500ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">rotate</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#569CD6;">%SELF%</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">200ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">turn</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">player control</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">dialog</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div></div><p>With copy script, this instead becomes:</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">show_dialog-shepherd-backstory</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">dialog</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">copy</span><span style="color:#DCDCAA;"> turn-right-and-left</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">dialog</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">copy</span><span style="color:#DCDCAA;"> turn-right-and-left</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">dialog</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#DCDCAA;">turn-right-and-left</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">turn</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">player control</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">off</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">200ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">rotate</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#569CD6;">%SELF%</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">500ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">rotate</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#569CD6;">%SELF%</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;"> -</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">500ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">rotate</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">entity</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#569CD6;">%SELF%</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">wait</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">200ms</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">	</span><span style="color:#569CD6;">turn</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">player control</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br></div></div><p>This makes the shepherd&#39;s choreography much easier to write and understand.</p><p>Another advantage is that timing or choreography can be tuned in one place instead of every time the sequence occurs.</p><h3 id="human-readability" tabindex="-1"><a class="header-anchor" href="#human-readability" aria-hidden="true">#</a> Human Readability</h3><p>Even when a small sequence of actions is only used once, abstracting it into a separate script that does what it says it does (e.g. <code>walk-elders-to-door</code>) can still make choreography much easier to manage, particularly in long <a href="cutscenes">cutscenes</a>.</p><p>The sequence need not be long for this technique to be effective.</p>`,12),E=s("code",null,"face-player",-1),v=s("code",null,"%SELF%",-1),m=s("code",null,"%PLAYER%",-1),_=s("code",null,"COPY_SCRIPT",-1),b=s("h3",{id:"daisy-chaining-long-sequences",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#daisy-chaining-long-sequences","aria-hidden":"true"},"#"),n(" Daisy Chaining Long Sequences")],-1),f=s("p",null,"For long sequences, it can help to build each segment of dialog and/or choreography one at a time and then daisy chain them when you know each segment is working as intended.",-1),w=s("p",null,[n("While you might add a "),s("a",{href:"../actions/RUN_SCRIPT"},[s("code",null,"RUN_SCRIPT")]),n(" to the end of each segment to link them to the next, you might also have a separate script that uses "),s("code",null,"COPY_SCRIPT"),n(" for each segment in sequence. This allows the segments to remain independent in case you need to trigger a single segment on its own. (Plus it allows you to use a single segment multiple times.)")],-1);function A(F,q){const a=p("RouterLink");return t(),c("div",null,[i,y,s("p",null,[n("This is an action provided for pure convenience and is actually not used by the MGE at all — the "),l(a,{to:"/encoder.html"},{default:o(()=>[n("encoder")]),_:1}),n(" literally copies the actions contained in the "),h,n(" being copied and inserts them into the script containing the "),d,n(" action. And it does this recursively, meaning a script copied with "),C,n(" can contain the action "),g,n(" on and on.")]),u,s("p",null,[n("In the BMG2020, we have a script called "),E,n(", which turns the entity ("),l(a,{to:"/entities/relative_references.html#self"},{default:o(()=>[v]),_:1}),n(") toward the player entity ("),l(a,{to:"/entities/relative_references.html#player"},{default:o(()=>[m]),_:1}),n("). This behavior only requires one action, so in this case using "),_,n(" won't reduce the number of actions within the script, but it does change it into a form that's easier for a human being to parse.")]),b,f,w])}const S=e(r,[["render",A],["__file","copy_script_uses.html.vue"]]);export{S as default};