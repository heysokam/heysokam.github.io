# @deps std
when not defined(nimscript):
  import system/nimscript except dirExists, fileExists
import std/[ os,strutils ]

#_______________________________________
# @section Configuration options
#___________________
const thisDir = os.parentDir( currentSourcePath() )
const rootDir = thisDir/"src"/"hugo"
const binDir  = thisDir/"bin"
const hugoDir = binDir/"hugogit"
const hugoBin = binDir/"hugo"
const bunZip  = binDir/"bun.zip"
const bunBin  = binDir/"bun"
const Prefix  = "「web 」 "

#_______________________________________
# @section Commands
#___________________
proc sh   (cmd:string; args :varargs[string, `$`]) :void {.inline.}= exec cmd & " " & args.join(" ")
proc mv   (src,trg :string) :void=  mvFile(src, trg)
proc dl   (args :varargs[string, `$`]) :void {.inline.}=  sh "wget", args
proc unz  (args :varargs[string, `$`]) :void {.inline.}=  sh "unzip", args
proc git  (args :varargs[string, `$`]) :void {.inline.}=  sh "git", args
proc go   (args :varargs[string, `$`]) :void {.inline.}=  sh "go", args
proc bun  (args :varargs[string, `$`]) :void {.inline.}=  sh bunBin, args
proc bunx (args :varargs[string, `$`]) :void {.inline.}=  bun " x " & args.join(" ")
proc hugo (args :varargs[string, `$`]) :void {.inline.}=  sh hugoBin, args
proc info (args :varargs[string, `$`]) :void {.inline.}=  echo Prefix & args.join(" ")

#_______________________________________
# @section Bun Management
#___________________
proc bun_init=
  if bunBin.fileExists: return
  info "Initializing Bun into " & binDir
  withDir binDir:
    dl "https://github.com/oven-sh/bun/releases/latest/download/bun-linux-x64.zip -O", bunZip
    unz bunZip
  const tmp = binDir/"bun-linux-x64"
  mv tmp/"bun", bunBin
  rmDir tmp
  rmFile bunZip
#_______________________________________
# @section Hugo Management
proc hugo_compile=
  info "Building the Hugo binary into " & binDir
  withDir hugoDir:
    git "pull"
    git "reset --hard"
    git "clean -fdx"
    go "build -v -o", binDir, "-ldflags \"-s -w\""
#___________________
proc hugo_clone=
  info "Cloning Hugo into " & hugoDir
  git "clone https://github.com/gohugoio/hugo.git", hugoDir, "--depth=1"
#___________________
proc hugo_init=
  if not hugoDir.dirExists() : hugo_clone()
  hugo_compile()
#_______________________________________
# @section Tailwind Management
#_______________________________________
# @section General Tools Management
#___________________
proc modules_init=
  if dirExists( rootDir/"node_modules" ): return
  info "Installing packages with Bun"
  withDir rootDir: bun "install"
#___________________
proc tools_init=
  if not hugoBin.fileExists() : hugo_init()
  if not  bunBin.fileExists() : bun_init()
  modules_init()


#_______________________________________
# @section Website Management
#___________________
proc tailwind_build=
  info "Building css with Tailwind ..."
  withDir rootDir: bunx "tailwindcss -i ./assets/css/input.css -o ./assets/css/index.css --jit --minify"
#___________________
proc hugo_build=
  info "Building website with Hugo ..."
  withDir rootDir: hugo " --gc --minify"
#___________________
proc web_build=
  tools_init()
  tailwind_build()
  hugo_build()


#_______________________________________
# @section Buildsystem Entry Point
#___________________
when isMainModule: web_build()

