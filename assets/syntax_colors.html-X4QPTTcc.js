import{_ as o,r as l,o as t,c as r,b as e,d as s,e as n,a as p}from"./app-MrF-XoWp.js";const c={},i=e("h1",{id:"syntax-colors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#syntax-colors","aria-hidden":"true"},"#"),s(" Syntax Colors")],-1),d=e("a",{href:"../mgs/mgs_natlang"},"MGS Natlang",-1),h={href:"https://github.com/alamedyang/magegamescript-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"},D={href:"https://v2.vuepress.vuejs.org/reference/plugin/shiki.html",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"supported-ides",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#supported-ides","aria-hidden":"true"},"#"),s(" Supported IDEs")],-1),u=e("h3",{id:"visual-studio-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#visual-studio-code","aria-hidden":"true"},"#"),s(" Visual Studio Code")],-1),m={href:"https://marketplace.visualstudio.com/items?itemName=goat-and-bird.magegamescript-colors",target:"_blank",rel:"noopener noreferrer"},g=p(`<p>After installing the extension, all MGS files will have syntax coloring. VSCode will update the extension automatically whenever a new version comes out.</p><h3 id="sublime-text" tabindex="-1"><a class="header-anchor" href="#sublime-text" aria-hidden="true">#</a> Sublime Text</h3><p>Visit the syntax colors repo above (or clone it locally), then find the <code>mgs.tmLanguage</code> file in the <code>syntaxes</code> folder. Move this file to wherever Sublime Text wants its coloring grammars in your operating system. After this, you can select MageGameScript under View &gt; Syntax to style the text in your MGS files.</p><p>You will have to update the <code>mgs.tmLanguage</code> manually by repeating the above process when a new version is released.</p><h3 id="textmate" tabindex="-1"><a class="header-anchor" href="#textmate" aria-hidden="true">#</a> TextMate</h3><p>A <code>tmbundle</code> version of the above grammar has been quickly prepared (as of Nov 2023), but may not have feature parity, is not automatically generated, and it is not bundled with the repo yet. Ask the DC801 badge game devs if you want a preview copy to try.</p><h3 id="intellij" tabindex="-1"><a class="header-anchor" href="#intellij" aria-hidden="true">#</a> IntelliJ</h3><p>IntelliJ has a plugin, available by default, to install TextMate bundles. Acquire the <code>tmbundle</code> as explained above, and follow IntelliJ&#39;s documentation to install it.</p><h3 id="other-ides" tabindex="-1"><a class="header-anchor" href="#other-ides" aria-hidden="true">#</a> Other IDEs</h3><p>Many other IDEs will accept TextMate grammars, but you will have to find and follow your IDE&#39;s specific instructions.</p><h2 id="color-choices" tabindex="-1"><a class="header-anchor" href="#color-choices" aria-hidden="true">#</a> Color Choices</h2><p>Scope names (≈colors) for tokens were chosen to resemble similar scopes in other languages, particularly JavaScript.</p><h3 id="spectrum-test" tabindex="-1"><a class="header-anchor" href="#spectrum-test" aria-hidden="true">#</a> Spectrum Test</h3><p>Colors were tested in all of VSCode&#39;s default themes, but were calibrated for the Dark+ theme specifically.</p><div class="language-mgs" data-ext="mgs"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// comment</span></span>
<span class="line"><span style="color:#6A9955;">/* also comment */</span></span>
<span class="line"><span style="color:#DCDCAA;">const!</span><span style="color:#D4D4D4;">(</span><span style="color:#4FC1FF;">$constant</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">9000</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">nonStyledTextAKAColorless</span></span>
<span class="line"><span style="color:#DCDCAA;">scriptName</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C8C8C8;">labelName</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">while</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">flag</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">flagName</span><span style="color:#D4D4D4;"> is </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">dialog</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#4EC9B0;">Identifier</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">alignment</span><span style="color:#569CD6;"> TOP_RIGHT</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;What do ya know, </span><span style="color:#569CD6;">%PLAYER%</span><span style="color:#CE9178;">!</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">Square roots!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">show</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">serial dialog</span><span style="color:#D4D4D4;"> { </span><span style="color:#CE9178;">&quot;</span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">red</span><span style="color:#808080;">&gt;</span><span style="color:#CE9178;">styled</span><span style="color:#808080;">&lt;/&gt;</span><span style="color:#CE9178;">&quot;</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">goto</span><span style="color:#9CDCFE;"> script</span><span style="color:#DCDCAA;"> scriptName</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">load</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">slot</span><span style="color:#D4D4D4;"> </span><span style="color:#F44747;">9001</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div>`,15);function f(C,x){const a=l("ExternalLinkIcon");return t(),r("div",null,[i,e("p",null,[s("A syntax coloring grammar (tmLanguage) for "),d,s(" is in development here: "),e("a",h,[s("github.com/alamedyang/magegamescript-syntax-highlighting"),n(a)])]),e("p",null,[s("Syntax colors in this documentation were made possible by "),e("a",D,[s("shiki"),n(a)]),s(", a TextMate grammar plugin for VuePress.")]),y,u,e("p",null,[s("When you open an MGS file, VSCode will offer a "),e("a",m,[s("marketplace extension"),n(a)]),s(' for it.( Alternatively, search for "MageGameScript Colors" in the Visual Studio Code extensions marketplace.)')]),g])}const _=o(c,[["render",f],["__file","syntax_colors.html.vue"]]);export{_ as default};
