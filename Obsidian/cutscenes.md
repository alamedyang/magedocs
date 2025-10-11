# Cutscenes

A cutscene is a cinematic or storytelling sequence, often involving:

- Camera moves
	- [[actions#Position Over Time|Pan camera over time]]
	- Make cuts by [[actions#Position Assignment|teleporting the camera]] to a different [[vector_objects|spot]] or [[actions#Load Map|load a new map]]
	- [[actions#Fade Camera In or Out|Fade camera in or out]] from black or arbitrary colors
- Dialog
	- [[actions#Show Dialog|Show dialog cards]]
- Entity choreography
	- [[actions#Play Entity Animation|Play back animations]]
	- [[actions#Assign Direction Value|Turn entities toward things]] or [[actions#Change Int Value|give them an arbitrary turn]]
	- [[actions#Position Assignment|Teleport an entity]] to a [[vector_objects|position]] on the [[maps|map]]
	- [[actions#Position Over Time|Make entities walk along a path]]
	- [[actors|Disguise an entity as another]]
- Setting [[state#Save Flags|flags]]
	- When the player acquires an item
	- When the player first sees or hears something, like a character's backstory
	- When the player reaches certain cutscene checkpoints

### General Tips

- Separate the [[scripts|script]] for the choreography itself to make the parent script easier to read and the sequence easy to trigger easily when debugging it.
	- If you want to protect the script from arbitrary playback (since players can change the value of entity [[scripts#Script Slots|script slots]] with the [[hex_editor|hex editor]]), either lock it behind logic checks within the same script or abstract it with [[fns|fns]] instead of [[actions#Copy Script|Copy Script]].
- Multi-segment cutscenes: since you can [[maps#Map Loads|reset the map]] at any point, long cutscenes punctuated by periods of player control may need to use a different save flag for each piece. The map's `on_load` (or whatever) can then to check for each piece and make the correct changes according to which parts of the cutscene have happened.
	- We did this for the TUESDAY cutscene in BMG2020. Otherwise, the player would have had to start the (long) cutscene over from scratch if they reset the map partway through — and since the "deja vu" book was in that room, there was a good chance of that.

### Credits Sequence

Traditional game credits can be accomplished with a separate credits [[maps|map]] and a [[tilesets|tileset]] for your credits text.

In your credit's `on_load`, you should probably disable (or at least turn off the hex editor) before anything else happens. See [[actions#Assign Bool Value|Assign Bool Value]].

To scroll the credits, lock the camera to a [[vector_objects|vector path]] and pan it along the path (or pan it to a destination object). (Camera panning to vector objects currently unimplemented (?); instead, lock the camera to a [[entity_types#Null Entity|null entity]] and make it do the correct motion.)

To cut to another credits page, space your text according to the screen size and create vector objects for the camera to teleport between.

Don't forget to re-enable player control etc. when the credits are done/

Feel free to experiment with other styles of game credits; you need not be bound to traditional cinematic tropes. E.g. some games have a "credits" building featuring characters that correspond to the game's developers, and who might say a few sentences about what their job was.

---

[[index|Quick Links]]
