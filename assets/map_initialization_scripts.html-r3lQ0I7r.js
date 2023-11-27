import{_ as e,o as a,c as i,a as t}from"./app-oGoBbKgC.js";const s={},n=t('<h1 id="map-initialization-scripts" tabindex="-1"><a class="header-anchor" href="#map-initialization-scripts" aria-hidden="true">#</a> Map Initialization Scripts</h1><p>A lot of the game&#39;s logic will need to be redone in every <a href="../maps">map</a>&#39;s <a href="../scripts/on_load"><code>on_load</code></a> script since <a href="../entities/entity_properties">entity state</a> and other game state is <strong>reset</strong> when a <a href="../maps/map_loads">map is loaded or reloaded</a>.</p><p><a href="../actions/COPY_SCRIPT">COPY_SCRIPT</a> provides an easy means of reusing <a href="../scripts">scripting</a> behavior, comparable to functions.</p><div class="custom-container warning"><p class="custom-container-title">CHAPTER 1 WARNING</p><p>The chapter 1 version of the engine cannot use <code>COPY_SCRIPT</code> if the target script jumps to a second script, as only the actions from the first script will be copied! (See: <a href="../techniques/beginnings_middles_and_ends">Beginnings, Middles, and Ends</a>)</p></div><p>#expandme</p>',5),o=[n];function r(c,p){return a(),i("div",null,o)}const l=e(s,[["render",r],["__file","map_initialization_scripts.html.vue"]]);export{l as default};
