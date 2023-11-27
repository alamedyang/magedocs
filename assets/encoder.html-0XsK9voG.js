import{_ as d,r as s,o as l,c,b as t,d as e,e as o,w as i,a as n}from"./app-MrF-XoWp.js";const h={},u=n('<h1 id="encoder" tabindex="-1"><a class="header-anchor" href="#encoder" aria-hidden="true">#</a> Encoder</h1><p>There are two versions of the encoder, but both produce exactly the same <code>game.dat</code> file. They are both deterministic.</p><p>What gets processed and encoded:</p><ol><li>Everything in <a href="../structure/scenario.json"><code>scenario.json</code></a>: <ul><li><a href="../scripts">script</a></li><li><a href="../dialogs">dialogs</a></li><li><a href="../dialogs/serial_dialogs">serial dialogs</a></li><li>dialogSkins</li></ul></li><li>Portraits found in <a href="../structure/portraits.json"><code>portraits.json</code></a></li><li>Entities found in <a href="../structure/entity_types.json"><code>entity_types.json</code></a></li><li>Maps found in <a href="../structure/maps.json"><code>maps.json</code></a></li><li>All MGS files within <a href="../getting_started/scenario_source_files"><code>scenario_source_files</code></a> (see <a href="../mgs/mgs_natlang">MGS Natlang</a>)</li></ol><p>While every <a href="../scripts">script</a> (and <a href="../dialogs">dialog</a>, <a href="../tilesets">tileset</a>, etc.) is available to the encoder, whether it gets encoded depends on whether it&#39;s being used by the game in some way; a script that isn&#39;t used by any maps, entities, or referenced any included script will be ignored. In other words, <a href="../entities/entity_types">entities</a> must be placed on at least one <a href="../maps">map</a> to be encoded.</p><h3 id="game-dat" tabindex="-1"><a class="header-anchor" href="#game-dat" aria-hidden="true">#</a> <code>game.dat</code></h3><p>The <code>game.dat</code> file is the binary file containing all your game scenario content, including images.</p>',7),f=t("code",null,"game.dat",-1),g=t("code",null,"game.dat",-1),p=t("p",null,[e("There is currently no way to bring save data from an old version of the "),t("code",null,"game.dat"),e(" to a new one, as the data structure of the save data is unlikely to be consistent between versions.")],-1),m=t("h4",{id:"run-your-game",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#run-your-game","aria-hidden":"true"},"#"),e(" Run Your Game")],-1),_=t("li",null,[t("a",{href:"../hardware/web_build"},"Web build"),e(": Open the web build in your browser, then drag the "),t("code",null,"game.dat"),e(" into the browser window. "),t("ul",null,[t("li",null,[e("NOTE: If you play the game a little then drag the same "),t("code",null,"game.dat"),e(" in again, the game will appear to restart afresh — but in fact, save flags and the like may not be reset, "),t("strong",null,"even when you didn't explicitly save inside the game"),e(". Refresh the browser window to wipe existing game state.")])])],-1),y=t("a",{href:"../hardware/desktop_build"},"Desktop build",-1),b=t("a",{href:"#cli-encoder"},"CLI encoder",-1),w=t("code",null,"game.dat",-1),v=t("code",null,"game.dat",-1),x=t("code",null,"MAGE",-1),k=t("ul",null,[t("li",null,"(Does the same note above pertain to the desktop build, too? Probably? #verifyme)")],-1),E=n('<h2 id="cli-encoder" tabindex="-1"><a class="header-anchor" href="#cli-encoder" aria-hidden="true">#</a> CLI Encoder</h2><p>If you have Node.js installed, you can run the shell script <code>regenerate_dat_file.sh</code> to generate a new <code>game.dat</code> file. There are two versions of this file:</p><ol><li>BM-Badge version: <ul><li><code>cd</code> into <code>MAGE/</code>.</li><li>Run the shell script. The <code>game.dat</code> will be made from the <code>scenario_source_files/</code> in <code>MAGE/</code>.</li></ul></li><li><a href="../getting_started/mge_vm">Sample repo</a> version: <ul><li>first argument: the <code>scenario_source_files/</code> folder to read from</li><li>second argument: where to write the <code>game.dat</code></li><li>This version of the shell script also launches the game automatically.</li></ul></li></ol><p>This encoder is more useful than the web version when you want to test rapid iterations of your game data.</p><h2 id="web-encoder" tabindex="-1"><a class="header-anchor" href="#web-encoder" aria-hidden="true">#</a> Web Encoder</h2><p>Open <code>SD_Card/MAGE/editor/index.html</code> with a web browser.</p><p>Once the page is open, you can either:</p><ol><li>Drag your <a href="../getting_started/scenario_source_files"><code>scenario_source_files</code></a> folder into the window.</li><li>Click the &quot;browse&quot; button and choose the <code>scenario_source_files</code> using your operating system&#39;s file browser.</li></ol><p>Confirm that you want to upload the contents of the folder to your browser, and the encoder will do its magic. If successful, click the &quot;Download game.dat&quot; button, and you&#39;re done!</p><p>The <code>game.dat</code> will be sent to your default download location, so to play it on the desktop build, you&#39;ll first have to move it to the correct place by hand or run the shell script <code>replace_dat_file_with_downloaded.sh</code>. (<code>cd</code> into the <code>SD_Card/MAGE/</code> folder before using the shell script!)</p>',10),T=t("h3",{id:"entity-manager",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#entity-manager","aria-hidden":"true"},"#"),e(" Entity Manager")],-1),j=t("a",{href:"../entities/entity_types#character-entity"},"character entities",-1),I=t("h2",{id:"debugging",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#debugging","aria-hidden":"true"},"#"),e(" Debugging")],-1),M=n('<h3 id="encoder-console" tabindex="-1"><a class="header-anchor" href="#encoder-console" aria-hidden="true">#</a> Encoder Console</h3><p>Both versions of the encoder will tell you when something has gone wrong during the encoding process, and many errors should be self explanatory, e.g. <code>&quot;No object named X could be found on map Y!&quot;</code></p><p>The error <code>Script: X could not be found in scenario.json</code> does not necessarily mean there is something wrong with <a href="../structure/scenario.json"><code>scenario.json</code></a>, only that the encoder couldn&#39;t find a <a href="../scripts">script</a> by that name in any MGS file or in any of the script JSON files <code>scenario.json</code> knows about.</p><p>If you get the error &quot;unexpected token&quot; it means one of your files has invalid JSON, and you&#39;ll need to check your JSON files for invalid syntax. (A good text editor should have some kind of color coding to help you spot such errors.)</p><h3 id="inspecting-wip-data" tabindex="-1"><a class="header-anchor" href="#inspecting-wip-data" aria-hidden="true">#</a> Inspecting WIP Data</h3><p>You can use the web encoder and your browser&#39;s JavaScript console to inspect various aspects about how the encoder interpreted your game files. (You could even interrupt the encoder <em>while</em> it collects and processes the data.)</p>',6),N=t("li",null,[e("Number of colors in each tileset's pallet. If trying to reduce the file size of your "),t("code",null,"game.dat"),e(", it can help to identify which tilesets have more colors than intended.")],-1),S=t("li",null,"…all the rest #expandme",-1),A=t("p",null,"This is most useful when the encoder throws an exception, because you can examine the state of data involved in triggering the error — the console messages alone might not identify which script or variable was causing the problem.",-1),G=t("h3",{id:"kaitai",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#kaitai","aria-hidden":"true"},"#"),e(" Kaitai")],-1),q={href:"https://ide.kaitai.io",target:"_blank",rel:"noopener noreferrer"},C=t("p",null,[e("Available inside your "),t("a",{href:"../getting_started/mage_folder"},[t("code",null,"MAGE"),e(" Folder")]),e(" is a file called "),t("code",null,"mage_dat.ksy"),e(". You can drag this in a Kaitai window, along with your "),t("code",null,"game.dat"),e(", to analyze in great detail the encoded structure of your game.")],-1),D=t("a",{href:"../entities"},"entity",-1),O=t("a",{href:"../scripts/on_tick"},[t("code",null,"on_tick")],-1);function B(L,W){const a=s("RouterLink"),r=s("ExternalLinkIcon");return l(),c("div",null,[u,t("p",null,[e("Note that "),o(a,{to:"/scripts/save_data.html"},{default:i(()=>[e("save data")]),_:1}),e(" will persist when using the same "),f,e(" file. (Will reflashing the "),g,e(" on the hardware wipe the save data explicitly? Probably. #verifyme)")]),p,m,t("ul",null,[_,t("li",null,[y,e(": If you use the "),b,e(" to build the game, the "),w,e(" will already be in the appropriate place to run the game. Otherwise, you must move your new "),v,e(" to the "),o(a,{to:"/getting_started/mage_folder.html"},{default:i(()=>[x,e(" folder")]),_:1}),e(". "),k]),t("li",null,[e("Badge: see "),o(a,{to:"/updating_the_hardware.html"},{default:i(()=>[e("Updating the Hardware")]),_:1})])]),t("p",null,[e("Also see: "),o(a,{to:"/debug_tools.html"},{default:i(()=>[e("debug tools")]),_:1})]),E,t("p",null,[e("This encoder is more useful for times you need to "),o(a,{to:"/debug_tools.html"},{default:i(()=>[e("debug something")]),_:1}),e(", or when you want to manage an entity's animations (see below).")]),T,t("p",null,[e("A special feature of the web version of the "),o(a,{to:"/encoder.html"},{default:i(()=>[e("MGE encoder")]),_:1}),e(" is the "),o(a,{to:"/tilesets/entity_management_system.html"},{default:i(()=>[e("entity management system")]),_:1}),e(", which you can use to assign animations to "),j,e(".")]),I,t("p",null,[e("(Don't forget that the game has a built-in "),o(a,{to:"/hex_editor.html"},{default:i(()=>[e("hex editor")]),_:1}),e(", too!)")]),M,t("ul",null,[t("li",null,[e("List of all "),o(a,{to:"/scripts/variables.html#save-flags"},{default:i(()=>[e("save flags")]),_:1})]),N,S]),A,G,t("p",null,[e("Kaitai ("),t("a",q,[e("ide.kaitai.io"),o(r)]),e(") is a tool that can parse and analyze binary data formats.")]),C,t("p",null,[e("This tool lets you easily see the relationship between the hex value of a script/entity_type/dialog/etc. and its name. E.g. if an "),D,e("'s "),O,e(" was being changed unexpectedly, but you only knew the hex value that it's being changed to (perhaps using the "),o(a,{to:"/hex_editor.html"},{default:i(()=>[e("hex editor")]),_:1}),e("), using Kaitai to find the name of the script in question can help you track down the problem.")])])}const Y=d(h,[["render",B],["__file","encoder.html.vue"]]);export{Y as default};
