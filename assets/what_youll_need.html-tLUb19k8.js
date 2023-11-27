import{_ as s,r as i,o as l,c as d,b as e,d as t,e as o,w as r,a as h}from"./app-MrF-XoWp.js";const c={},u=e("h1",{id:"what-you-ll-need",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-you-ll-need","aria-hidden":"true"},"#"),t(" What You'll Need")],-1),p=e("p",null,"The MGE is data driven, meaning you won't need special hardware or a compiler to generate game content for your DC801 black mage badge. All you'll need are:",-1),_=e("h2",{id:"text-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#text-editor","aria-hidden":"true"},"#"),t(" Text Editor")],-1),f=e("p",null,"You will need a text editor. (NOTE: a word processor like Apple's Pages or Microsoft Word will not work for this!)",-1),m={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},g=e("a",{href:"../mgs/mgs_natlang"},"MGS Natlang",-1),w=e("a",{href:"../mgs/syntax_colors"},"syntax highlighting",-1),y=e("p",null,[e("code",null,".mgs"),t(" syntax highlighting can be manually added to a handful of other text editors, too. (See "),e("a",{href:"../mgs/syntax_colors"},"Syntax Colors"),t(" for up-to-date details and instructions.) The following can manage decent support as of late 2023:")],-1),b={href:"https://sublimetext.com",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://macromates.com",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"graphics-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphics-editor","aria-hidden":"true"},"#"),t(" Graphics Editor")],-1),M=e("a",{href:"../tilesets"},"tilesets",-1),E=e("a",{href:"../tilesets/animations"},"animation",-1),G={href:"https://www.aseprite.org/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://OpenGameArt.org",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"tiled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tiled","aria-hidden":"true"},"#"),t(" Tiled")],-1),T={href:"https://www.mapeditor.org",target:"_blank",rel:"noopener noreferrer"},I=e("a",{href:"../tilesets"},"tileset",-1),N=e("a",{href:"../maps"},"maps",-1),C=e("a",{href:"../tilesets"},"tilesets",-1),A=e("a",{href:"../entities"},"entity",-1),V=e("a",{href:"../tilesets/animations"},"animations",-1),D=e("a",{href:"../tilesets/creating_a_tileset_json_file#tile-collisions"},"tile collisions",-1),L=e("a",{href:"../maps/vector_objects"},"geometry",-1),W=e("a",{href:"../techniques/cutscenes"},"choreography",-1),B=e("h2",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),O=e("s",null,"While strictly optional, it's always nice to version control your projects,",-1),F={href:"https://www.sublimemerge.com/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"},J=e("h2",{id:"web-browser",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#web-browser","aria-hidden":"true"},"#"),t(" Web Browser")],-1),Y=e("a",{href:"../getting_started/scenario_source_files"},[e("code",null,"scenario_source_files")],-1),R=e("code",null,"game.dat",-1),z=e("p",null,[t("You will likely also want to use the "),e("a",{href:"../hardware/web_build"},"web build"),t(" of the MGE to test your game data, as this is much simpler than setting up a Linux environment to run the game natively and much faster than using a microSD card to test the "),e("code",null,"game.dat"),t(" on the real badge after every revision.")],-1),P=e("h2",{id:"node-js-optional",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-js-optional","aria-hidden":"true"},"#"),t(" Node.js (optional)")],-1),$=e("code",null,"game.dat",-1),H={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},K=h('<p>We recommend using Node&#39;s long-term support (i.e. even numbered) versions.</p><h2 id="microsd-card-optional" tabindex="-1"><a class="header-anchor" href="#microsd-card-optional" aria-hidden="true">#</a> MicroSD Card (optional)</h2><p>To put a new <code>game.dat</code> onto the badge, you&#39;ll need a microSD card formatted to FAT32. (This is only necessary if you&#39;re using the real badge hardware; the <a href="../hardware/web_build">web build</a> is sufficient for most cases.)</p><h2 id="linux-optional" tabindex="-1"><a class="header-anchor" href="#linux-optional" aria-hidden="true">#</a> Linux (optional)</h2><p>The tools listed above can be run in any environment, but at the moment (late 2023), you need Linux to run the game natively on your computer.</p><p>A virtual machine will be sufficient for this. For your convenience, we have prepared a VM image with project files and tooling in place for you to start a new MGE project (see: <a href="../getting_started/mge_vm">MGE VM</a>) — but know that you will likely need to update everything, as the VM was prepared for the chapter 1 engine.</p><h2 id="mage-folder" tabindex="-1"><a class="header-anchor" href="#mage-folder" aria-hidden="true">#</a> <code>MAGE/</code> Folder</h2><p>Content creation will involve creating, modifying, and using files within the <code>MAGE</code> folder (inside the <code>SD_Card</code> folder, inside the project repo). See: <a href="../getting_started/mage_folder"><code>MAGE</code> Folder</a></p>',8);function Q(U,X){const n=i("ExternalLinkIcon"),a=i("RouterLink");return l(),d("div",null,[u,p,_,f,e("p",null,[t("While any text editor might do the trick, we strongly recommend an IDE with project management features like syntax parsing and Git integration. Our strong recommendation, especially for beginners, is "),e("a",m,[t("Visual Studio Code"),o(n)]),t(" (Mac, Linux, or Windows), which is free and open source. Importantly, we have prepared a VSCode Marketplace plugin for "),g,t(),w,t(", which will make it much easier to work with MGS game script files.")]),y,e("ul",null,[e("li",null,[e("a",b,[t("Sublime Text"),o(n)])]),e("li",null,[e("a",x,[t("JetBrains' IDEs"),o(n)]),t(" (excellent IDE but not inexpensive)")]),e("li",null,[e("a",k,[t("TextMate"),o(n)]),t(" (Mac only)")])]),v,e("p",null,[t("Any graphics program capable of pixel art can be used to make sprite sheets or "),M,t(". But if you need custom "),E,t(", we highly recommend investing in "),e("a",G,[t("Aseprite"),o(n)]),t(", which is about $20. It specializes in sprite animations, and it makes previewing animations and exporting sprite sheets quite painless.")]),e("p",null,[t("If you don't want to make art from scratch, a good source of premade tilesets is "),e("a",j,[t("OpenGameArt.org"),o(n)]),t(".")]),S,e("p",null,[t("Tiled, which can be found at "),e("a",T,[t("mapeditor.org"),o(n)]),t(", is a free, cross-platform map and "),I,t(" editor that can export and edit JSON files. This how the bulk of "),N,t(", "),C,t(", "),A,t(),V,t(", "),D,t(", and "),L,t(" for "),W,t(" are defined.")]),B,e("p",null,[O,t(" If you are not using Git to version control your projects, you bring dishonor and suffering on your house, especially if working with multiple people. We recommend "),e("a",F,[t("Sublime Merge"),o(n)]),t(" if you're just getting started with Git, particularly if you're using VSCode, as VSCode's version control interface is fairly bare bones. If you're already using one of "),e("a",q,[t("JetBrains' IDEs"),o(n)]),t(", you can use their excellent built-in Git tools.")]),J,e("p",null,[t("The "),o(a,{to:"/encoder.html#web-encoder"},{default:r(()=>[t("web encoder")]),_:1}),t(" can be run with Node.js (see below) or in a web browser. They will both take the game files from your "),Y,t(" folder and export a "),R,t(" for the Mage Game Engine to use.")]),e("p",null,[t("The web version of the encoder, however, also has an "),o(a,{to:"/tilesets/entity_management_system.html"},{default:r(()=>[t("entity management system")]),_:1}),t(" for managing animation assignments, so while you might use the Node encoder most of the time, chances are you'll still want to use the web version regularly.")]),z,P,e("p",null,[t("If you find yourself constantly making small changes to your content and regenerating your "),$,t(" very frequently, it may be worthwhile to install "),e("a",H,[t("Node.js"),o(n)]),t(" so you can use the "),o(a,{to:"/encoder.html#cli-encoder"},{default:r(()=>[t("CLI version of the encoder")]),_:1}),t(" instead.")]),K])}const ee=s(c,[["render",Q],["__file","what_youll_need.html.vue"]]);export{ee as default};
