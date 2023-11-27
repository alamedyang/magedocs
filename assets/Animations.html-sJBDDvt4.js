import{_ as h,r as s,o as c,c as l,b as t,d as e,e as i,w as n,a as o}from"./app-MrF-XoWp.js";const d="/magedocs/assets/tiled-animation-editor-jAddPMcG.png",m={},p=o('<h1 id="animations" tabindex="-1"><a class="header-anchor" href="#animations" aria-hidden="true">#</a> Animations</h1><p>In Tiled, animations are assigned to tiles within the <a href="../tilesets">spritesheet</a>. To an assign an animation to a tile, select a tile — preferably something indicative of what the animation will be, such as a first step for a walking animation — and press the button for the animation editor, which looks like a movie camera:</p><p><img src="'+d+'" alt="the fourth icon is a movie camera"></p><p>You will then see a second window for assigning frames to your animation. Set the frame duration (in milliseconds), then double click on the desired tile to add it as a frame to the animation. You can adjust the timing of the frames or move/remove frames as you like, and you&#39;ll be able to see your changes live in the preview directly below.</p><h2 id="mge-animation-considerations" tabindex="-1"><a class="header-anchor" href="#mge-animation-considerations" aria-hidden="true">#</a> MGE Animation Considerations</h2><p>For <a href="../entities/entity_types#character-entity">character entities</a>, you need not prepare an animation for all cardinal directions — e.g. there is only a fright/shock animation in <em>Chrono Trigger</em> for the south direction.</p>',6),f=t("p",null,`The Mage Game Engine (MGE) animation system requires that each animation have at least two frames, though, so for animations that aren't actually "animated," you might set two of the same frame back-to-back. #verifythis`,-1),u=t("h2",{id:"animation-types",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#animation-types","aria-hidden":"true"},"#"),e(" Animation Types")],-1),y=t("a",{href:"../entities/entity_types#character-entity"},"character entities",-1),g=t("a",{href:"../structure/entity_types.json"},[t("code",null,"entity_types.json")],-1),w=o('<h3 id="idle" tabindex="-1"><a class="header-anchor" href="#idle" aria-hidden="true">#</a> Idle</h3><p>This is what the character entity does by default.</p><p>Usually the idle consists of long periods of stillness, followed by a brief fidget: a blink, a small movement of the head, a sheep chewing its cud etc. For flying entities, the idle will likely consist of the entity hovering in place.</p><p>The idle animation does not include things like turning around to face different things, nor should it include multiple kinds of fidgets that interact with complex timing. If you want an entity to do more complex behaviors when idle, including facing somewhere specific or playing back other kinds of animations once in a while (a sheep that performs a chewing animation twice a second but lowers its head to chomp a fresh mouthful of grass every 15 seconds), consider using an <a href="../scripts/on_tick"><code>on_tick</code></a> script to <a href="../techniques/handlers">handle</a> this instead.</p><p>Entities look far more alive with an idle animation, even if it&#39;s just an occasional blink. Regardless, while the entity need not <em>appear</em> to have an idle animation, the MGE still expects one, so you should define one, even if it&#39;s just the same two frames back-to-back.</p><p>Idle animations are expected to loop seamlessly.</p><div class="custom-container tip"><p class="custom-container-title">Best Practice</p><p>To avoid robotic synchronization between entities, try to stagger their animation timings by setting the <code>current_frame</code> property for that entity on their Tiled map or via <a href="../actions/SET_ENTITY_CURRENT_FRAME">SET_ENTITY_CURRENT_FRAME</a> inside a <a href="../scripts">script</a>.</p></div><h3 id="walking" tabindex="-1"><a class="header-anchor" href="#walking" aria-hidden="true">#</a> Walking</h3><p>This animation plays when entities move within the game. For flying or hovering entities without an explicit walk cycle, you can simply re-use the idle animation.</p><p>Walking animations are expected to loop seamlessly.</p><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h3><p>This animation plays for the player character when the player presses the &quot;action&quot; button. It can also be deliberately triggered for arbitrary character entities via a script.</p><div class="custom-container tip"><p class="custom-container-title">Best Practice</p><p>The engine uses the modulo of the animation index for playback, so if there is no action animation defined, likely the idle animation will play instead. If the idle animation is quite long, this means the entity will be frozen in place, doing apparently nothing, for some time. (For the player character, this also prevents the player from moving or doing anything else until the animation is finished.) Therefore, it&#39;s best to provide an action animation, even if there aren&#39;t sprite tiles prepared specifically for an action animation. Our recommendation is to copy the fidget portion of the idle and to keep it brief.</p></div><p>Action animations are not expected to loop. Instead they are expected to interrupt the idle/walk animation, play once, and then the idle/walk animation will resume.</p><h3 id="additional-animations" tabindex="-1"><a class="header-anchor" href="#additional-animations" aria-hidden="true">#</a> Additional Animations</h3><p>You can add additional animations after the first three, too, as you like.</p><p>Keep in mind that these animations can only be deliberately triggered by scripts, either for an arbitrary number of loops with <a href="../actions/PLAY_ENTITY_ANIMATION">PLAY_ENTITY_ANIMATION</a>, or indefinitely with <a href="../actions/SET_ENTITY_CURRENT_ANIMATION">SET_ENTITY_CURRENT_ANIMATION</a>.</p><p>Any animation set this way will be overridden by the walk animation if the character entity is compelled to move, and the entity will return to its idle after the walk motion is completed. Teleports don&#39;t count as &quot;movement&quot; in this case because entities don&#39;t switch to their walking animation when teleported.</p><h2 id="animation-transitions-and-vamping" tabindex="-1"><a class="header-anchor" href="#animation-transitions-and-vamping" aria-hidden="true">#</a> Animation Transitions and Vamping</h2>',19),_={href:"https://en.wikipedia.org/wiki/Ostinato#Musical_theater",target:"_blank",rel:"noopener noreferrer"},b=o('<ul><li><a href="../actions/PLAY_ENTITY_ANIMATION">PLAY_ENTITY_ANIMATION</a> with a <code>play_count</code> of <code>1</code> for the start transition</li><li><a href="../actions/SET_ENTITY_CURRENT_ANIMATION">SET_ENTITY_CURRENT_ANIMATION</a> for the &quot;vamp,&quot; or the portion you want to repeat for an indeterminate amount of time</li><li><a href="../actions/PLAY_ENTITY_ANIMATION">PLAY_ENTITY_ANIMATION</a> with a <code>play_count</code> of <code>1</code> for the end transition</li></ul><p>See Strong Bad in the Bob-Only Club cutscene in BMG2020 for an example of this approach.</p><h2 id="mge-animation-timing" tabindex="-1"><a class="header-anchor" href="#mge-animation-timing" aria-hidden="true">#</a> MGE Animation Timing</h2><p>Requirements:</p><ul><li>Animations must have less than 256 total frames.</li><li>Frames must be less than 65,535 milliseconds long.</li></ul><p>Animation frames will play for a minimum of one game frame regardless of duration (which, on the badge hardware, is currently in the ballpark of 130 ms, or 8 fps), so animations might play back very slowly in practice if you are frequently using short durations.</p><div class="custom-container tip"><p class="custom-container-title">Best Practice</p><p>Because animations are not aborted when a character entity faces a new direction (it picks up where it left off in the new direction), it is beneficial to keep each animation of the same type completely uniform in terms of frame count and frame duration. This includes animations with fewer unique frames than others of its type, such as an animation from behind (where the face is obscured).</p></div><p>In addition, we recommend making sure each animation of the same type uses the same tile rows for each frame, even if some of the tiles within the column are technically identical, so that future changes to any of the previously identical frames will not create the need for timing adjustments.</p><h2 id="assigning-animations-to-character-entities" tabindex="-1"><a class="header-anchor" href="#assigning-animations-to-character-entities" aria-hidden="true">#</a> Assigning Animations to Character Entities</h2>',9),T=t("a",{href:"../entities/entity_types#character-entity"},"character entities",-1);function k(v,A){const a=s("RouterLink"),r=s("ExternalLinkIcon");return c(),l("div",null,[p,t("p",null,[e("The "),i(a,{to:"/encoder.html"},{default:n(()=>[e("encoder")]),_:1}),e(" accommodates animation flipping with its "),i(a,{to:"/tilesets/entity_management_system.html"},{default:n(()=>[e("entity management system")]),_:1}),e(", so you don't need sprite tiles for both left-facing and right-facing sprites if you're comfortable with mirroring your left-facing and right-facing sprites.")]),f,u,t("p",null,[e("Three types of animations are built into the MGE for "),y,e(", and they are triggered in straightforward and predictable ways. "),g,e(" defines which animations are of which type, and they can be defined and adjusted within the "),i(a,{to:"/encoder.html"},{default:n(()=>[e("encoder")]),_:1}),e(" or manually with a text editor.")]),w,t("p",null,[e("An action animation cannot be started and held (or "),t("a",_,[e("vamped"),i(r)]),e(`) for an indeterminate length of time. If you want an action animation to behave this way, you'll need to split the animation into three pieces: the start transition, the "vamp," and the end transition. Trigger each with a script:`)]),b,t("p",null,[e("For "),T,e(", animations are assigned to an animation type (idle, walk, etc.) and a cardinal direction (north, east, etc.) elsewhere; this cannot be done with Tiled. The "),i(a,{to:"/tilesets/entity_management_system.html"},{default:n(()=>[e("entity management system")]),_:1}),e(" in the "),i(a,{to:"/encoder.html#web-encoder"},{default:n(()=>[e("web encoder")]),_:1}),e(" can help you assign animations to character entities if you don't want to do it by hand.")])])}const N=h(m,[["render",k],["__file","Animations.html.vue"]]);export{N as default};