# Two Files: The Builder and the Caller
Confy is very different to make-like buildsystems.  
With confy, the buildsystem binary is **yours**.
- You control its flow.  
- You decide when you want to `MyTarget.build()`,  
- ... or when you want to do some low level systems programming/coding before any of that, if you so desire.  

You can do whatever you want. The builder application is yours.   

This is why you normally will have two files to setup your project:  
1. **Builder**: Where you define how to build your project.  
  `REPO/src/build.nim`  
2. **Caller**: Where you define how to build the builder itself.  
  `REPO/projectname.nimble` or `REPO/confy.nims`  

:::warning[important]
Like everything else in confy, you don't `need` this specific setup.  
This is here to make things ergonomic and easy to use.  
The only requirement is that you create a builder app with confy.  

The [Quickstart](/confy/quickstart) guide explains a very minimal alternative.
:::
