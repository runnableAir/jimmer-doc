"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3820],{56778:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var i=t(18215);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,l),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(96540),a=t(18215),r=t(44319),l=t(56347),o=t(94280),s=t(73024),d=t(58417),c=t(44031);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=m(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[d,u]=p({queryString:t,groupId:a}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=d??g;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&s(x)}),[x]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=t(46916);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==i&&(d(n),l(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>s.push(e),onKeyDown:u,onClick:c,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(f,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,j.jsx)(_,{...e,children:u(e.children)},String(n))}},20254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"mapping/advanced/embedded","title":"Embedded Properties","description":"Embedded properties (Composite properties) merge multiple columns in the database into an integral whole, map them to a non-entity custom type, and then use this custom type to declare a property for the entity.","source":"@site/docs/mapping/advanced/embedded.mdx","sourceDirName":"mapping/advanced","slug":"/mapping/advanced/embedded","permalink":"/jimmer-doc/docs/mapping/advanced/embedded","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/embedded.mdx","tags":[],"version":"current","lastUpdatedAt":1731341376000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Embedded Properties"},"sidebar":"tutorialSidebar","previous":{"title":"Advanced mapping","permalink":"/jimmer-doc/docs/mapping/advanced/"},"next":{"title":"MappedSuperclass","permalink":"/jimmer-doc/docs/mapping/advanced/mapped-super-class"}}');var a=t(74848),r=t(28453),l=t(37244),o=t(56778);const s={sidebar_position:1,title:"Embedded Properties"},d=void 0,c={},u=[{value:"As Ordinary Field",id:"as-ordinary-field",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Override Column Names",id:"override-column-names",level:3},{value:"As Primary/Foreign Keys",id:"as-primaryforeign-keys",level:2},{value:"As Primary Key",id:"as-primary-key",level:3},{value:"Referenced by @JoinColumn",id:"referenced-by-joincolumn",level:3},{value:"Referenced by @JoinTable",id:"referenced-by-jointable",level:3}];function m(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Embedded properties ",(0,a.jsx)(n.em,{children:"(Composite properties)"})," merge multiple columns in the database into an integral whole, map them to a non-entity custom type, and then use this custom type to declare a property for the entity."]}),"\n",(0,a.jsx)(n.h2,{id:"as-ordinary-field",children:"As Ordinary Field"}),"\n",(0,a.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,a.jsx)(n.p,{children:"First, define a composite type:"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="FullName.java"',children:"// highlight-next-line  \n@Embeddable\npublic interface FullName {\n\n    String firstName();\n\n    String lastName();\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="FullName.kt"',children:"// highlight-next-line\n@Embeddable \ninterface FullName {\n\n    val firstName: String\n    \n    val lastName: String\n}\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Types defined by @Embeddable are not entity types. They must not declare id properties or association properties, otherwise compilation errors will occur."})}),"\n",(0,a.jsx)(n.p,{children:"Then we can use it in another entity:"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:"@Entity\npublic interface Author {\n\n    @Id  \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    FullName name();\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt" ',children:"@Entity\ninterface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    val name: FullName\n}\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Unlike JPA/Hibernate, when using composite types in entities, ",(0,a.jsx)(n.code,{children:"@Embedded"})," is not required. In fact, Jimmer does not provide the ",(0,a.jsx)(n.code,{children:"@Embedded"})," annotation at all."]})}),"\n",(0,a.jsxs)(n.p,{children:["The table structure corresponding to ",(0,a.jsx)(n.code,{children:"Author"})," is:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create table author(\n    id bigint unsigned not null auto_increment primary key,\n    /* highlight-next-line */\n    first_name varchar(20) not null,\n    /* highlight-next-line */  \n    last_name varchar(20) not null\n) engine=innodb;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"override-column-names",children:"Override Column Names"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"org.babyfish.jimmer.sql.PropOverride"})," can be used to override column names of composite type properties:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Define composite type ",(0,a.jsx)(n.code,{children:"Point"}),":"]}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Point.java"',children:"@Embeddable\npublic interface Point {\n\n    int x();\n\n    int y();\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Point.kt"',children:"@Embeddable\ninterface Point {\n\n    val x: Int\n    \n    val y: Int\n}\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Define composite type ",(0,a.jsx)(n.code,{children:"Rect"})," and override column names of ",(0,a.jsx)(n.code,{children:"Point"})," type:"]}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Rect.java"',children:'@Embeddable\npublic interface Rect {\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`LEFT`") \n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "`TOP`")\n    Point leftTop();\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`RIGHT`")\n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "BOTTOM")\n    Point rightBottom();\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Rect.kt"',children:'@Embeddable\ninterface Rect {\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`LEFT`")\n    // highlight-next-line  \n    @PropOverride(prop = "y", columnName = "`TOP`")\n    val leftTop: Point\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`RIGHT`") \n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "BOTTOM")\n    val rightBottom: Point\n}\n'})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Define entity type ",(0,a.jsx)(n.code,{children:"Transition"})," and override column names of ",(0,a.jsx)(n.code,{children:"Rect"})," type:"]}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Transition.java"',children:'@Entity\npublic interface Transition {\n\n    @Id\n    long id();\n\n    int millis();\n\n    Rect source();\n\n    // highlight-start\n    @PropOverride(prop = "leftTop.x", columnName = "TARGET_LEFT")\n    @PropOverride(prop = "leftTop.y", columnName = "TARGET_TOP")\n    @PropOverride(prop = "rightBottom.x", columnName = "TARGET_RIGHT")\n    @PropOverride(prop = "rightBottom.y", columnName = "TARGET_BOTTOM")\n    // highlight-end\n    Rect target();\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Transition.kt"',children:'@Entity\ninterface Transition {\n\n    @Id\n    val id: Long\n\n    val millis: Int\n\n    val source: Rect\n\n    // highlight-start\n    @PropOverride(prop = "leftTop.x", columnName = "TARGET_LEFT")\n    @PropOverride(prop = "leftTop.y", columnName = "TARGET_TOP")\n    @PropOverride(prop = "rightBottom.x", columnName = "TARGET_RIGHT")\n    @PropOverride(prop = "rightBottom.y", columnName = "TARGET_BOTTOM")\n    // highlight-end\n    val target: Rect\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The table structure corresponding to ",(0,a.jsx)(n.code,{children:"Transition"})," is:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create table transition(\n    id bigint unsigned not null auto_increment primary key,\n    millis int not null,\n    `LEFT` int not null,\n    `TOP` int not null, \n    `RIGHT` int not null,\n    bottom int not null,\n    target_left int not null,\n    target_top int not null,\n    target_right int not null,\n    target_bottom int not null\n) engine=innodb;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"as-primaryforeign-keys",children:"As Primary/Foreign Keys"}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsx)(n.p,{children:"Using composite types as primary/foreign keys, that is, primary keys and foreign keys are composed of multiple columns, makes the system more complex without much benefit."}),(0,a.jsx)(n.p,{children:"Therefore, unless compatibility with legacy database design is required, the system should avoid such usage to keep primary/foreign keys simple."})]}),"\n",(0,a.jsx)(n.p,{children:"Let's first define a composite type:"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="UniqueId.java"',children:'// highlight-next-line\n@Embeddable\npublic interface UniqueId {\n\n    @columnName("UNIQUE_ID_DAY_NO")\n    int dayNo();\n\n    @columnName("UNIQUE_ID_SEQ_NO")  \n    int sequenceNo();\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="UniqueId.kt"',children:'// highlight-next-line\n@Embeddable\ninterface UniqueId {\n\n    @columnName("UNIQUE_ID_DAY_NO")\n    val dayNo: Int\n    \n    @columnName("UNIQUE_ID_SEQ_NO")\n    val sequenceNo: Int  \n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"as-primary-key",children:"As Primary Key"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity \npublic interface Book {\n\n    @Id\n    UniqueId id();\n\n    ...Omit other code...\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n\n    @Id\n    val id: UniqueId\n\n    ...Omit other code... \n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Since ",(0,a.jsx)(n.code,{children:"Book.id"})," does not override column names of ",(0,a.jsx)(n.code,{children:"UniqueId"})," type using ",(0,a.jsx)(n.code,{children:"@PropOverride"}),", the column names configured in ",(0,a.jsx)(n.code,{children:"UniqueId"})," are used. The corresponding DDL is:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create table book(\n    unique_id_day_no int not null,\n    unique_id_seq_no int not null,\n    ...Omit other columns...   \n) engine=innodb;\n\nalter table book\n    add constraint pk_book\n        primary key(unique_id_day_no, unique_id_seq_no); \n"})}),"\n",(0,a.jsx)(n.h3,{id:"referenced-by-joincolumn",children:"Referenced by @JoinColumn"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Chapter.java"  ',children:'@Entity\npublic interface Chapter {\n\n    @ManyToOne\n    @JoinColumn(\n        name = "BOOK_ID_DAY_NO",\n        referencedColumnName = "UNIQUE_ID_DAY_NO" \n    )\n    @JoinColumn(\n        name = "BOOK_ID_SEQ_NO",\n        referencedColumnName = "UNIQUE_ID_SEQ_NO"\n    )\n    Book book();\n\n    ...Omit other code...\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Chapter.kt"',children:'@Entity\ninterface Chapter {\n\n    @ManyToOne\n    @JoinColumn(\n        name = "BOOK_ID_DAY_NO",\n        referencedColumnName = "UNIQUE_ID_DAY_NO"\n    )\n    @JoinColumn(\n        name = "BOOK_ID_SEQ_NO",\n        referencedColumnName = "UNIQUE_ID_SEQ_NO" \n    )\n    val book: Book\n\n    ...Omit other code...\n}\n'})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.p,{children:["Different from all the examples we have covered before, here the ",(0,a.jsx)(n.code,{children:"referencedColumnName"})," of the @JoinColumn annotation is specified."]}),(0,a.jsxs)(n.p,{children:["When the foreign key consists of multiple columns, multiple ",(0,a.jsx)(n.code,{children:"@JoinColumn"})," annotations must be used, where each ",(0,a.jsx)(n.code,{children:"@JoinColumn"})," must specify ",(0,a.jsx)(n.code,{children:"referencedColumnName"}),"."]})]}),"\n",(0,a.jsx)(n.p,{children:"If the foreign key is real, the corresponding constraint is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"alter table chapter\n    add constraint fk_chapter__book\n        foreign key(\n            book_id_day_no,\n            book_id_seq_id\n        ) references book(\n            unique_id_day_no,\n            unique_id_seq_no\n        );\n"})}),"\n",(0,a.jsx)(n.h3,{id:"referenced-by-jointable",children:"Referenced by @JoinTable"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"  ',children:'@Entity\npublic interface Book {\n\n    @Id\n    UniqueId id();\n\n    @ManyToMany\n    @JoinTable(\n        joinColumns = {\n            @JoinColumn(\n                name = "BOOK_ID_DAY_NO",\n                referencedColumnName = "UNIQUE_ID_DAY_NO"\n            ),\n            @JoinColumn(\n                name = "BOOK_ID_SEQ_NO",\n                referencedColumnName = "UNIQUE_ID_SEQ_NO"\n            )\n        }\n    )\n    // highlight-next-line\n    List<Author> authors();\n\n    ...Omit other code...\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity  \ninterface Book {\n\n    @Id\n    val id: UniqueId\n\n    @ManyToMany\n    @JoinTable(\n        joinColumns = [\n            JoinColumn(\n                name = "BOOK_ID_DAY_NO",\n                referencedColumnName = "UNIQUE_ID_DAY_NO"\n            ),\n            JoinColumn(\n                name = "BOOK_ID_SEQ_NO", \n                referencedColumnName = "UNIQUE_ID_SEQ_NO"\n            )\n        ]\n    )\n    // highlight-next-line\n    val authors: List<Author>\n\n    ...Omit other code...\n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"If the foreign key is real, the DDL of the join table is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create table book_author_mapping(\n    book_id_day_no int not null,\n    book_id_seq_id int not null,\n    author_id bigint not null\n) engine=innodb;\n\nalter table book_author_mapping\n    add constraint pk_book_author_mapping\n        primary key(\n            book_id_day_no,\n            book_id_seq_id,\n            author_id\n        );\n        \nalter table book_author_mapping\n    add constraint fk_book_author_mapping__book\n        foreign key(\n            book_id_day_no,\n            book_id_seq_id\n        ) references book(\n            unique_id_day_no,\n            unique_id_seq_no\n        );\n        \nalter table book_author_mapping\n    add constraint fk_book_author_mapping__author\n        foreign key(author_id)\n            references author(id);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);