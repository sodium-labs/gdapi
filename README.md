<div align="center">
<br />
    <h1>GD API</h1>
    <br />
    <p>
        <a href="https://discord.gg/8PDXWSHH7k"><img src="https://img.shields.io/discord/1336303640725553213?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
        <a href="https://www.npmjs.com/package/@sodiumlabs/gdapi"><img src="https://img.shields.io/npm/v/@sodiumlabs/gdapi.svg?maxAge=3600" alt="npm version" /></a>
        <a href="https://www.npmjs.com/package/@sodiumlabs/gdapi"><img src="https://img.shields.io/npm/dt/@sodiumlabs/gdapi.svg?maxAge=3600" alt="npm downloads" /></a>
        <a href="https://github.com/sodium-labs/gdapi/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/sodium-labs/gdapi?logo=github&logoColor=ffffff" /></a>
    </p>
</div>

# About

GD API is a module that allows you to easily interact with the Geometry Dash private API. The module documentation is available at [https://docs.sodiumlabs.xyz/gdapi](https://docs.sodiumlabs.xyz/gdapi).

This module does not include all features of the Geometry Dash API, such as endpoints that require user passwords. However, you can combine it with the knowledge from the [unofficial GD docs](https://wyliemaster.github.io/gddocs) to access everything if needed.

# Installation

```sh
npm install @sodiumlabs/gdapi@latest
```

# Links

- [Documentation](https://docs.sodiumlabs.xyz/gdapi)
- [Unofficial GD docs](https://wyliemaster.github.io/gddocs)
- [Discord server](https://discord.gg/8PDXWSHH7k)
- [GitHub](https://github.com/sodium-labs/gdapi)
- [npm](https://npmjs.com/package/@sodiumlabs/gdapi)
- [Sodium Labs](https://sodiumlabs.xyz)
- [Geometry Dash](https://www.geometrydash.com)

# Example

```js
import { GDAPI } from "@sodiumlabs/gdapi";

const gdapi = new GDAPI();

// Get RobTop account
const user = await gdapi.getUserById(71);
console.log(user);
```

# Help

If you don't understand something in the documentation, are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [Discord Server](https://discord.gg/8PDXWSHH7k).
