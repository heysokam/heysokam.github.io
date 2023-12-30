## @fileoverview Initialization process for the website management tools
#_______________________________________
# @deps std
import std/[ os,strutils,strformat ]
# @deps web
import ./cfg
import ./tools as t

#_______________________________________
# @section SubModules/Libs Management
#___________________
discard "git clone https://github.com/heysokam/nstd  src/libs/nstd  --depth=1"
discard "git clone https://github.com/heysokam/confy src/libs/confy --depth=1"
discard "git clone https://github.com/treeform/jsony src/libs/jsony --depth=1"
discard "git clone https://github.com/treeform/zippy src/libs/zippy --depth=1"

#_______________________________________
# @section Bun Management
#___________________
proc bun=
  if bunBin.fileExists: return
  info "Initializing Bun into " & binDir
  withDir binDir:
    dl &"{bunURL} -O", bunZip
    unz bunZip
  const tmp = binDir/"bun-linux-x64"
  mv tmp/"bun", bunBin
  rmDir tmp
  rm bunZip

#_______________________________________
# @section Hugo Management
#___________________
proc hugo=
  if hugoBin.fileExists(): return
  info "Initializing Hugo into " & binDir
  withDir binDir:
    dl &"{hugoURL} -O", hugoZip
    if not hugoDir.dirExists: md hugoDir
    unz hugoZip, &"--directory {hugoDir}"
  mv hugoDir/"hugo", hugoBin
  rmDir hugoDir
  rm hugoZip

#_______________________________________
# @section Tailwind Management
#_______________________________________
# @section General Tools Management
#___________________
proc modules=
  if dirExists( ssgDir/"node_modules" ): return
  info "Installing packages with Bun"
  withDir ssgDir: bun "install"
#___________________
proc tools * =
  if not hugoBin.fileExists() : init.hugo()
  if not  bunBin.fileExists() : init.bun()
  init.modules()

#_______________________________________
# @section Initialization Entry Point
#___________________
when isMainModule: init.tools()

