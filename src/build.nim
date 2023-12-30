## @fileoverview Building process for the website
#_______________________________________
# @deps web
import ./cfg
import ./tools
import ./init

#_______________________________________
# @section Website Building
#___________________
proc tailwind=
  info "Building css with Tailwind ..."
  withDir ssgDir: bunx "tailwindcss -i ./assets/css/input.css -o ./assets/css/index.css --jit --minify"
#___________________
proc hugo=
  info "Building website with Hugo ..."
  withDir ssgDir: hugo " --gc --minify"
#___________________
proc web=
  init.tools()
  tailwind()
  hugo()


#_______________________________________
# @section Buildsystem Entry Point
#___________________
when isMainModule: web()

