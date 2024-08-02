import{_ as e,o as a,c as t,a as o}from"./app-j-XjLWpf.js";const i={},n=o('<h1 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h1><p>Commands can be <a href="actions/REGISTER_SERIAL_DIALOG_COMMAND">registered</a>, after which the player can type the command into the serial <a href="terminal">terminal</a> to run a script.</p><p>The first word is considered to be the command itself, a.k.a. the <strong>verb</strong>. Everything afterward is considered to be the command&#39;s <strong>argument</strong>. (You may register a script to be run in the event a command is attempted with an invalid argument.)</p><p>All custom command registrations are lost upon a map load.</p><h2 id="mge-command-interpretation" tabindex="-1"><a class="header-anchor" href="#mge-command-interpretation" aria-hidden="true">#</a> MGE Command Interpretation</h2><ul><li>Words are split by whitespace when interpreted. The number of spaces does not matter. <code>GO      NORTH</code> is equivalent to <code>GO NORTH</code>.</li><li>Case is ignored. <code>go north</code> is equivalent to <code>GO NORTH</code> (and <code>gO nOrTh</code>).</li><li>The second word in a command is ignored if it is &quot;AT&quot; or &quot;TO&quot;. <code>LOOK AT BOB</code> is equivalent to <code>LOOK BOB</code></li><li>Non-ASCII characters are not explicitly handled, so the MGE may interpret complex characters as one (or more) entirely different characters.</li></ul><h2 id="default-commands" tabindex="-1"><a class="header-anchor" href="#default-commands" aria-hidden="true">#</a> Default Commands</h2><p>These commands are built into the MGE.</p><p>Importantly, none of these default command words are reserved, so you may register custom arguments, e.g. <code>GO DENNIS</code> for a map without a &quot;DENNIS&quot; exit. Just know that these custom registrations will not appear in the list of exits provided by LOOK.</p><h3 id="universal" tabindex="-1"><a class="header-anchor" href="#universal" aria-hidden="true">#</a> Universal</h3><ul><li><strong>HELP</strong>: lists all commands that are currently registered, excluding: <ul><li>Commands that have been <a href="actions/SET_SERIAL_DIALOG_COMMAND_VISIBILITY">hidden</a></li><li>Command aliases (e.g. <code>I</code> for <code>INVENTORY</code>)</li></ul></li></ul><h3 id="per-map" tabindex="-1"><a class="header-anchor" href="#per-map" aria-hidden="true">#</a> Per Map</h3><p>A map&#39;s exits and script slots are defined in the map&#39;s <a href="mage_folder#maps-json"><code>maps.json</code> definition</a>.</p><ul><li><strong>LOOK</strong>: runs the map&#39;s <code>on_look</code> script, and prints the names of exits associated with that map.</li><li><strong>LOOK + entity&#39;s current name</strong>: runs the script in that entity&#39;s <code>on_look</code> slot.</li><li><strong>GO + name of one of the map&#39;s exits</strong>: runs the script associated with that exit name. <ul><li>Abbreviations of the cardinal directions are built into GO, so <code>GO N</code> will try to run <code>GO NORTH</code>. This also applies to the diagonals, e.g. <code>GO SW</code> for <code>GO SOUTHWEST</code>.</li></ul></li></ul><h2 id="relevant-actions" tabindex="-1"><a class="header-anchor" href="#relevant-actions" aria-hidden="true">#</a> Relevant actions</h2><ul><li><a href="actions/REGISTER_SERIAL_DIALOG_COMMAND">REGISTER_SERIAL_DIALOG_COMMAND</a></li><li><a href="actions/UNREGISTER_SERIAL_DIALOG_COMMAND">UNREGISTER_SERIAL_DIALOG_COMMAND</a></li><li><a href="actions/REGISTER_SERIAL_DIALOG_COMMAND_ARGUMENT">REGISTER_SERIAL_DIALOG_COMMAND_ARGUMENT</a></li><li><a href="actions/UNREGISTER_SERIAL_DIALOG_COMMAND_ARGUMENT">UNREGISTER_SERIAL_DIALOG_COMMAND_ARGUMENT</a></li><li><a href="actions/REGISTER_SERIAL_DIALOG_COMMAND_ALIAS">REGISTER_SERIAL_DIALOG_COMMAND_ALIAS</a></li><li><a href="actions/UNREGISTER_SERIAL_DIALOG_COMMAND_ALIAS">UNREGISTER_SERIAL_DIALOG_COMMAND_ALIAS</a></li><li><a href="actions/SET_SERIAL_DIALOG_COMMAND_VISIBILITY">SET_SERIAL_DIALOG_COMMAND_VISIBILITY</a></li></ul>',16),r=[n];function s(d,c){return a(),t("div",null,r)}const h=e(i,[["render",s],["__file","commands.html.vue"]]);export{h as default};