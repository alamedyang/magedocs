import{_ as e,o as a,c as t,a as r}from"./app-7-tBH-Mq.js";const i={},s=r('<h1 id="variable-types" tabindex="-1"><a class="header-anchor" href="#variable-types" aria-hidden="true">#</a> Variable Types</h1><p>There are only a few Mage Game Engine (MGE) variables available for <a href="../scripts">script</a> to use.</p><p>Variables don&#39;t have to be declared before they can be used; simply using an <a href="../actions">action</a> that sets or checks one will cause the encoder to include it in the <code>game.dat</code>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Typos can be hard to spot. If you set <code>birthdayparty</code> but check <code>birthday_party</code>, the encoder will create and store both variables as if they were separate things.</p><p>If you find a variable isn&#39;t triggering logic checks in the ways you expect, you might want to verify that it&#39;s spelled the same wherever it&#39;s set/used.</p></div><p>All variables are persistent between <a href="../maps/map_loads">map loads</a> because all are all included in the <a href="../scripts/save_data">save data</a>.</p><h2 id="variable-types-1" tabindex="-1"><a class="header-anchor" href="#variable-types-1" aria-hidden="true">#</a> Variable Types</h2><ul><li>String (1 max): <a href="../scripts/warp_state">warp_state</a></li><li>Integers (255 max): <a href="../scripts/integer_variables">integer variables</a> (uint16_t)</li><li>Booleans (65,535 max): <a href="../scripts/save_flags">save flags</a></li></ul><p>Every <a href="../entities/entity_properties">property</a> on every <a href="../entities">entity</a> is also available for scripts to read and/or change, and these could be used like traditional variables. But apart from the player&#39;s name, all entity properties are reset when a new map is loaded, so in practice they might have marginal utility.</p><h2 id="other-state" tabindex="-1"><a class="header-anchor" href="#other-state" aria-hidden="true">#</a> Other State</h2><p>These states are not preserved in game saves, and they are all <code>true</code> by default. #verifyme</p><p>Control of the player entity can be removed or restored with the action <a href="../actions/SET_PLAYER_CONTROL">SET_PLAYER_CONTROL</a>. When player control is off, the player cannot move, use the hex editor, or engage with entities. This is useful if you want to force the player entity to walk along a specific path for a <a href="../techniques/cutscenes">cutscene</a>, or want to make sure the player doesn&#39;t walk away from a conversation where an NPC pauses speaking for a minute to (for instance) pace back and forth.</p><p>Similarly, the hex editor can be enabled/disabled with the action <a href="../actions/SET_HEX_EDITOR_CONTROL">SET_HEX_EDITOR_CONTROL</a>, and the copy function for the hex editor can be enabled/disabled with the action <a href="../actions/SET_HEX_EDITOR_CONTROL_CLIPBOARD">SET_HEX_EDITOR_CONTROL_CLIPBOARD</a>.</p><p>#updateme What other state control actions are there?</p>',13),o=[s];function n(h,l){return a(),t("div",null,o)}const d=e(i,[["render",n],["__file","variable_types.html.vue"]]);export{d as default};