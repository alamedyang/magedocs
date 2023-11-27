import{_ as n,r as o,o as a,c as s,b as t,d as e,e as r,w as c,a as h}from"./app-MrF-XoWp.js";const l={},_=t("h1",{id:"on-interact",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#on-interact","aria-hidden":"true"},"#"),e(),t("code",null,"on_interact")],-1),d=t("p",null,[e("See: "),t("a",{href:"../scripts/script_slots"},"Script Slots")],-1),p=t("a",{href:"../entities"},"entity",-1),f=t("code",null,"on_interact",-1),u=t("a",{href:"../scripts"},"script",-1),m=h('<p>Scripts run in the <code>on_interact</code> slot will stop once they reach the end of their list of actions. Very commonly, a <a href="../entities/entity_types#character-entity">character entity</a>&#39;s <code>on_interact</code> script will be the start script of their <a href="../dialogs">dialog</a> tree.</p><p>If the script in this slot jumps to another script at some point, interacting with that entity again will result in the last-used script being run again, not whatever the original <code>on_interact</code> script was. Therefore, if you wish an entity to begin all interactions with the first script in its interact tree, you must explicitly <a href="../actions/SET_ENTITY_INTERACT_SCRIPT">reset</a> its <code>on_interact</code> script at the end of each of its script <a href="../techniques/beginnings_middles_and_ends">branches</a>.</p>',2);function w(y,g){const i=o("RouterLink");return a(),s("div",null,[_,d,t("p",null,[e("If the player presses the interact button and the interact hitbox hits another "),p,e(", that entity's "),f,e(),u,e(" will run. (You can watch this happen with "),r(i,{to:"/debug_tools.html#vector-view"},{default:c(()=>[e("vector view")]),_:1}),e(".)")]),m])}const v=n(l,[["render",w],["__file","on_interact.html.vue"]]);export{v as default};
