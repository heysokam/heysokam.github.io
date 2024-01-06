# Configuration
:::important
Confy has sane defaults preconfigured.  

You don't need to specify or change any of these options.  
The minimal setup of the [Quickstart](/confy/quickstart) guide has everything required.  

That said, if you want a different setup, you can have it by changing the options described here and in the [Configuration API](/confy/config) page.
:::

## Buildsystem Customization
All the configuration variables are stored @[confy/cfg.nim](https://github.com/heysokam/confy/tree/master/src/confy/cfg.nim).  
To change them, just add `cfg.theVariable = value` at the top of your `build.nim` file.  

```nim
import confy
cfg.srcDir  = "./code"
cfg.binDir  = "./build"
cfg.verbose = off
cfg.quiet   = on
```
> See the @[config.md](https://github.com/heysokam/confy/tree/master/doc/config.md) doc file, or @[confy/cfg.nim](https://github.com/heysokam/confy/tree/master/src/confy/cfg.nim) for the complete list of variables that can be modified.

