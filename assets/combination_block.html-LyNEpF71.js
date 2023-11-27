import{_ as a,o,c as e,a as i}from"./app-oGoBbKgC.js";const l={},c=i('<h1 id="combination-blocks" tabindex="-1"><a class="header-anchor" href="#combination-blocks" aria-hidden="true">#</a> Combination Blocks</h1><p>Inside an <a href="../mgs/mgs_natlang">MGS Natlang</a> <a href="../mgs/script_block">script block</a>, some <a href="../actions">actions</a> can be <strong>combined</strong> with their associated definition <a href="../mgs/block">block</a>. In other words, you can &quot;call&quot; a <a href="../dialogs">dialog</a> or <a href="../dialogs/serial_dialogs">serial dialog</a> and define it in place.</p><p>For combination blocks of all types, a dialog name (<a href="../mgs/variables/string">string</a>) is optional. Omitting dialog names is recommended to keep things clean.</p><p>Blocks that can be combined:</p><ul><li><a href="../actions/SHOW_DIALOG">SHOW_DIALOG</a> + <a href="../mgs/dialog_block">Dialog Block</a> = <a href="../mgs/show_dialog_block">Show Dialog Block</a></li><li><a href="../actions/SHOW_SERIAL_DIALOG">SHOW_SERIAL_DIALOG</a> + <a href="../mgs/serial_dialog_block">Serial Dialog Block</a> = <a href="../mgs/show_serial_dialog_block">Show Serial Dialog Block</a></li></ul><p>#verifyme -- what about <code>concat serial dialog</code> and <code>set serial connect message</code>? Do they have combination blocks, too?</p>',6),s=[c];function n(t,r){return o(),e("div",null,s)}const h=a(l,[["render",n],["__file","combination_block.html.vue"]]);export{h as default};
