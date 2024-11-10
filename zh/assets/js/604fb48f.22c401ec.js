"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9219],{56778:(e,n,l)=>{l.d(n,{A:()=>t});l(96540);var a=l(18215);const r={tabItem:"tabItem_Ymn6"};var i=l(74848);function t(e){let{children:n,hidden:l,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,t),hidden:l,children:n})}},37244:(e,n,l)=>{l.d(n,{A:()=>L});var a=l(96540),r=l(18215),i=l(44319),t=l(56347),s=l(94280),c=l(73024),d=l(58417),o=l(44031);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:a,default:r}}=e;return{value:n,label:l,attributes:a,default:r}}))}(l);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function j(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const r=(0,t.W6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,c.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,i=h(e),[t,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[d,u]=x({queryString:l,groupId:r}),[g,p]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(l);return[r,(0,a.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:r}),b=(()=>{const e=d??g;return j({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&c(b)}),[b]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var p=l(46916);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=l(74848);function T(e){let{className:n,block:l,selectedValue:a,selectValue:t,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const n=e.currentTarget,l=c.indexOf(n),r=s[l].value;r!==a&&(d(n),t(r))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;n=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;n=c[l]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:s.map((e=>{let{value:n,label:l,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:l??n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:i}=e;const t=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function D(e){const n=g(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,m.jsx)(T,{...n,...e}),(0,m.jsx)(v,{...n,...e})]})}function L(e){const n=(0,p.A)();return(0,m.jsx)(D,{...e,children:u(e.children)},String(n))}},22576:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"mapping/advanced/logical-deleted/join-table","title":"\u4e2d\u95f4\u8868","description":"\u60f3\u8ba9\u4e2d\u95f4\u8868\u652f\u6301\u903b\u8f91\u5220\u9664\uff0c\u9700\u8981\u4e3a\u6ce8\u89e3org.babyfish.jimmer.sql.JoinTable\u6307\u5b9a\u5c5e\u6027\uff0c\u4ee5\u8868\u793a\u8be5\u6570\u636e\u662f\u6b63\u5e38\u7684\u8fd8\u662f\u5df2\u7ecf\u88ab\u5220\u9664\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/logical-deleted/join-table.mdx","sourceDirName":"mapping/advanced/logical-deleted","slug":"/mapping/advanced/logical-deleted/join-table","permalink":"/jimmer-doc/zh/docs/mapping/advanced/logical-deleted/join-table","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/logical-deleted/join-table.mdx","tags":[],"version":"current","lastUpdatedAt":1714129053000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"\u4e2d\u95f4\u8868"},"sidebar":"tutorialSidebar","previous":{"title":"\u5b9e\u4f53\u8868","permalink":"/jimmer-doc/zh/docs/mapping/advanced/logical-deleted/entity"},"next":{"title":"\u89c6\u56fe\u5c5e\u6027","permalink":"/jimmer-doc/zh/docs/mapping/advanced/view/"}}');var r=l(74848),i=l(28453),t=l(37244),s=l(56778);const c={sidebar_position:2,title:"\u4e2d\u95f4\u8868"},d=void 0,o={},u=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u591a\u7248\u672c\u6570\u636e",id:"\u591a\u7248\u672c\u6570\u636e",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u60f3\u8ba9\u4e2d\u95f4\u8868\u652f\u6301\u903b\u8f91\u5220\u9664\uff0c\u9700\u8981\u4e3a\u6ce8\u89e3",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.JoinTable"}),"\u6307\u5b9a\u5c5e\u6027\uff0c\u4ee5\u8868\u793a\u8be5\u6570\u636e\u662f\u6b63\u5e38\u7684\u8fd8\u662f\u5df2\u7ecf\u88ab\u5220\u9664\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e00\u65e6\u4e3a\u4e2d\u95f4\u8868\u914d\u7f6e\u4e86\u903b\u8f91\u5220\u9664\u5c5e\u6027\uff0c\u5f53\u4efb\u4f55\u4e00\u7aef\u7684\u5b9e\u4f53\u88ab\u903b\u8f91\u5220\u9664\u65f6\uff0c\u6240\u6709\u76f8\u5173\u7684\u4e2d\u95f4\u8868\u8bb0\u5f55\u5c06\u4f1a\u88ab\u903b\u8f91\u5220\u9664\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6240\u6709\u9488\u5bf9\u5f53\u524d\u5173\u8054\u7684JOIN\u64cd\u4f5c\u90fd\u4f1a\u88ab\u81ea\u52a8\u52a0\u4e0a",(0,r.jsx)(n.code,{children:" and \u8f6f\u5220\u9664\u6807\u5fd7 <> \u5df2\u7ecf\u88ab\u5220\u9664"}),"\u7684\u6761\u4ef6\uff0c\u4ece\u800c\u8425\u9020\u51fa\u67d0\u4e9b\u5173\u8054\u5df2\u7ecf\u88ab\u5220\u9664\u7684\u5047\u8c61\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"\u903b\u8f91\u5220\u9664\u6807\u5fd7\u5c5e\u6027\u53ef\u4ee5\u662f\u5982\u4e0b\u7c7b\u578b\u4e4b\u4e00"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"boolean\uff1a\u5fc5\u987b\u975enull"}),"\n",(0,r.jsx)(n.li,{children:"int\uff1a\u5fc5\u987b\u975enull"}),"\n",(0,r.jsx)(n.li,{children:"\u679a\u4e3e\uff1a\u5fc5\u987b\u975enull"}),"\n",(0,r.jsx)(n.li,{children:"long/Long\uff1anull\u6216\u975enull\u5373\u53ef"}),"\n",(0,r.jsx)(n.li,{children:"UUID: \u5fc5\u987b\u975enull"}),"\n",(0,r.jsx)(n.li,{children:"\u65e5\u671f\uff1a\u5fc5\u987b\u53efnull"}),"\n"]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"\u7c7b\u578b"}),(0,r.jsx)("th",{children:"\u4ee3\u7801"}),(0,r.jsx)("th",{children:"\u5220\u9664\u72b6\u6001"}),(0,r.jsx)("th",{children:"\u521d\u59cb\u72b6\u6001"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"2",children:"boolean"}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED",\n            type = boolean.class,\n            value = "true"\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED",\n            type = boolean.class,\n            value = "true"\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,r.jsx)("td",{children:"true"}),(0,r.jsx)("td",{children:"false"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "ACTIVE",\n            type = boolean.class,\n            value = "false"\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        JoinTable.LogicalDeletedFilter(\n            columnName = "ACTIVE",\n            type = boolean.class,\n            value = "false"\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,r.jsx)("td",{children:"false"}),(0,r.jsx)("td",{children:"true"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"int"}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "STATE",\n            type = int.class,\n            value = "1",\n            intializedValue = "0"\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        JoinTable.LogicalDeletedFilter(\n            columnName = "STATE",\n            type = int.class,\n            value = "1",\n            intializedValue = "0"\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,r.jsx)("td",{children:"1"}),(0,r.jsx)("td",{children:"0"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"\u679a\u4e3e"}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "STATE",\n            type = State.class,\n            value = "DELETED",\n            intializedValue = "INITIALIZED"\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        JoinTable.LogicalDeletedFilter(\n            columnName = "STATE",\n            type = State.class,\n            value = "DELETED",\n            intializedValue = "INITIALIZED"\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,r.jsx)("td",{children:"DELETED"}),(0,r.jsx)("td",{children:"INITIALIZED"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"\u2729"}),(0,r.jsx)(n.p,{children:"long"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = long.class\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = long.class\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,r.jsx)("td",{children:"\u5f53\u524d\u65f6\u949f\u6beb\u79d2\u6570"}),(0,r.jsx)("td",{children:"0L"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"\u2729"}),(0,r.jsx)(n.p,{children:"Nullable Long"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = Long.class,\n            nullable = true\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = Long.class,\n            nullable = true\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,r.jsx)("td",{children:"\u5f53\u524d\u65f6\u949f\u6beb\u79d2\u6570"}),(0,r.jsx)("td",{children:"null"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"\u2729"}),(0,r.jsx)(n.p,{children:"UUID"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_DATA",\n            type = UUID.class\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_DATA",\n            type = UUID.class\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,r.jsx)("td",{children:"\u968f\u673aUUID"}),(0,r.jsx)("td",{children:"\u6240\u6709\u5b57\u8282\u4e3a0\u7684UUID"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"\u2729"}),(0,r.jsx)(n.p,{children:"Nullable UUID"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_DATA",\n            type = UUID.class,\n            nullable = true\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_DATA",\n            type = UUID.class,\n            nullable = true\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,r.jsx)("td",{children:"\u968f\u673aUUID"}),(0,r.jsx)("td",{children:"null"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"2",children:(0,r.jsx)(n.p,{children:"Nullable LocalDateTime"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"\u2729"}),(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_TIME",\n            type = LocalDateTime.class,\n            nullable = true,\n            value = "now"\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_TIME",\n            type = LocalDateTime.class,\n            nullable = true,\n            value = "now"\n        )\n)\nval authors: List<Author>\n'})})})]})]}),(0,r.jsx)("td",{children:"\u5f53\u524d\u65f6\u95f4"}),(0,r.jsx)("td",{children:"null"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "CREATED_TIME",\n            type = LocalDateTime.class,\n            nullable = true,\n            value = "null"\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...,\n    logicalDeletedFilter =\n        JoinTable.LogicalDeletedFilter(\n            columnName = "CREATED_TIME",\n            type = LocalDateTime.class,\n            nullable = true,\n            value = "null"\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,r.jsx)("td",{children:"null"}),(0,r.jsx)("td",{children:"\u5f53\u524d\u65f6\u95f4"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7b2c\u4e00\u5217\u6216\u7b2c\u4e8c\u5217\u4e2d\u7684 \u2729 \u8868\u793a\u5f53\u524d\u914d\u7f6e\u65b9\u6cd5\u652f\u6301\u4e0b\u4e00\u8282\u5373\u5c06\u8ba8\u8bba\u7684\u591a\u7248\u672c\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u652f\u6301\u903b\u8f91\u5220\u9664\u5374\u4e0d\u8003\u8651\u591a\u7248\u672c\u6570\u636e\u7684\u95ee\u9898\uff0c\u662f\u4e00\u79cd\u6210\u719f\u5ea6\u4e0d\u9ad8\u7684\u8003\u8651\uff0c\u56e0\u6b64\u5efa\u8bae\u4f7f\u7528\u652f\u6301\u591a\u7248\u672c\u7684\u903b\u8f91\u5220\u9664\u914d\u7f6e\u3002"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\u5f53\u524d\u65f6\u949f\u6beb\u79d2\u6570"}),"\uff0c\u9ed8\u8ba4\u884c\u4e3a\u662f",(0,r.jsx)(n.code,{children:"System.currentMillis()"}),"\uff0c\u5373\u662f\u9ed8\u8ba4\u7684",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.meta.LogicalDeletedLongGenerator"}),"\u7684\u884c\u4e3a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5bf9\u6b64\u884c\u4e3a\u4e0d\u6ee1\u610f\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7c7b\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"LogicalDeletedValueGenerator<Long>"}),"\u63a5\u53e3\uff0c\u5e76\u7528\u5982\u4e0b\u914d\u7f6e"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"@JoinTable.LogicalDeletedFilter(generatedType = YourGenerator.class)"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@JoinTable.LogicalDeletedFilter(generatedRef = YourGenerator.class)"}),"\uff0c\u8fd9\u91cc",(0,r.jsx)(n.code,{children:"generatorRef"}),"\u8868\u793a\u5bf9\u8c61\u5728IOC\u5bb9\u5668\u7ba1\u7406\u6846\u67b6\u4e2d\u7684\u540d\u79f0"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\u968f\u673aUUD"}),"\uff0c\u9ed8\u8ba4\u884c\u4e3a\u662f",(0,r.jsx)(n.code,{children:"UUID.randomUUID()"}),"\uff0c\u5373\u662f\u9ed8\u8ba4\u7684",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.meta.LogicalDeletedUUIDGenerator"}),"\u7684\u884c\u4e3a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5bf9\u6b64\u884c\u4e3a\u4e0d\u6ee1\u610f\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7c7b\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"LogicalDeletedValueGenerator<UUID>"}),"\u63a5\u53e3\uff0c\u5e76\u7528\u5982\u4e0b\u914d\u7f6e"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"@JoinTable.LogicalDeletedFilter(generatedType = YourGenerator.class)"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@JoinTable.LogicalDeletedFilter(generatedRef = YourGenerator.class)"}),"\uff0c\u8fd9\u91cc",(0,r.jsx)(n.code,{children:"generatorRef"}),"\u8868\u793a\u5bf9\u8c61\u5728IOC\u5bb9\u5668\u7ba1\u7406\u6846\u67b6\u4e2d\u7684\u540d\u79f0"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u591a\u7248\u672c\u6570\u636e",children:"\u591a\u7248\u672c\u6570\u636e"}),"\n",(0,r.jsx)(n.p,{children:"\u903b\u8f91\u5220\u9664\u5e76\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u88ab\u771f\u6b63\u5220\u9664\uff0c\u53ea\u4f1a\u5bfc\u81f4\u6570\u636e\u88ab\u9690\u85cf\uff0c\u8fd9\u4ee3\u8868\u7740\u6570\u636e\u51fa\u73b0\u591a\u7248\u672c\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u652f\u6301\u591a\u7248\u672c\u6570\u636e\u7684\u914d\u7f6e"}),"\n",(0,r.jsxs)(t.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    name = "BOOK_AUTHOR_MAPPING",\n    joinColumnName = "BOOK_ID",\n    inverseJoinColumnName = "AUTHOR_ID",\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = long.class\n        )\n)\nList<Author> authors();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    name = "BOOK_AUTHOR_MAPPING",\n    joinColumnName = "BOOK_ID",\n    inverseJoinColumnName = "AUTHOR_ID",|\n    logicalDeletedFilter =\n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = long.class\n        )\n)\nval authors: List<Author>\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4f8b\uff0c",(0,r.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"}),"\u8868\u6709\u4e09\u5217\uff0c\u5168\u90e8\u4f5c\u4e3a\u4e3b\u952e\u7684\u7ec4\u6210\u90e8\u5206"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"alter table BOOK_AUTHOR_MAPPING\n    add pk_BOOK_AUTHOR_MAPPING\n        primary key(\n            BOOK_ID,\n            AUTHOR_ID,\n            DELETED_MILLIS\n        );\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u5982\u8868\u683c\u8f93\u5165\u5982\u4e0b"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"BOOK_ID"}),(0,r.jsx)(n.th,{children:"AUTHOR_ID"}),(0,r.jsx)(n.th,{children:"DELETED_MILLIS"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"97"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"97"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"1708796420956"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"97"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"1708234681901"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"249"}),(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"249"}),(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"1708722582793"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"249"}),(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"1708664484823"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\u67094\u6761\u5173\u8054\u6570\u636e\u88ab\u9690\u85cf\uff0c\u6709\u6548\u6570\u636e\u53ea\u6709\u4e24\u6761"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"BOOK_ID"}),(0,r.jsx)(n.th,{children:"AUTHOR_ID"}),(0,r.jsx)(n.th,{children:"DELETED_MILLIS"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"97"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"249"}),(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"0"})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>s});var a=l(96540);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);