"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8614],{701:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var o=i(5893),t=i(1151);const r={title:"confy | Comfortable and Configurable Buildsystem",sidebar_label:"Introduction",sidebar_position:0},s="Introduction",l={id:"confy/confy",title:"confy | Comfortable and Configurable Buildsystem",description:"Confy is a buildsystem for compiling C/C++/Nim code.",source:"@site/../docs/confy/confy.md",sourceDirName:"confy",slug:"/confy/",permalink:"/confy/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"confy | Comfortable and Configurable Buildsystem",sidebar_label:"Introduction",sidebar_position:0},sidebar:"confy",next:{title:"Quickstart - 5min \u23f1\ufe0f",permalink:"/confy/quickstart"}},c={},a=[{value:"Example build file",id:"example-build-file",level:3},{value:"Other notable features",id:"other-notable-features",level:3},{value:"Configuration",id:"configuration",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["Confy is a buildsystem for compiling C/C++/Nim code.",(0,o.jsx)(n.br,{}),"\n","You can expect:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ergonomic, readable and minimal/simple syntax."}),"\n",(0,o.jsxs)(n.li,{children:["Behaves as a ",(0,o.jsx)(n.strong,{children:"library"}),".",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"You own the binary that runs the compilation commands."})]}),"\n",(0,o.jsxs)(n.li,{children:["Easy ",(0,o.jsx)(n.strong,{children:"cross-compilation"}),".",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"No compiler/buildsystem gymnastics. Cross-compilation is builtin."})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-build-file",children:"Example build file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-nim",children:'import confy\n\nlet code = srcDir.glob()   # Get our source by grabbing all code from the `srcDir` folder\nvar bin  = Program.new(    # Build an executable program\n  src = code,              # Define our source code\n  trg = "hello.exe",       # Define our binary\n)\n\nbin.build()                # Order to build\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsxs)(n.p,{children:["If this is your first time using Confy:",(0,o.jsx)(n.br,{}),"\n","Follow the ",(0,o.jsx)(n.a,{href:"/confy/quickstart",children:(0,o.jsx)(n.strong,{children:"Quickstart"})})," guide to get up and running in just 5min \u23f1\ufe0f"]})}),"\n",(0,o.jsx)(n.h3,{id:"other-notable-features",children:"Other notable features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Sane"})," project configuration ",(0,o.jsx)(n.strong,{children:"defaults"}),".",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"Fully configurable, but no need to repeat yourself."})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Imperative"}),", not declarative.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"You own the control flow of your buildsystem."})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Inspired by SCons.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"But without Python, a typeless language that quickly falls apart as code size grows."})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Builds with ",(0,o.jsx)(n.strong,{children:"ZigCC"}),".",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"Builtin sanitizing, caching, cross-compilation, musl/glibc/others, etc, etc ..."})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["No extra compilers or confusing setup.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"Confy auto-downloads the latest zigcc version for the host."})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["There is a full ",(0,o.jsx)(n.strong,{children:"how-to"})," walkthrough in the ",(0,o.jsx)(n.a,{href:"/confy/gettingStarted/intro",children:"Confy: Getting Started"})," guide.",(0,o.jsx)(n.br,{}),"\n","See the @",(0,o.jsx)(n.a,{href:"https://github.com/heysokam/confy/tree/master/examples",children:"examples"})," folder for references on to use and setup the buildsystem."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Note: ZigCC is the binary compiler used, but this doesn't mean we build Zig code."}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"This project is used to build C, C++ and Nim projects."})]})}),"\n",(0,o.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["All the configuration variables are stored @",(0,o.jsx)(n.a,{href:"https://github.com/heysokam/confy/tree/master/src/confy/cfg.nim",children:"confy/cfg.nim"}),".",(0,o.jsx)(n.br,{}),"\n","Add ",(0,o.jsx)(n.code,{children:"cfg.theVariable = value"})," at the top of your ",(0,o.jsx)(n.code,{children:"build.nim"})," file to change any of them:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-nim",children:'import confy\ncfg.srcDir  = "./code"   # Changes the source code folder from its default `rootDir/"src"`.  \ncfg.binDir  = "./build"  # Changes the binaries output folder from its default `rootDir/"bin"`.  \ncfg.verbose = on         # Makes the cli output information completely verbose. (for debugging)\ncfg.quiet   = on         # Makes the cli output information to be as minimal as possible.  (for cleaner cli output)  (default: on)  \n                         # Note: verbose = on will ignore quiet being active.  (default: off)  \n'})}),"\n",(0,o.jsxs)(n.p,{children:["See the ",(0,o.jsx)(n.a,{href:"/confy/config",children:"Configuration API"})," page, or the @",(0,o.jsx)(n.a,{href:"https://github.com/heysokam/confy/tree/master/src/confy/cfg.nim",children:"confy/cfg.nim"})," file for the complete list of variables that can be modified."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var o=i(7294);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);