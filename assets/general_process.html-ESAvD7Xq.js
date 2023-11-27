import{_ as e,o as i,c as a,a as t}from"./app-oGoBbKgC.js";const o={},r=t('<h1 id="general-process" tabindex="-1"><a class="header-anchor" href="#general-process" aria-hidden="true">#</a> General Process</h1><p>An example production pipeline. The exact order can vary a bit, and previous steps might be revisited at any point.</p><h2 id="entities" tabindex="-1"><a class="header-anchor" href="#entities" aria-hidden="true">#</a> Entities</h2><p>Prepare entities. For each entity:</p><ol><li>Acquire or produce <a href="../tilesets">spritesheets</a>.</li><li>In Tiled, <a href="../tilesets/creating_a_tileset_json_file">make a tileset JSON file</a>. <ol><li>Put it in <code>scenario_source_files/entities/</code>.</li><li>For <a href="../entities/character_entity">character entities</a>, set the <code>Class</code> property for all tiles to what you want the entity&#39;s <code>entity_type</code> name to be.</li><li>Set frames and timings for your <a href="../tilesets/animations">animations</a>, if any. <ol><li>For <a href="../entities/character_entity">character entities</a>, prepare <a href="../tilesets/animations">animations</a> for at least idle, walking, and action.</li></ol></li></ol></li><li>For each <a href="../entities/character_entity">character entity</a>: <ol><li>Use the <a href="../encoder/web_encoder">web encoder</a> to <a href="../encoder/entity_management_system">assign animations and NSEW directions</a>.</li><li>Paste updated entity data into <a href="../structure/entity_types.json"><code>entity_types.json</code></a>.</li></ol></li><li>Prepare dialog portraits. <ol><li>In Tiled, <a href="../tilesets/creating_a_tileset_json_file">make a tileset JSON file</a> for the talk portrait images. <ol><li>Put it in <code>scenario_source_files/entities/</code>.</li></ol></li><li>Prepare <a href="../structure/portraits.json"><code>portraits.json</code></a>.</li><li>Assign portraits to their entities in <a href="../structure/entity_types.json"><code>entity_types.json</code></a> if the portrait name does not match an <a href="../entities/character_entity">entity_type</a> name.</li></ol></li></ol><h2 id="maps" tabindex="-1"><a class="header-anchor" href="#maps" aria-hidden="true">#</a> Maps</h2><p>Prepare map(s). For each map:</p><ol><li>Acquire or produce <a href="../tilesets">tilesets</a>.</li><li>In Tiled, <a href="../tilesets/creating_a_tileset_json_file">make a tileset JSON file</a>. <ol><li>Put it in <code>scenario_source_files/tilesets/</code>.</li><li>Set <a href="../tilesets/tile_collisions">tile collisions</a> for each tile.</li></ol></li><li>In Tiled, <a href="../maps">create a map</a> using the tileset(s) from above.</li><li>Place entities on the map. <ol><li>Set <a href="../entities/entity_properties">entity properties</a>, e.g. <ol><li><code>Name</code></li><li><code>is_player</code></li><li><a href="../scripts/on_tick"><code>on_tick</code></a> script</li><li><a href="../scripts/on_interact"><code>on_interact</code></a> script</li><li><a href="../scripts/on_look"><code>on_look</code></a> script</li></ol></li></ol></li><li><a href="../maps/vector_objects">Draw vector shapes</a>, (see <a href="../techniques/doors">Doors</a>) e.g. <ol><li>Walk paths</li><li>Doorways</li><li>&quot;Walking out the door&quot; paths</li><li>Camera targets</li></ol></li><li>Add the map to <a href="../structure/maps.json"><code>maps.json</code></a>, and supply properties like its <a href="../scripts/on_load"><code>on_load</code></a> and <a href="../scripts/on_tick"><code>on_tick</code></a> scripts.</li></ol><h2 id="dialog-skins" tabindex="-1"><a class="header-anchor" href="#dialog-skins" aria-hidden="true">#</a> Dialog Skins</h2><p>Prepare dialog skin(s). For each skin:</p><ol><li>Acquire or produce <a href="../tilesets">tilesets</a>.</li><li>In Tiled, <a href="../tilesets/creating_a_tileset_json_file">make a tileset JSON file</a>. <ol><li>Put it in <code>scenario_source_files/tilesets/</code>.</li></ol></li><li>Add dialogSkin file(s) to <a href="../structure/scenario.json"><code>scenario.json</code></a>.</li></ol><h2 id="game-logic" tabindex="-1"><a class="header-anchor" href="#game-logic" aria-hidden="true">#</a> Game Logic</h2><p>Prepare game behavior. You can either use MGS or JSON for this, or even a mix.</p><ol><li>For MGS files: write <a href="../mgs/mgs_natlang">MGS Natlang</a>. (See the natlang docs!)</li><li>For JSON files (note: you must add each JSON file to <a href="../structure/scenario.json"><code>scenario.json</code></a> or the game encoder won&#39;t see it): <ol><li>Prepare <a href="../dialogs">dialogs</a> inside <code>scenario_source_files/dialogs/</code>.</li><li>Prepare <a href="../dialogs/serial_dialogs">serial dialogs</a> inside <code>scenario_source_files/serial_dialogs/</code>.</li><li>Prepare <a href="../scripts">script</a> inside <code>scenario_source_files/scripts/</code>. <ol><li>Plan logic with flowcharts (optional)</li><li>Example scripts: <ol><li>Doorway watchers</li><li>&quot;Walking out the door&quot; behavior</li><li>Entity dialog</li><li>Cutscenes</li></ol></li></ol></li></ol></li></ol><h2 id="encode-game" tabindex="-1"><a class="header-anchor" href="#encode-game" aria-hidden="true">#</a> Encode Game</h2><p>Encode the <code>game.dat</code> using the <a href="../encoder/web_encoder">web encoder</a> or the <a href="../encoder/cli_encoder">CLI encoder</a>.</p><h2 id="play-test" tabindex="-1"><a class="header-anchor" href="#play-test" aria-hidden="true">#</a> Play Test</h2><p>Test the game in one of three ways:</p><ol><li><a href="../hardware/web_build">Web build</a>: <ol><li>Remember to use the web build appropriate for the version of the encoder you&#39;re using!</li><li>Drag the new <code>game.dat</code> into the browser window.</li><li>Run the game.</li></ol></li><li>Desktop build (see <a href="../getting_started/mge_vm">MGE VM</a>): 2. Move <code>game.dat</code> to the right place. 3. Run the game.</li><li>Verify on real badge hardware. <ol><li>Copy <code>game.dat</code> onto a microSD card.</li><li>Insert the microSD card into hardware.</li><li>Flash the game.</li><li>Run the game.</li></ol></li></ol>',19),l=[r];function s(n,c){return i(),a("div",null,l)}const h=e(o,[["render",s],["__file","general_process.html.vue"]]);export{h as default};
