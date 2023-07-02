import{j as e}from"./jsx-runtime-214257b4.js";import{M as r}from"./chunk-PCJTTTQV-276cd5b8.js";import{u as s}from"./index-725dd254.js";import"./iframe-6cf0f7ed.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";function o(n){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Usage - Simple"}),`
`,e.jsx(t.h1,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"In order to use GameHook components within OBS or other streaming software, you must create an index.html file to use within the OBS browser control."}),`
`,e.jsxs(t.p,{children:["A temple has been provided for use. Copy this into a ",e.jsx(t.code,{children:"index.html"})," file."]}),`
`,e.jsx(t.h2,{id:"starter-template",children:"Starter Template"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GameHook UI</title>

    <link rel="stylesheet" href="https://components.gamehook.io/themes/base.css" />
  </head>
  <body>
    <div id="app">
        <div>Hello world!</div>
    </div>

  <script type="module">
  import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    setup() {
      const message = ref('Hello Vue!')
      return {
        message
      }
    }
  }).mount('#app')
<\/script>
  </body>
</html>
`})})]})}function x(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{x as default};
//# sourceMappingURL=03-UsageSimple-f049b522.js.map
