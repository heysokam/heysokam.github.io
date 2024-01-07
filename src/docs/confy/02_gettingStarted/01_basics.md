# Basics
A simple build file you could look like:
```nim
import confy

let code = srcDir.glob()   # Get our source by grabbing all code from the `srcDir` folder
var bin  = Program.new(    # Build an executable program
  src = code,              # Define our source code
  trg = "hello",           # Define our binary
)

bin.build()                # Order to build
```
With this setup, your binary will:
```md
- Find its source code files by taking all `.c` files inside the `ROOT/src` folder
- Output the resulting binary into:
  - Folder      : `confy.cfg.binDir`, which is `ROOT/bin`.
  - Binary name : `hello.exe` on windows, `hello` on linux, `hello.app` on mac
```
> This means that your application will be output to: `ROOT/bin/hello.exe`  
