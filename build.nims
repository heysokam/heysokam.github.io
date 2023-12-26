import std/[ os,strutils ]

const binDir  = thisDir()/"bin"
const hugoDir = binDir/"hugogit"

if not hugoDir.dirExists():
  exec "git clone https://github.com/gohugoio/hugo.git $1 --depth=1" % [hugoDir]
withDir hugoDir:
  exec "git pull"
  exec "git reset --hard"
  exec "git clean -fdx"
  exec "go build -v -o $1 -ldflags $2" % [binDir, "\"-s -w\""]
