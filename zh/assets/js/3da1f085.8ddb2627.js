"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1455],{56778:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var l=r(18215);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.A)(s.tabItem,i),hidden:r,children:n})}},37244:(e,n,r)=>{r.d(n,{A:()=>k});var l=r(96540),s=r(18215),a=r(44319),i=r(56347),t=r(94280),o=r(73024),d=r(58417),c=r(44031);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:s}}=e;return{value:n,label:r,attributes:l,default:s}}))}(r);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(a),(0,l.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:a}))),[d,u]=j({queryString:r,groupId:s}),[p,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(r);return[s,(0,l.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),g=(()=>{const e=d??p;return x({value:e,tabValues:a})?e:null})();(0,t.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=r(46916);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function f(e){let{className:n,block:r,selectedValue:l,selectValue:i,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),s=t[r].value;s!==l&&(d(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:t.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},34653:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"query/dynamic-order","title":"\u52a8\u6001\u6392\u5e8f","description":"\u9759\u6001\u6392\u5e8f","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-order.mdx","sourceDirName":"query","slug":"/query/dynamic-order","permalink":"/jimmer-doc/zh/docs/query/dynamic-order","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-order.mdx","tags":[],"version":"current","lastUpdatedAt":1704100403000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"\u52a8\u6001\u6392\u5e8f"},"sidebar":"tutorialSidebar","previous":{"title":"\u9690\u5f0f\u5b50\u67e5\u8be2","permalink":"/jimmer-doc/zh/docs/query/implicit-subquery"},"next":{"title":"\u805a\u5408\u548c\u5206\u7ec4","permalink":"/jimmer-doc/zh/docs/query/group"}}');var s=r(74848),a=r(28453),i=r(37244),t=r(56778);const o={sidebar_position:6,title:"\u52a8\u6001\u6392\u5e8f"},d=void 0,c={},u=[{value:"\u9759\u6001\u6392\u5e8f",id:"\u9759\u6001\u6392\u5e8f",level:2},{value:"\u52a8\u6001\u6392\u5e8f",id:"\u52a8\u6001\u6392\u5e8f",level:2},{value:"orderByIf",id:"orderbyif",level:3},{value:"\u5ba2\u6237\u7aef\u6307\u5b9a\u6392\u5e8f",id:"\u5ba2\u6237\u7aef\u6307\u5b9a\u6392\u5e8f",level:3},{value:"\u5904\u7406SpringData\u7684Sort",id:"\u5904\u7406springdata\u7684sort",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u9759\u6001\u6392\u5e8f",children:"\u9759\u6001\u6392\u5e8f"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u770b\u9759\u6001\u6392\u5e8f\u7684\u7528\u6cd5\uff0c\u8ba4\u8bc6Jimmer\u7684\u6392\u5e8f\u7684\u6982\u5ff5"}),"\n",(0,s.jsxs)(i.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public List<Book> findBooks() {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        // highlight-next-line\n        .orderBy(table.name())\n        // highlight-next-line\n        .orderBy(table.edition().desc())\n        // highlight-next-line\n        .orderBy(table.score().desc().nullsLast())\n        .select(table)\n        .execute();\n}\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            // highlight-next-line\n            orderBy(table.name)\n            // highlight-next-line\n            orderBy(table.edition.desc())\n            // highlight-next-line\n            orderBy(table.score.desc().nullsLast())\n            select(table)\n        }\n        .execute()\n"})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"nullsFirst/nullsLast"}),"\u9700\u8981\u6570\u636e\u5e93\u652f\u6301\uff0c\u6bd4\u5982\uff0cOracle\u3002"]}),(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u66f4\u591a\u4e0d\u652f\u6301\u6b64\u529f\u80fd\u7684\u6570\u636e\u5e93\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(n.a,{href:"./expression",children:"\u5e38\u89c1\u8868\u8fbe\u5f0f"}),"\u4e2d\u7684",(0,s.jsx)(n.code,{children:"case"}),"\u8868\u8fbe\u5f0f\u3002"]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u52a8\u6001\u6392\u5e8f",children:"\u52a8\u6001\u6392\u5e8f"}),"\n",(0,s.jsx)(n.p,{children:"\u52a8\u6001\u6392\u5e8f\u6709\u4e24\u79cd\u7528\u6cd5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"orderByIf"}),"\n",(0,s.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u6307\u5b9a\u7684\u6392\u5e8f"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"orderbyif",children:"orderByIf"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"orderByIf"}),"\u7684\u7528\u6cd5\u548c",(0,s.jsx)(n.code,{children:"whereIf"}),"\u7684\u7528\u6cd5\u7c7b\u4f3c\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u548cwhere\u4e0d\u540c\uff0c\u591a\u4e2aorderBy\u5bf9\u5148\u540e\u987a\u5e8f\u975e\u5e38\u654f\u611f\uff0c\u56e0\u6b64",(0,s.jsx)(n.code,{children:"orderByIf"}),"\u5e76\u4e0d\u5982",(0,s.jsx)(n.code,{children:"whereIf"}),"\u90a3\u6837\u5b9e\u7528\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5c3d\u7ba1\u5982\u6b64\uff0cJimmer\u4ecd\u7136\u652f\u6301",(0,s.jsx)(n.code,{children:"orderByIf"}),"\uff0c\u6bd5\u7adf\u8fd9\u662f\u4e00\u79cd\u6700\u7b80\u5355\u6700\u57fa\u7840\u7684\u7528\u6cd5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"orderByIf"}),"\u5176\u5b9e\u662f\u52a8\u6001\u6392\u5e8f\u7684Java DSL\u7684API\uff0cJava DSL\u4f7f\u7528\u94fe\u5f0f\u7f16\u7a0b\u98ce\u683c\uff0c\u4e3a\u4e86\u4e0d\u6253\u65ad\u94fe\u5f0f\u4ee3\u7801\u7684\u4e66\u5199\uff0c\u63d0\u4f9b",(0,s.jsx)(n.code,{children:"orderByIf"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["Kotlin DSL\u4f7f\u7528lambda\u4e66\u5199\u67e5\u8be2\uff0c\u672c\u8eab\u5c31\u53ef\u4ee5\u6df7\u5165\u4efb\u610f\u590d\u6742\u7684\u903b\u8f91\uff0c\u6240\u4ee5\uff0ckotlin\u65e0\u9700\u63d0\u4f9b",(0,s.jsx)(n.code,{children:"orderByIf"}),"\u3002"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8bbe",(0,s.jsx)(n.code,{children:"OrderMode"}),"\u662f\u4e00\u4e2a\u679a\u4e3e\uff0c\u5177\u6709\u53d6\u503c",(0,s.jsx)(n.code,{children:"NAME"}),"\u3001",(0,s.jsx)(n.code,{children:"PRICE"}),"\uff0c\u5219\u53ef\u4ee5\u6309\u7167\u4e0b\u9762\u7684\u4f8b\u5b50\u4f7f\u7528",(0,s.jsx)(n.code,{children:"orderByIf"})]}),"\n",(0,s.jsxs)(i.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public List<Book> findBooks(OrderMode orderMode) {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        // highlight-next-line\n        .orderByIf(mode == OrderMode.NAME, table.name())\n        // highlight-next-line\n        .orderByIf(mode == OrderMode.PRICE, table.price())\n        .select(table)\n        .execute();\n}\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(orderMode: OrderMode): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            // highlight-next-line\n            when (orderMode) {\n                OrderMode.NAME -> orderBy(table.name)\n                OrderMode.PRICE -> orderBy(table.price)\n            }\n            select(table)\n        }\n        .execute()\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u5ba2\u6237\u7aef\u6307\u5b9a\u6392\u5e8f",children:"\u5ba2\u6237\u7aef\u6307\u5b9a\u6392\u5e8f"}),"\n",(0,s.jsx)(n.p,{children:"\u5f88\u591a\u65f6\u5019\uff0c\u524d\u7aefUI\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u64cd\u4f5c\u8868\u683c\u7ec4\u4ef6\u6765\u5b9e\u73b0\u52a8\u6001\u6392\u5e8f\u3002\u5373\uff0c\u6392\u5e8f\u7684\u51b3\u5b9a\u6743\u5728\u4e8e\u5ba2\u6237\u7aef\uff0c\u670d\u52a1\u7aef\u88ab\u52a8\u5730\u63a5\u53d7\u53c2\u6570\uff0c\u6309\u5ba2\u6237\u7aef\u7684\u6392\u5e8f\u8981\u6c42\u6267\u884c\u67e5\u8be2\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u901a\u8fc7\u4f20\u9012\u5b57\u7b26\u4e32\u53c2\u6570\u53ef\u4ee5\u6307\u5b9a\u52a8\u6001\u6392\u5e8f\uff0c\u53ef\u4ee5\u901a\u8fc7\u51fd\u6570",(0,s.jsx)(n.code,{children:"makeOrders"}),"\u628a\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3aJimmer\u6392\u5e8f\u9700\u8981\u7684",(0,s.jsx)(n.code,{children:"List<Order>"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"makeOrders"}),"\u5b9a\u4e49\u5982\u4e0b"]}),"\n",(0,s.jsxs)(i.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public class Order {\n\n    public static List<Order> makeOrders(Props table, String ... codes) {\n        ...\u7701\u7565\u5b9e\u73b0...\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun KProps<*>.makeOrders(vararg codes: String): List<Order> =\n    ...\u7701\u7565\u5b9e\u73b0...\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,s.jsx)(n.code,{children:"table"}),"\u4e3aSQL DSL\u4e2d\u7684\u4e3b\u8868\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"makeOrders"}),"\u7684\u4f7f\u7528\u65b9\u5f0f\u975e\u5e38\u7075\u6d3b\uff0c\u4f8b\u5982"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528\u591a\u4e2a\u53c2\u6570\u5b9e\u73b0\u591a\u5217\u6392\u5e8f"}),"\n",(0,s.jsxs)(i.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'Order.makeOrders(table, "name", "edition desc")\n'})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'table.makeOrders("name", "edition desc")\n'})})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u628a\u591a\u4e2a\u53c2\u6570\u5408\u5e76\u6210\u4e00\u4e2a\uff0c\u5e76\u5728\u5b57\u7b26\u4e32\u5185\u90e8\u7528",(0,s.jsx)(n.code,{children:","}),"\u6216",(0,s.jsx)(n.code,{children:";"}),"\u505a\u5206\u5272"]}),"\n",(0,s.jsxs)(i.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'Order.makeOrders(table, "name, edition desc")\n'})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'table.makeOrders("name, edition desc")\n'})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u90fd\u5c5e\u4e8e\u8fd9\u79cd\u5355\u53c2\u7528\u6cd5\uff0c\u56e0\u4e3a\u53ea\u63d0\u4f9b\u4e00\u4e2aHTTP\u53c2\u6570\u662f\u6700\u7b80\u5355\u7684\u3002"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u751a\u81f3\u652f\u6301\u6309\u7167\u5f15\u7528\u5173\u8054 ",(0,s.jsx)(n.em,{children:"(\u4e00\u5bf9\u4e00\u3001\u591a\u5bf9\u4e00)"})," \u8fdb\u884c\u8fde\u63a5"]}),"\n",(0,s.jsxs)(i.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'Order.makeOrders(table, "store.city.name; store.name; name")\n'})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'table.makeOrders("store.city.name; store.name; name")\n'})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"./dynamic-join",children:"\u52a8\u6001\u8fde\u63a5"}),"\u4e2d\u6240\u6709\u7279\u6027\u5bf9\u8fd9\u79cd\u9690\u542b\u8fde\u63a5\u6709\u6548"]})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Order.makeOrders"}),"\u7684\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b"]}),"\n",(0,s.jsxs)(i.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public List<Book> findBooks(String sort) {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        // highlight-next-line\n        .orderBy(Order.makeOrders(table, sort))\n        .select(table)\n        .execute();\n}\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(sort: String): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            // highlight-next-line\n            orderBy(table.makeOrders(sort))\n            select(table)\n        }\n        .execute()\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u8c03\u7528",(0,s.jsx)(n.code,{children:'findBooks("store.name asc, name asc")'}),"\uff0c\u5219\u751f\u6210\u5982\u4e0bSQL"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\n/* highlight-next-line */\ninner join BOOK_STORE tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID\norder by\n    tb_2_.NAME asc,\n    tb_1_.NAME desc\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u6b64\u53ef\u89c1\uff0c\u5982\u679c\u6392\u5e8f\u4e2d\u5305\u542b\u9690\u542b\u8fde\u63a5\uff0cJimmer\u4e00\u6837\u4f1a\u6784\u5efa\u52a8\u6001\u8fde\u63a5\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5904\u7406springdata\u7684sort",children:"\u5904\u7406SpringData\u7684Sort"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u76f4\u63a5\u628a\u5ba2\u6237\u7aef\u4f20\u9012\u7684\u6392\u5e8f\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3aJimmer SQL AST\u7684\u6392\u5e8f\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u800c\uff0c\u548cSpingData\u534f\u4f5c\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u5904\u7406",(0,s.jsx)(n.a,{href:"https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/Sort.html",children:"org.springframework.data.domain.Sort"}),"\u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5982\u6b64\u7f16\u5199\u67e5\u8be2\u3002\u8fd9\u6b21\uff0c\u53c2\u6570\u4e0d\u518d\u662f\u5b57\u7b26\u4e32\uff0c\u800c\u662fSpring Data\u7684Sort\u7c7b\u3002"}),"\n",(0,s.jsxs)(i.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public List<Book> findBooks(Sort sort) {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        // highlight-next-line\n        .orderBy(table, SpringOrders.toOrders(sort))\n        .select(table)\n        .execute();\n}\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(sort: Sort): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            // highlight-next-line\n            orderBy(sort)\n            select(table)\n        }\n        .execute()\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u89e3\u91ca\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Java:"}),"\n",(0,s.jsxs)(n.p,{children:["Jimmer\u7684Java API\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5de5\u5177\u7c7b\uff0c",(0,s.jsx)(n.code,{children:"org.babyfish.jimmer.spring.repository.SpringOrders"}),"\uff0c\u5176\u9759\u6001\u65b9\u6cd5",(0,s.jsx)(n.code,{children:"toOrders"}),"\u628aspring-data\u7684",(0,s.jsx)(n.code,{children:"Sort"}),"\u5bf9\u8c61\u8f6c\u5316\u6210Jimmer SQL DSL\u4e2d\u7684",(0,s.jsx)(n.code,{children:"Order"}),"\u5bf9\u8c61\u6570\u7ec4\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SpringOrders.toOrders"}),"\u5177\u5907\u4e24\u4e2a\u53c2\u6570"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"table"}),": SQL DSL\u4e2d\u7684\u4e3b\u8868"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sort"}),"\uff1a\u5916\u90e8\u4f20\u9012\u7684spring-data\u4e4b",(0,s.jsx)(n.code,{children:"Sort"}),"\u5bf9\u8c61"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SpringOrders.toOrders"}),"\u628aSpring Data\u7684",(0,s.jsx)(n.code,{children:"Sort"}),"\u5bf9\u8c61\u8f6c\u5316\u4e3aJimmer SQL DSL\u7684",(0,s.jsx)(n.code,{children:"Order"}),"\u5bf9\u8c61\u6570\u7ec4\u540e\uff0c\u5c31\u53ef\u4ee5\u7528Jimmer\u67e5\u8be2\u5bf9\u8c61\u7684",(0,s.jsx)(n.code,{children:"orderBy"}),"\u5b9e\u73b0\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Kotlin"}),"\n",(0,s.jsxs)(n.p,{children:["Jimmer\u7684Kotlin API\u6269\u5c55\u4e86Jimmer\u67e5\u8be2\u5bf9\u8c61\uff0c\u53ef\u4ee5\u76f4\u63a5\u6309\u7167Spring Data\u7684",(0,s.jsx)(n.code,{children:"Sort"}),"\u5bf9\u8c61\u6392\u5e8f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u81f3\u6b64\uff0c\u6211\u4eec\u5df2\u7ecf\u793a\u8303\u4e86\u5982\u4f55\u628aSpring Data\u7684",(0,s.jsx)(n.code,{children:"Sort"}),"\u5bf9\u8c61\u8f6c\u5316\u4e3aJimmer\u4e2d\u7684\u6392\u5e8f\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u8fdb\u4e00\u6b65\u7b80\u5316\u7528\u6237\u4ee3\u7801\uff0cJimmer\u8fd8\u63d0\u4f9b\u4e86\u5de5\u5177\u7c7b",(0,s.jsx)(n.code,{children:"org.babyfish.jimmer.spring.model.SortUtils"}),", \u5176\u9759\u6001\u65b9\u6cd5",(0,s.jsx)(n.code,{children:"toSort"}),"\u53ef\u4ee5\u628a\u5ba2\u6237\u7aef\u4f20\u9012\u7684\u6392\u5e8f\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3aspring-data\u7684",(0,s.jsx)(n.code,{children:"Sort"}),"\u5bf9\u8c61\u3002\u6bd4\u5982"]}),"\n",(0,s.jsxs)(i.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'Sort sort = SortUtils.toSort("name asc, edition desc");\n'})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'var sort = SortUtils.toSort("name asc, edition desc")\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u5373"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"+------------------------+\n| \u5ba2\u6237\u7aef\u6784\u5efa\u7684\u52a8\u6001\u6392\u5e8f\u5b57\u7b26\u4e32 |\n+-----------+------------+\n            |\n    SortUtils.toSort\n            |\n           \\|/\n+------------------------+\n|  Spring-Data\u7684Sort\u5bf9\u8c61  |\n+-----------+------------+\n            |\nJava: \u5148\u8c03SpringOrders.toOrders\uff0c\u518dorderBy\nKtlin: \u76f4\u63a5\u7528sort\u5bf9\u8c61\u8fdb\u884corderBy\u64cd\u4f5c\n            |\n           \\|/\n+------------------------+\n|  Jimmer\u67e5\u8be2AST\u4e2d\u7684\u6392\u5e8f   |\n+-----------+------------+ \n"})})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>t});var l=r(96540);const s={},a=l.createContext(s);function i(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);