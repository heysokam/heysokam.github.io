## @fileoverview Configuration options for the website
#_______________________________________
# @deps std
import std/[ os,strformat ]

#_______________________________________
const verbose *{.booldefine.}= on
const Prefix  *{.strdefine.}=  "「web 」 "
#_______________________________________
# Project
const thisDir   = os.parentDir( currentSourcePath() )
const rootDir * = thisDir/".."
const binDir  * = rootDir/"bin"
const srcDir  * = rootDir/"src"
const ssgDir  * = srcDir/"hugo"
# Bun
const bunZip  * = binDir/"bun.zip"
const bunURL  * = "https://github.com/oven-sh/bun/releases/latest/download/bun-linux-x64.zip"
const bunBin  * = binDir/"bun"
# Hugo
const hugoVer * = "0.121.1"
const hugoDir * = binDir/"hugodl"
const hugoURL * = &"https://github.com/gohugoio/hugo/releases/download/v{hugoVer}/hugo_{hugoVer}_linux-amd64.tar.gz"
const hugoZip * = binDir/"hugo.tar.gz"
const hugoBin * = binDir/"hugo"
# Other tools
const gitBin  * = "git"
const goBin   * = "go"
