import{d as N,g as r,o as P,i as k,w,e as C,j as t,b as p}from"./vue.esm-bundler-545ae5dd.js";import{_ as V}from"./Border-1d0387ad.js";import{T as D}from"./CrystalMapperClientTestData-7a91bd85.js";const W={class:"font-monospace text-center"},j={class:"display-3"},E=t("span",{class:"display-5"},".",-1),F={class:"display-5"},I=t("span",{class:"display-5"},".",-1),O={class:"display-5"},b=N({__name:"TimePlayed",props:{mapper:{required:!0},border:{type:Boolean,required:!1,default:!0},title:{type:String,required:!1}},setup(d){const m=d,a=m.mapper,S=r(()=>{var e,s;return((s=(e=a==null?void 0:a.gameTime)==null?void 0:e.frames)==null?void 0:s.value)>0}),q=r(()=>a.gameTime.hours.value),x=r(()=>a.gameTime.minutes.value),B=r(()=>a.gameTime.seconds.value),i=e=>{var s;return((s=e==null?void 0:e.toString())==null?void 0:s.padStart(2,"0"))??""};return(e,s)=>S.value?(P(),k(V,{key:0,show:d.border,title:m.title??"Time Played"},{default:w(()=>[t("div",W,[t("span",j,p(i(q.value)),1),E,t("span",F,p(i(x.value)),1),I,t("span",O,p(i(B.value)),1)])]),_:1},8,["show","title"])):C("",!0)}});b.__docgenInfo={exportName:"default",displayName:"TimePlayed",description:"",tags:{},props:[{name:"mapper",required:!0},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"title",type:{name:"string"},required:!1}],sourceFiles:["/home/chris/git/vue-components/src/lib/widgets/pokemon/TimePlayed.vue"]};const G={title:"Widgets/Pokemon/Time Played",component:b,tags:["autodocs"],argTypes:{}},o={args:{mapper:D}},n={args:{mapper:D,border:!1}},c={args:{}};var l,u,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    mapper: TestData
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,_,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mapper: TestData,
    border: false
  }
}`,...(y=(_=n.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var h,T,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const H=["Default","WithoutBorder","NoData"];export{o as Default,c as NoData,n as WithoutBorder,H as __namedExportsOrder,G as default};
//# sourceMappingURL=TimePlayed.stories-ac56e0a4.js.map
