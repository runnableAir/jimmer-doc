"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3516],{79747:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=a(74848),r=a(28453),o=a(11470),s=a(19365);const l={sidebar_position:2,title:"2.1 \u5173\u8054\u5bf9\u8c61"},i=void 0,c={id:"showcase/fetch-association/associated-object",title:"2.1 \u5173\u8054\u5bf9\u8c61",description:"\u57fa\u4e8e\u52a8\u6001\u5b9e\u4f53",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/fetch-association/associated-object.mdx",sourceDirName:"showcase/fetch-association",slug:"/showcase/fetch-association/associated-object",permalink:"/jimmer-doc/zh/docs/showcase/fetch-association/associated-object",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/fetch-association/associated-object.mdx",tags:[],version:"current",lastUpdatedAt:1708428653e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"2.1 \u5173\u8054\u5bf9\u8c61"},sidebar:"tutorialSidebar",previous:{title:"2. \u6293\u53d6\u5173\u8054",permalink:"/jimmer-doc/zh/docs/showcase/fetch-association/"},next:{title:"2.2 \u66f4\u591a\u5173\u8054",permalink:"/jimmer-doc/zh/docs/showcase/fetch-association/more-association"}},u={},d=[{value:"\u57fa\u4e8e\u52a8\u6001\u5b9e\u4f53",id:"\u57fa\u4e8e\u52a8\u6001\u5b9e\u4f53",level:2},{value:"\u67e5\u8be2\u9759\u6001DTO",id:"\u67e5\u8be2\u9759\u6001dto",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u57fa\u4e8e\u52a8\u6001\u5b9e\u4f53",children:"\u57fa\u4e8e\u52a8\u6001\u5b9e\u4f53"}),"\n",(0,t.jsxs)(o.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookFetcher.$\n                .allScalarFields()\n                // highlight-next-line\n                .authors(\n                    AuthorFetcher.$\n                        .allScalarFields()\n                )\n        )\n    )\n    .execute();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                authors {\n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51,\n        // highlight-next-line\n        "authors":[\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    },\n    {\n        "id":2,\n        "name":"Learning GraphQL",\n        "edition":2,\n        "price":55,\n        // highlight-next-line\n        "authors":[\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    },\n    {\n        "id":1,\n        "name":"Learning GraphQL",\n        "edition":1,\n        "price":50,\n        // highlight-next-line\n        "authors":[\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    }\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u67e5\u8be2\u9759\u6001dto",children:"\u67e5\u8be2\u9759\u6001DTO"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"src/main/dto"}),"\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa\u4efb\u4f55\u4e00\u4e2a\u6269\u5c55\u540d\u4e3adto\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto\n\nBookView {\n    #allScalars(this)\n    #highlight-next-line\n    authors {\n        #allScalars(this)\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7f16\u8bd1\u9879\u76ee\uff0c\u751f\u6210Java/Kotlin\u7c7b\u578b",(0,t.jsx)(n.code,{children:"BookView"})]}),"\n",(0,t.jsxs)(o.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<BookView> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(BookView.class)\n    )\n    .execute();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetch(BookView::class)\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"[\n    BookView(\n        id=3, \n        name=Learning GraphQL, \n        edition=3, \n        price=51.00, \n        authors=[\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=2, \n        name=Learning GraphQL, \n        edition=2, \n        price=55.00, \n        authors=[\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=1, \n        name=Learning GraphQL, \n        edition=1, \n        price=50.00, \n        authors=[\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    )\n]\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>s});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var o=a(74848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(96540),r=a(18215),o=a(23104),s=a(56347),l=a(205),i=a(57485),c=a(31682),u=a(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,o=h(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:a,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=c??b;return m({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),r=l[a].value;r!==t&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:o}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>l});var t=a(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);