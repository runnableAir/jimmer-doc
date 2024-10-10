"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1250],{59834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(74848),a=t(28453),i=t(11470),l=t(19365);const o={sidebar_position:5,title:"Implicit Subquery"},s=void 0,u={id:"query/implicit-subquery",title:"Implicit Subquery",description:"Collection (one-to-many or many-to-many) associations often lead to the frequent use of subqueries in queries, and implicit subqueries greatly simplify such subqueries.",source:"@site/docs/query/implicit-subquery.mdx",sourceDirName:"query",slug:"/query/implicit-subquery",permalink:"/jimmer-doc/docs/query/implicit-subquery",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/implicit-subquery.mdx",tags:[],version:"current",lastUpdatedAt:170910619e4,sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Implicit Subquery"},sidebar:"tutorialSidebar",previous:{title:"Join Features Specific to Kotlin",permalink:"/jimmer-doc/docs/query/dynamic-join/kotlin-join"},next:{title:"Dynamic Ordering",permalink:"/jimmer-doc/docs/query/dynamic-order"}},c={},d=[{value:"DSL Code generated by Jimmer",id:"dsl-code-generated-by-jimmer",level:2},{value:"Demo",id:"demo",level:2},{value:"Automatic Merge",id:"automatic-merge",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Collection ",(0,r.jsx)(n.em,{children:"(one-to-many or many-to-many)"})," associations often lead to the frequent use of subqueries in queries, and implicit subqueries greatly simplify such subqueries."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For complete normal subqueries, see ",(0,r.jsx)(n.a,{href:"./sub-query",children:"Normal Subqueries"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dsl-code-generated-by-jimmer",children:"DSL Code generated by Jimmer"}),"\n",(0,r.jsxs)(n.p,{children:["Taking the many-to-many association ",(0,r.jsx)(n.code,{children:"Book.authors"})," as an example, after compilation, Jimmer will generate the following code:"]}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="BookTable.java"  ',children:"@GeneratedBy(type = Book.class)\npublic class BookTable extends AbstractTypedTable<Book> implements BookProps {\n\n    @Override\n    // highlight-next-line  \n    public Predicate authors(Function<AuthorTableEx, Predicate> block) {\n        ...implementation logic omitted...  \n    }\n}\n"})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"// highlight-next-line\nfun KProps<Book>.authors(\n    block: KNonNullTableEx<Author>.() -> KNonNullExpression<Boolean>?  \n): KNonNullExpression<Boolean>? = ...implementation logic omitted...\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Users can build implicit subqueries based on this ",(0,r.jsx)(n.code,{children:"authors"})," method."]}),"\n",(0,r.jsx)(n.p,{children:"The parameter of this method is a lambda expression whose parameter is the table object of the associated object. Users can return an SQL condition to filter the associated object."}),"\n",(0,r.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"BookTable table = Tables.BOOK_TABLE;\n\npublic List<Book> findBooks(@Nullable String authorName) {\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n                authorName != null && !authorName.isEmpty(),\n                // highlight-next-line\n                table.authors(author -> {\n                    return Predicate.or(\n                            author.firstName().ilike(authorName),\n                            author.lastName().ilike(authorName)\n                    );\n                })\n        )\n        .select(table)\n        .execute();\n}\n"})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(authorName: String?): List<BookStore> =\n    sqlClient.createQuery(Book::class) {\n        authorName?.takeIf { it.isNotEmpty() }?.let {\n            // highlight-next-line\n            where += table.authors {\n                or(\n                    firstName ilike it,\n                    lastName ilike it\n                )\n            }\n        }\n    }.execute() \n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["When calling the above method and specifying a non-null parameter, for example ",(0,r.jsx)(n.code,{children:'findBooks("alex")'}),", the generated SQL is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,  \n    tb_1_.MODIFIED_TIME,\n    tb_1_.TENANT,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \nwhere\n    exists( \u278a\n        select\n            1\n        from AUTHOR tb_2_\n        inner join BOOK_AUTHOR_MAPPING tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n                tb_3_.BOOK_ID = tb_1_.ID \u278b\n            and\n                (\n                    lower(tb_2_.FIRST_NAME) like ? /* %alex% */ \u278c\n                or\n                    lower(tb_2_.LAST_NAME) like ? /* %alex% */ \u278d\n                )\n    )  \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u278a Implicit subqueries always use ",(0,r.jsx)(n.code,{children:"exists"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u278b The SQL condition auto-generated by Jimmer for associating parent-child queries"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u278c \u278d Conditions specified by users to filter associated objects"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["The association condition between parent-child queries is auto-generated. Users only need to specify the filtering condition for the associated object. This is the fundamental difference between implicit subqueries and ",(0,r.jsx)(n.a,{href:"./sub-query",children:"normal subqueries"}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"automatic-merge",children:"Automatic Merge"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to the ",(0,r.jsx)(n.a,{href:"dynamic-join/merge",children:"automatic merge of dynamic JOINs"}),", multiple implicit subqueries for the same association can also be automatically merged."]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsx)(n.p,{children:"The merge rules for implicit subqueries are not as universal as dynamic JOINs. They are limited to within the same and, or, or not."})]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"BookTable table = Tables.BOOK_TABLE;  \n\npublic List<Book> findBooks(\n    @Nullable String authorName,\n    @Nullable Gender authorGender  \n) {\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            authorName != null && !authorName.isEmpty(),\n            // highlight-next-line\n            table.authors(author -> {\n                return Predicate.or(  \n                        author.firstName().ilike(authorName),\n                        author.lastName().ilike(authorName)\n                );\n            })  \n        )  \n        .whereIf(\n            authorGender != null,\n            // highlight-next-line\n            table.authors(author -> author.gender().eq(authorGender))\n        )  \n        .select(table)\n        .execute();  \n} \n"})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(authorName: String?): List<BookStore> =  \n    sqlClient.createQuery(Book::class) {  \n        authorName?.takeIf { it.isNotEmpty() }?.let {  \n            // highlight-next-line\n            where += table.authors {  \n                or(  \n                    firstName ilike it,  \n                    lastName ilike it\n                )  \n            }  \n        }\n        authorGender?.let {  \n            // highlight-next-line\n            where += table.authors {\n                gender like it  \n            }\n        }  \n    }.execute()  \n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"The above example uses two implicit subqueries."}),"\n",(0,r.jsxs)(n.p,{children:["However, when we specify both parameters as non-null, for example ",(0,r.jsx)(n.code,{children:'findBooks("alex", Gender.MALE)'}),", there will only be one subquery in the final SQL, as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID, \n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.TENANT,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID  \nfrom BOOK tb_1_  \nwhere\n    // Merge two implicit subqueries to one real sub query\n    // highlight-next-line  \n    exists(\n        select\n            1\n        from AUTHOR tb_2_\n        inner join BOOK_AUTHOR_MAPPING tb_3_  \n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where  \n                tb_3_.BOOK_ID = tb_1_.ID  \n            and  \n                (  \n                    lower(tb_2_.FIRST_NAME) like ? /* %alex% */\n                or\n                    lower(tb_2_.LAST_NAME) like ? /* %alex% */\n                )\n            and  \n                tb_2_.GENDER = ? /* M */  \n    )  \n"})}),"\n",(0,r.jsx)(n.p,{children:"This is because within the same and, or or not, multiple implicit subqueries for the same association are automatically merged."})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),a=t(18215),i=t(23104),l=t(56347),o=t(205),s=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[u,d]=b({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),x=(()=>{const e=u??p;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&s(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function _(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(_,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);