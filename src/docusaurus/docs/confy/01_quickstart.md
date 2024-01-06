---
sidebar_label: Quickstart - 5min ⏱️
sidebar_position: 01
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart
This minimal guide will get you started using confy as quickly as humanly possible.  

### Install [Nim](https://nim-lang.org)
Recommended: Follow the [choosenim](https://github.com/dom96/choosenim#installation) instructions.

### Create an empty folder
We will start with an empty folder just for this guide.
```bash
mkdir quickstart
cd quickstart
```
### Create a folder named `src`
```bash
mkdir ./src
```

### Add the source code
Add your source code file into the `src` folder.
<Tabs>
<TabItem value="c" label="C">
```c title="./src/hello.c"
#include <stdio.h>
int main(void) { printf("Hello World"); return 0; }
```
</TabItem>
<TabItem value="cpp" label="C++">
```cpp title="./src/hello.cpp"
#include <iostream>
int main(void) { std::cout << "Hello World!" << std::endl; return 0; }
```
</TabItem>
<TabItem value="nim" label="Nim">
```nim title="./src/hello.nim"
when isMainModule:
  echo "Hello World!"
```
</TabItem>
</Tabs>

### Create the Builder App
Create an new file called `build.nim` inside the `src` folder.
```nim title="./src/build.nim"
import confy
let hello = Program.new( @["hello.c"], "hello" )
hello.build()
```

### Build and Run the Builder App
```bash
nim c -r ./src/build.nim
```
That's it. This last step will build your code as expected.  
The resulting binary will be output to the `./bin` folder.  

### What's Next
If your project is simple enough you won't need anything else.  

The [Getting Started](/confy/gettingStarted/intro) guide will go into more details about confy and explain how to configure it further.

