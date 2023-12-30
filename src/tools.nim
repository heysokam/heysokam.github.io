## @fileoverview General tools to build and manage the website
#_______________________________________
# @deps std
import std/[ os,strutils ]
# @deps web
import ./cfg

#_______________________________________
# @section Logger
#___________________
proc info *(args :varargs[string, `$`]) :void {.inline.}=  echo Prefix & args.join(" ")
proc fail *(args :varargs[string, `$`]) :void {.inline.}=  quit Prefix & args.join(" ")
proc dbg  *(args :varargs[string, `$`]) :void {.inline.}=
  if not cfg.verbose: return
  info args


#_______________________________________
# @section Nimscript compatibility for compiled code
#___________________
when not defined(nimscript):
  template rm *(file :string)=  os.removeFile(file)
  template rmDir *(dir :string)=  os.removeDir(dir)
  template withDir *(trg :string; body :untyped)=
    let prev = os.getCurrentDir()
    dbg "Temporarily entering folder", trg
    os.setCurrentDir(trg)
    body  # Run the code inside the block
    dbg "Returning to folder", prev
    os.setCurrentDir(prev)

#_______________________________________
# @section Commands
#___________________
proc sh *(cmd:string; args :varargs[string, `$`]) :void {.inline.}=
  let command = cmd & " " & args.join(" ")
  if cfg.verbose : info "Executing command:\n  ", command
  try:
    when defined(nimscript): exec command
    else:
      if os.execShellCmd(command) != 0: raise newException(OSError, "")
  except: fail "Failed to run:\n  ", command
proc mv *(src,trg :string) :void=
  when defined(nimscript) : mvFile(src, trg)
  else                    : os.moveFile(src, trg)
proc md *(trg :string) :void {.inline.}=
  when defined(nimscript) : mkDir(trg)
  else                    : os.createDir(trg)
proc dl *(args :varargs[string, `$`]) :void {.inline.}=
  when defined(nimscript) : sh "wget", args
  else                    : {.warning: "Downloading not implemented yet".} ; sh "wget", args
proc unz  *(args :varargs[string, `$`]) :void {.inline.}=
  var cmd :string
  for arg in args:
    if   ".zip" in arg: cmd = "unzip"; break
    elif ".tar" in arg: cmd = if cfg.verbose: "tar -xvf" else: "tar -xf"
  when defined(nimscript) : sh cmd, args
  else                    : {.warning: "Unzipping not implemented yet".} ; sh cmd, args
proc git  *(args :varargs[string, `$`]) :void {.inline.}=  sh cfg.gitBin, args
proc go   *(args :varargs[string, `$`]) :void {.inline.}=  sh cfg.goBin, args
proc hugo *(args :varargs[string, `$`]) :void {.inline.}=  sh cfg.hugoBin, args
proc bun  *(args :varargs[string, `$`]) :void {.inline.}=  sh cfg.bunBin, args
proc bunx *(args :varargs[string, `$`]) :void {.inline.}=  bun " x " & args.join(" ")

