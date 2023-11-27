import{_ as e,o as t,c as i,a}from"./app-oGoBbKgC.js";const s={},r=a('<h1 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> Scripts</h1><p>A <strong>script</strong> is an array of <a href="actions">actions</a> which will execute one after the other, top to bottom, when the script is run.</p><p>It doesn&#39;t strictly matter which file contains which script data, as long as the file is of the right type (either JSON or <a href="mgs/mgs_natlang">MGS Natlang</a>). Scripts therefore must have completely unique names, even if they are inside different script files, or are in different types of script files.</p><h2 id="relative-references" tabindex="-1"><a class="header-anchor" href="#relative-references" aria-hidden="true">#</a> Relative References</h2><p>See: <a href="entities/relative_entity_references">Relative Entity References</a></p><p>For all actions, <a href="entities/SELF"><code>%SELF%</code></a> refers to the entity running the script and <a href="entities/PLAYER"><code>%PLAYER%</code></a> refers to the player entity.</p><div class="custom-container tip"><p class="custom-container-title">Best Practice: `%SELF%` or the entity&#39;s given name?</p><p>Scripts involving only one entity (or one entity and the player) will do best to use <code>%SELF%</code>. For <a href="techniques/cutscenes">cutscenes</a> involving multiple characters, however, you might want to specify the entity specifically (by its given name) in case you have to change which entity is running the script.</p></div><h2 id="also-see" tabindex="-1"><a class="header-anchor" href="#also-see" aria-hidden="true">#</a> Also See</h2><ul><li><a href="scripts/script_slots">Script Slots</a><ul><li><a href="scripts/on_interact"><code>on_interact</code></a></li><li><a href="scripts/on_tick"><code>on_tick</code></a></li><li><a href="scripts/on_load"><code>on_load</code></a></li><li><a href="scripts/on_look"><code>on_look</code></a></li></ul></li><li><a href="scripts/null_script">null_script</a></li><li><a href="scripts/variable_types">Variable Types</a><ul><li><a href="scripts/warp_state">warp_state</a></li><li><a href="scripts/integer_variables">Integer Variables</a></li><li><a href="scripts/save_flags">Save Flags</a></li><li><a href="scripts/printing_current_values">Printing Current Values</a></li></ul></li><li><a href="scripts/comments_json">Comments (JSON)</a></li><li><a href="scripts/scripts_json">Scripts (JSON)</a></li><li><a href="mgs/script_block">Script Block</a> (<a href="mgs/mgs_natlang">MGS Natlang</a>)</li><li><a href="Actions">Actions</a></li></ul>',9),n=[r];function c(l,o){return t(),i("div",null,n)}const p=e(s,[["render",c],["__file","scripts.html.vue"]]);export{p as default};