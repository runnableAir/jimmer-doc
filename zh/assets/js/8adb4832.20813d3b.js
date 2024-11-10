"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[871],{56778:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var i=r(18215);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,s),hidden:r,children:n})}},37244:(e,n,r)=>{r.d(n,{A:()=>y});var i=r(96540),t=r(18215),a=r(44319),s=r(56347),l=r(94280),c=r(73024),o=r(58417),d=r(44031);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:t}}=e;return{value:n,label:r,attributes:i,default:t}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=h(e),[s,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[o,u]=m({queryString:r,groupId:t}),[j,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(r);return[t,(0,i.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),f=(()=>{const e=o??j;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(46916);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function v(e){let{className:n,block:r,selectedValue:i,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),t=l[r].value;t!==i&&(o(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,t.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function E(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,g.jsx)(E,{...e,children:u(e.children)},String(n))}},67015:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"mutation/draft-interceptor","title":"\u4fdd\u5b58\u524d\u62e6\u622a\u5668","description":"\u57fa\u672c\u6982\u5ff5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/draft-interceptor.mdx","sourceDirName":"mutation","slug":"/mutation/draft-interceptor","permalink":"/jimmer-doc/zh/docs/mutation/draft-interceptor","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/draft-interceptor.mdx","tags":[],"version":"current","lastUpdatedAt":1729456376000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"\u4fdd\u5b58\u524d\u62e6\u622a\u5668"},"sidebar":"tutorialSidebar","previous":{"title":"\u76f4\u63a5\u4fee\u6539\u4e2d\u95f4\u8868","permalink":"/jimmer-doc/zh/docs/mutation/associations"},"next":{"title":"\u89e6\u53d1\u5668","permalink":"/jimmer-doc/zh/docs/mutation/trigger"}}');var t=r(74848),a=r(28453),s=r(37244),l=r(56778);const c={sidebar_position:6,title:"\u4fdd\u5b58\u524d\u62e6\u622a\u5668"},o=void 0,d={},u=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f",id:"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f",level:2},{value:"\u5b9a\u4e49\u62e6\u622a\u5668",id:"\u5b9a\u4e49\u62e6\u622a\u5668",level:2},{value:"\u63a7\u5236original\u53c2\u6570\u7684\u683c\u5f0f",id:"\u63a7\u5236original\u53c2\u6570\u7684\u683c\u5f0f",level:2},{value:"\u5e94\u7528\u62e6\u622a\u5668",id:"\u5e94\u7528\u62e6\u622a\u5668",level:2},{value:"\u4f7f\u7528Jimmer Spring Starter",id:"\u4f7f\u7528jimmer-spring-starter",level:3},{value:"\u4e0d\u4f7f\u7528Jimmer Spring Starter",id:"\u4e0d\u4f7f\u7528jimmer-spring-starter",level:3},{value:"\u6700\u7ec8\u4f7f\u7528",id:"\u6700\u7ec8\u4f7f\u7528",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,t.jsxs)(n.p,{children:["\u4efb\u4f55\u5b9e\u4f53\u5bf9\u8c61\u5728\u88ab",(0,t.jsx)(n.a,{href:"./save-command",children:"\u4fdd\u5b58\u6307\u4ee4"}),"\u4fdd\u5b58 ",(0,t.jsx)(n.em,{children:"(\u65e0\u8bba\u63d2\u5165\u8fd8\u662f\u66f4\u65b0)"})," \u524d\uff0c\u90fd\u4f1a\u88ab\u62e6\u622a\u5668\u62e6\u622a\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6b64\uff0c\u7528\u6237\u6709\u4e00\u6b21\u4fee\u6539\u88ab\u4fdd\u5b58\u6570\u636e\u7684\u673a\u4f1a\uff0c\u5c24\u5176\u662f\u4e3a\u67d0\u4e9b\u7f3a\u5931\u7684\u5c5e\u6027\u8d4b\u503c\u3002"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f7f\u7528\u62e6\u622a\u5668\u4e3a\u7f3a\u5931\u7684\u5c5e\u6027\u8d4b\u503c*(\u8fd9\u4e5f\u662f\u63a8\u8350\u7528\u6cd5)*\uff0c\u5c31\u548c\u6570\u636e\u5e93\u7ea7\u522b\u7684\u9ed8\u8ba4\u503c\u6709\u70b9\u7c7b\u4f3c\uff0c\u4f46\u662f\u5b58\u5728\u5982\u4e0b\u5dee\u5f02"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u5e93\u9ed8\u8ba4\u503c\u53ea\u80fd\u63d0\u4f9b\u4e1a\u52a1\u65e0\u5173\u7684\u9ed8\u8ba4\u503c\u89c4\u5219\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u62e6\u622a\u5668\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u4e0a\u4e0b\u6587\u76f8\u5173\u4fe1\u606f\u63d0\u4f9b\u9ed8\u8ba4\u503c\uff0c\u6bd4\u5982\uff0c\u5f53\u524d\u7528\u6237\u5728\u6743\u9650\u7cfb\u7edf\u4e2d\u7684\u8eab\u4efd\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u6839\u636e\u8fd9\u7c7b\u4e1a\u52a1\u4e0a\u4e0b\u95ee\u4fe1\u606f\u63d0\u4f9b\u548c\u4e1a\u52a1\u7d27\u5bc6\u7ed3\u5408\u7684\u9ed8\u8ba4\u503c\uff0c\u8fd9\u662f\u6570\u636e\u5e93\u7ea7\u522b\u9ed8\u8ba4\u503c\u65e0\u6cd5\u5b9e\u73b0\u7684\u3002"}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f",children:"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f"}),"\n",(0,t.jsxs)(n.p,{children:["Draft\u62e6\u622a\u5668\u548c",(0,t.jsx)(n.a,{href:"./save-command",children:"Save\u6307\u4ee4"}),"\u914d\u5408\u4f7f\u7528\uff0c\u5728\u5bf9\u8c61\u88ab\u4fdd\u5b58\u4e4b\u524d\u8c03\u6574\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5047\u5982\u5927\u90e8\u5206\u5b9e\u4f53\u8868\u90fd\u5177\u5907created_time\u3001modified_time\u3001created_by\u548cmodified_by\u56db\u4e2a\u5b57\u6bb5\uff0c\u53ef\u4ee5\u63d0\u4f9b\u5982\u4e0b\u8d85\u7c7b"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// highlight-next-line\n@MappedSuperclass\npublic interface BaseEntity {\n\n    LocalDateTime createdTime();\n\n    LocalDateTime modifiedTime();\n\n    @Nullable\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User creator();\n\n    @Nullable\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User editor();\n}\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"// highlight-next-line\n@MappedSuperclass\ninterface BaseEntity {\n\n    val createdTime: LocalDateTime\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val createdBy: User?\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val modifiedBy: User?\n}\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u6709\u9700\u8981\u8fd9\u4e9b\u5b57\u6bb5\u7684\u5b9e\u4f53\u90fd\u4ece\u6b64\u8d85\u7c7b\u6d3e\u751f\u5373\u53ef\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684",(0,t.jsx)(n.code,{children:"@OnDissociate(DissociateAction.SET_NULL)"}),"\u662f\u4e3a\u4e86\u9632\u6b62\u56e0\u8fd9\u4e24\u4e2a\u5916\u952e\u5bfc\u81f4\u76f8\u5173",(0,t.jsx)(n.code,{children:"User"}),"\u6570\u636e\u7684\u5220\u9664\u64cd\u4f5c\u88ab\u963b\u6b62\u3002\u5f53\u76f8\u5173",(0,t.jsx)(n.code,{children:"User"}),"\u88ab\u5220\u9664\u540e\uff0c\u8fd9\u4e24\u4e2a\u5916\u952e\u81ea\u52a8\u6e05\u7a7a\u3002"]})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u5f53\u7136\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u62e6\u622a\u5b9e\u4f53\u7c7b\u578b ",(0,t.jsx)(n.em,{children:"(\u88ab@Entity\u4fee\u9970)"}),"\uff0c\u800c\u975e\u62bd\u8c61\u7c7b\u578b ",(0,t.jsx)(n.em,{children:"(\u88ab@MappedSupperclass)"})," \u4fee\u9970\u3002"]}),(0,t.jsx)(n.p,{children:"\u7136\u800c\uff0c\u5982\u679c\u9009\u62e9\u62e6\u622a\u62bd\u8c61\u7c7b\u578b\uff0c\u90a3\u4e48\u6240\u6709\u6d3e\u751f\u5b9e\u4f53\u7c7b\u578b\u7684\u4fdd\u5b58\u64cd\u4f5c\u90fd\u5c06\u4f1a\u88ab\u62e6\u622a\uff0c\u8fd9\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u9ad8\u7cfb\u7edf\u7684\u7075\u6d3b\u6027\uff0c\u5c24\u5176\u662f\u62bd\u8c61\u7c7b\u578b\u652f\u6301\u591a\u7ee7\u627f\u65f6\u3002"}),(0,t.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u672c\u6587\u7684\u4f8b\u5b50\u9009\u62e9\u62e6\u622a\u62bd\u8c61\u7c7b\u578b\uff0c\u800c\u975e\u5b9e\u4f53\u7c7b\u578b\u3002"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9a\u4e49\u62e6\u622a\u5668",children:"\u5b9a\u4e49\u62e6\u622a\u5668"}),"\n",(0,t.jsxs)(n.p,{children:["\u5047\u8bbe\u6709\u4e00\u4e2a\u53eb\u505a",(0,t.jsx)(n.code,{children:"UserService"}),"\u7684\u670d\u52a1\u7c7b\uff0c\u5176java\u65b9\u6cd5",(0,t.jsx)(n.code,{children:"getCurrentUserId()"}),"\u6216kotlin\u5c5e\u6027",(0,t.jsx)(n.code,{children:"currentUserId"}),"\u8fd4\u56de\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684id\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u62e6\u622a\u5668\u9700\u8981\u5b9e\u73b0",(0,t.jsx)(n.code,{children:"org.babyfish.jimmer.sql.DraftInterceptor"}),"\u63a5\u53e3\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f7f\u7528Spring\u6258\u7ba1 ",(0,t.jsx)(n.em,{children:"(\u4e0b\u6587\u4f1a\u4ecb\u7ecd\u4e24\u79cd\u4f7f\u7528\u62e6\u622a\u5668\u7684\u65b9\u5f0f)"}),"\uff0c\u8bf7\u7528",(0,t.jsx)(n.code,{children:"@Component"}),"\u4fee\u9970\u62e6\u622a\u5668\u5b9e\u73b0\u7c7b\uff0c\u4ee3\u7801\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Component\npublic class BaseEntityDraftInterceptor \nimplements DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    private final UserService userService;\n\n    public BaseEntityDraftInterceptor(UserService userService) {\n        this.userService = userService;\n    }\n\n    @Override\n    public void beforeSave(BaseEntityDraft draft, @Nullable BaseEntity original) {\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.MODIFIED_TIME)) {\n            draft.setModifiedTime(LocalDateTime.now());\n        }\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.EDITOR)) {\n            draft.applyModifiedBy(user - > {\n                user.setId(userService.getCurrentUserId());\n            });\n        }\n        if (original == null) {\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATED_TIME)) {\n                draft.setCreatedTime(LocalDateTime.now());\n            }\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATOR)) {\n                draft.applyCreatedBy(user - > {\n                    user.setId(userService.getCurrentUserId());\n                });\n            }   \n        }\n    }\n}\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@Component\nclass BaseEntityDraftInterceptor(\n    private val userService: UserService\n) : DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    override fun beforeSave(draft: BaseEntityDraft, original: BaseEntity?) {\n        if (!isLoaded(draft, BaseEntity::modifiedTime)) {\n            draft.modifiedTime = LocalDateTime.now()\n        }\n\n        if (!isLoaded(draft, BaseEntity::modifiedBy)) {\n            draft.modifiedBy {\n                id = userService.currentUserId\n            }\n        }\n\n        if (original === null) {\n            if (!isLoaded(draft, BaseEntity::createdTime)) {\n                draft.createdTime = LocalDateTime.now()\n            }\n\n            if (!isLoaded(draft, BaseEntity::createdBy)) {\n                draft.createdBy {\n                    id = userService.currentUserId\n                }\n            }\n        }\n    }\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,t.jsx)(n.code,{children:"beforeSave"}),"\u65b9\u6cd5\u5728\u67d0\u4e2a\u5bf9\u8c61\u88ab\u4fdd\u5b58\u4e4b\u524d\u88ab\u8c03\u7528\uff0c\u7528\u6237\u53ef\u4ee5\u5bf9\u5373\u5c06\u4fdd\u5b58\u7684\u6570\u636e",(0,t.jsx)(n.code,{children:"draft"}),"\u505a\u51fa\u6700\u540e\u8c03\u6574\u3002\u8be5\u65b9\u6cd5\u6709\u4e24\u4e2a\u53c2\u6570"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"draft"}),": \u5373\u5c06\u88ab\u4fdd\u5b58\u7684\u5bf9\u8c61\uff0c\u4f60\u53ef\u4ee5\u4fee\u6539\u5b83"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"original"}),": \u5982\u679c\u975enull\uff0c\u5219\u8868\u793a\u6570\u636e\u5e93\u4e2d\u73b0\u6709\u7684\u6570\u636e\uff0c\u53ea\u53ef\u8bfb\u53d6\uff0c\u4e0d\u53ef\u4fee\u6539"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8eINSERT\u64cd\u4f5c\u800c\u8a00\uff0c",(0,t.jsx)(n.code,{children:"original"}),"\u4e3anull"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8eUPDATE\u64cd\u4f5c\u800c\u8a00\uff0c",(0,t.jsx)(n.code,{children:"original"}),"\u975enull"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(n.code,{children:"original"}),"\u662f\u5426\u4e3anull\u5224\u65ad\u5f53\u524d\u64cd\u4f5c\u662fINSERT\u8fd8\u662fUPDATE\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"original"}),"\u5bf9\u8c61\u662f\u4e00\u4e2aJimmer\u52a8\u6001\u5bf9\u8c61\uff0c\u5176\u54ea\u4e9b\u4e9b\u5c5e\u6027\u5c31\u7eea\u53ef\u4ee5\u8bbf\u95ee\u800c\u54ea\u4e9b\u7f3a\u5931\u4e0d\u53ef\u8bbf\u95ee\uff0c\u53d7\u5230\u53e6\u5916\u4e00\u4e2a\u65b9\u6cd5",(0,t.jsx)(n.code,{children:"dependencies"}),"\u7684\u63a7\u5236\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["\u8bf7\u4e0d\u8981\u5728",(0,t.jsx)(n.code,{children:"beforeSave"}),"\u65b9\u6cd5\u4e2d\uff0c\u4fee\u6539\u88ab",(0,t.jsx)(n.code,{children:"@Id"}),"\u6216",(0,t.jsx)(n.code,{children:"@Key"}),"\u4fee\u9970\u7684\u5c5e\u6027\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u63a7\u5236original\u53c2\u6570\u7684\u683c\u5f0f",children:"\u63a7\u5236original\u53c2\u6570\u7684\u683c\u5f0f"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u6587\u8c08\u5230\uff0c\u5982\u679c\u5f53\u524d\u64cd\u4f5c\u4e3a",(0,t.jsx)(n.code,{children:"UPDATE"}),"\uff0c",(0,t.jsx)(n.code,{children:"beforeSave"}),"\u65b9\u6cd5\u7684",(0,t.jsx)(n.code,{children:"original"}),"\u53c2\u6570\u975enull\uff0c\u8868\u793a\u6570\u636e\u5e93\u4e2d\u7684\u65e7\u503c\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"original"}),"\u662fJimmer\u52a8\u6001\u5bf9\u8c61\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u6709",(0,t.jsx)(n.code,{children:"id"}),"\u548c",(0,t.jsx)(n.code,{children:"key"}),"\u5c5e\u6027\u662f\u5df2\u52a0\u8f7d\u548c\u53ef\u8bbf\u95ee\u7684\u3002\u7136\u800c\uff0c\u662f\u5426\u80fd\u591f\u63a7\u5236",(0,t.jsx)(n.code,{children:"original"}),"\u5bf9\u8c61\u7684\u683c\u5f0f\u8ba9\u8ddf\u591a\u7684\u5c5e\u6027\u53ef\u4ee5\u88ab\u8bbf\u95ee\u5462\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DraftInterceptor"}),"\u63a5\u53e3\u63d0\u4f9b\u4e86\u53e6\u5916\u4e00\u4e2adefault\u65b9\u6cd5",(0,t.jsx)(n.code,{children:"dependencies"}),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5c5e\u6027\u96c6\u5408\uff0c\u4ee5\u8868\u793a\u9664\u4e86id\u5c5e\u6027\u548ckey\u5c5e\u6027\u5916\uff0c",(0,t.jsx)(n.code,{children:"original"}),"\u5bf9\u8c61\u8fd8\u6709\u90a3\u4e9b\u5c5e\u6027\u9700\u8981\u88ab\u52a0\u8f7d\u3002"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Component\npublic class BaseEntityDraftInterceptor \nimplements DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    @Override\n    public void beforeSave(\n        BaseEntityDraft draft, \n        \n        // The format of `original` is controlled by `dependences()`\n        @Nullable BaseEntity original\n    ) {\n        ...implementation is omitted...\n    }\n\n    @Override\n    // highlight-next-line\n    public Collection<TypedProp<BaseEntity, ?>> dependencies() {\n        return Arrays.asList(\n            BaseEntityProps.CREATED_BY, \n            BaseEntityProps.MODIFIED_BY\n        );\n    }\n}\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@Component\nclass BaseEntityDraftInterceptor(\n    private val userService: UserService\n) : DraftInterceptor<BaseEntity, BaseEntityDraft> {\n\n    override fun beforeSave(\n        draft: BaseEntityDraft, \n\n        // The format of `original` is controlled by `dependences()`\n        original: BaseEntity?\n    ) {\n        ...implementation is omitted...\n    }\n\n    // highlight-next-line\n    override fun dependencies(): Collection<TypedProp<BaseEntity, *>> = \n        listOf(\n            BaseEntityProps.CREATED_BY, \n            BaseEntityProps.MODIFIED_BY\n        )\n}\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u8fd4\u56de\u7684\u5c5e\u6027\u96c6\u5408\u65e0\u9700\u5305\u542b",(0,t.jsx)(n.code,{children:"id"}),"\u5c5e\u6027\u548c",(0,t.jsx)(n.code,{children:"key"}),"\u5c5e\u6027\uff0c\u56e0\u4e3a\u5b83\u4eec\u603b\u662f\u88ab\u52a0\u8f7d\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u5e94\u7528\u62e6\u622a\u5668",children:"\u5e94\u7528\u62e6\u622a\u5668"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528jimmer-spring-starter",children:"\u4f7f\u7528Jimmer Spring Starter"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u6587\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u7684\u7c7b",(0,t.jsx)(n.code,{children:"BaseEntityDraftInterceptor"}),"\u88ab",(0,t.jsx)(n.code,{children:"@Compnoent"}),"\u4fee\u9970\uff0c\u5f88\u660e\u663e\u8fd9\u662f\u4e00\u4e2aSpring\u6258\u7ba1\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f7f\u7528SpringBoot Starter\u4e14\u4fdd\u8bc1\u62e6\u622a\u5668\u88abSpring\u6258\u7ba1\uff0c\u90a3\u4e48Jimmer\u5c31\u4f1a\u5c06\u6ce8\u518c\u5b83\uff0c\u65e0\u9700\u989d\u5916\u7684\u914d\u7f6e\u3002"}),(0,t.jsx)(n.p,{children:"\u5426\u5219\uff0c\u5fc5\u9700\u624b\u52a8\u6ce8\u518c"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0d\u4f7f\u7528jimmer-spring-starter",children:"\u4e0d\u4f7f\u7528Jimmer Spring Starter"}),"\n",(0,t.jsx)(n.p,{children:"\u672a\u4f7f\u7528SpringBoot\u65f6\uff0c\u5c06\u62e6\u622a\u5668\u6302\u63a5\u5230SqlClinet\u5bf9\u8c61\u4e0a\uff0c\u5373\u53ef\u751f\u6548"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Bean\npublic JSqlClient sqlClient(\n    List<DraftInterceptor<?>> interceptors,\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...\n) {\n    return JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addDraftinterceptors(interceptors)\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@Bean\nfun sqlClient(\n    interceptors: List<DraftInterceptor<?>>,\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...\n): KSqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        addDraftinterceptors(interceptors)\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u867d\u7136\u5728\u672c\u6587\u4ec5\u793a\u8303\u4e86\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"DraftInterceptor"}),"\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u53ef\u80fd\u6709\u5f88\u591a\u4e2a\u3002"]}),(0,t.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c\u8fd9\u91cc\u4f7f\u7528\u96c6\u5408\uff0c\u8ba9Spring\u6ce8\u5165\u6240\u6709\u7684",(0,t.jsx)(n.code,{children:"DraftInterceptor"}),"\u3002"]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6700\u7ec8\u4f7f\u7528",children:"\u6700\u7ec8\u4f7f\u7528"}),"\n",(0,t.jsxs)(n.p,{children:["\u5047\u5982",(0,t.jsx)(n.code,{children:"Book"}),"\u7ee7\u627f\u4e86",(0,t.jsx)(n.code,{children:"BaseEntity"}),"\uff0c\u5219\u53ef\u4ee5\u8fd9\u4e48\u4f7f\u7528"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("59"));\n    draft.applyStore(store -> store.setId(2L));\n});\nsqlClient.getEntities().save(book);\n'})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = Book {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("59")\n    store().id = 2\n}\nsqlClient.entities.save(book)\n'})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e0a\u9762\u7684\u4fdd\u5b58\u6307\u4ee4\u6700\u7ec8\u5bfc\u81f4\u4e86insert\u64cd\u4f5c\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(\n    /* highlight-start */\n    CREATED_TIME,\n    MODIFIED_TIME,\n    CREATED_BY,\n    MODIFIED_BY,\n    /* highlight-end */\n    NAME, \n    EDITION, \n    PRICE, \n    STORE_ID\n) values(\n    /* highlight-next-line */\n    ?, ?, ?, ?,\n    ?, ?, ?, ?\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c\u4e3a",(0,t.jsx)(n.code,{children:"CREATED_TIME"}),"\u3001 ",(0,t.jsx)(n.code,{children:"MODIFIED_TIME"}),"\u3001",(0,t.jsx)(n.code,{children:"CREATED_BY"}),"\u548c",(0,t.jsx)(n.code,{children:"MODIFIED_BY"}),"\u8d4b\u503c\u7684\u884c\u4e3a\u7531\u62e6\u622a\u5668\u81ea\u52a8\u6dfb\u52a0"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e0a\u9762\u7684\u4fdd\u5b58\u6307\u4ee4\u6700\u7ec8\u5bfc\u81f4\u4e86update\u64cd\u4f5c\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"update BOOK set \n    /* highlight-start */\n    MODIFIED_TIME = ?,\n    MODIFIED_TIME,\n    /* highlight-end */\n    PRICE = ?, \n    STORE_ID = ? \nwhere ID = ?\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c\u4e3a",(0,t.jsx)(n.code,{children:"MODIFIED_TIME"}),"\u548c",(0,t.jsx)(n.code,{children:"MODIFIED_BY"}),"\u8d4b\u503c\u7684\u884c\u4e3a\u7531\u62e6\u622a\u5668\u81ea\u52a8\u6dfb\u52a0"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var i=r(96540);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);