"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6875],{11419:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=i(74848),s=i(28453),t=i(11470),r=i(19365),a=i(64087);const l={sidebar_position:1,title:"IdView"},d=void 0,c={id:"mapping/advanced/view/id-view",title:"IdView",description:"Basic Concepts: Short Associations",source:"@site/docs/mapping/advanced/view/id-view.mdx",sourceDirName:"mapping/advanced/view",slug:"/mapping/advanced/view/id-view",permalink:"/jimmer-doc/docs/mapping/advanced/view/id-view",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/view/id-view.mdx",tags:[],version:"current",lastUpdatedAt:1711847179e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"IdView"},sidebar:"tutorialSidebar",previous:{title:"View Properites",permalink:"/jimmer-doc/docs/mapping/advanced/view/"},next:{title:"ManyToManyView",permalink:"/jimmer-doc/docs/mapping/advanced/view/many-to-many-view"}},h={},p=[{value:"Basic Concepts: Short Associations",id:"basic-concepts-short-associations",level:2},{value:"Microsoft&#39;s Solution",id:"microsofts-solution",level:2},{value:"IdView Property",id:"idview-property",level:2},{value:"Declaring View Properties",id:"declaring-view-properties",level:3},{value:"Essence of View Properties",id:"essence-of-view-properties",level:3},{value:"Fetching IdView Properties",id:"fetching-idview-properties",level:2},{value:"Do Not Abuse",id:"do-not-abuse",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"basic-concepts-short-associations",children:"Basic Concepts: Short Associations"}),"\n",(0,o.jsx)(n.p,{children:"Before introducing IdView, we need to first introduce a concept: short associations."}),"\n",(0,o.jsx)(n.p,{children:"Before introducing short associations, let's first look at a normal association"}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Book book = bookRepository.findNullable(\n    1L,\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .store(\n            Fetchers.BOOK_STORE_FETCHER\n                .allScalarFields()\n        )\n        // highlight-next-line\n        .authors(\n            Fetchers.AUTHOR_FETCHER\n                .firstName()\n                .lastName()\n        )\n);\nSystem.out.println(book);\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val book = bookRepository.findNullable(\n    1L, \n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        store {\n            allScalarFields()\n        }\n        // highlight-next-line\n        authors {\n            firstName()\n            lastName()\n        }\n    }\n);\nSystem.out.println(book);\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"In this code:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fetches associated ",(0,o.jsx)(n.code,{children:"BookStore"})," object via ",(0,o.jsx)(n.code,{children:"store"})," association property of ",(0,o.jsx)(n.code,{children:"Book"}),", expecting to get all non-associative properties of associated object"]}),"\n",(0,o.jsxs)(n.li,{children:["Fetches associated ",(0,o.jsx)(n.code,{children:"Author"})," objects via ",(0,o.jsx)(n.code,{children:"authors"})," association property of ",(0,o.jsx)(n.code,{children:"Book"}),", expecting ",(0,o.jsx)(n.code,{children:"id"})," (implicit + mandatory), ",(0,o.jsx)(n.code,{children:"firstName"})," and ",(0,o.jsx)(n.code,{children:"lastName"})," of associated objects"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The output is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "id":1,\n    "name":"Learning GraphQL",  \n    "edition":1,\n    "price":45,  \n    // highlight-next-line\n    "store":{\n        "id":1,\n        "name":"O\'REILLY",\n        "website":null\n    },\n    // highlight-next-line \n    "authors":[\n        {\n            "id":2,\n            "firstName":"Alex",\n            "lastName":"Banks"\n        },\n        {\n            "id":1, \n            "firstName":"Eve",\n            "lastName":"Procello"\n        }\n    ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Here, associated objects ",(0,o.jsx)(n.code,{children:"BookStore"})," and ",(0,o.jsx)(n.code,{children:"Author"})," on aggregate root ",(0,o.jsx)(n.code,{children:"Book"})," have properties other than ",(0,o.jsx)(n.code,{children:"id"}),", with relatively complete information."]}),"\n",(0,o.jsxs)(n.p,{children:["More importantly, non-",(0,o.jsx)(n.code,{children:"id"}),' properties of course also include associated properties, so this data structure can be nested multiple levels or even recursive. This kind of association can also be called a "long association".']}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"However, not all cases require such a deep data structure. In actual projects, sometimes only a very simple UI is needed, like below:"})}),"\n",(0,o.jsx)(a.M,{}),"\n",(0,o.jsx)(n.p,{children:"In this UI:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Book.store"})," is a many-to-one association, rendered as a dropdown selector"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Book.authors"})," is a many-to-many association, rendered as a multiple dropdown selector"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Of course, if there are too many options, a dropdown list is no longer a reasonable design. In this case, improve it to a popup dialog with pagination. But these UI details are unimportant and irrelevant to the current topic."})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["It is obvious that at this point, the user only cares about the ",(0,o.jsx)(n.code,{children:"id"})," of the associated object, and has no interest in other properties of the associated object."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"That is, we want the associated object to only have the id property"})}),"\n",(0,o.jsx)(n.p,{children:"To allow aggregate roots to be associated with some objects that only have id, we can improve the code."}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Book book = bookRepository.findNullable(\n    1L,\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .store() // no args means id only  \n        // highlight-next-line\n        .authors() // no args means id only\n);\nSystem.out.println(book);\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        store() // no args means id only\n        // highlight-next-line \n        authors() // no args means id only\n    } \n);\nSystem.out.println(book);\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"This time, we get a data structure like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    "store":{\n        // Only has id property  \n        // highlight-next-line\n        "id":1\n    }, \n    "authors":[\n        {\n            // Only has id property\n            // highlight-next-line\n            "id":1\n        },\n        {\n            // Only has id property \n            // highlight-next-line\n            "id":2\n        }\n    ]\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"In Hibernate, this kind of object with only id property is called a proxy object."})}),"\n",(0,o.jsx)(n.p,{children:"However, associated objects with only id are not as simple as just the id of the association. Let's look at the same data expressed with associated ids instead of associated objects:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "id":1, \n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,  \n    // highlight-next-line \n    "storeId": 1,\n    // highlight-next-line\n    "authorIds":[1, 2] \n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"It is obvious that for short association use cases, associated ids or their collections are simpler than associated objects or their collections with only id."}),"\n",(0,o.jsx)(n.h2,{id:"microsofts-solution",children:"Microsoft's Solution"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ADO.NET EF Core"})," is Microsoft's ORM. Let's look at its design: ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key",children:"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"public class Post \n{\n    public int PostId { get; set; }\n    public string Title { get; set; }\n    public string Content { get; set; }\n\n    // highlight-start\n    public int BlogId { get; set; } \n    public Blog Blog { get; set; }\n    // highlight-end\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"It's easy to see that:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Associated object: ",(0,o.jsx)(n.code,{children:"public Blog Blog { get; set; }"})]}),"\n",(0,o.jsxs)(n.li,{children:["Associated id: ",(0,o.jsx)(n.code,{children:"public int BlogId { get; set; }"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"They coexist."}),"\n",(0,o.jsxs)(n.p,{children:["Jimmer learns from this design of ",(0,o.jsx)(n.code,{children:"ADO.NET EF Core"})," and provides the ",(0,o.jsx)(n.code,{children:"@IdView"})," property."]}),"\n",(0,o.jsx)(n.h2,{id:"idview-property",children:"IdView Property"}),"\n",(0,o.jsx)(n.h3,{id:"declaring-view-properties",children:"Declaring View Properties"}),"\n",(0,o.jsxs)(n.p,{children:["IdView properties are declared with ",(0,o.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.IdView"}),":"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...other properties omitted... \n    \n    @ManyToOne  \n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID", \n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line \n    @IdView // View of store id\n    Long storeId();\n\n    // View of all author ids in authors collection\n    // highlight-next-line\n    @IdView("authors")  \n    List<Long> authorIds(); \n}\n'})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt" ',children:'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity  \ninterface Book {\n\n    ...other properties omitted...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id" \n    )\n    val authors: List<Author>\n\n    // highlight-next-line\n    @IdView // View of store id\n    val storeId: Long? \n\n    // View of all author ids in authors collection\n    // highlight-next-line \n    @IdView("authors")\n    val authorIds: List<Long>  \n}\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"Where:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Book.storeId"}),": View of the id of associated ",(0,o.jsx)(n.code,{children:"Book.store"})," object."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Since ",(0,o.jsx)(n.code,{children:"storeId"})," itself ends with ",(0,o.jsx)(n.code,{children:"Id"}),", the parameter of ",(0,o.jsx)(n.code,{children:"@IdView"})," annotation can be omitted. Jimmer infers the original association property to be ",(0,o.jsx)(n.code,{children:"Book.store"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Nullability of original association property and IdView property must be consistent."}),"\n",(0,o.jsxs)(n.p,{children:["In this example, ",(0,o.jsx)(n.code,{children:"Book.store"})," property can be null, i.e. annotated with ",(0,o.jsx)(n.code,{children:"@Nullable"})," in Java, or returns ",(0,o.jsx)(n.code,{children:"BookStore?"})," in Kotlin."]}),"\n",(0,o.jsxs)(n.p,{children:["Therefore, ",(0,o.jsx)(n.code,{children:"Book.storeId"})," must also be nullable, i.e. returns ",(0,o.jsx)(n.code,{children:"Long"})," instead of ",(0,o.jsx)(n.code,{children:"long"})," in Java, or returns ",(0,o.jsx)(n.code,{children:"Long?"})," instead of ",(0,o.jsx)(n.code,{children:"Long"})," in Kotlin."]}),"\n",(0,o.jsx)(n.p,{children:"Otherwise it would cause compile error."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Book.authorIds"}),": View of ids of all ",(0,o.jsx)(n.code,{children:"Author"})," objects in associated ",(0,o.jsx)(n.code,{children:"Book.authors"})," collection."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"authorIds"})," itself does not end with ",(0,o.jsx)(n.code,{children:"Id"}),", so the parameter of ",(0,o.jsx)(n.code,{children:"@IdView"})," annotation must be specified to explicitly indicate its original association is ",(0,o.jsx)(n.code,{children:"Book.authors"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"This is required in this case due to irregular noun pluralization in English."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"essence-of-view-properties",children:"Essence of View Properties"}),"\n",(0,o.jsx)(n.p,{children:'The emphasis on the word "view" above is intentional. IdView properties do not have their own data, they are just views of original association properties.'}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"IdView properties and original association properties are linked. Setting one necessarily affects the other."})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Setting view property affects original property:"}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// Set view property\nBook book = Objects.createBook(draft -> {\n    draft.setStoreId(10L);\n    draft.setAuthorIds(Arrays.asList(100L, 101L)); \n});\n\n// Print original property  \nSystem.out.println("Store: " + book.store());\nSystem.out.println("Authors:" + book.authors());\n'})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'// Set view property\nval book = new(Book::class).by { \n    storeId = 10L\n    authorIds = listOf(100L, 101L)\n}\n\n// Print original property\nprintln("Store: $book.store}")  \nprintln("Authors: ${book.authors}")\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"Prints:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'Store: {"id":10}\nAuthors: [{"id":100},{"id":101}]\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Setting original property affects view property:"}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// Set original property\nBook book = Objects.createBook(draft -> {\n    draft.applyStore(store -> {\n        store.setId(10L).storeName("TURING")  \n    });\n    draft.addIntoAuthors(author -> {\n        author.setId(101L);\n        author.setFirstName("Fabrice");\n        author.setLastName("Marguerie"); \n    });\n    draft.addIntoAuthors(author -> {\n        author.setId(101L);\n        author.setFirstName("Steve");\n        author.setLastName("Eichert");  \n    });\n});\n\n// Print view property\nSystem.out.println("StoreId: " + book.storeId()); \nSystem.out.println("AuthorIds:" + book.authorIds());\n'})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'// Set original property\nval book = new(Book::class).by {\n    store { \n        id = 10L\n        name = "TURING"\n    }\n    authors().addBy {\n        id = 101L;\n        firstName = "Fabrice"\n        lastName = "Marguerie"\n    }\n    authors().addBy {\n        id = 101L  \n        firstName = "Steve"\n        lastName = "Eichert"  \n    }\n}\n\n// Print view property\nprintln("Store: $book.storeId}")\nprintln("Authors: ${book.authorIds}") \n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"Prints:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"StoreId: 10\nAuthorIds: [100, 101] \n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"This shows that view properties and original properties are highly unified. Jimmer is still a ORM framework that is core-associated-object-oriented. View properties are just syntactic sugar."}),(0,o.jsxs)(n.p,{children:["Except for the impact on ",(0,o.jsx)(n.a,{href:"../../../query/object-fetcher",children:"ObjectFetcher"})," to be explained below, view properties do not affect ORM and core logic at all."]})]}),"\n",(0,o.jsx)(n.h2,{id:"fetching-idview-properties",children:"Fetching IdView Properties"}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Book book = bookRepository.findNullable(\n    1L,\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line  \n        .storeId()\n        // highlight-next-line\n        .authorIds()\n);\nSystem.out.println(book);\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields() \n        // highlight-next-line\n        storeId()\n        // highlight-next-line\n        authorIds()\n    }\n);\nSystem.out.println(book); \n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Prints:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "storeId": 1,  \n    // highlight-next-line\n    "authorIds":[1, 2]\n}\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"For Jimmer dynamic entities, original association properties and view properties are absolutely consistent. Either both can be accessed, or both are missing."}),(0,o.jsx)(n.p,{children:"Whether choosing to fetch the original association property or choosing to fetch the IdView view property does not affect the underlying execution logic of Jimmer, including the ultimately generated SQL."}),(0,o.jsxs)(n.p,{children:["The only difference brought by different choices is that the Jackson ",(0,o.jsx)(n.a,{href:"../../../object/visibility",children:"visibility flag"})," of original association properties and view properties are different."]}),(0,o.jsx)(n.p,{children:"That is, properties fetched directly will be serialized by Jackson, while properties not fetched directly will be ignored."})]}),"\n",(0,o.jsx)(n.p,{children:"Here is the English translation of the file, with the code indentation preserved:"}),"\n",(0,o.jsx)(n.h2,{id:"do-not-abuse",children:"Do Not Abuse"}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["Without the assistance of DTOs, hope that the entity itself can express associated ids, is the only scenario where it is appropriate to use ",(0,o.jsx)(n.code,{children:"@IdView"}),"."]}),(0,o.jsxs)(n.p,{children:["Other features make no assumptions about whether an association property has a corresponding ",(0,o.jsx)(n.code,{children:"@IdView"})," property."]})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Using associated IDs in the SQL DSL"}),"\n",(0,o.jsxs)(n.p,{children:["Even if an entity's one-to-one or many-to-one association property does not have a corresponding ",(0,o.jsx)(n.code,{children:"@IdView"})," property, you can still use associated id expressions in the SQL DSL, for example:"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"where(table.storeId().eq(2L));\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"where(table.storeId eq 2L)\n"})})})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Of course, if you are not satisfied with the auto-generated name for the associated id (e.g., ",(0,o.jsx)(n.code,{children:"storeId"})," here), you can provide an ",(0,o.jsx)(n.code,{children:"@IdView"})," property to change its name."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Using associated ids in the DTO language"}),"\n",(0,o.jsxs)(n.p,{children:["The DTO language does not require ",(0,o.jsx)(n.code,{children:"@IdView"})," properties at all. Even if an entity's associated property already has a corresponding ",(0,o.jsx)(n.code,{children:"@IdView"})," property,\nit is not recommended to use it in the DTO language, as this is a fragile assumption.\nOnce that ",(0,o.jsx)(n.code,{children:"@IdView"})," property is removed, the DTO code cannot be correctly compiled until it is synchronized with the change."]}),"\n",(0,o.jsx)(n.p,{children:"The DTO language should directly use the association propertes, for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"export yourpackage.Book\n    -> package yourpackage.dto\n\ninput BookInput {\n    allScalarFields()\n    #highlight-next-line\n    id(store) // as storeId\n    #highlight-next-line\n    id(authors) as authorIds\n}\n\nspecification BookSpecication {\n    like/i(name)\n    #highlight-next-line\n    associatedIdIn(store) as storeIds\n    #highlight-next-line\n    associatedIdNotIn(store) as excludedStoreIds\n}\n"})}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},64087:(e,n,i)=>{i.d(n,{M:()=>v});var o=i(44586),s=i(31729),t=i(48440),r=i(80421),a=i(57416),l=i(18441),d=i(68999),c=i(43581),h=i(63051),p=i(46831),u=i(28968),j=i(15993),x=i(13407),g=i(67512),m=i(96540),b=i(74848);const v=(0,m.memo)((()=>{const[e,n]=(0,m.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),i=(0,m.useCallback)((e=>{n((n=>({...n,name:e.target.value})))}),[]),v=(0,m.useCallback)((e=>{n((n=>({...n,edition:e.target.valueAsNumber})))}),[]),y=(0,m.useCallback)((e=>{n((n=>({...n,price:e.target.valueAsNumber})))}),[]),f=(0,m.useCallback)((e=>{let i;const o=e.target.value;i="string"==typeof o?parseInt(o):o,-1===i&&(i=void 0),n((e=>({...e,storeId:i})))}),[]),k=(0,m.useCallback)((e=>{let i=[];console.log(e.target.value);const o=e.target.value;i="string"==typeof o?o.split(",").map((e=>parseInt(e))):o,n((e=>({...e,authorIds:i})))}),[]),{i18n:w}=(0,o.A)(),I=(0,m.useMemo)((()=>"zh"==w.currentLocale||"zh_cn"==w.currentLocale||"zh_CN"==w.currentLocale),[w.currentLocale]),[A,N]=(0,m.useState)(!1),B=(0,m.useCallback)((()=>{N(!0)}),[]),S=(0,m.useCallback)((()=>{N(!1)}),[]);return(0,b.jsxs)(a.A,{elevation:3,style:{padding:"1.5rem",width:500},children:[(0,b.jsxs)(d.A,{spacing:2,children:[(0,b.jsx)("h1",{children:"Book Form"}),(0,b.jsx)(c.A,{label:"Name",value:e.name,onChange:i,error:""===e.name,helperText:""===e.name?"Name is required":""}),(0,b.jsx)(c.A,{label:"Edition",type:"number",value:e.edition,onChange:v}),(0,b.jsx)(c.A,{label:"Price",type:"number",value:e.price,onChange:y}),(0,b.jsxs)(s.A,{fullWidth:!0,children:[(0,b.jsx)(t.A,{id:"store-select-label",children:"Store"}),(0,b.jsxs)(l.A,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:f,children:[(0,b.jsx)(r.A,{value:-1,children:"--NONE--"}),(0,b.jsx)(r.A,{value:1,children:"O'REILLY"}),(0,b.jsx)(r.A,{value:2,children:"MANNING"})]})]}),(0,b.jsxs)(s.A,{fullWidth:!0,children:[(0,b.jsx)(t.A,{id:"author-multi-select-label",children:"Authors"}),(0,b.jsxs)(l.A,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:k,children:[(0,b.jsx)(r.A,{value:1,children:"Eve Procello"}),(0,b.jsx)(r.A,{value:2,children:"Alex Banks"}),(0,b.jsx)(r.A,{value:3,children:"Dan Vanderkam"}),(0,b.jsx)(r.A,{value:4,children:"Boris Cherny"}),(0,b.jsx)(r.A,{value:5,children:"Samer Buna"})]})]}),(0,b.jsx)(s.A,{children:(0,b.jsx)(g.A,{onClick:B,variant:"contained",children:I?"\u63d0\u4ea4":"Submit"})})]}),(0,b.jsxs)(h.A,{open:A,onClose:S,children:[(0,b.jsx)(p.A,{children:I?"\u4fe1\u606f":"Info"}),(0,b.jsx)(u.A,{children:(0,b.jsx)(x.A,{children:I?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,b.jsx)(j.A,{children:(0,b.jsx)(g.A,{onClick:S,children:"\u5173\u95ed"})})]})]})}))}}]);