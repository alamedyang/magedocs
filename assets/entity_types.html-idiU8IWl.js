import{_ as e,o as t,c as a,a as i}from"./app-GYgAq86M.js";const n="/magedocs/assets/sheep-rotating-XI-RyUjf.gif",o="/magedocs/assets/sheep-stable-uG23C48i.gif",r="/magedocs/assets/rake-rotating-xBxvSXZy.gif",s="/magedocs/assets/rake-stable-1NWKAVUT.gif",l={},c=i('<h1 id="entity-types" tabindex="-1"><a class="header-anchor" href="#entity-types" aria-hidden="true">#</a> Entity Types</h1><p>In the MGE, there are three types of <a href="entities">entities</a>. Each has a <code>PrimaryIdType</code> (determined by the type of tile being placed):</p><ul><li><code>0</code> = <a href="#tile-entity">tile</a> (<code>tileset</code>)</li><li><code>1</code> = <a href="#animation-entity">animation</a> (<code>animation</code>)</li><li><code>2</code> = <a href="#character-entity">character</a> (<code>entity_type</code>)</li></ul><p>For the first two types (tile and animation), the tile will rotate when the entity changes which direction it is &quot;facing,&quot; whereas the last type (character) will instead choose the correct <a href="animations">animation</a> among those it was <a href="tilesets/entity_management_system">assigned</a> (north, south, east, or west). Therefore entities that are meant to have standard character animations (like the sheep below) or that need to retain their appearance when moving around the <a href="maps">map</a> (like the rake below) <em>must</em> be the third type.</p><table><thead><tr><th style="text-align:left;">Rotating Tiles</th><th style="text-align:left;">Assigned Animations</th></tr></thead><tbody><tr><td style="text-align:left;">sheep (animation)</td><td style="text-align:left;">sheep (character)</td></tr><tr><td style="text-align:left;"><img src="'+n+'" alt="rotating rake"></td><td style="text-align:left;"><img src="'+o+'" alt="stable rake"></td></tr><tr><td style="text-align:left;">rake (tile)</td><td style="text-align:left;">rake (character)</td></tr><tr><td style="text-align:left;"><img src="'+r+'" alt="rotating rake"></td><td style="text-align:left;"><img src="'+s+'" alt="stable rake"></td></tr></tbody></table><p>In addition, there is currently no way to <a href="actions/SET_ENTITY_CURRENT_ANIMATION">control animations</a> with scripts unless the entity is a character entity. (See the the modem and bookcase in Chapter 1 of the Black Mage Game.)</p><h2 id="tile-entity" tabindex="-1"><a class="header-anchor" href="#tile-entity" aria-hidden="true">#</a> Tile Entity</h2><p>If you place a static (unanimated) tile from a <a href="Tilesets">tileset</a> onto an object layer in a Tiled <a href="maps">map</a>, it will become a <strong>tile entity</strong>.</p><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>If the tile&#39;s <code>Class</code> property is defined within <a href="mage_folder#entity_types-json"><code>entity_types.json</code></a>, it will instead become a <a href="#character-entity">character entity</a>.</p></div><ul><li><strong><code>PrimaryIdType</code></strong>: <code>0</code> (<code>tileset</code>)</li><li><strong><code>PrimaryId</code></strong>: the <code>id</code> of the tileset the entity is using</li><li><strong><code>SecondaryId</code></strong>: the <code>id</code> of the tile on the tileset (the Nth tile, counting left to right and top to down, 0-indexed)</li></ul><p>These are a simple way of making props interactable.</p><p>If you don&#39;t want an interactable prop to be be Y-indexed with other entities when drawn, you could instead put the prop in the map geometry itself and create a <a href="#null-entity">null entity</a> for the interactable aspects.</p><h3 id="null-entity" tabindex="-1"><a class="header-anchor" href="#null-entity" aria-hidden="true">#</a> Null Entity</h3><p>A null entity is a <a href="#tile-entity">tile entity</a> whose tile is entirely transparent. They&#39;re useful for implementing scripting behaviors not directly supported by the MGE, such as having an entity procedurally chase a moving (invisible) target.</p><p>A common use is to enable interaction behavior for things that aren&#39;t themselves entities. To do this, place a null entity on the map wherever you want interaction behavior to happen, then use the null entity&#39;s <a href="script_slots#on-interact"><code>on_interact</code></a> <a href="script_slots">script slot</a> for the interaction behavior.</p><p><strong>Disadvantages</strong>: The null entity can be hacked into another tile (presumably one with pixel data), in which case a new object will seemingly appear out of nowhere.</p><p>You cannot click on transparent pixels in Tiled. To select a null entity, you&#39;ll need to use the Layers pallet. To move one, change its X and Y values in the properties pane once you&#39;ve selected it.</p><h2 id="animation-entity" tabindex="-1"><a class="header-anchor" href="#animation-entity" aria-hidden="true">#</a> Animation Entity</h2><p>If you place a animated tile from a <a href="tilesets">tileset</a> onto an object layer in a Tiled <a href="maps">map</a>, it will become an <strong>animation entity</strong>.</p><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>If the tile&#39;s <code>Class</code> property is defined within <a href="mage_folder#entity_types-json"><code>entity_types.json</code></a>, it will instead become a <a href="#character-entity">character entity</a>.</p></div><ul><li><strong><code>PrimaryIdType</code></strong>: <code>1</code> (<code>animation</code>)</li><li><strong><code>PrimaryId</code></strong>: the <code>id</code> of the animation the entity is playing</li><li><strong><code>SecondaryId</code></strong>: does nothing</li></ul><p>When the game is <a href="encoder#web-encoder">encoded</a>, all animations are shoved together into a single list, so the <code>id</code> for <code>PrimaryId</code> is regularly subject to change. Therefore, you will never want to use the <code>PrimaryId</code> to choose a specific animation.</p><p>Animation entities are most useful for animated props, e.g. a water fountain, a torch flickering on a wall, a birthday cake with a moving candle flame. Such entities need not use any of the <a href="entity_properties">entity properties</a> available to them, though they could.</p><p>While NPCs will likely need to be character entities, simpler ones might work perfectly well as animation entities, e.g. WOPR in the Black Mage Game.</p><h2 id="character-entity" tabindex="-1"><a class="header-anchor" href="#character-entity" aria-hidden="true">#</a> Character Entity</h2><p>If you place a tile onto an object layer, and the <code>Class</code> (formerly <code>Type</code>) property of the tile has been defined in <a href="mage_folder#entity_types-json"><code>entity_types.json</code></a>, it will become an <strong>character entity</strong>.</p><ul><li><strong><code>PrimaryIdType</code></strong>: <code>2</code> (<code>entity_type</code>)</li><li><strong><code>PrimaryId</code></strong>: the <code>id</code> of the entity within <a href="mage_folder#entity_types-json"><code>entity_types.json</code></a></li><li><strong><code>SecondaryId</code></strong>: does nothing</li></ul><p>You need not manipulate <code>PrimaryId</code> to alter the appearance of a character entity. Instead, you can use <a href="actions">actions</a> that change the <code>entity_type</code> value to one of the ones defined within <a href="mage_folder#entity_types-json"><code>entity_types.json</code></a>.</p><p>What&#39;s special about character entities is that they can have a number of <a href="animations">animations</a> <a href="tilesets/entity_management_system">assigned</a> to them and they will switch animations automatically depending on context (walking or not, facing north/south/east/west, etc.), as well as having other attributes, like a default portrait image. <strong>NPCs will therefore likely be this type.</strong></p><p>In the MGE, character entities will default to their idle animation regardless of the tile that was placed Tiled. (I.e. if you use a &quot;walking animation&quot; tile for the entity on the Tiled map, the entity will appear to be walking in Tiled, but not within the MGE.)</p><p>Character entities will face the north by default, but if the tile placed has been <a href="tilesets/entity_management_system">assigned to a NSEW direction and a purpose</a>, the entity will instead face the direction associated with that tile&#39;s assignment.</p>',31),d=[c];function h(p,y){return t(),a("div",null,d)}const f=e(l,[["render",h],["__file","entity_types.html.vue"]]);export{f as default};
