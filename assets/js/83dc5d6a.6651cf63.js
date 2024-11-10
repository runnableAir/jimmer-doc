"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7123],{56778:(e,n,l)=>{l.d(n,{A:()=>r});l(96540);var t=l(18215);const s={tabItem:"tabItem_Ymn6"};var a=l(74848);function r(e){let{children:n,hidden:l,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,r),hidden:l,children:n})}},37244:(e,n,l)=>{l.d(n,{A:()=>T});var t=l(96540),s=l(18215),a=l(44319),r=l(56347),o=l(94280),i=l(73024),u=l(58417),c=l(44031);function b(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return b(e).map((e=>{let{props:{value:n,label:l,attributes:t,default:s}}=e;return{value:n,label:l,attributes:t,default:s}}))}(l);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function d(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function _(e){let{queryString:n=!1,groupId:l}=e;const s=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:l=!1,groupId:s}=e,a=h(e),[r,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=l.find((e=>e.default))??l[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[u,b]=_({queryString:l,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(l);return[s,(0,t.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:s}),p=(()=>{const e=u??x;return d({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{p&&i(p)}),[p]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),b(e),g(e)}),[b,g,a]),tabValues:a}}var g=l(46916);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=l(74848);function v(e){let{className:n,block:l,selectedValue:t,selectValue:r,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,l=i.indexOf(n),s=o[l].value;s!==t&&(u(n),r(s))},b=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=i.indexOf(e.currentTarget)+1;n=i[l]??i[0];break}case"ArrowLeft":{const l=i.indexOf(e.currentTarget)-1;n=i[l]??i[i.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":l},n),children:o.map((e=>{let{value:n,label:l,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:b,onClick:c,...a,className:(0,s.A)("tabs__item",p.tabItem,a?.className,{"tabs__item--active":t===n}),children:l??n},n)}))})}function j(e){let{lazy:n,children:l,selectedValue:a}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,m.jsx)(v,{...n,...e}),(0,m.jsx)(j,{...n,...e})]})}function T(e){const n=(0,g.A)();return(0,m.jsx)(y,{...e,children:b(e.children)},String(n))}},17574:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>b});const t=JSON.parse('{"id":"query/sub-query","title":"Subqueries","description":"Typed Subqueries","source":"@site/docs/query/sub-query.mdx","sourceDirName":"query","slug":"/query/sub-query","permalink":"/jimmer-doc/docs/query/sub-query","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/sub-query.mdx","tags":[],"version":"current","lastUpdatedAt":1704100403000,"sidebarPosition":11,"frontMatter":{"sidebar_position":11,"title":"Subqueries"},"sidebar":"tutorialSidebar","previous":{"title":"Native SQL Expressions","permalink":"/jimmer-doc/docs/query/native-sql"},"next":{"title":"Global Filters","permalink":"/jimmer-doc/docs/query/global-filter/"}}');var s=l(74848),a=l(28453),r=l(37244),o=l(56778);const i={sidebar_position:11,title:"Subqueries"},u=void 0,c={},b=[{value:"Typed Subqueries",id:"typed-subqueries",level:2},{value:"IN expression based on single column",id:"in-expression-based-on-single-column",level:3},{value:"IN expression based on multiple columns",id:"in-expression-based-on-multiple-columns",level:3},{value:"Treat subquery as simple value",id:"treat-subquery-as-simple-value",level:3},{value:"Use subquery in select and orderBy clauses",id:"use-subquery-in-select-and-orderby-clauses",level:3},{value:"Use ANY operator",id:"use-any-operator",level:3},{value:"Use ALL operator",id:"use-all-operator",level:3},{value:"Use EXISTS operator",id:"use-exists-operator",level:3},{value:"Untyped Subqueries",id:"untyped-subqueries",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"typed-subqueries",children:"Typed Subqueries"}),"\n",(0,s.jsx)(n.h3,{id:"in-expression-based-on-single-column",children:"IN expression based on single column"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        // highlight-next-line\n        book.id().in(sqlClient\n            .createSubQuery(author) \n            .where(author.firstName().eq("Alex"))\n            .select(author.books().id())\n        )\n    )\n    .select(book)\n    .execute();\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            table.id valueIn subQuery(Author::class) {\n                where(table.firstName eq "Alex")\n                select(table.books.id) \n            }\n        )\n        select(table)    \n    }\n    .execute()\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE, \n    tb_1_.STORE_ID\nfrom BOOK as tb_1_\nwhere\n    /* highlight-next-line */  \n    tb_1_.ID in (\n        select\n            tb_3_.BOOK_ID\n        from AUTHOR as tb_2_\n        inner join BOOK_AUTHOR_MAPPING as tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n            tb_2_.FIRST_NAME = ?  \n    )\n"})}),"\n",(0,s.jsx)(n.h3,{id:"in-expression-based-on-multiple-columns",children:"IN expression based on multiple columns"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> newestBooks = sqlClient\n    .createQuery(book)\n    .where(\n        // highlight-next-line\n        Expression.tuple(\n            book.name(),\n            book.edition()\n        ).in(sqlClient\n            .createSubQuery(book)\n            .groupBy(book.name())\n            .select(\n                book.name(),\n                book.edition().max() \n            )\n        )\n    )\n    .select(book)\n    .execute();\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val newestBooks = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            tuple(\n                table.name,\n                table.edition  \n            ) valueIn subQuery(Book::class) {\n                groupBy(table.name)\n                select(\n                    table.name, \n                    max(table.edition).asNonNull()\n                )\n            }\n        )\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_  \nwhere\n    /* highlight-next-line */\n    (tb_1_.NAME, tb_1_.EDITION) in (\n        select\n            tb_2_.NAME,\n            max(tb_2_.EDITION)\n        from BOOK as tb_2_\n        group by tb_2_.NAME \n    )\n"})}),"\n",(0,s.jsx)(n.h3,{id:"treat-subquery-as-simple-value",children:"Treat subquery as simple value"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> newestBooks = sqlClient\n    .createQuery(book)\n    .where(\n        // highlight-next-line\n        book.price().gt(sqlClient\n            .createSubQuery(book)\n            .groupBy(book.name())\n            .select(\n                book\n                    .price()\n                    .avg()\n                    .coalesce(BigDecimal.ZERO)\n            )\n        )\n    )\n    .select(book)\n    .execute();\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line \n            table.price gt subQuery(Book::class) {\n                select(\n                    avg(table.price)\n                        .coalesce(BigDecimal.ZERO)\n                )\n            }\n        )\n        select(table)\n    }\n    .execute() \n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION, \n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_   \nwhere\n    /* highlight-next-line */\n    tb_1_.PRICE > (\n        select\n            coalesce(avg(tb_2_.PRICE), ?)\n        from BOOK as tb_2_  \n    )\n"})}),"\n",(0,s.jsx)(n.h3,{id:"use-subquery-in-select-and-orderby-clauses",children:"Use subquery in select and orderBy clauses"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"BookStoreTable store = Tables.BOOK_STORE_TABLE;\nBookTable book = Tables.BOOK_TABLE;\n\nMutableRootQuery<BookStoreTable> query = \n    sqlClient.createQuery(store);\nTypedSubQuery<BigDecimal> subQuery =\n    sqlClient\n        .createSubQuery(book) \n        .where(book.store().eq(store))\n        .select(\n            book\n                .price()\n                .avg()\n                .coalesce(BigDecimal.ZERO)  \n        );\nList<Tuple2<BookStore, BigDecimal>> storeAvgPriceTuples =\n    query\n        \n        .orderBy(\n            // highlight-next-line\n            subQuery.desc() \n        )\n        .select(\n            store,\n            // highlight-next-line\n            subQuery\n        )\n        .execute();\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val storeAvgPriceTuples = sqlClient\n    .createQuery(BookStore::class) {\n        val avgPriceSubQuery = subQuery(Book::class) {\n            where(table.store eq parentTable)\n            select(avg(table.price))\n        }\n        \n        orderBy(\n            // highlight-next-line\n            avgPriceSubQuery.desc()\n        )\n        select(\n            table,\n            // highlight-next-line\n            avgPriceSubQuery\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.WEBSITE,\n    (\n        /* highlight-next-line */  \n        select coalesce(avg(tb_2_.PRICE), ?)\n        from BOOK as tb_2_\n    )\nfrom BOOK_STORE as tb_1_\norder by (  \n    /* highlight-next-line */\n    select coalesce(avg(tb_2_.PRICE), ?)\n    from BOOK as tb_2_ \n) desc\n"})}),"\n",(0,s.jsx)(n.h3,{id:"use-any-operator",children:"Use ANY operator"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book.id().eq(sqlClient\n            .createSubQuery(author)\n            .where(\n                author.firstName().in(\n                    Arrays.asList("Alex", "Bill")\n                )\n            )\n            .select(author.books().id())\n            // highlight-next-line\n            .any()\n        )  \n    )\n    .select(book)\n    .execute();\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            table.id eq any(\n                subQuery(Author::class) {\n                    where(\n                        table.firstName valueIn listOf(\n                            "Alex",\n                            "Bill"\n                        )  \n                    )\n                    select(table.id)\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \nwhere tb_1_.ID =\n    /* highlight-next-line */ \n    any(\n        select\n            tb_3_.BOOK_ID\n        from AUTHOR as tb_2_\n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n            tb_2_.FIRST_NAME in (?, ?) \n    )\n"})}),"\n",(0,s.jsx)(n.h3,{id:"use-all-operator",children:"Use ALL operator"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book) \n    .where(\n        book.id().ne(sqlClient\n            .createSubQuery(author)\n            .where(\n                author.firstName().in(  \n                    Arrays.asList("Alex", "Bill")\n                )\n            )\n            .select(author.books().id())\n            // highlight-next-line\n            .all()\n        )\n    )\n    .select(book)\n    .execute(); \n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            table.id ne all(\n                subQuery(Author::class) {\n                    where(\n                        table.firstName valueIn listOf(\n                            "Alex",\n                            "Bill"  \n                        )\n                    )\n                    select(table.id)\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_  \nwhere tb_1_.ID =\n    /* highlight-next-line */\n    all(\n        select\n            tb_3_.BOOK_ID\n        from AUTHOR as tb_2_\n        inner join BOOK_AUTHOR_MAPPING as tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n            tb_2_.FIRST_NAME in (?, ?) \n    )\n"})}),"\n",(0,s.jsx)(n.h3,{id:"use-exists-operator",children:"Use EXISTS operator"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(sqlClient\n        .createSubQuery(author)\n        .where(\n            author.books().eq(book),\n            author.firstName().eq("Alex") \n        )\n        .select(author)\n        // highlight-next-line\n        .exists()\n    )\n    .select(book)\n    .execute();\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            exists(\n                subQuery(Author::class) {\n                    where(\n                        table.books eq parentTable,\n                        table.firstName eq "Alex"\n                    )  \n                    select(table)\n                }\n            )\n        )\n        select(table)\n    }\n    .execute() \n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_   \nwhere\n    /* highlight-next-line */\n    exists (\n        select\n            1\n        from AUTHOR as tb_2_\n        inner join BOOK_AUTHOR_MAPPING as tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n            tb_1_.ID = tb_3_.BOOK_ID\n        and\n            tb_2_.FIRST_NAME = ?  \n    )\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Note that in the final SQL, the selected column in the subquery is the constant ",(0,s.jsx)(n.code,{children:"1"}),", not what is specified in the Java/Kotlin code."]}),(0,s.jsxs)(n.p,{children:["This is because the ",(0,s.jsx)(n.code,{children:"exists"})," operator only cares if the subquery can match data, not what columns are selected. Whatever you select in the Java/Kotlin code will be ignored."]})]}),"\n",(0,s.jsx)(n.h2,{id:"untyped-subqueries",children:"Untyped Subqueries"}),"\n",(0,s.jsxs)(n.p,{children:["The last example in previous section is ",(0,s.jsx)(n.code,{children:"exists"})," subquery where whatever is selected in Java code gets ignored."]}),"\n",(0,s.jsxs)(n.p,{children:["In that case, why specify the return type for ",(0,s.jsx)(n.code,{children:"exists"})," subqueries in Java code?"]}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, jimmer-sql supports untyped subqueries (wild subqueries). Unlike normal subqueries, for wild subqueries the final ",(0,s.jsx)(n.code,{children:"select()"})," call is no longer needed, i.e. no return type."]}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE; \nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(sqlClient\n        // highlight-next-line\n        .createSubQuery(author)\n        .where(\n            author.books().eq(book),\n            author.firstName().eq("Alex")\n        )\n        // No select here  \n        .exists()\n    )\n    .select(book)\n    .execute();\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            exists(\n                // highlight-next-line\n                wildSubQuery(Author::class) {\n                    where(\n                        table.books eq parentTable, \n                        table.firstName eq "Alex"\n                    )\n                    // No select here\n                }\n            ) \n        )\n        select(table)\n    }\n    .execute()  \n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"The final SQL remains the same:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_    \nwhere\n    /* highlight-next-line */ \n    exists (\n        select\n            1\n        from AUTHOR as tb_2_\n        inner join BOOK_AUTHOR_MAPPING as tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n            tb_1_.ID = tb_3_.BOOK_ID\n        and\n            tb_2_.FIRST_NAME = ?   \n    )\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The only value of untyped subqueries is when used with ",(0,s.jsx)(n.code,{children:"exists"})," operator."]})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>o});var t=l(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);