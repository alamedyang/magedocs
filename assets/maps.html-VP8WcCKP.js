import{_ as o,r,o as n,c as s,b as t,d as e,e as l,a}from"./app-GYgAq86M.js";const h={},c=a('<h1 id="maps" tabindex="-1"><a class="header-anchor" href="#maps" aria-hidden="true">#</a> Maps</h1><h2 id="creating-a-map-json-file" tabindex="-1"><a class="header-anchor" href="#creating-a-map-json-file" aria-hidden="true">#</a> Creating a Map JSON File</h2><p>Within Tiled:</p><ol><li>Go to &quot;File &gt; New Map…&quot;</li><li>Set the following properties: <ul><li>Orientation: Orthogonal</li><li>Tile layer format: CSV</li><li>Tile render order: Right Down</li></ul></li><li>Map size can be changed later, so don&#39;t worry about setting it correctly right now. <ul><li>The map size limit for the MGE is quite large. Don&#39;t worry about surpassing this limit. (What is the limit though? #researchthis )</li></ul></li><li>For Tile size, use the tile size for the tileset you intend to use for this map. (Black Mage Game tilesets are 32x32.)</li><li>Save the map file: <ul><li>Set the format to JSON.</li><li>Make sure the file name ends with <code>.json</code>.</li><li>Set the correct destination folder: <code>scenario_source_files/maps/</code>. (Careful, as Tiled will default to the file path of the last file currently open. You don&#39;t want to move this file later!)</li></ul></li></ol><p>You will be using the Tileset view a lot when working on a map, which you can make visible (if invisible) via &quot;View &gt; View and Toolbars &gt; Tileset.&quot;</p><p>For MGE maps, you&#39;ll be using tile layers and object layers alone:</p><h2 id="tile-layers" tabindex="-1"><a class="header-anchor" href="#tile-layers" aria-hidden="true">#</a> Tile Layers</h2>',7),d=t("strong",null,"X",-1),p=t("strong",null,"Z",-1),u={href:"https://doc.mapeditor.org/en/stable/manual/editing-tile-layers/",target:"_blank",rel:"noopener noreferrer"},m=a('<p>In the MGE, the topmost tile layer is drawn on top of entities. All others are drawn underneath. (Entities themselves are Y-indexed when drawn.)</p><div class="custom-container warning"><p class="custom-container-title">Appearance in Tiled vs MGE</p><p>Animations placed on a tile layer will <em>not</em> play back within the MGE, regardless of how things may appear within Tiled.</p><p>Similarly, placing a tile of the incorrect size on a map will result in divergent behavior between Tiled and the MGE. Make sure all tiles placed are the same size as the map&#39;s tileset.</p></div><h3 id="mge-tile-layer-considerations" tabindex="-1"><a class="header-anchor" href="#mge-tile-layer-considerations" aria-hidden="true">#</a> MGE Tile Layer Considerations</h3><p>Each additional layer adds overhead to the draw time. Currently, it&#39;s recommended to limit tile layers to three or less: one for the top (to appear above entities), and one or two for underneath (to appear below entities).</p><p>For the Black Mage Game, we use two base layers: one for the base terrain, and one for terrain doodads with alpha.</p><p>In addition, because each tile increases the draw time, it&#39;s best to remove tiles that are completely obscured by fully opaque tiles.</p><h2 id="object-layers" tabindex="-1"><a class="header-anchor" href="#object-layers" aria-hidden="true">#</a> Object Layers</h2><p>Vector polygons and points are placed on object layers, but tiles can be placed this way, too, if you use the &quot;Insert Tile&quot; button on the vector section of the toolbar (shortcut <strong>T</strong>) — and this is how entities are added to a map.</p><p>Vector objects are susceptible to <a href="vector_objects#coordinate-overflow">coordinate overflow</a>, so try to keep objects and all their vertices inside the map coordinate space (unless you actually want to yeet an entity to outer space).</p><div class="custom-container tip"><p class="custom-container-title">Best Practice</p><p>Particularly on maps with a lot going on, it&#39;s best to place objects on separate layers so you can easily hide or reveal specific objects, e.g.:</p><ul><li>the entities themselves</li><li>door and exit paths</li><li>cutscene paths and camera points</li></ul><p>It doesn&#39;t matter how many layers there are in terms of accommodating the <a href="encoder">encoder</a>, but it&#39;s best to place the layer for entities just below the topmost tile layer, at least, for the most accurate visual preview.</p></div><h3 id="placing-entities" tabindex="-1"><a class="header-anchor" href="#placing-entities" aria-hidden="true">#</a> Placing Entities</h3><p>Entities are placed as tiles on an object layer with the &quot;Insert Tile&quot; button (shortcut <strong>T</strong>). The <a href="entity_types">type of entity</a> placed and a few of its <a href="entity_properties">entity properties</a> are determined by which tile you use, but other entity properties must be explicitly set.</p><p>Entities are Y-indexed in the MGE, meaning they are rendered in front of or behind other entities according to their Y position. For entities being used as environment props, this can result in odd behavior (e.g. the player appearing underneath a bundle of cables if they walk too far behind it).</p><p>Each map can have a maximum of 64 entities.</p>',14);function f(y,b){const i=r("ExternalLinkIcon");return n(),s("div",null,[c,t("p",null,[e("Placing tiles is fairly intuitive, but know that you can press "),d,e(" to flip and "),p,e(" to rotate a tile you are about to place. See "),t("a",u,[e("Tiled's documentation"),l(i)]),e(" for more information.")]),m])}const w=o(h,[["render",f],["__file","maps.html.vue"]]);export{w as default};
