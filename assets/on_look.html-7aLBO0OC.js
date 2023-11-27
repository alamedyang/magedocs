import{_ as e,o,c as t,a}from"./app-oGoBbKgC.js";const n={},r=a('<h1 id="on-look" tabindex="-1"><a class="header-anchor" href="#on-look" aria-hidden="true">#</a> <code>on_look</code></h1><p>See: <a href="../scripts/script_slots">Script Slots</a></p><p><code>on_look</code> <a href="../scripts">script</a> are run when the player uses the <code>look</code> command in the <a href="../hardware/terminal">terminal</a>.</p><p><code>look</code> on its own triggers the <a href="../maps">map</a>&#39;s <code>on_look</code> script. <code>look</code> + the <a href="../scripts/printing_current_values">current name</a> of an <a href="../entities">entity</a> will trigger that entity&#39;s <code>on_look</code> script.</p><p>If multiple entities in a map have the same <strong>given name</strong> (the name assigned to that entity within Tiled), and one or more of those entities have had their name changed, <code>look</code>ing at any of them will use the <a href="../scripts/printing_current_values">current name</a> of the first entity the map found with the shared <strong>given name</strong>.</p><p><code>on_look</code> scripts can be overridden with a manual <a href="../hardware/commands">command</a> registration.</p>',6),i=[r];function s(c,h){return o(),t("div",null,i)}const l=e(n,[["render",s],["__file","on_look.html.vue"]]);export{l as default};
