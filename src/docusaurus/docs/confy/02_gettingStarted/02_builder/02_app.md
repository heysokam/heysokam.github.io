# The Builder App
_(aka `./src/build.nim`)_  

The Builder App is the actual application that will build your project.  
This is the only required part of confy.  
Compile the Builder App and run it. That's it.  

Following the trend of minimalism, lets make the previous example `src/build.nim` file even simpler:
```nim
import confy
Program.new( @["src/mycode.c"], "hello" ).build()
```
> That's all. The other options are just for changing the defaults.

You can build this file in whatever way you want, and running it will build your code as expected.  
The easiest way to do this is with the [Caller Script setup](#the-caller-script) described in the prev section.  
> _Alternative: Build+Run with `nim c -r src/build`_

