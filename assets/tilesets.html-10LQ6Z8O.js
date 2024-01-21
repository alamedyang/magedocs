import{_ as e,o as t,c as i,a}from"./app-QP0mOFOG.js";const s="/magedocs/assets/tileset-example-bpluKvl_.png",o="/magedocs/assets/spritesheet-example-sdISR86U.png",n="/magedocs/assets/tiled-collision-editor-GxZuNkYd.png",r={},l=a('<h1 id="tilesets" tabindex="-1"><a class="header-anchor" href="#tilesets" aria-hidden="true">#</a> Tilesets</h1><p>A tileset is a series of images on a grid of uniform size used to modularly create larger images.</p><h2 id="map-tilesets" tabindex="-1"><a class="header-anchor" href="#map-tilesets" aria-hidden="true">#</a> Map Tilesets</h2><p><img src="'+s+'" alt="example tileset"></p><p>Map tilesets contain square blocks of terrain which can be used for building the <a href="maps">world</a>. There is no required structure for how the tiles should be arranged, but ordinarily, similar tiles are placed near each other. A map tileset is not expected to be animated.</p><p>All <strong>tileset tiles need to be perfect squares</strong> because tiles can be rotated or flipped on either axis when building maps.</p><h2 id="spritesheets" tabindex="-1"><a class="header-anchor" href="#spritesheets" aria-hidden="true">#</a> Spritesheets</h2><p><img src="'+o+'" alt="example spritesheet"></p><p><strong>Spritesheets</strong> are tilesets that contain every iteration of a sprite needed for its animations.</p><p>Spritesheets are handled like tilesets within Tiled and the <a href="encoder">encoder</a>. They are not required to be square, but non-square spritesheets are currently (as of Nov 2023) bugged, and may crash the game once the tile goes offscreen, so best to keep everything square for now.</p><h2 id="other-kinds-of-tilesets" tabindex="-1"><a class="header-anchor" href="#other-kinds-of-tilesets" aria-hidden="true">#</a> Other Kinds of Tilesets</h2><p>You&#39;ll need to make tilesets in Tiled for dialog box skin(s) and entity talk portraits, too.</p><p>Beyond making sure the tiles are the right size, you do not need to do anything special to these files.</p><p>Put dialogSkin files in <code>tilesets/</code> and entity portraits in <code>entities/</code>. (See: <a href="mage_folder#scenario_source_files"><code>scenario_source_files</code></a>)</p><h2 id="mge-considerations" tabindex="-1"><a class="header-anchor" href="#mge-considerations" aria-hidden="true">#</a> MGE Considerations</h2><h3 id="tile-size" tabindex="-1"><a class="header-anchor" href="#tile-size" aria-hidden="true">#</a> Tile Size</h3><p>For tilesets and spritesheets, tiles <strong>should not exceed 128x128 in size</strong> or the game may not run on the badge hardware.</p><p>If you need to play animations larger than this, such as an animated logo on a menu screen, you can split the tile into several pieces and place them on a map in such a way that they appear to be a single unit. (This won&#39;t work for entities that need to move around on their own, however.)</p><h3 id="transparency" tabindex="-1"><a class="header-anchor" href="#transparency" aria-hidden="true">#</a> Transparency</h3><p><strong>You cannot have partially transparent pixels</strong>. Semi-transparent pixels are assigned by the encoder to be either fully opaque or fully transparent at a 50% threshold.</p><p>To encode alpha, the MGE repurposes the least-significant green bit in the RGB565 color encoding scheme. Because of this, the color 0x0200 (hex #004000, or rgb 0,64,0) will actually manifest as transparent within the MGE. Avoid using this color (or any color that becomes 0x0200 when converted to RGB565).</p><h3 id="pallet" tabindex="-1"><a class="header-anchor" href="#pallet" aria-hidden="true">#</a> Pallet</h3><p>The <a href="encoder">encoder</a> indexes the pallets of each image, and there is therefore a <strong>maximum of 256 colors per tileset image</strong>. If you need extra colors, consider splitting the tileset into multiple files — maps will quite happily use tiles from multiple tilesets with no trouble, provided the tiles are the correct size. The encoder will let you know if one of your tilesets is over the color limit.</p><div class="custom-container tip"><p class="custom-container-title">Best Practice</p><p>On embedded, pixel data is streamed from the ROM chip, but the tileset pallets must be held in RAM. Because RAM is very, very precious, <strong>please combine tilesets if there isn&#39;t a compelling reason to keep them in separate files</strong>. Entity sprite sheets are typically kept separate, for instance, but you might combine spritesheets for similar entities, or combine all character entity portraits. (And naturally, tilesets with differing tile sizes must be separate!)</p></div><h3 id="updating-tileset-images-on-the-fly" tabindex="-1"><a class="header-anchor" href="#updating-tileset-images-on-the-fly" aria-hidden="true">#</a> Updating Tileset Images on the Fly</h3><p>When you save changes to an image that Tiled is actively using, including changing its dimensions, the graphical changes are instantly reflected in all maps, tilesets, etc. within Tiled. This way, you can rapidly iterate on how something looks.</p><p>However, changes in image dimensions are <em>not</em> automatically perpetuated to the tileset&#39;s declared properties, and since the <a href="encoder">encoder</a> relies on those values to determine the tileset&#39;s size, this will cause problems: for tiles past the tileset&#39;s declared bounds, the pixel data will behave correctly, but random <a href="tilesets#tile-collisions">tile collisions</a> will be applied.</p><p><strong>Solution</strong>: Make any change whatsoever to the tileset inside of Tiled to have it recalculate those properties, then save. Alternatively, change the numbers yourself in a text editor.</p><h2 id="creating-a-tileset-json-file" tabindex="-1"><a class="header-anchor" href="#creating-a-tileset-json-file" aria-hidden="true">#</a> Creating a Tileset JSON File</h2><p>The <a href="encoder">encoder</a> cannot use image files outright — there must be an associated JSON file (made with Tiled) that explicitly defines the image file path and various other properties.</p><p>Within Tiled:</p><ol><li>Go to &quot;File &gt; New Tileset…&quot;</li><li>Name the file. Prefix the name with <code>tileset-</code> or <code>entity-</code> as appropriate.</li><li>For &quot;source,&quot; use the file explorer to choose the sprite sheet or tileset you want to use. (Please make sure the image file is in its final destination ahead of time. Moving it after assigning it can be a bit of a hassle.)</li><li>Set the tile width and height to the tile size of your image.</li><li>Save the tileset file: <ul><li>Set the format to JSON.</li><li>Set the correct destination folder: <code>scenario_source_files/entities/</code> for entities and their portraits, and <code>scenario_source_files/tilesets/</code> for everything else. (Keep in mind that Tiled will default to the file path of the last file currently open!)</li></ul></li></ol><p><strong>Alternative method (advanced)</strong>: if you are making pallet variations of the same sprite, and every other aspect (apart from the name and the image) are the same, you might copy the original tileset JSON file and manually change whatever is different between them.</p><h3 id="for-character-entities" tabindex="-1"><a class="header-anchor" href="#for-character-entities" aria-hidden="true">#</a> For Character Entities</h3><p>All tiles within a <a href="entity_types#character-entity">character entity</a> tileset must have the <code>Class</code> (formerly <code>Type</code>) property set to its <code>entity_type</code> name. You can find the &quot;Class&quot; property in the Properties view (i.e. panel/pane/frame), which you can make visible (if currently invisible) via &quot;View &gt; View and Toolbars &gt; Properties.&quot;</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can skip this part if you don&#39;t need the entity to be a character entity — if you want to leave it as an animation entity, such as a flickering candle or waving grass, it doesn&#39;t need to have an <code>entity_type</code> name at all.</p><p>See: <a href="entity_types">Entity Types</a></p></div><h3 id="tile-collisions" tabindex="-1"><a class="header-anchor" href="#tile-collisions" aria-hidden="true">#</a> Tile Collisions</h3><p><a href="maps">Map</a> <a href="tilesets">tilesets</a> should have collision polygons set for each relevant tile. This is done by selecting a tile and clicking the collision editor within Tiled:</p><p><img src="'+n+'" alt="the second icon is a pair of polygons"></p><p>For the MGE, each tile can have only one vector shape, and each vertex must fall within the bounds of the tile itself. (Vertices falling outside the tile will cause erratic collision behavior.)</p><p>It&#39;s helpful to turn on pixel snapping before drawing collision polygons (&quot;View &gt; Snapping &gt; Snap to Pixels&quot;).</p><div class="custom-container tip"><p class="custom-container-title">Best Practices</p><p>Very precise collision shapes are possible, but best practice is to avoid very concave shapes and to avoid diagonals for tiles that are expected to be placed adjacent to other tiles with collision.</p><p>When defining your collision polygons and designing your maps, it&#39;s good to test the tiles in their map contexts and determine whether the player character is able to push themselves inside one of these shapes.</p></div>',42),h=[l];function c(d,p){return t(),i("div",null,h)}const f=e(r,[["render",c],["__file","tilesets.html.vue"]]);export{f as default};