# #wip features
## Keywords
> _WIP: this section needs a better explanation_  

```nim
make debug
make mytarget
make clean
```
`debug` `clean` `mytarget` etc... are all **Keywords**  
In confy, those keywords are defined when you call to build the target  
If you say:  
```nim
bin.build( keywords = @["thing", "otherkeyword"], run=true )
```
That means you *need* to call the confy builder with that keyword, otherwise it wont build that target because its filtered away.  
To trigger that keyword manually, you would have to say `build.exe thing` or `build.exe otherkeyword`.  

Currently _(v0.1.7)_ the `confy/nimble` file does not pass keywords into the builder. Only the `confy/nims` task does.  
Easiest way to work around this with nimble is to remove the keywords field and use version >= 0.1.7,  
which adds an implied `"all"` keyword that runs when you don't specify anything:  
```nim
var bin = Program.new("my/source/file.nim", "mytarget")
bin.build( run=true )  # <-- automatically implied:   keywords = @["all", "mytarget"]

# Build it with:
#>  ./bin/build.exe               <-- Implied "all"
#>  ./bin/build.exe all           <-- Explicit "all"
#>  ./bin/build.exe mytarget      <-- Explicit target name
```
