(self.webpackChunklite=self.webpackChunklite||[]).push([[8695],{35930:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var a=t(67294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}var r=a.createElement("path",{d:"M15.16 8c0 .65-.46 1.14-.86 1.57-.23.25-.47.5-.56.72-.1.22-.09.55-.1.88 0 .6-.01 1.3-.48 1.78-.48.48-1.16.5-1.75.5-.32 0-.65.01-.86.1-.2.07-.46.33-.7.57-.42.41-.9.88-1.54.88s-1.12-.47-1.54-.88a2.87 2.87 0 0 0-.7-.58c-.22-.09-.54-.08-.87-.09-.59 0-1.27-.02-1.74-.5s-.48-1.17-.49-1.78c0-.33-.01-.67-.1-.88-.07-.2-.32-.47-.55-.71-.4-.44-.87-.93-.87-1.58s.46-1.14.87-1.58c.23-.24.47-.5.56-.71.09-.22.08-.55.09-.88 0-.6.02-1.3.49-1.78s1.15-.5 1.74-.5c.33 0 .66-.01.86-.1.2-.08.47-.33.7-.57.43-.41.91-.88 1.55-.88.63 0 1.12.47 1.54.88.24.24.49.48.7.58.22.09.54.08.86.09.6 0 1.27.02 1.75.5.47.48.48 1.17.49 1.78 0 .33 0 .67.09.88.08.2.33.47.56.71.4.44.86.93.86 1.58z",fill:"#437AFF"}),l=a.createElement("path",{d:"M7.33 10.5c.2 0 .38.08.52.22.13.14.21.33.21.53 0 .07.03.13.07.18a.24.24 0 0 0 .35 0 .25.25 0 0 0 .07-.18c0-.2.08-.39.22-.53a.73.73 0 0 1 .52-.22h1.96c.13 0 .25-.05.34-.15a.5.5 0 0 0 .15-.35V6a.5.5 0 0 0-.15-.35.48.48 0 0 0-.34-.15H9.78c-.33 0-.64.13-.87.37-.23.23-.36.55-.36.88v2.5c0 .07-.02.13-.07.18a.24.24 0 0 1-.35 0 .25.25 0 0 1-.07-.18v-2.5c0-.33-.13-.65-.36-.88a1.21 1.21 0 0 0-.86-.37H5.37a.48.48 0 0 0-.35.15.5.5 0 0 0-.14.35v4c0 .13.05.26.14.35.1.1.22.15.35.15h1.96z",fill:"#fff"});const o=function(e){return a.createElement("svg",i({width:17,height:16,viewBox:"0 0 16 16",fill:"none"},e),r,l)}},599:(e,n,t)=>{"use strict";t.d(n,{a:()=>r});var a=t(44573),i=t(43487),r=function(){var e=(0,a.gc)("enable_explicit_signals_updated_post_previews"),n=e.loading,t=e.value;return(0,i.v9)((function(e){return e.cache.updatedPostPreviewsEnabled}))||!n&&!!t}},65968:(e,n,t)=>{"use strict";t.d(n,{_:()=>B,G:()=>C});var a=t(22122),i=t(81253),r=t(67294),l=t(21417),o=t(77355),d=t(69992),m=t(30020),c=t(18634),s=t(87691),u=t(14646),p=t(86911),k=t(35930),g=t(64718),f=t(93310),v=t(20113),h=t(92661),x=t(43487),E=t(45932),S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"BookVerificationTooltipQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"authoredBooks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"}}]}}]}}]}}]}}]},b={width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},N=function(){var e=(0,u.I)(),n=(0,E.P)();return r.createElement(o.x,{alignItems:"center",display:"flex",flexDirection:"column",width:"240px",padding:"24px",textAlign:"center",backgroundColor:"BACKGROUND"},r.createElement(o.x,{paddingBottom:"12px"},r.createElement(v.X6,{scale:"XS"},"Verified Book Author")),r.createElement("div",{className:e([function(){return n},b])},r.createElement(o.x,{width:"80%",height:"12px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}),r.createElement(o.x,{width:"80%",height:"12px",backgroundColor:"BASE_NORMAL"})))},w=function(e){var n,t=e.userId,a=(0,g.a)(S,{variables:{userId:t}}),i=a.data,l=a.loading,d=(0,x.v9)((function(e){return e.config.productName})),m=(0,h.H2)();if(l||"User"!==(null==i||null===(n=i.userResult)||void 0===n?void 0:n.__typename))return r.createElement(N,null);var c=i.userResult,u=c.name,p=c.authoredBooks,k=c.username,E=p?p.length:0;return r.createElement(o.x,{alignItems:"center",display:"flex",flexDirection:"column",width:"240px",padding:"24px",textAlign:"center"},r.createElement(v.X6,{scale:"XS"},"Verified Book Author"),r.createElement(o.x,{padding:"8px 0"},r.createElement(s.F,{scale:"M"},u," has ",E," verified ",E>1?"books":"book"," on ",d,".")),r.createElement(f.r,{href:m("ShowUserBooks",{username:k}),linkStyle:"OBVIOUS",target:"_blank"},r.createElement(s.F,{scale:"M",color:"ACCENT"},"See books")))},y=["userId","marginBottom","marginLeft","marginRight","marginTop","alignSelf"],F=function(){return null},A=function(e){var n;switch(e.badgeSize){case"S":n=16;break;case"M":n=20;break;case"L":n=24}return r.createElement(k.Z,{height:n,width:n})},_=function(e){return{display:"flex",cursor:e?"pointer":"initial"}},B=function(e){var n=e.size,t=e.mobileSize,a=e.withText,i=e.withPointer,l=void 0!==i&&i,d=(0,u.I)();return r.createElement("div",{className:d(_(l))},r.createElement(o.x,{display:"flex",marginTop:a?"1px":void 0},t?r.createElement(r.Fragment,null,r.createElement(c.y,{xs:!0,displayValue:"flex"},r.createElement(A,{badgeSize:t})),r.createElement(c.y,{sm:!0,md:!0,lg:!0,xl:!0,displayValue:"flex"},r.createElement(A,{badgeSize:n}))):r.createElement(A,{badgeSize:n})),a&&r.createElement(o.x,{marginLeft:"5px"},r.createElement(s.F,{scale:"M"},r.createElement("span",{className:d({color:p.qi,fontWeight:500})},"Book Author"))))},C=function(e){var n=e.userId,t=e.marginBottom,c=e.marginLeft,s=e.marginRight,u=e.marginTop,p=e.alignSelf,k=(0,i.Z)(e,y),g=(0,r.useCallback)((function(){return r.createElement(w,{userId:n})}),[n]);return r.createElement(o.x,{marginTop:u,marginLeft:c,marginBottom:t,marginRight:s,display:"flex",alignSelf:p},r.createElement(l.b,{name:"enable_lite_publisher_infos_popover",placeholder:F},(function(e){return e?r.createElement(m._,{tooltipText:"Verified book author",targetDistance:15,placement:"bottom",display:"flex"},r.createElement(B,(0,a.Z)({},k,{withPointer:!0}))):r.createElement(d.$,{targetDistance:15,mouseLeaveDelay:100,popoverRenderFn:g,display:"flex"},r.createElement(B,k))})))}},17311:(e,n,t)=>{"use strict";t.d(n,{h:()=>d});var a=t(94673),i=t(76972),r=t(67294),l=t(599),o=t(63459);function d(e){var n=e.hasPrefix,t=void 0!==n&&n,d=e.timestamp,m=e.testId,c=e.isShorthand,s=e.bypassCheck,u=(0,l.a)(),p=Date.now(),k=(0,a.Z)(p,d),g=(0,i.Z)(p,d),f=(u||s)&&c;if(0===g){var v=t?"just now":"Just now";return r.createElement(r.Fragment,null,v)}if(g>=1&&g<24){var h=f?"".concat(g,"h ago"):"".concat(g," hour").concat(g>1?"s":""," ago");return r.createElement(r.Fragment,null,h)}if(k>=1&&k<7){var x=f?"".concat(k,"d ago"):"".concat(k," day").concat(k>1?"s":""," ago");return r.createElement(r.Fragment,null,x)}return(0,o.Ej)({timestamp:d,testId:m,isShorthand:f})}},14294:(e,n,t)=>{"use strict";t.d(n,{P:()=>m});var a=t(68337),i=t.n(a),r=t(67294),l=t(64327),o=t(93310),d=t(14646),m=function(e){var n=e.children,t=e.linkifyTwitterHandles,a=void 0!==t&&t,m=e.wrapLinks,c=void 0!==m&&m,s=e.target,u=(0,d.I)();if(!n)return null;var p=i()().tlds(l);a&&p.add("@",{validate:function(e,n,t){var a=e.slice(n);if(t.re.twitter||(t.re.twitter=new RegExp("^([a-zA-Z0-9_]){1,15}(?!_)(?=$|"+t.re.src_ZPCc+")")),t.re.twitter.test(a)){if(n>=2&&"@"===a[n-2])return!1;var i=a.match(t.re.twitter);return!!i&&i[0].length}return 0},normalize:function(e){e.url="https://twitter.com/"+e.url.replace(/^@/,"")}});var k=p.match(n);if(!k)return r.createElement("span",{className:u({wordBreak:"break-word"})},n);var g=0,f=k.reduce((function(e,t,a){return n?(t.index>g&&e.push(r.createElement(r.Fragment,{key:"link-before-".concat(a)},n.substring(g,t.index))),e.push(r.createElement(o.r,{wrapLinks:c,disableSourceParam:!0,key:a,inline:!0,linkStyle:"OBVIOUS",href:t.url,target:s},t.text)),a===k.length-1&&t.lastIndex<n.length&&e.push(r.createElement(r.Fragment,{key:"link-after-".concat(a)},n.substring(t.lastIndex,n.length))),g=t.lastIndex,e):[]}),[]);return r.createElement(r.Fragment,null,f)}},54341:(e,n,t)=>{"use strict";t.d(n,{O:()=>o,r:()=>d});var a=t(87329),i=t(27048),r=t(78693),l=t(18821),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserMentionTooltip_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"mediumMemberAt"}},{kind:"Field",name:{kind:"Name",value:"membership"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tier"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsVerifiedBookAuthor_user"}}]}}].concat((0,a.Z)(i.W.definitions),(0,a.Z)(r.s.definitions),(0,a.Z)(l.H.definitions))},d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserMentionTooltipStatsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"lastPostCreatedAt"}}]}}]}}]}}]}}]}},28695:(e,n,t)=>{"use strict";t.d(n,{u:()=>w,K:()=>y});var a=t(64718),i=t(49546),r=t(23450),l=t.n(r),o=t(67294),d=t(84739),m=t(65968),c=t(64238),s=t(17311),u=t(14294),p=t(17193),k=t(32317),g=t(54341),f=t(77355),v=t(27323),h=t(20113),x=t(87691),E=t(14646),S=t(43487),b=t(45932),N=t(21372),w=function(){var e=(0,E.I)(),n=(0,b.P)();return o.createElement("div",{className:e((function(){return n}))},o.createElement(f.x,{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between",padding:"12px",width:"280px",backgroundColor:"BACKGROUND"},o.createElement(f.x,{width:"100%"},o.createElement(f.x,{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"20px"},o.createElement(f.x,{height:"20px",width:"20px",backgroundColor:"BASE_NORMAL",borderRadius:"50%",marginRight:"8px"}),o.createElement(f.x,{height:"8px",width:"82px",backgroundColor:"BASE_NORMAL"})),o.createElement(f.x,{width:"80%",height:"8px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}),o.createElement(f.x,{width:"65%",height:"8px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}),o.createElement(f.x,{width:"85%",height:"8px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}),o.createElement(f.x,{width:"70%",height:"8px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}))))},y=function(e){var n,t,r=e.user,E=(0,S.v9)((function(e){return e.config.productName})),b=r.id,w=r.name,y=r.username,F=r.bio,A=r.imageId,_=r.mediumMemberAt,B=r.membership,C=r.hasSubdomain,I=r.customDomainState,D=(0,a.a)(g.r,{variables:{id:b}}).data,R=(0,d.B)(r),T=(0,c.o)(r);if("User"===(null==D||null===(n=D.userResult)||void 0===n?void 0:n.__typename)){var L=D.userResult,O=L.socialStats,M=L.viewerEdge,P=M.createdAt,V=M.lastPostCreatedAt,U=(0,N.pY)((null==O?void 0:O.followerCount)||0);if(null!=O&&O.followerCount&&(null==O?void 0:O.followerCount)>=100&&(t="".concat(U," Followers")),V)t=o.createElement(o.Fragment,null,"Last published ",o.createElement(s.h,{timestamp:V,hasPrefix:!0}));else if(!V&&null!=O&&O.followerCount&&(null==O?void 0:O.followerCount)>0)t="".concat(U," ").concat(l()("Follower",null==O?void 0:O.followerCount));else if(P){var z=(0,i.Z)(P,"LLL yyyy");t="Joined ".concat(E," ").concat(z)}else t=""}return o.createElement(f.x,{padding:"16px",display:"flex",flexDirection:"column",width:"300px",playwrightClassName:"pw-user-tooltip"},o.createElement(f.x,{display:"flex",flexDirection:"row",alignItems:"center",whiteSpace:"normal"},o.createElement(p.Yt,{scale:"XS",user:{__typename:"User",mediumMemberAt:_,membership:B,username:y,name:w,imageId:A,id:b,hasSubdomain:C,customDomainState:I},link:!0,showBadge:!0}),o.createElement(v.P,{href:R},o.createElement(f.x,{display:"flex",flexDirection:"column",paddingLeft:"12px"},o.createElement(h.X6,{scale:"S",clamp:2},w)))),T&&o.createElement(f.x,{paddingTop:"12px"},o.createElement(m._,{size:"M",withText:!0})),F&&o.createElement(f.x,{paddingTop:"8px"},o.createElement(x.F,{scale:"S",color:"DARKER"},o.createElement(u.P,{wrapLinks:!0},F))),o.createElement(f.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderTop:"neutral.primary",marginTop:"16px",paddingTop:"10px"},o.createElement(x.F,{scale:"S"},t),o.createElement(k.B,{user:r,buttonSize:"COMPACT",susiEntry:"follow_card"})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8695.9065ba3d.chunk.js.map