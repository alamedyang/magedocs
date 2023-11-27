import{_ as n,r as i,o as s,c as l,b as e,e as t,d as a,a as r}from"./app-oGoBbKgC.js";const d={},h=e("h1",{id:"what-you-ll-need",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-you-ll-need","aria-hidden":"true"},"#"),t(" What You'll Need")],-1),c=e("p",null,"The MGE is data driven, meaning you won't need special hardware or a compiler to generate game content for your DC801 black mage badge. All you'll need are:",-1),u=e("h2",{id:"text-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#text-editor","aria-hidden":"true"},"#"),t(" Text Editor")],-1),p=e("p",null,"You will need a text editor. (NOTE: a word processor like Apple's Pages or Microsoft Word will not work for this!)",-1),f={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},m=e("a",{href:"../mgs/mgs_natlang"},"MGS Natlang",-1),_=e("a",{href:"../mgs/syntax_colors"},"syntax highlighting",-1),g=e("p",null,[e("code",null,".mgs"),t(" syntax highlighting can be manually added to a handful of other text editors, too. (See "),e("a",{href:"../mgs/syntax_colors"},"Syntax Colors"),t(" for up-to-date details and instructions.) The following can manage decent support as of late 2023:")],-1),w={href:"https://sublimetext.com",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://macromates.com",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"graphics-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphics-editor","aria-hidden":"true"},"#"),t(" Graphics Editor")],-1),v=e("a",{href:"../tilesets"},"tilesets",-1),k=e("a",{href:"../tilesets/animations"},"animation",-1),M={href:"https://www.aseprite.org/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://OpenGameArt.org",target:"_blank",rel:"noopener noreferrer"},G=e("h2",{id:"tiled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tiled","aria-hidden":"true"},"#"),t(" Tiled")],-1),S={href:"https://www.mapeditor.org",target:"_blank",rel:"noopener noreferrer"},T=e("a",{href:"../tilesets"},"tileset",-1),j=e("a",{href:"../maps"},"maps",-1),I=e("a",{href:"../tilesets"},"tilesets",-1),N=e("a",{href:"../entities"},"entity",-1),A=e("a",{href:"../tilesets/animations"},"animations",-1),C=e("a",{href:"../tilesets/tile_collisions"},"tile collisions",-1),V=e("a",{href:"../maps/vector_objects"},"geometry",-1),D=e("a",{href:"../techniques/cutscenes"},"choreography",-1),W=e("h2",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),B=e("s",null,"While strictly optional, it's always nice to version control your projects,",-1),L={href:"https://www.sublimemerge.com/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"},F=r('<h2 id="web-browser" tabindex="-1"><a class="header-anchor" href="#web-browser" aria-hidden="true">#</a> Web Browser</h2><p>The <a href="../encoder/web_encoder">web encoder</a> can be run with Node.js (see below) or in a web browser. They will both take the game files from your <a href="../getting_started/scenario_source_files"><code>scenario_source_files</code></a> folder and export a <code>game.dat</code> for the Mage Game Engine to use.</p><p>The web version of the encoder, however, also has an <a href="../encoder/entity_management_system">entity management system</a> for managing animation assignments, so while you might use the Node encoder most of the time, chances are you&#39;ll still want to use the web version regularly.</p><p>You will likely also want to use the <a href="../hardware/web_build">web build</a> of the MGE to test your game data, as this is much simpler than setting up a Linux environment to run the game natively and much faster than using a microSD card to test the <code>game.dat</code> on the real badge after every revision.</p><h2 id="node-js-optional" tabindex="-1"><a class="header-anchor" href="#node-js-optional" aria-hidden="true">#</a> Node.js (optional)</h2>',5),q=e("code",null,"game.dat",-1),J={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},Y=e("a",{href:"../encoder/cli_encoder"},"CLI version of the encoder",-1),z=r('<p>We recommend using Node&#39;s long-term support (i.e. even numbered) versions.</p><h2 id="microsd-card-optional" tabindex="-1"><a class="header-anchor" href="#microsd-card-optional" aria-hidden="true">#</a> MicroSD Card (optional)</h2><p>To put a new <code>game.dat</code> onto the badge, you&#39;ll need a microSD card formatted to FAT32. (This is only necessary if you&#39;re using the real badge hardware; the <a href="../hardware/web_build">web build</a> is sufficient for most cases.)</p><h2 id="linux-optional" tabindex="-1"><a class="header-anchor" href="#linux-optional" aria-hidden="true">#</a> Linux (optional)</h2><p>The tools listed above can be run in any environment, but at the moment (late 2023), you need Linux to run the game natively on your computer.</p><p>A virtual machine will be sufficient for this. For your convenience, we have prepared a VM image with project files and tooling in place for you to start a new MGE project (see: <a href="../getting_started/mge_vm">MGE VM</a>) — but know that you will likely need to update everything, as the VM was prepared for the chapter 1 engine.</p><h2 id="mage-folder" tabindex="-1"><a class="header-anchor" href="#mage-folder" aria-hidden="true">#</a> <code>MAGE/</code> Folder</h2><p>Content creation will involve creating, modifying, and using files within the <code>MAGE</code> folder (inside the <code>SD_Card</code> folder, inside the project repo). See: <a href="../getting_started/mage_folder"><code>MAGE</code> Folder</a></p>',8);function P($,H){const o=i("ExternalLinkIcon");return s(),l("div",null,[h,c,u,p,e("p",null,[t("While any text editor might do the trick, we strongly recommend an IDE with project management features like syntax parsing and Git integration. Our strong recommendation, especially for beginners, is "),e("a",f,[t("Visual Studio Code"),a(o)]),t(" (Mac, Linux, or Windows), which is free and open source. Importantly, we have prepared a VSCode Marketplace plugin for "),m,t(),_,t(", which will make it much easier to work with MGS game script files.")]),g,e("ul",null,[e("li",null,[e("a",w,[t("Sublime Text"),a(o)])]),e("li",null,[e("a",y,[t("JetBrains' IDEs"),a(o)]),t(" (excellent IDE but not inexpensive)")]),e("li",null,[e("a",b,[t("TextMate"),a(o)]),t(" (Mac only)")])]),x,e("p",null,[t("Any graphics program capable of pixel art can be used to make sprite sheets or "),v,t(". But if you need custom "),k,t(", we highly recommend investing in "),e("a",M,[t("Aseprite"),a(o)]),t(", which is about $20. It specializes in sprite animations, and it makes previewing animations and exporting sprite sheets quite painless.")]),e("p",null,[t("If you don't want to make art from scratch, a good source of premade tilesets is "),e("a",E,[t("OpenGameArt.org"),a(o)]),t(".")]),G,e("p",null,[t("Tiled, which can be found at "),e("a",S,[t("mapeditor.org"),a(o)]),t(", is a free, cross-platform map and "),T,t(" editor that can export and edit JSON files. This how the bulk of "),j,t(", "),I,t(", "),N,t(),A,t(", "),C,t(", and "),V,t(" for "),D,t(" are defined.")]),W,e("p",null,[B,t(" If you are not using Git to version control your projects, you bring dishonor and suffering on your house, especially if working with multiple people. We recommend "),e("a",L,[t("Sublime Merge"),a(o)]),t(" if you're just getting started with Git, particularly if you're using VSCode, as VSCode's version control interface is fairly bare bones. If you're already using one of "),e("a",O,[t("JetBrains' IDEs"),a(o)]),t(", you can use their excellent built-in Git tools.")]),F,e("p",null,[t("If you find yourself constantly making small changes to your content and regenerating your "),q,t(" very frequently, it may be worthwhile to install "),e("a",J,[t("Node.js"),a(o)]),t(" so you can use the "),Y,t(" instead.")]),z])}const Q=n(d,[["render",P],["__file","what_youll_need.html.vue"]]);export{Q as default};
