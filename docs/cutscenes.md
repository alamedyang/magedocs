# Cutscenes

A cutscene is a cinematic or storytelling sequence, often involving:

- Camera moves
	- [Pan camera over time](actions#position-over-time)
	- Make cuts by [teleporting the camera](actions#position-assignment) to a different [spot](vector_objects) or [load a new map](actions#load-map)
	- [Fade camera in or out](actions#fade-camera-in-or-out) from black or arbitrary colors
- Dialog
	- [Show dialog cards](actions#show-dialog)
- Entity choreography
	- [Play back animations](actions#play-entity-animation)
	- [Turn entities toward things](actions#assign-direction-value) or [give them an arbitrary turn](actions#change-int-value)
	- [Teleport an entity](actions#position-assignment) to a [position](vector_objects) on the [map](maps)
	- [Make entities walk along a path](actions#position-over-time)
	- [Disguise an entity as another](actors)
- Setting [flags](state#save-flags)

### General Tips

- Separate the [script](scripts) for the choreography itself to make the parent script easier to read and the sequence easy to trigger when debugging it.
	- If you want to protect the script from arbitrary playback (since players can change the value of entity [script slots](scripts#script-slots) with the [hex editor](hex_editor)), either lock it behind logic checks within the same script or abstract it with [fns](fns) instead of [Copy Script](macros#copy-script).
- Multi-segment cutscenes: since you can [reset the map](maps#map-loads) at any point, long cutscenes punctuated by periods of player control may need to use a different save flag for each piece. The map's [`on_load`](scripts#on_load) (or whatever) can then to check for each piece and make the correct changes according to which parts of the cutscene have happened.
	- We did this for the TUESDAY cutscene in BMG2020. Otherwise, the player would have had to start the (long) cutscene over from scratch if they reset the map partway through — and since the "deja vu" book was in that room, there was a good chance of that.

### Credits Sequence

Traditional game credits can be accomplished with a separate credits [map](maps) and a [tileset](tilesets) for your credits text.

In your credit's [`on_load`](scripts#on_load), you should probably disable (or at least turn off the hex editor) before anything else happens. See [Assign Bool Value](actions#assign-bool-value).

To scroll the credits, lock the camera to a [vector path](vector_objects) and pan it along the path (or pan it to a destination object). (Camera panning to vector objects currently unimplemented (?); instead, lock the camera to a [null entity](entity_types#null-entity) and make it do the correct motion.)

To cut to another credits page, space your text according to the screen size and create vector objects for the camera to teleport between.

Don't forget to re-enable player control etc. when the credits are done.

Feel free to experiment with other styles of game credits; you need not be bound to traditional cinematic tropes. E.g. some games have a "credits" building featuring characters that correspond to the game's developers, and who might say a few sentences about what their job was.
