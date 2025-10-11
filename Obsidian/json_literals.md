# JSON Literals

Primarily used for unit tests (to allow action debugging separate from MGS debugging) and for trying out new actions before they are implemented in MGS. Use these inside a [[scripts|script body]].

**Syntax**: `json[<comma-separated JSON objects>] <";"?>`

```mgs
script json_example {
	json[
		{
			"action": "NON_BLOCKING_DELAY",
			"duration": 1000
		},
		{
			"action": "SHOW_DIALOG",
			"dialog": "example"
		}
	];
}
```

- The keyword `json` is followed by a pair of matching square brackets, effectively a JSON array.
- Each JSON object inside the top level array is a single [[actions|bytecode instruction]].
- These are added to the JSON output with no MGS interpretation or validation (apart from `COPY_SCRIPT`, which is handled on the MGS side for debugging reasons).
- JSON literals must contain legal JSON.
    - No trailing commas.
    - Property names must be wrapped in double quotes.
- Fun fact: the whole JSON array is not parsed as a single unit. Each interior action is parsed separately to allow for more granular error handling.
