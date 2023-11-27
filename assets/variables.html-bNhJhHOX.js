import{_ as i,r as n,o as h,c as l,b as a,d as e,e as s,w as o,a as r}from"./app-MrF-XoWp.js";const c={},d=r('<h1 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h1><p>There are only a few Mage Game Engine (MGE) variables available for <a href="../scripts">script</a> to use.</p><p>Variables don&#39;t have to be declared before they can be used; simply using an <a href="../actions">action</a> that sets or checks one will cause the encoder to include it in the <code>game.dat</code>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This means typos can be hard to spot. If you set <code>birthdayparty</code> but check <code>birthday_party</code>, the encoder will create and store both variables as if they were separate things.</p><p>If you find a variable isn&#39;t triggering logic checks in the ways you expect, you might want to verify that it&#39;s spelled the same wherever it&#39;s set/used.</p></div><p>All variables are persistent between <a href="../maps/map_loads">map loads</a> because all are all included in the <a href="../scripts/save_data">save data</a>.</p>',5),p={class:"custom-container details"},u=a("summary",null,"For some dubious alternatives...",-1),f=a("a",{href:"../entities/entity_properties"},"property",-1),m=a("a",{href:"../entities"},"entity",-1),_=a("a",{href:"../maps/map_loads"},"map load",-1),b=r('<h2 id="warp-state" tabindex="-1"><a class="header-anchor" href="#warp-state" aria-hidden="true">#</a> <code>warp_state</code></h2><p>This is a global <strong>string</strong> that is designated for controlling player spawn behavior on a map&#39;s <a href="../scripts/on_load"><code>on_load</code></a> script. When you <a href="../techniques/doors">leave a room</a> (or otherwise trigger a new <a href="../maps">map</a> to load), the <code>warp_state</code> string should be set to something that indicates the exit/entrance point so the next map can teleport the player entity to the appropriate <a href="../techniques/spawn_points">spawn point</a>.</p><p>Handling player spawn points is the original purpose for <code>warp_state</code>, but there&#39;s nothing stopping you from using it for other things, too.</p><p>NOTICE: You only get 1 such string!</p><h2 id="integer-variables" tabindex="-1"><a class="header-anchor" href="#integer-variables" aria-hidden="true">#</a> Integer Variables</h2><p><strong>Integer</strong> variables are technically <code>uint16_t</code>, meaning they can be any whole number between <code>0</code> and <code>65535</code>. (NOTE: no negative numbers.)</p><p>The default value for these is <code>0</code>.</p><p>You may have up to 255 of these. You need not declare them before you use them; simply using them will allow the encoder to initialize them.</p><h2 id="save-flags" tabindex="-1"><a class="header-anchor" href="#save-flags" aria-hidden="true">#</a> Save Flags</h2><p>Save flags are <strong>booleans</strong> with arbitrary names (strings) that can be used for various logic checks. You may have up to 65535 of these.</p><p>Common use cases for save flags include tracking whether the player has:</p><ul><li>heard specific entities&#39; backstories</li><li>seen specific <a href="../techniques/cutscenes">cutscenes</a></li><li>completed specific puzzles</li><li>found specific secrets</li></ul><p>You will likely need to employ <a href="../techniques/chains_of_small_checks">chains of small checks</a> at the beginning of your <a href="../maps">map</a>&#39;s <a href="../scripts/on_load"><code>on_load</code></a> <a href="../scripts">script</a> to initialize the map based on the states of save flags like those above.</p><p>Save flags persist through map loads because they are part of the save game data.</p><h2 id="variable-types" tabindex="-1"><a class="header-anchor" href="#variable-types" aria-hidden="true">#</a> Variable Types</h2>',15),g=a("li",null,[e("String (1 max): "),a("a",{href:"variables#warp-state"},"warp_state")],-1),v=r('<h2 id="other-state" tabindex="-1"><a class="header-anchor" href="#other-state" aria-hidden="true">#</a> Other State</h2><p>These states are not preserved in game saves, and they are all <code>true</code> by default. #verifyme</p><p>Control of the player entity can be removed or restored with the action <a href="../actions/SET_PLAYER_CONTROL">SET_PLAYER_CONTROL</a>. When player control is off, the player cannot move, use the hex editor, or engage with entities. This is useful if you want to force the player entity to walk along a specific path for a <a href="../techniques/cutscenes">cutscene</a>, or want to make sure the player doesn&#39;t walk away from a conversation where an NPC pauses speaking for a minute to (for instance) pace back and forth.</p><p>Similarly, the hex editor can be enabled/disabled with the action <a href="../actions/SET_HEX_EDITOR_CONTROL">SET_HEX_EDITOR_CONTROL</a>, and the copy function for the hex editor can be enabled/disabled with the action <a href="../actions/SET_HEX_EDITOR_CONTROL_CLIPBOARD">SET_HEX_EDITOR_CONTROL_CLIPBOARD</a>.</p><p>#updateme What other state control actions are there?</p>',5);function y(w,T){const t=n("RouterLink");return h(),l("div",null,[d,a("details",p,[u,a("p",null,[e("Every "),f,e(" on every "),m,e(" is available for scripts to read and/or change, and might be used like normal variables. However, in practice, these might have limited utility because the player can "),s(t,{to:"/hex_editor.html"},{default:o(()=>[e("change these values directly")]),_:1}),e(" and these values are reset upon "),_,e(".")])]),b,a("ul",null,[g,a("li",null,[e("Integers (255 max): "),s(t,{to:"/scripts/variables.html#integer-variables"},{default:o(()=>[e("integer variables")]),_:1}),e(" (uint16_t)")]),a("li",null,[e("Booleans (65,535 max): "),s(t,{to:"/scripts/variables.html#save-flags"},{default:o(()=>[e("save flags")]),_:1})])]),v])}const x=i(c,[["render",y],["__file","variables.html.vue"]]);export{x as default};