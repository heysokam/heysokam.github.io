---
title: confy | Comfortable and Configurable Buildsystem
sidebar_label: Introduction
sidebar_position: 00
---
# Introduction
Confy is a buildsystem for compiling C/C++/Nim code.  
You can expect: 
- Ergonomic, readable and minimal/simple syntax.  
- Behaves as a **library**.  
  _You own the binary that runs the compilation commands._  
- Easy **cross-compilation**.  
  _No compiler/buildsystem gymnastics. Cross-compilation is builtin._  

Example build file:
```nim
import confy

let code = srcDir.glob()   # Get our source by grabbing all code from the `srcDir` folder
var bin  = Program.new(    # Build an executable program
  src = code,              # Define our source code
  trg = "hello.exe",       # Define our binary
)

bin.build()                # Order to build
```

:::important
If this is your first time using Confy:  
Follow the [**Quickstart**](/confy/quickstart) guide to get up and running in just 5min ⏱️  
:::

Other notable features.
- **Sane** project configuration **defaults**.  
  _Fully configurable, but no need to repeat yourself._  

- **Imperative**, not declarative.  
  _You own the control flow of your buildsystem._  

- Inspired by SCons.  
  _But without Python, a typeless language that quickly falls apart as code size grows._  

- Builds with **ZigCC**.  
  _Builtin sanitizing, caching, cross-compilation, musl/glibc/others, etc, etc ..._

- No extra compilers or confusing setup.  
  _Confy auto-downloads the latest zigcc version for the host._  

There is a full **how-to** walkthrough in the [Confy: Getting Started](/confy/gettingStarted/intro) guide.  
See the @[examples](https://github.com/heysokam/confy/tree/master/examples) folder for references on to use and setup the buildsystem.  

:::note
_Note: ZigCC is the binary compiler used, but this doesn't mean we build Zig code._  
_This project is used to build C, C++ and Nim projects._  
:::


### Configuration
All the configuration variables are stored @[confy/cfg.nim](https://github.com/heysokam/confy/tree/master/src/confy/cfg.nim).  
Add `cfg.theVariable = value` at the top of your `build.nim` file to change any of them:  
```nim
import confy
cfg.srcDir  = "./code"   # Changes the source code folder from its default `rootDir/"src"`.  
cfg.binDir  = "./build"  # Changes the binaries output folder from its default `rootDir/"bin"`.  
cfg.verbose = on         # Makes the cli output information completely verbose. (for debugging)
cfg.quiet   = on         # Makes the cli output information to be as minimal as possible.  (for cleaner cli output)  (default: on)  
                         # Note: verbose = on will ignore quiet being active.  (default: off)  
```
See the [Configuration API](/confy/config) page, or the @[confy/cfg.nim](https://github.com/heysokam/confy/tree/master/src/confy/cfg.nim) file for the complete list of variables that can be modified.
