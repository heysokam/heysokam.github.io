# Supported Languages
## Differences between C, C++ and Nim
C/C++ are built exactly the same, and Nim compiles into C.  
The only difference between them is the files you send into the `src` variable.  
```nim
# If you want to build a Nim app:
let code = @[ srcDir/"myfile.nim" ]

# If you want to build a C app with only one file:
let code = @[ srcDir/"myfile.c" ]

# If you want to build a C++ app with only one file:
let code = @[ srcDir/"myfile.cpp" ]
```

## Nim
Nim has module dependency resolution.  
The only uniqueness for building Nim is that you can only send one `.nim` file for each object you build.  

## C and C++
In C and C++ you will need to send all of your source files, because the compiler doesn't understand dependency resolution.  
The `SomeFolder.glob(".ext")` function is created so that you don't need to explicitly list all files in your project manually,  
and -also- maintain the list manually _(which is a PITA, time consuming, and extremely error and bug prone)_.  

That said, you can also explicitely list the files manually if you so desire.  
This works for the same for both C and C++ files:
```nim
let code = @[
  "./mycode/file1.c",
  "./myother/file2.c",
  "./otherfolder/file4.c",
  # ... list 100 other files one by one in here ...
  ]
```
> _I would never recommend this, but... your project, your rules._



