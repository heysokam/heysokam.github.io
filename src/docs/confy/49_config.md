---
pagination_next: null
---
# Configuration API
:::note[howto]
To change any of these options:  
Add `cfg.theVariable = value` at the top of your `build.nim` file.  
:::

:::warning
This list might not be fully in sync.  
Refer to @[confy/cfg.nim](https://github.com/heysokam/confy/tree/master/src/confy/cfg.nim) if something is not quite right.  
:::
```nim
import confy
```
```nim
# General
cfg.verbose      = off          ## Makes the cli output information completely verbose. (for debugging)
cfg.quiet        = on           ## Makes the cli output information to be as minimal as possible.  (for cleaner cli output)  (default: on)
cfg.fakeRun      = off          ## Everything will run normally, but commands will not really be executed if set to `on`.
cfg.cores        = 0.8 * cores  ## Total cores to use for compiling.  (default = 80% of max)
cfg.prefix       = "confy: "    ## Prefix that will be added at the start of every command output.
cfg.tab          = "     : "    ## Tab that will be added at the start of every new line belonging to the same message.
```
```nim
# Shell Tools
cfg.gitBin       = "git"        ## Binary to call for running `git` tasks.
```
```nim
# Folders
cfg.rootDir      = build/".."          ## Assumes the build.nim file output is stored inside root/bin/, so going back one gets to `REPO/*`
cfg.srcDir       = rootDir/"src"       ## Root Folder where source code files are searched for first (source code root)
cfg.binDir       = rootDir/"bin"       ## Root Folder where files will output (binary output root)
cfg.libDir       = rootDir/"lib"       ## Root Folder where libraries are stored
cfg.docDir       = rootDir/"doc"       ## Root Folder where the documentation files will go
cfg.examplesDir  = rootDir/"examples"  ## Root Folder where the examples for the project are stored
cfg.testsDir     = rootDir/"tests"     ## Root Folder that contains the test suite of the library/project
cfg.cacheDir     = binDir/".cache"     ## Subfolder where the compilation cache data is output
cfg.zigDir       = binDir/".zig"       ## Subfolder where the zig binaries will be stored
```
```nim
# Files
cfg.file    = "build.nim"             ## File used for storing the builder config/app. Searched for @`srcDir/cfg.file`
cfg.zigJson = zigDir/"versions.json"  ## Zig download index json file. Will be created when the ZigCC binaries are downloaded.
```
```nim
# Compilation
## Flags  (see confy/flags.nim for details)
cfg.flagsC   = cfg.flags(C)      ## C   : Preset Flags object for all warnings and errors active
cfg.flagsCpp = cfg.flags(Cpp)    ## C++ : Preset Flags object for all warnings and errors active

## Other options
cfg.Cstr            = "CC"         ## Prefix used for formatting the quiet output calls to the Compiler.
cfg.Lstr            = "LD"         ## Prefix used for formatting the quiet output calls to the Linker.
cfg.zigcc.systemBin = off          ## Uses the System's ZigCC path when on, without downloading a new version from the web.

## Nim-specific
cfg.nim.cc      = "nim"  ## Binary to call when running nim operations.
cfg.nim.backend = "c"    ## Builds nim applications with this backend. Will be `nim {backend} thefile.nim`

### Nim-unsafe options for ZigCC
cfg.nim.unsafe.functionPointers = off  ## Builds nim applications with the `-Wno-incompatible-function-pointer-types` flag
```
