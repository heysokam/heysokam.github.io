# The Caller Script
_(aka `./project.nimble` or `./confy.nims`)_  

The Caller Script is a simple `nimscript` file that asks nim to compile your builder.  

The most minimal Caller Script file possible would be:
```nim
include confy/nims
confy()
```
That's it, really. The rest is just convenience.

To build the project you have two options:
- Run `nim confy.nims`
- Create a nimble task so you can build by running `nimble confy`:
  ```nim
  version = "0.1.0"
  author  = "Someone"
  # ...
  # other nimble related config here
  # ...

  task confy, "This task will build the project with confy":
    requires "https://github.com/heysokam/confy#head"
    exec "nim confy.nims"
  ```
:::note
Just like with the `example.nims` file, this is just convenience.  
The file can be called anything you want. It has no requirements.  
Just call the `confy()` function from nimscript and you are good to go.  
:::

:::important
You can build your `build.nim` Builder App however else you want.  
All the `confy()` function does is provide some sane preconfigured defaults for you to make it easier to run the Builder.  
:::
