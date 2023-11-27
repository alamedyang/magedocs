import{_ as e,o,c as t,a}from"./app-oGoBbKgC.js";const r={},d=a('<h1 id="mage-folder" tabindex="-1"><a class="header-anchor" href="#mage-folder" aria-hidden="true">#</a> <code>MAGE</code> Folder</h1><p>There&#39;ll be a bunch of stuff in the <code>MAGE/</code> folder, but relevant to creating new content are:</p><p><code>editor/index.html</code> — The <a href="../encoder/web_encoder">web encoder</a>. To generate a <code>game.dat</code>, you can open this file in a web browser and follow the instructions.</p><p><code>game.dat</code> — This is the encoded data for your game. If you generated a <code>game.dat</code> using <a href="../encoder/web_encoder">web encoder</a>, you must move the resulting <code>game.dat</code> here for the <a href="../hardware/desktop_build">desktop build</a> to see it; the <a href="../encoder/cli_encoder">CLI encoder</a>, however, will update the <code>game.dat</code> in place.</p><p><code>replace_dat_file_with_downloaded.sh</code> — A shell script for grabbing the latest <code>game.dat</code> from your Downloads folder and moving it to your current directory.</p><p><code>regenerate_dat_file.sh</code> — This shell script requires <code>node.js</code> to run (see: <a href="../getting_started/what_youll_need">What You&#39;ll Need</a>). There are two versions of this file depending on which repo you started with, and note that the shell script from the <a href="../getting_started/mge_vm">MGE VM</a> is slightly different.</p><p><a href="../getting_started/scenario_source_files"><code>scenario_source_files</code></a> — This is where your raw game data lives.</p><p><code>mage_dat.ksy</code> — Intended to be used with <a href="../Kaitai">Kaitai</a>. This will help you identify unexpected game state you might be encountering.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2><ul><li><a href="../getting_started/scenario_source_files"><code>scenario_source_files</code></a><ul><li><a href="../structure/scenario.json"><code>scenario.json</code></a></li><li><a href="../structure/portraits.json"><code>portraits.json</code></a></li><li><a href="../structure/entity_types.json"><code>entity_types.json</code></a></li><li><a href="../structure/maps.json"><code>maps.json</code></a></li></ul></li></ul>',10),c=[d];function s(i,n){return o(),t("div",null,c)}const h=e(r,[["render",s],["__file","mage_folder.html.vue"]]);export{h as default};
