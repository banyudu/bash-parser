# bash-parser

Parses bash source code to produce an AST

This fork is maintained at `github.com/banyudu/bash-parser`.

# Installation

```bash
npm install github:banyudu/bash-parser
```

# Usage

```js
  const parse = require('bash-parser');
  const ast = parse('echo ciao');
```

`ast` result is:

```js
{
		type: "Script",
		commands: [
			{
				type: "SimpleCommand",
				name: {
					text: "echo",
					type: "Word"
				},
				suffix: [
					{
						text: "ciao",
						type: "Word"
					}
				]
			}
		]
	}
```

# Related projects

* [cash](https://github.com/dthree/cash) - This parser should become the parser used by `cash` (and also [vorpal](https://github.com/dthree/vorpal))
* [nsh](https://github.com/piranna/nsh) - This parser should become the parser used by `nsh`
* [js-shell-parse](https://github.com/grncdr/js-shell-parse) - bash-parser was born as a fork of `js-shell-parse`, but was rewritten to use a `jison` grammar
* [jison](https://github.com/zaach/jison) - Bison in JavaScript.

# Documentation

Look in the [documents folder](./documents).

# License

The MIT License (MIT)

Copyright (c) 2016 vorpaljs
Copyright (c) 2026 banyudu
