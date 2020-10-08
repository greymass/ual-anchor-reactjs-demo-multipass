(this["webpackJsonpual-reactjs-renderer-demo-multipass"]=this["webpackJsonpual-reactjs-renderer-demo-multipass"]||[]).push([[0],{117:function(e){e.exports=JSON.parse('[{"chainId":"0db13ab9b321c37c0ba8481cb4681c2788b622c3abfd1f12f0e5353d44ba6e72","name":"Block.one (Testnet)","rpcEndpoints":[{"protocol":"https","host":"api.testnet.eos.io","port":443}]},{"chainId":"b20901380af44ef59c5918439a1f9a41d83669020319a80574b804a5f95cbd7e","name":"FIO (Testnet)","rpcEndpoints":[{"protocol":"https","host":"fiotestnet.greymass.com","port":443}]},{"chainId":"e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473","name":"Jungle 2 (Testnet)","rpcEndpoints":[{"protocol":"https","host":"jungle.greymass.com","port":443}]},{"chainId":"2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840","name":"Jungle 3 (Testnet)","rpcEndpoints":[{"protocol":"https","host":"jungle3.greymass.com","port":443}]},{"chainId":"71ee83bcf52142d61019d95f9cc5427ba6a0d7ff8accd9e2088ae2abeaf3d3dd","name":"Proton (Testnet)","rpcEndpoints":[{"protocol":"https","host":"protontestnet.greymass.com","port":443}]},{"chainId":"1eaa0824707c8c16bd25145493bf062aecddfeb56c736f6ba6397f3195f33c9f","name":"Telos (Testnet)","rpcEndpoints":[{"protocol":"https","host":"testnet.eos.miami","port":443}]},{"chainId":"f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12","name":"WAX (Testnet)","rpcEndpoints":[{"protocol":"https","host":"waxtestnet.greymass.com","port":443}]}]')},257:function(e,a,t){e.exports=t.p+"static/media/jungle.3f2409df.png"},415:function(e,a,t){"use strict";(function(e){var n=t(5),r=t.n(n),c=t(60),s=t(14),o=t(25),i=t(29),l=t(39),u=t(38),d=t(1),h=t.n(d),p=t(881),f=t(86),m=t(85),b=t(147),A=t(186),V=t(141),v=t.n(V),g=t(416),x=t(426),y=t(439),E=function(a){Object(u.a)(n,a);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).addAccount=function(){a.props.ual.showModal()},a.signTransaction=Object(s.a)(r.a.mark((function e(){var t,n,s,o,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.ual.activeUser,a.setState({response:void 0,transacting:!0}),e.prev=2,t.scatter&&(o=Object(c.a)(t.scatter.identity.accounts,1),i=o[0],n=i.name,s=i.authority),t.session&&(n=t.accountName,s=t.requestPermission),e.next=7,t.signTransaction({actions:[{account:"eosio",name:"voteproducer",authorization:[{actor:n,permission:s}],data:{producers:[],proxy:"greymassvote",voter:t.accountName}}]},{broadcast:!1,blocksBehind:3,expireSeconds:120});case 7:l=e.sent,a.setState({response:l,transacting:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),a.setState({transacting:!1});case 15:case"end":return e.stop()}}),e,null,[[2,11]])}))),a.setSession=function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.link.restoreSession(a.props.appName,t);case 2:n=e.sent,a.setState({response:void 0,session:n});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),a.removeSession=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,a.props.ual.logout)();case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),a.state={proofKey:void 0,proofValid:void 0,response:void 0,session:void 0,sessions:[],transacting:!1},a}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(a,t,n){var r=this.props.ual.activeUser;if(!a.ual.activeUser&&r){var c=r.chainId,s=r.signerKey,o=r.signerProof,i=r.signerRequest;if(s&&o&&i){var l=e.concat([e.from(c,"hex"),e.from(i),e.alloc(32)]),u=v.a.verify(o,l,s),d=v.a.recover(o,l);this.setState({proofValid:u,proofKey:d})}}}},{key:"render",value:function(){var e,a=this.state,t=a.proofKey,n=a.proofValid,r=a.response,c=a.transacting,s=this.props.chain,o=this.props.ual.activeUser,i=this.props.ual.users;return n&&(e=o.signerProof),h.a.createElement(p.a,{style:{paddingTop:"2em"}},h.a.createElement(f.a,{attached:"top",block:!0,size:"huge"},"ual-reactjs-renderer-demo-multipass",h.a.createElement(f.a.Subheader,null,h.a.createElement("p",null,"An UAL demo using the ual-reactjs-renderer that allows multiple persistent logins from different wallets, blockchains, and accounts."),h.a.createElement("p",null,"Source code: ",h.a.createElement("a",{href:"https://github.com/greymass/ual-reactjs-renderer-demo-multipass"},"https://github.com/greymass/ual-reactjs-renderer-demo-multipass")))),h.a.createElement(m.a,{attached:!0,padded:!0},h.a.createElement("p",null,"Switch to a specific blockchain."),h.a.createElement(x.a,{chain:s,onChange:this.props.setChainId})),h.a.createElement(m.a,{attached:!0,padded:!0},h.a.createElement(f.a,null,"Available Accounts"),h.a.createElement(g.a,{activeUser:o,addAccount:this.addAccount,chain:s,setSession:this.setSession,removeSession:this.removeSession,users:i})),!!n&&h.a.createElement(m.a,{attached:!0,padded:!0},h.a.createElement(f.a,null,"Identity Proof provided with Login"),h.a.createElement("p",null,"Signed with Key: ",t),h.a.createElement("p",null,"Signed Proof: ",e),h.a.createElement("p",null,"Signature Valid: ",n?"Yes":"No")),h.a.createElement(m.a,{attached:!!r||"bottom",padded:!0},h.a.createElement(f.a,null,"Transact with UAL"),h.a.createElement(b.a,{content:"Sign Test Transaction",disabled:!o||c,loading:c,icon:"external",onClick:this.signTransaction,primary:!0,size:"huge"}),!o&&h.a.createElement("p",{style:{marginTop:"0.5em"}},"Login using UAL to sign a test transaction.")),!!r&&h.a.createElement(m.a,{attached:"bottom",padded:!0},h.a.createElement(f.a,null,"Transaction Response"),h.a.createElement(y.a,{response:r})))}}]),n}(d.Component);a.a=Object(A.withUAL)(E)}).call(this,t(10).Buffer)},416:function(e,a,t){"use strict";var n=t(60),r=t(25),c=t(29),s=t(39),o=t(38),i=t(1),l=t.n(i),u=t(35),d=t(147),h=t(882),p=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.activeUser,r=a.chain,c=a.users;return l.a.createElement(u.a,null,l.a.createElement(u.a.Header,null,l.a.createElement(u.a.Row,null,l.a.createElement(u.a.HeaderCell,{collapsing:!0},r.name),l.a.createElement(u.a.HeaderCell,null,"Account"),l.a.createElement(u.a.HeaderCell,null,"Permission"),l.a.createElement(u.a.HeaderCell,null))),c.length?l.a.createElement(u.a.Body,null,c.map((function(a){var r,c,s,o=!1;if(t.scatter){var i=Object(n.a)(t.scatter.identity.accounts,1)[0],h=Object(n.a)(a.scatter.identity.accounts,1)[0];o=h&&h.name===i.name&&h.authority===i.authority,s=[h.name,h.authority].join("-"),r=h.name,c=h.authority}return t.session&&(o=t&&a.accountName===t.accountName&&a.requestPermission===t.requestPermission,s=Object.values(a).join("-"),r=a.accountName,c=a.requestPermission),l.a.createElement(u.a.Row,{key:s},l.a.createElement(u.a.Cell,{collapsing:!0},l.a.createElement(d.a,{color:o?"blue":"green",content:o?"In Use":"Use Account",disabled:o,onClick:function(){return e.props.setSession({actor:r,permission:c})}})),l.a.createElement(u.a.Cell,null,r),l.a.createElement(u.a.Cell,null,c),l.a.createElement(u.a.Cell,{collapsing:!0},l.a.createElement(d.a,{color:"red",icon:"trash",onClick:function(){return e.props.removeSession({actor:r,permission:c})}})))}))):l.a.createElement(u.a.Body,null,l.a.createElement(u.a.Row,{textAlign:"center"},l.a.createElement(u.a.Cell,{colSpan:"4"},"No Accounts Imported"))),l.a.createElement(u.a.Footer,{fullWidth:!0},l.a.createElement(u.a.Row,null,l.a.createElement(u.a.HeaderCell,null),l.a.createElement(u.a.HeaderCell,{colSpan:"4",textAlign:"center"},c.length>0?l.a.createElement(h.a,{content:"UAL does not currently support using multiple accounts.",fluid:!0,inverted:!0,position:"top center",trigger:l.a.createElement(d.a,{basic:!0,content:"Add Account",fluid:!0})}):l.a.createElement(d.a,{basic:!0,content:"Add Account",fluid:!0,onClick:this.props.addAccount,primary:!0})))))}}]),t}(i.Component);a.a=p},426:function(e,a,t){"use strict";var n=t(25),r=t(29),c=t(39),s=t(38),o=t(1),i=t.n(o),l=t(883),u=t(427),d=t.n(u),h=t(428),p=t.n(h),f=t(257),m=t.n(f),b=t(429),A=t.n(b),V=t(430),v=t.n(V),g=t(431),x=t.n(g),y=t(117),E={"0db13ab9b321c37c0ba8481cb4681c2788b622c3abfd1f12f0e5353d44ba6e72":d.a,b20901380af44ef59c5918439a1f9a41d83669020319a80574b804a5f95cbd7e:p.a,e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473:m.a,"2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840":m.a,"71ee83bcf52142d61019d95f9cc5427ba6a0d7ff8accd9e2088ae2abeaf3d3dd":A.a,"1eaa0824707c8c16bd25145493bf062aecddfeb56c736f6ba6397f3195f33c9f":v.a,f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12:x.a},j=y.map((function(e){return{key:e.chainId,text:e.name,value:e.chainId,image:{avatar:!0,src:E[e.chainId]}}})),R=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props.chain;return i.a.createElement(l.a,{fluid:!0,onChange:this.props.onChange,options:j,placeholder:"Select Blockchain...",search:!0,selection:!0,value:e.chainId})}}]),t}(o.Component);a.a=R},427:function(e,a,t){e.exports=t.p+"static/media/eos.b3392955.png"},428:function(e,a,t){e.exports=t.p+"static/media/fio.9ae02e71.svg"},429:function(e,a,t){e.exports=t.p+"static/media/proton.c090f672.png"},430:function(e,a){e.exports="data:image/png;base64,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"},431:function(e,a,t){e.exports=t.p+"static/media/wax.f02a31b4.png"},439:function(e,a,t){"use strict";var n=t(49),r=t(25),c=t(29),s=t(39),o=t(38),i=t(1),l=t.n(i),u=t(85),d=t(101),h=t(86),p=t(261),f=t.n(p),m=t(146),b=t(15),A=t(271),V=b.Serialize.getTypesFromAbi(b.Serialize.createInitialTypes(),A),v=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).testResponse=function(){var a=e.props.response;return[{name:"Not Broadcast",desc:"The adapter has not broadcast the transaction.",test:function(e){return!1===e.wasBroadcast},data:function(e){return e.wasBroadcast}},{name:"Signatures returned by signer",desc:"The signer has returned signatures in its response.",test:function(e){return!!(e.transaction.signatures&&e.transaction.signatures.length>=1)},data:function(e){return JSON.stringify(e.transaction.signatures)}},{name:"Unserialized transaction returned by signer",desc:"The signer has returned an unserialized transaction in its response.",test:function(e){return!!e.transaction.transaction},data:function(e){return JSON.stringify(e.transaction.transaction)}},{name:"Serialized transaction returned by signer",desc:"The signer has returned a serialized transaction in its response.",test:function(e){return!!e.transaction.serializedTransaction},data:function(e){return JSON.stringify(e.transaction.serializedTransaction)}},{name:"Serialized transaction successfully deserialized",desc:"The serialized transaction the signer returned can be successfully deserialized.",test:function(a){try{var t=e.deserialize(a.transaction.serializedTransaction);return t.expiration&&t.actions&&t.actions.length>0&&t.ref_block_num>0&&t.ref_block_prefix>0}catch(n){return!1}},data:function(a){try{var t=e.deserialize(a.transaction.serializedTransaction);return JSON.stringify(t)}catch(n){return JSON.stringify({})}}}].map((function(e){return Object(n.a)({},e,{res:e.test(a),val:e.data(a)})}))},e.deserialize=function(e){var a=new b.Serialize.SerialBuffer({array:e});return V.get("transaction").deserialize(a)},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.response,a=this.testResponse();return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{style:{overflowX:"scroll"}},l.a.createElement(d.a,{divided:!0,relaxed:!0},a.map((function(e){return l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Icon,{color:e.res?"green":"red",name:e.res?"checkmark":"x",size:"large",verticalAlign:"top"}),l.a.createElement(d.a.Content,null,l.a.createElement(d.a.Header,null,e.name),l.a.createElement(d.a.Description,null,e.desc),l.a.createElement(d.a.Content,{style:{margin:"0.5em 0"}},l.a.createElement("code",null,e.val))))})))),l.a.createElement(u.a,{style:{background:"rgb(39, 40, 34)"}},l.a.createElement(h.a,{dividing:!0,size:"large",style:{borderBottom:"1px solid white",color:"white"}},"Callback Payload"),l.a.createElement(m.a,{text:"console.log(response.payload);",language:"javascript",showLineNumbers:!1,theme:m.b,wrapLines:!0}),l.a.createElement(f.a,{displayDataTypes:!1,displayObjectSize:!1,enableClipboard:!1,iconStyle:"square",name:null,src:e.payload,style:{background:"rgb(39, 40, 34)",marginTop:"1em",overflow:"scroll"},theme:"harmonic"})),l.a.createElement(u.a,{style:{background:"rgb(39, 40, 34)"}},l.a.createElement(h.a,{dividing:!0,size:"large",style:{borderBottom:"1px solid white",color:"white"}},"Signer"),l.a.createElement(m.a,{text:"console.log(response.signer);",language:"javascript",showLineNumbers:!1,theme:m.b,wrapLines:!0}),l.a.createElement(f.a,{displayDataTypes:!1,displayObjectSize:!1,enableClipboard:!1,iconStyle:"square",name:null,src:e.signer,style:{background:"rgb(39, 40, 34)",marginTop:"1em",overflow:"scroll"},theme:"harmonic"})))}}]),t}(i.Component);a.a=v},460:function(e,a,t){e.exports=t(879)},490:function(e,a){},492:function(e,a){},616:function(e,a){},640:function(e,a){},641:function(e,a){},879:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(72),s=t.n(c),o=(t(464),t(60)),i=t(25),l=t(29),u=t(39),d=t(38),h=t(407),p=t(412),f=t(413),m=t(186),b=t(414),A=t(117),V=t(415),v="ual-reactjs-renderer-demo-multipass",g=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;Object(i.a)(this,t),(n=a.call(this,e)).getAuthenticators=function(e){var a=A.filter((function(a){return a.chainId===e})),t=Object(o.a)(a,1)[0];return[new h.Anchor([t],{appName:v}),new p.Ledger([t]),new f.Scatter([t],{appName:v})]},n.setChainId=function(e,a){var t=a.value;return n.setState({chainId:t},(function(){var e=new URLSearchParams(window.location.search);e.set("chainId",t),window.history.pushState(null,null,"?".concat(e.toString()))}))};var r=window.location.search,c=new URLSearchParams(r).get("chainId")||"0db13ab9b321c37c0ba8481cb4681c2788b622c3abfd1f12f0e5353d44ba6e72";return n.state={chainId:c},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.chainId,a=Object(b.find)(A,{chainId:e}),t=this.getAuthenticators(e);return r.a.createElement(m.UALProvider,{appName:v,authenticators:t,chains:A,key:a.chainId},r.a.createElement(V.a,{appName:v,chain:a,setChainId:this.setChainId,key:a.chainId}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[460,152,153]]]);
//# sourceMappingURL=main.89ff8aad.chunk.js.map