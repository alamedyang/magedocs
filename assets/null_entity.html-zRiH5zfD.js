import{_ as e,o as t,c as n,a as i}from"./app-oGoBbKgC.js";const a={},o=i('<h1 id="null-entity" tabindex="-1"><a class="header-anchor" href="#null-entity" aria-hidden="true">#</a> Null Entity</h1><p>A null entity is a <a href="../entities/tile_entity">tile entity</a> whose tile is entirely transparent. They&#39;re useful for implementing scripting behaviors not directly supported by the MGE, such as having an entity procedurally chase a moving (invisible) target.</p><p>A common use is to enable interaction behavior for things that aren&#39;t themselves entities. To do this, place a null entity on the map wherever you want interaction behavior to happen, then use the null entity&#39;s <a href="../scripts/on_interact"><code>on_interact</code></a> <a href="../scripts/script_slots">script slot</a> for the interaction behavior.</p><p><strong>Disadvantages</strong>: The null entity can be hacked into another tile (presumably one with pixel data), in which case a new object will seemingly appear out of nowhere.</p><p>NOTE: Currently you cannot click on transparent pixels in Tiled. To select a null entity, you&#39;ll have to use the Layer pallet.</p>',5),l=[o];function r(s,c){return t(),n("div",null,l)}const p=e(a,[["render",r],["__file","null_entity.html.vue"]]);export{p as default};