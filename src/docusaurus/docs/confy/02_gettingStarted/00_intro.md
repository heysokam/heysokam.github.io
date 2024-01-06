---
sidebar_label: "Confy: Getting Started"
---
# Overview
Confy is a Buildsystem for compiling C, C++ and Nim code.  
It is no more than an interface for calling the compilers themselves with a simpler syntax.  

All that confy does is call:  
`CC -o myfile.exe file.c file2.c`  
with the correct configuration for your project.  

:::note
Unlike other buildsystems, Confy is **not** a binary that you call.  
Confy is a **library** that you use from inside your Builder App.  
This is much more than a semantic difference.   

More details about this in the [Builder App](/confy/gettingStarted/builder/app) section,  
and the [Design Notes](/confy/internal/design#not-script) page.  
:::
