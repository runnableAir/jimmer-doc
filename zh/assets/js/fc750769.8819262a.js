"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1166],{36518:(e,n,i)=>{i.d(n,{Y:()=>T});var l=i(96540),s=i(67733),r=i(67512),d=i(43581),t=i(80421),c=i(1489),a=i(71543),o=i(57416),h=i(53881),x=i(88933),j=i(46780),u=i(19591),m=i(618),p=i(73231),A=i(30854),g=i(16718),v=i(4671),k=i(67034),b=i(63051),I=i(15993),y=i(28968),C=i(13407),f=i(46831),_=i(22777),O=i(82470),B=i(37091),N=i(74848);const T=(0,l.memo)((()=>{const{i18n:e}=(0,_.A)(),n=(0,B.o)(),i=(0,l.useMemo)((()=>n?S:L),[n]),T=(0,l.useMemo)((()=>{const e=new Map;for(const n of i)e.set(n.id,n);return e}),[i]),P=(0,l.useMemo)((()=>n?M:q),[n]),E=(0,l.useMemo)((()=>{const e=new Map;for(const n of P)e.set(n.id,n);return e}),[P]),[R,K]=(0,O.e)((()=>({userId:1,province:T.get(1).province,city:T.get(1).city,address:T.get(1).address,items:[{__rowId:1,productId:1,name:E.get(1).name,quantity:2},{__rowId:2,productId:10,name:E.get(10).name,quantity:1}]}))),D=(0,l.useMemo)((()=>Math.max(...R.items.map((e=>e.__rowId)))+1),[R]),z=(0,l.useCallback)((e=>{const n=T.get(parseInt(e.target.value));void 0!==n&&K((e=>{e.userId=n.id,e.province=n.province,e.city=n.city,e.address=n.address}))}),[K,T]),J=(0,l.useCallback)((e=>{K((n=>{n.province=e.target.value}))}),[K]),U=(0,l.useCallback)((e=>{K((n=>{n.city=e.target.value}))}),[K]),F=(0,l.useCallback)((e=>{K((n=>{n.address=e.target.value}))}),[K]),G=(0,l.useCallback)(((e,n)=>{K((i=>{for(const l of i.items)if(l.__rowId===n){l.productId=parseInt(e.target.value),w(i);break}}))}),[K]),H=(0,l.useCallback)(((e,n)=>{K((i=>{for(const l of i.items)if(l.__rowId===n){l.quantity=parseInt(e.target.value),w(i);break}}))}),[K]),W=(0,l.useCallback)((e=>{K((n=>{for(let i=n.items.length-1;i>=0;--i)if(n.items[i].__rowId===e){n.items.splice(i,1);break}}))}),[K]),Q=(0,l.useCallback)((()=>{K((e=>{e.items.push({__rowId:D,quantity:1})}))}),[K,D]),[Y,V]=(0,l.useState)(!1),X=(0,l.useCallback)((()=>{V(!0)}),[]),Z=(0,l.useCallback)((()=>{V(!1)}),[]);return(0,N.jsxs)(o.A,{elevation:3,style:{padding:"1.5rem"},children:[(0,N.jsx)(s.A,{component:"form",noValidate:!0,autoComplete:"off",children:(0,N.jsxs)(c.Ay,{container:!0,spacing:2,children:[(0,N.jsx)(c.Ay,{item:!0,xs:4,children:(0,N.jsx)(d.A,{fullWidth:!0,select:!0,label:n?"\u8d2d\u4e70\u4eba":"Purchaser",value:R.userId,onChange:z,children:i.map((e=>(0,N.jsx)(t.A,{value:e.id,children:e.nickName},e.id)))})}),(0,N.jsx)(c.Ay,{item:!0,xs:4,children:(0,N.jsx)(d.A,{fullWidth:!0,label:n?"\u7701\u4efd":"Province",value:R.province,onChange:J})}),(0,N.jsx)(c.Ay,{item:!0,xs:4,children:(0,N.jsx)(d.A,{fullWidth:!0,label:n?"\u57ce\u5e02":"City",value:R.city,onChange:U})}),(0,N.jsx)(c.Ay,{item:!0,xs:12,children:(0,N.jsx)(d.A,{fullWidth:!0,label:n?"\u5730\u5740":"Address",value:R.address,onChange:F})}),(0,N.jsxs)(c.Ay,{item:!0,xs:12,children:[(0,N.jsx)(a.A,{textAlign:"left",children:n?"\u8ba2\u5355\u660e\u7ec6":"Order Items"}),(0,N.jsx)(u.A,{component:o.A,children:(0,N.jsxs)(h.A,{size:"small",children:[(0,N.jsx)(m.A,{children:(0,N.jsxs)(p.A,{children:[(0,N.jsx)(j.A,{children:n?"\u5546\u54c1":"Commodity"}),(0,N.jsx)(j.A,{children:n?"\u6570\u91cf":"Quantity"}),(0,N.jsx)(j.A,{children:n?"\u5355\u4ef7":"Unit price"}),(0,N.jsx)(j.A,{children:n?"\u660e\u7ec6\u4ef7":"Item price"}),(0,N.jsx)(j.A,{children:n?"\u5220\u9664":"Delete"})]})}),(0,N.jsx)(x.A,{children:R.items.map((e=>{const n=void 0!==e.productId?E.get(e.productId):void 0;return(0,N.jsxs)(p.A,{children:[(0,N.jsx)(j.A,{children:(0,N.jsx)(d.A,{select:!0,value:n?.id,variant:"standard",size:"small",onChange:n=>{G(n,e.__rowId)},children:P.map((e=>(0,N.jsx)(t.A,{value:e.id,children:e.name},e.id)))})}),(0,N.jsx)(j.A,{children:(0,N.jsx)(d.A,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:n=>{H(n,e.__rowId)}})}),(0,N.jsx)(j.A,{children:n?.price}),(0,N.jsx)(j.A,{children:void 0!==n&&n.price*e.quantity}),(0,N.jsx)(j.A,{children:(0,N.jsx)(v.A,{onClick:()=>W(e.__rowId),children:(0,N.jsx)(k.A,{})})})]},e.__rowId)}))}),(0,N.jsx)(A.A,{children:(0,N.jsx)(p.A,{children:(0,N.jsx)(j.A,{colSpan:5,children:(0,N.jsxs)(r.A,{onClick:Q,children:[(0,N.jsx)(g.A,{}),n?"\u6dfb\u52a0":"Add"]})})})})]})})]}),(0,N.jsxs)(c.Ay,{item:!0,xs:12,children:[n?"\u603b\u989d":"Total price",":",R.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>E.get(e.productId).price*e.quantity)).reduce(((e,n)=>e+n),0)]}),(0,N.jsx)(c.Ay,{item:!0,xs:12,children:(0,N.jsx)(r.A,{variant:"contained",onClick:X,children:n?"\u63d0\u4ea4":"Submit"})})]})}),(0,N.jsxs)(b.A,{open:Y,onClose:Z,children:[(0,N.jsx)(f.A,{children:n?"\u4fe1\u606f":"Info"}),(0,N.jsx)(y.A,{children:(0,N.jsx)(C.A,{children:n?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,N.jsx)(I.A,{children:(0,N.jsx)(r.A,{onClick:Z,children:n?"\u5173\u95ed":"Close"})})]})]})})),S=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],L=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],M=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}],q=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function w(e){const n=e.items,i=new Map;for(let l=0;l<n.length;l++){const e=n[l];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){n.splice(l--,1);continue}if(void 0===e.productId)continue;const s=i.get(e.productId);void 0===s?i.set(e.productId,e):(s.quantity+=e.quantity,n.splice(l--,1))}}},97582:(e,n,i)=>{i.d(n,{M:()=>v});var l=i(22777),s=i(31729),r=i(48440),d=i(80421),t=i(57416),c=i(18441),a=i(68999),o=i(43581),h=i(63051),x=i(46831),j=i(28968),u=i(15993),m=i(13407),p=i(67512),A=i(96540),g=i(74848);const v=(0,A.memo)((()=>{const[e,n]=(0,A.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),i=(0,A.useCallback)((e=>{n((n=>({...n,name:e.target.value})))}),[]),v=(0,A.useCallback)((e=>{n((n=>({...n,edition:e.target.valueAsNumber})))}),[]),k=(0,A.useCallback)((e=>{n((n=>({...n,price:e.target.valueAsNumber})))}),[]),b=(0,A.useCallback)((e=>{let i;const l=e.target.value;i="string"==typeof l?parseInt(l):l,-1===i&&(i=void 0),n((e=>({...e,storeId:i})))}),[]),I=(0,A.useCallback)((e=>{let i=[];console.log(e.target.value);const l=e.target.value;i="string"==typeof l?l.split(",").map((e=>parseInt(e))):l,n((e=>({...e,authorIds:i})))}),[]),{i18n:y}=(0,l.A)(),C=(0,A.useMemo)((()=>"zh"==y.currentLocale||"zh_cn"==y.currentLocale||"zh_CN"==y.currentLocale),[y.currentLocale]),[f,_]=(0,A.useState)(!1),O=(0,A.useCallback)((()=>{_(!0)}),[]),B=(0,A.useCallback)((()=>{_(!1)}),[]);return(0,g.jsxs)(t.A,{elevation:3,style:{padding:"1.5rem",width:500},children:[(0,g.jsxs)(a.A,{spacing:2,children:[(0,g.jsx)("h1",{children:"Book Form"}),(0,g.jsx)(o.A,{label:"Name",value:e.name,onChange:i,error:""===e.name,helperText:""===e.name?"Name is required":""}),(0,g.jsx)(o.A,{label:"Edition",type:"number",value:e.edition,onChange:v}),(0,g.jsx)(o.A,{label:"Price",type:"number",value:e.price,onChange:k}),(0,g.jsxs)(s.A,{fullWidth:!0,children:[(0,g.jsx)(r.A,{id:"store-select-label",children:"Store"}),(0,g.jsxs)(c.A,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:b,children:[(0,g.jsx)(d.A,{value:-1,children:"--NONE--"}),(0,g.jsx)(d.A,{value:1,children:"O'REILLY"}),(0,g.jsx)(d.A,{value:2,children:"MANNING"})]})]}),(0,g.jsxs)(s.A,{fullWidth:!0,children:[(0,g.jsx)(r.A,{id:"author-multi-select-label",children:"Authors"}),(0,g.jsxs)(c.A,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:I,children:[(0,g.jsx)(d.A,{value:1,children:"Eve Procello"}),(0,g.jsx)(d.A,{value:2,children:"Alex Banks"}),(0,g.jsx)(d.A,{value:3,children:"Dan Vanderkam"}),(0,g.jsx)(d.A,{value:4,children:"Boris Cherny"}),(0,g.jsx)(d.A,{value:5,children:"Samer Buna"})]})]}),(0,g.jsx)(s.A,{children:(0,g.jsx)(p.A,{onClick:O,variant:"contained",children:C?"\u63d0\u4ea4":"Submit"})})]}),(0,g.jsxs)(h.A,{open:f,onClose:B,children:[(0,g.jsx)(x.A,{children:C?"\u4fe1\u606f":"Info"}),(0,g.jsx)(j.A,{children:(0,g.jsx)(m.A,{children:C?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,g.jsx)(u.A,{children:(0,g.jsx)(p.A,{onClick:B,children:"\u5173\u95ed"})})]})]})}))},58226:(e,n,i)=>{i.d(n,{a:()=>m});var l=i(96540),s=i(72774),r=i(63051),d=i(28968),t=i(48875),c=i(44676),a=i(47859),o=i(4671),h=i(99343),x=i(7324),j=i(39781),u=i(74848);const m=(0,l.memo)((e=>{let{open:n,fullScreen:i=!1,title:t,maxWidth:m="md",onClose:A,children:g}=e;const[v,k]=(0,l.useState)(i),b=(0,l.useCallback)((()=>{k((e=>!e))}),[]);return(0,u.jsxs)(r.A,{open:n,onClose:A,fullScreen:v,TransitionComponent:p,maxWidth:m,children:[(0,u.jsx)(s.A,{sx:{position:"relative"},children:(0,u.jsxs)(c.A,{children:[(0,u.jsx)(a.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:t}),(0,u.jsx)(o.A,{onClick:b,style:{color:"white"},children:v?(0,u.jsx)(x.A,{}):(0,u.jsx)(h.A,{})}),(0,u.jsx)(o.A,{"aria-label":"close",onClick:A,style:{color:"white"},children:(0,u.jsx)(j.A,{})})]})}),(0,u.jsx)(d.A,{children:g})]})})),p=l.forwardRef((function(e,n){return(0,u.jsx)(t.A,{direction:"up",ref:n,...e})}))},47389:(e,n,i)=>{i.d(n,{l:()=>t});var l=i(96540),s=i(67512),r=i(58226),d=i(74848);const t=(0,l.memo)((e=>{let{buttonText:n,fullScreen:i=!1,title:t=n,variant:c="outlined",large:a=!1,maxWidth:o,useOriginalText:h=!0,children:x}=e;const[j,u]=(0,l.useState)(!1),m=(0,l.useCallback)((e=>{u(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),p=(0,l.useCallback)((()=>{u(!1)}),[]),A=h?{textTransform:"none"}:{};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.A,{"data-is-view-more-button":"true",onClick:m,variant:c,size:a?"large":"small",style:A,children:n}),(0,d.jsx)(r.a,{open:j,onClose:p,title:t,maxWidth:o,fullScreen:i,children:x})]})}))},37091:(e,n,i)=>{i.d(n,{o:()=>s});var l=i(22777);function s(){const{i18n:e}=(0,l.A)(),n=e.currentLocale;return"zh"===n||"zh_cn"===n||"zh_CN"==n}},44811:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>j,contentTitle:()=>x,default:()=>p,frontMatter:()=>h,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"mutation/save-command/id-checking","title":"\u77ed\u5173\u8054id\u68c0\u67e5","description":"\u57fa\u672c\u6982\u5ff5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/id-checking.mdx","sourceDirName":"mutation/save-command","slug":"/mutation/save-command/id-checking","permalink":"/jimmer-doc/zh/docs/mutation/save-command/id-checking","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/id-checking.mdx","tags":[],"version":"current","lastUpdatedAt":1729456376000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"\u77ed\u5173\u8054id\u68c0\u67e5"},"sidebar":"tutorialSidebar","previous":{"title":"\u8131\u94a9\u64cd\u4f5c","permalink":"/jimmer-doc/zh/docs/mutation/save-command/dissociation"},"next":{"title":"\u4e50\u89c2\u9501\u548c\u60b2\u89c2\u9501","permalink":"/jimmer-doc/zh/docs/mutation/save-command/lock"}}');var s=i(74848),r=i(28453),d=i(37244),t=i(56778),c=i(97582),a=i(36518),o=i(47389);const h={sidebar_position:8,title:"\u77ed\u5173\u8054id\u68c0\u67e5"},x=void 0,j={},u=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u53ea\u9488\u5bf9\u77ed\u5173\u8054",id:"\u53ea\u9488\u5bf9\u77ed\u5173\u8054",level:3},{value:"\u6982\u5ff5\u5b9a\u4e49\uff1a\u76ee\u6807\u5916\u952e",id:"\u6982\u5ff5\u5b9a\u4e49\u76ee\u6807\u5916\u952e",level:3},{value:"\u68c0\u67e5\u673a\u5236",id:"\u68c0\u67e5\u673a\u5236",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5168\u5c40\u914d\u7f6e",id:"\u5168\u5c40\u914d\u7f6e",level:3},{value:"\u6307\u4ee4\u7ea7\u914d\u7f6e",id:"\u6307\u4ee4\u7ea7\u914d\u7f6e",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,s.jsx)(n.h3,{id:"\u53ea\u9488\u5bf9\u77ed\u5173\u8054",children:"\u53ea\u9488\u5bf9\u77ed\u5173\u8054"}),"\n",(0,s.jsxs)(n.p,{children:["\u5173\u8054id\u68c0\u67e5\u662f\u4e00\u4e2a\u53ea\u9488\u5bf9",(0,s.jsx)(o.l,{buttonText:"\u77ed\u5173\u8054",children:(0,s.jsx)(c.M,{})}),"\u7684\u529f\u80fd\uff0c\u5bf9",(0,s.jsx)(o.l,{buttonText:"\u957f\u5173\u8054",children:(0,s.jsx)(a.Y,{})}),"\u65e0\u610f\u4e49\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4e4b\u524d\u7684\u4ecb\u7ecd\uff0c\u6211\u4eec\u77e5\u9053\u4fdd\u5b58\u6307\u4ee4\u53ef\u4ee5\u4fdd\u5b58\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4efb\u4f55\u5bf9\u8c61\u90fd\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6301\u6709\u5173\u8054\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u67d0\u4e2a\u5173\u8054\u5bf9\u8c61\u7684id\u88ab\u6307\u5b9a\u4e86\uff0c\u4f46\u5176\u6240\u4ee3\u8868\u7684\u5bf9\u8c61\u5728\u6570\u636e\u5e93\u4e2d\u4e0d\u5b58\u5728\u662f\uff0cJimmer\u5982\u4f55\u5e94\u5bf9\u5462\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u5bf9\u4e8e",(0,s.jsx)(o.l,{buttonText:"\u957f\u5173\u8054",children:(0,s.jsx)(a.Y,{})}),"\u800c\u8a00\uff0cJimmer\u4f1a\u5148\u521b\u5efa\u4e0d\u5b58\u5728\u7684\u5173\u8054\u5bf9\u8c61\uff0c\u7136\u540e\u5efa\u7acb\u5f53\u524d\u5bf9\u8c61\u548c\u65b0\u5173\u8054\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsxs)(d.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'sqlClient.update(\n    Immutables.createBook(draft -> {\n        draft.setId(3L);\n        draft.addIntoAuthors(author -> author.setId(1L)); // \u2776\n        draft.addIntoAuthors(author -> author.setId(2L)); // \u2777\n        draft.addIntoAuthors(author -> { // \u2778\n            author.setId(1000L); \n            author.setFirstName("Svetlana");\n            author.setLastName("Isakova");\n            author.setGender(Gender.FEMALE);\n        });\n    })\n);\n'})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'sqlClient.update(\n    Book {\n        id = 3L\n        authors().addBy { id = 1L } // \u2776\n        authors().addBy { id = 2L } // \u2777\n        authors().addBy { // \u2778\n            id = 1000L\n            firstName = "Svetlana"\n            lastName = "Isakova"\n            gender = Gender.FEMALE\n        }\n    }\n)\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u6df7\u5408\u4e86\u957f\u5173\u8054\u548c\u77ed\u5173\u8054\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2776 \u2777 \u5b83\u4eec\u662f",(0,s.jsx)(o.l,{buttonText:"\u77ed\u5173\u8054",children:(0,s.jsx)(c.M,{})}),"\uff0c\u4e00\u65e6\u6307\u5b9a\u4e86\u975e\u6cd5id\uff0c\u5c31\u4f1a\u5bfc\u81f4\u9519\u8bef\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2778 \u8fd9\u662f",(0,s.jsx)(o.l,{buttonText:"\u957f\u5173\u8054",children:(0,s.jsx)(a.Y,{})}),"\uff0c\u5373\u4f7f\u88ab\u6307\u5b9a\u4e86\u975e\u6cd5id\uff0cJimmer\u4e5f\u4f1a\u81ea\u52a8\u521b\u5efa\u8be5\u5173\u8054\u5bf9\u8c61\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"\n// \u5224\u65ad\u5173\u5bf9\u8c61\u662f\u5426\u5b58\u5728\nselect\n    tb_1_.ID,\n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME\nfrom AUTHOR tb_1_\nwhere\n    tb_1_.ID = ? /* 1000 */\n\n// \u5173\u8054\u5bf9\u8c61\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u4e4b\n// highlight-next-line\ninsert into AUTHOR(ID, FIRST_NAME, LAST_NAME, GENDER)\nvalues\n    (? /* 1000 */, ? /* Svetlana */, ? /* Isakova */, ? /* F */)\n\n// \u67e5\u8be2\u5f53\u524d`Book`\u548c`Author`\u4e4b\u95f4\u7684\u7684\u5173\u7cfb\nselect\n    AUTHOR_ID\nfrom BOOK_AUTHOR_MAPPING\nwhere\n    BOOK_ID = ? /* 3 */\n\n// \u8fde\u63a5\u5f53\u524d`Book`\u548c\u521a\u88ab\u65b0\u5efa\u7684`Author`\ninsert into BOOK_AUTHOR_MAPPING(BOOK_ID, AUTHOR_ID)\nvalues\n    (? /* 3 */, ? /* 1000 */)\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c",(0,s.jsx)(n.code,{children:"\u5173\u8054id\u68c0\u67e5"}),"\u662f\u4e00\u4e2a\u4ec5\u5bf9",(0,s.jsx)(o.l,{buttonText:"\u77ed\u5173\u8054",children:(0,s.jsx)(c.M,{})}),"\u6709\u610f\u4e49\u7684\u8bdd\u9898\u3002\u672c\u6587\u63a5\u4e0b\u6765\u7684\u4f8b\u5b50\uff0c\u6240\u6709\u7684\u8ba8\u8bba\u90fd\u662f\u9488\u5bf9",(0,s.jsx)(o.l,{buttonText:"\u77ed\u5173\u8054",children:(0,s.jsx)(c.M,{})}),"\u7684\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u6982\u5ff5\u5b9a\u4e49\u76ee\u6807\u5916\u952e",children:"\u6982\u5ff5\u5b9a\u4e49\uff1a\u76ee\u6807\u5916\u952e"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u8ba8\u8bba\u77ed\u5173\u8054\u7684id\u68c0\u67e5\u95ee\u9898\uff0c\u6211\u4eec\u5148\u4e3a\u5173\u8054\u5c5e\u6027\u5b9a\u4e49\u5b9a\u4e00\u4e2a\u6982\u5ff5\uff1a\u76ee\u6807\u5916\u952e\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u5173\u8054\u57fa\u4e8e\u4e2d\u95f4\u8868\uff0c\u5219\u4e2d\u95f4\u8868\u4e2d\u6307\u5411\u76ee\u6807\u5b9e\u4f53\u8868\u7684\u5916\u952e\u5c31\u662f\u76ee\u6807\u5916\u952e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6bd4\u5982\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Book.authors"}),"\u7684\u76ee\u6807\u5916\u952e\u662f",(0,s.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"}),"\u8868\u7684",(0,s.jsx)(n.code,{children:"AUTHOR_ID"}),"\u5b57\u6bb5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Author.books"}),"\u7684\u76ee\u6807\u5916\u952e\u662f",(0,s.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"}),"\u8868\u7684",(0,s.jsx)(n.code,{children:"BOOK_ID"}),"\u5b57\u6bb5\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5173\u8054\u57fa\u4e8e\u5916\u952e\uff0c\u65e0\u8bba\u5916\u952e\u771f\u5047 ",(0,s.jsxs)(n.em,{children:["(\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"../../mapping/base/foreignkey",children:"\u771f\u5047\u5916\u952e"}),")"]}),"\uff0c\u5173\u8054\u672c\u8eab\u7684\u5916\u952e\u5c31\u662f\u76ee\u6807\u5916\u952e\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6bd4\u5982\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Book.store"}),"\u7684\u76ee\u6807\u5916\u952e\u662f",(0,s.jsx)(n.code,{children:"BOOK"}),"\u8868\u7684",(0,s.jsx)(n.code,{children:"STORE_ID"}),"\u5b57\u6bb5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4ee5\u4e0a\u4e24\u4e2a\u60c5\u51b5\u90fd\u4e0d\u662f\uff0c\u5219\u8ba4\u4e3a\u5173\u8054\u6ca1\u6709\u76ee\u6807\u5916\u952e\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6ca1\u6709\u76ee\u6807\u5916\u952e\u7684\u5173\u8054\u5c5e\u6027\uff0c\u5c31\u662f\u88ab\u6307\u5b9a\u4e86",(0,s.jsx)(n.code,{children:"mappedBy"}),"\u7684\u4e00\u5bf9\u4e00\u6216\u4e00\u5bf9\u591a\u5c5e\u6027\u3002\u5373\uff0c\u88ab",(0,s.jsx)(n.code,{children:'@OneToOne(mappedBy = "...")'}),"\u6216",(0,s.jsx)(n.code,{children:'@OneToMany(mappedBy="...")'}),"\u4fee\u9970\u7684\u5c5e\u6027\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6bd4\u5982\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BookStore.books"}),"\u6ca1\u6709\u76ee\u6807\u5916\u952e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5173\u8054"}),(0,s.jsx)(n.th,{children:"\u76ee\u6807\u5916\u952e\u7684\u5217\u540d"}),(0,s.jsx)(n.th,{children:"\u76ee\u6807\u5916\u952e\u6240\u5728\u7684\u8868"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Book.authors"})}),(0,s.jsx)(n.td,{children:"AUTHOR_ID"}),(0,s.jsx)(n.td,{children:"BOOK_AUTHOR_MAPPING"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Author.books"})}),(0,s.jsx)(n.td,{children:"BOOK_ID"}),(0,s.jsx)(n.td,{children:"BOOK_AUTHOR_MAPPING"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Book.store"})}),(0,s.jsx)(n.td,{children:"STORE_ID"}),(0,s.jsx)(n.td,{children:"BOOK"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"BookStore"}),".books"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"NA"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"NA"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u68c0\u67e5\u673a\u5236",children:"\u68c0\u67e5\u673a\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u914d\u7f6e\u662f\u5426\u68c0\u67e5\u77ed\u5173\u8054\u5bf9\u8c61\u7684id\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\uff0c\u6682\u4e0d\u8ba8\u8bba\u5982\u4f55\u914d\u7f6e\uff0c\u8ba9\u6211\u4eec\u5148\u770b\u662f\u5426\u5f00\u542f\u6b64\u914d\u7f6e\u5bf9Jimmer\u7684\u884c\u4e3a\u6709\u4f55\u5f71\u54cd\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6ca1\u6709\u76ee\u6807\u5916\u952e\u7684\u5c5e\u6027"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5",(0,s.jsx)(n.code,{children:"BookStore.books"}),"\u4e3a\u4f8b\uff0c\u4fdd\u5b58\u77ed\u5173\u8054\u7684\u4ee3\u7801\u4e3a"]}),"\n",(0,s.jsxs)(d.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sqlClient.update(\n        Immutables.createBookStore(draft -> {\n            draft.setId(2L);\n            draft.addIntoBooks(book -> book.setId(8L));\n            draft.addIntoBooks(book -> book.setId(9L));\n            draft.addIntoBooks(book -> book.setId(1000L));\n            draft.addIntoBooks(book -> book.setId(1001L));\n        })\n);\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"sqlClient.update(\n    BookStore {\n        id = 2L\n        books().addBy { id = 8L }\n        books().addBy { id = 9L }\n        books().addBy { id = 1000L }\n        books().addBy { id = 1001L }\n    }\n);\n"})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e0d\u68c0\u67e5"}),"\n",(0,s.jsx)(n.p,{children:"\u6ca1\u6709\u76ee\u6807\u5916\u952e\u7684\u5c5e\u6027\uff0cid\u975e\u6cd5\u7684\u6240\u6709\u5b50\u5bf9\u8c61\u5c06\u4f1a\u88ab\u81ea\u52a8\u5ffd\u7565\u3002\u6bd4\u5982"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"update book set store_id = 2 where id in(1, 2, 1000, 10001)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u59821000\uff0c10001\u662f\u6570\u636e\u5e93\u4e2d\u4e0d\u5b58\u5728\u7684id\uff0c\u90a3\u4e48\u8fd9\u6761update\u8bed\u53e5\u53ea\u4f1a\u5f71\u54cd\u4e24\u6761\u5b58\u5728\u7684\u6570\u636e\uff0c\u4e0d\u5b58\u5728\u7684\u4e24\u6761\u6570\u636e\u4f1a\u88ab\u81ea\u7136\u5730\u5ffd\u7565\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8981\u68c0\u67e5"}),"\n",(0,s.jsx)(n.p,{children:"Jimmer\u4f1a\u6267\u884c\u5982\u4e0b\u67e5\u8be2\u68c0\u67e5\u6240\u6709\u77ed\u5173\u8054\u7684id"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID\nfrom BOOK tb_1_\nwhere\n    tb_1_.ID in (\n        ? /* 1 */, ? /* 2 */, ? /* 1000 */, ? /* 1001 */\n    )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u5982\uff0c\u6570\u636e\u5e93\u4e2d\u4e0d\u5b58\u5728id\u4e3a1000\u548c1001\u7684\u4e66\u7c4d\uff0c\u4f1a\u5f97\u5230\u5982\u4e0b\u5f02\u5e38"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Save error caused by the path: "<root>.books": Illegal ids: [1000, 1001]\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6709\u76ee\u6807\u5916\u952e\u7684\u5c5e\u6027"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5",(0,s.jsx)(n.code,{children:"Book.store"}),"\u4e3a\u4f8b\uff0c\u4fdd\u5b58\u77ed\u5173\u8054\u7684\u4ee3\u7801\u4e3a"]}),"\n",(0,s.jsxs)(d.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sqlClient.update(\n        Immutables.createBook(draft -> {\n            draft.setId(10L);\n            draft.applyStore(store -> store.setId(321L));\n        })\n);\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"sqlClient.update(\n    Book {\n        id = 10L\n        store { id = 321L }\n    }\n);\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u5982\u6570\u636e\u5e93\u4e2d\u5e76\u6ca1\u6709id\u4e3a321\u7684BookStore"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e0d\u68c0\u67e5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5916\u952e\u662f\u5047\u7684\uff0c\u5728\u6570\u636e\u5e93\u4e2d\u5e76\u6ca1\u6709\u771f\u6b63\u7684\u5916\u952e\u7ea6\u675f\uff0c\u90a3\u4e48Jimmer\u5c31\u4f1a\u7eb5\u5bb9",(0,s.jsx)(n.code,{children:"BOOK.STORE_ID"}),"\u88ab\u4fee\u6539\u4e3a\u975e\u6cd5\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u5916\u952e\u662f\u771f\u7684\uff0c\u5728\u6570\u636e\u5e93\u4e2d\u6709\u771f\u6b63\u7684\u5916\u952e\u7ea6\u675f\uff0c\u90a3\u4e48\u6700\u7ec8\u5e95\u5c42\u6570\u636e\u5e93\u62a5\u9519\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8981\u68c0\u67e5"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u8bba\u5916\u952e\u771f\u5047\uff0cJimmer\u90fd\u4f1a\u6267\u884c\u5982\u4e0b\u67e5\u8be2\u68c0\u67e5\u77ed\u5173\u8054\u7684id"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID\nfrom BOOK_STORE tb_1_\nwhere\n    tb_1_.ID in (\n        ? /* 321 */\n    )\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u65e6\u67e5\u8be2\u4e0d\u5230\u4efb\u4f55\u6570\u636e\uff0c\u5f97\u5230\u5982\u4e0b\u5f02\u5e38"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Save error caused by the path: "<root>.store": Illegal ids: [321]\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u771f\u76ee\u6807\u5916\u5efa"}),(0,s.jsx)(n.th,{children:"\u5047\u76ee\u6807\u5916\u5efa"}),(0,s.jsx)(n.th,{children:"\u65e0\u76ee\u6807\u5916\u5efa"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u4e0d\u68c0\u67e5"}),(0,s.jsx)(n.td,{children:"\u7531\u6570\u636e\u5e93\u62a5\u9519"}),(0,s.jsx)(n.td,{children:"\u4fdd\u5b58\u9519\u8bef\u6570\u636e"}),(0,s.jsx)(n.td,{children:"\u5ffd\u7565\u975e\u6cd5\u64cd\u4f5c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u68c0\u67e5"}),(0,s.jsx)(n.td,{children:"\u7531Jimmer\u62a5\u9519"}),(0,s.jsx)(n.td,{children:"\u7531Jimmer\u62a5\u9519"}),(0,s.jsx)(n.td,{children:"\u7531Jimmer\u62a5\u9519"})]})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"\u53ef\u89c1\uff0c\u5bf9\u4e8e\u76ee\u6807\u5916\u952e\u4e3a\u771f\u7684\u5c5e\u6027\u800c\u8a00\uff0c\u65e0\u8bba\u662f\u5426\u662f\u5426\u542f\u7528Jimmer\u7684\u77ed\u5173\u8054id\u68c0\u67e5\uff0c\u90fd\u4f1a\u5f97\u5230\u5f02\u5e38\u3002"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e0d\u9a8c\u8bc1\uff0c\u7531\u6570\u636e\u5e93\u62a5\u9519\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u597d\u5904\uff1a\u5c11\u6267\u884c\u4e00\u6761SQL\u67e5\u8be2"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u574f\u5904\uff1a\u5f02\u5e38\u4fe1\u606f\u548c\u5f02\u5e38\u7c7b\u578b\u96be\u63a7\u5236"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u9a8c\u8bc1\uff0c\u7531Jimmer\u62a5\u9519\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u597d\u5904\uff1a\u5f02\u5e38\u4fe1\u606f\u548c\u5f02\u5e38\u7c7b\u578b\u660e\u786e"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u574f\u5904\uff1a\u591a\u6267\u884c\u4e00\u6761SQL\u67e5\u8be2"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u53ea\u8981\u9879\u76ee\u4e0d\u662f\u5bf9\u4fee\u6539\u4e1a\u52a1\u6027\u80fd\u8981\u6c42\u5230\u5439\u6bdb\u6c42\u75b5\u7684\u90a3\u79cd\uff0c\u5c31\u5efa\u8bae\u6b64\u68c0\u67e5\u673a\u5236\u5bf9\u6240\u6709\u5c5e\u6027\u5168\u5f00\uff0c\u4ee5\u5f97\u5230\u7406\u60f3\u7684\u5f02\u5e38\u4fe1\u606f ",(0,s.jsx)(n.em,{children:"(\u7a0d\u540e\u6211\u4eec\u4f1a\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e)"}),"\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u914d\u7f6e\u5173\u8054\u5c5e\u6027\u662f\u5426\u68c0\u5bdf\u5173\u8054id\u3002\u5206\u4e3a\u5168\u5c40\u914d\u7f6e\u548c\u6307\u4ee4\u7ea7\u914d\u7f6e\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5168\u5c40\u914d\u7f6e",children:"\u5168\u5c40\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u5168\u5c40\u914d\u7f6e\u63d0\u4f9b\u4e86\u4e09\u4e2a\u7b49\u7ea7"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"NONE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"FAKE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ALL"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u529f\u80fd\u5982\u4e0b"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u771f\u76ee\u6807\u5916\u5efa"}),(0,s.jsx)(n.th,{children:"\u5047\u76ee\u6807\u5916\u5efa"}),(0,s.jsx)(n.th,{children:"\u65e0\u76ee\u6807\u5916\u5efa"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NONE"}),(0,s.jsx)(n.td,{children:"\u4e0d\u68c0\u67e5"}),(0,s.jsx)(n.td,{children:"\u4e0d\u68c0\u67e5"}),(0,s.jsx)(n.td,{children:"\u4e0d\u68c0\u67e5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"FAKE"}),(0,s.jsx)(n.td,{children:"\u4e0d\u68c0\u67e5"}),(0,s.jsx)(n.td,{children:"\u68c0\u67e5"}),(0,s.jsx)(n.td,{children:"\u68c0\u67e5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ALL"}),(0,s.jsx)(n.td,{children:"\u68c0\u67e5"}),(0,s.jsx)(n.td,{children:"\u68c0\u67e5"}),(0,s.jsx)(n.td,{children:"\u68c0\u67e5"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u5168\u5c40\u914d\u7f6e\u6709\u4e24\u79cd\u5b9e\u73b0\u65b9\u6cd5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7SpringBoot Starter\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539",(0,s.jsx)(n.code,{children:"application.yml"})," ",(0,s.jsxs)(n.em,{children:["(\u6216",(0,s.jsx)(n.code,{children:"application.properties"}),")"]}),"\uff0c\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"jimmer:\n    id-only-target-checking-level: ALL\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u5e95\u5c42API\u914d\u7f6e"}),"\n",(0,s.jsxs)(d.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setIdOnlyTargetCheckingLevel(IdOnlyTargetCheckingLevel.ALL)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setIdOnlyTargetCheckingLevel(IdOnlyTargetCheckingLevel.ALL)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6307\u4ee4\u7ea7\u914d\u7f6e",children:"\u6307\u4ee4\u7ea7\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u4ee4\u7ea7\u522b\u914d\u7f6e\u53ef\u4ee5\u8986\u76d6\u5168\u5c40\u914d\u7f6e\uff0c\u4f46\u4ec5\u4ec5\u5f71\u54cd\u5f53\u524d\u4fdd\u5b58\u6307\u4ee4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u4ee4\u7ea7\u914d\u7f6e\u6709\u4e09\u4e2a\u529f\u80fd\u70b9\uff0c\u5982\u4e0b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u660e\u786e\u6307\u5b9a\u5c5e\u6027\u9700\u8981\u68c0\u67e5"}),"\n",(0,s.jsxs)(d.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"Book book = ...\u7565...\nsqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line\n    .setAutoIdOnlyTargetChecking(BookProps.STORE)\n    // highlight-next-line\n    .setAutoIdOnlyTargetChecking(BookProps.AUTHORS)\n    .execute();\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val book = ...\u7565...\nsqlClient.save(book) {\n    // highlight-next-line\n    setAutoIdOnlyTargetChecking(Book::store)\n    // highlight-next-line\n    setAutoIdOnlyTargetChecking(Book::authors)\n}\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u5982\u679c\u5168\u5c40\u914d\u7f6e\u5df2\u7ecf\u6253\u5f00\u4e86\u68c0\u67e5\u673a\u5236\uff0c\u5c31\u4e0d\u9700\u8981\u5982\u6b64\u8c03\u6574\u4fdd\u5b58\u6307\u4ee4\u4e86\u3002"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5b9a\u6240\u6709\u5c5e\u6027\u9700\u8981\u68c0\u67e5"}),"\n",(0,s.jsxs)(d.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"Book book = ...\u7565...\nsqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line\n    .setAutoIdOnlyTargetCheckingAll()\n    .execute();\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val book = ...\u7565...\nsqlClient.save(book) {\n    // highlight-next-line\n    setAutoIdOnlyTargetCheckingAll()\n}\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u5982\u679c\u5168\u5c40\u914d\u7f6e\u5df2\u7ecf\u6253\u5f00\u4e86\u68c0\u67e5\u673a\u5236\uff0c\u5c31\u4e0d\u9700\u8981\u5982\u6b64\u8c03\u6574\u4fdd\u5b58\u6307\u4ee4\u4e86\u3002"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8d1f\u914d\u7f6e\uff0c\u660e\u786e\u6307\u5b9a\u5c5e\u6027\u4e0d\u9700\u8981\u68c0\u67e5"}),"\n",(0,s.jsxs)(d.A,{groupId:"language",children:[(0,s.jsx)(t.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"Book book = ...\u7565...\nsqlClient\n    .getEntities()\n    .saveCommand(book)\n    .setAutoIdOnlyTargetCheckingAll()\n    // highlight-next-line\n    .setAutoIdOnlyTargetChecking(BookProps.STORE, false)\n    .execute();\n"})})}),(0,s.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val book = ...\u7565...\nsqlClient.save(book) {\n    setAutoIdOnlyTargetCheckingAll()\n    // highlight-next-line\n    setAutoIdOnlyTargetChecking(Book::authors, false)\n}\n"})})})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);