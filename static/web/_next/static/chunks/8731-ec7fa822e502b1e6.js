(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8731],{92093:function(e,t,a){"use strict";a.r(t),a.d(t,{ChatContainer:function(){return eB}});var s,r,n,o,l,i=a(85893),c=a(26246),d=a(67294),h=a(4511),u=a(28997),m=a(45761),_=a.n(m),g=a(94184),p=a.n(g),x=a(94199),C=a(4480),j=a(5152),f=a.n(j),b=a(63108),N=a(41366),v=a(4693);class E extends v.M{match(e){let{highlightString:t}=this.options;if(!t)return null;let a=e.match(t);return a?{index:a.index,length:a[0].length,match:a[0],valid:!0}:null}replaceWith(e,t){let{key:a}=t;return d.createElement("mark",{key:a},e)}asTag(){return"mark"}}var M=a(75774),w=a.n(M),y=a(63516);function T(e){let t=new Date(e);if(Number.isNaN(t))return"";let a=(0,y.Xb)(e);if(a>=1){let e=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"".concat(e," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var S=a(44974),k=a(73295),G=a.n(k);let A=e=>{let{badge:t,userColor:a,title:s}=e;return(0,i.jsx)("span",{style:{color:"var(--theme-color-users-".concat(a,")")},className:G().badge,title:s,children:t})},B=f()(()=>Promise.all([a.e(2074),a.e(7719)]).then(a.t.bind(a,27719,23)),{loadableGenerated:{webpack:()=>[27719]},ssr:!1}),O=e=>{let{userColor:t}=e;return(0,i.jsx)(A,{badge:(0,i.jsx)(B,{}),userColor:t,title:"Authenticated"})},P=f()(()=>Promise.all([a.e(2074),a.e(710)]).then(a.t.bind(a,20710,23)),{loadableGenerated:{webpack:()=>[20710]},ssr:!1}),U=e=>{let{userColor:t}=e;return(0,i.jsx)(A,{badge:(0,i.jsx)(P,{}),userColor:t,title:"Moderator"})},D=f()(()=>Promise.all([a.e(2074),a.e(6133)]).then(a.t.bind(a,56133,23)),{loadableGenerated:{webpack:()=>[56133]},ssr:!1}),F=e=>{let{userColor:t}=e;return(0,i.jsx)(A,{badge:(0,i.jsx)(D,{}),userColor:t,title:"Bot"})},I=f()(()=>Promise.all([a.e(173),a.e(5874),a.e(4931),a.e(5402),a.e(1382),a.e(4041),a.e(3698),a.e(3013),a.e(4398),a.e(8091),a.e(2659),a.e(9991)]).then(a.bind(a,39991)).then(e=>e.ChatModerationActionMenu),{loadableGenerated:{webpack:()=>[39991]},ssr:!1}),L=e=>{let{children:t,user:a}=e,{displayName:s,createdAt:r}=a,n="".concat(s," first joined ").concat(T(r));return(0,i.jsx)(x.Z,{title:n,placement:"topLeft",mouseEnterDelay:1,children:t})},W=e=>{let{message:t,highlightString:a,showModeratorMenu:s,sentBySelf:r,sameUserAsLast:n,isAuthorModerator:o,isAuthorAuthenticated:l,isAuthorBot:c}=e,{id:d,body:h,user:u,timestamp:m}=t,{id:_,displayName:g,displayColor:j}=u,f=(0,C.sJ)(S.FI),v="var(--theme-color-users-".concat(j,")"),M="Sent ".concat(T(m)),y=[];return o&&y.push((0,i.jsx)(U,{userColor:j},"mod")),l&&y.push((0,i.jsx)(O,{userColor:j},"auth")),c&&y.push((0,i.jsx)(F,{userColor:j},"bot")),(0,i.jsx)("div",{className:p()(w().messagePadding,n&&w().messagePaddingCollapsed,"chat-message_user"),children:(0,i.jsxs)("div",{className:p()(w().root,{[w().ownMessage]:r}),style:{borderColor:v},children:[(0,i.jsx)("div",{className:w().background,style:{color:v}}),(0,i.jsx)(L,{user:u,children:(0,i.jsxs)("div",{className:n?w().repeatUser:w().user,style:{color:v},children:[(0,i.jsx)("span",{className:w().userName,children:g}),(0,i.jsx)("span",{className:w().userBadges,children:y})]})}),(0,i.jsx)(x.Z,{title:M,mouseEnterDelay:1,children:(0,i.jsx)(b.wZ,{className:w().message,content:h,matchers:[new N.xc("url",{customTLDs:["online"]}),new E("highlight",{highlightString:a})]})}),s&&(0,i.jsx)("div",{className:w().modMenuWrapper,children:(0,i.jsx)(I,{messageID:d,accessToken:f,userID:_,userDisplayName:g})})]})})};var R=a(55241),V=a(61512),H=a.n(V),Z=a(91036),J=a.n(Z),z=a(14866),K=a.n(z);let q=f()(()=>Promise.all([a.e(7741),a.e(344)]).then(a.bind(a,20344)).then(e=>e.EmojiPicker),{loadableGenerated:{webpack:()=>[20344]},ssr:!1}),X=f()(()=>Promise.all([a.e(2074),a.e(3366)]).then(a.t.bind(a,73366,23)),{loadableGenerated:{webpack:()=>[73366]},ssr:!1}),Y=f()(()=>Promise.all([a.e(2074),a.e(2348)]).then(a.t.bind(a,92348,23)),{loadableGenerated:{webpack:()=>[92348]},ssr:!1}),Q=e=>{let{defaultText:t,enabled:a,focusInput:s}=e,[r,n]=(0,d.useState)(null==t?void 0:t.length),o=(0,C.sJ)(S.Gt),l=(0,d.useRef)(t||""),[c,h]=(0,d.useState)([]),[,m]=(0,d.useReducer)(e=>e+1,0),_=()=>l.current.length,g=()=>{let e=_();if(!o){console.log("websocketService is not defined");return}if(0===e||e>300)return;let t=l.current;t=t.replace(/^<p>|<\/p>$/g,""),o.send({type:u.C.CHAT,body:t}),l.current="",n(0),m()},x=e=>{let t=l.current+e;l.current=t,n(_()),m()};(0,d.useEffect)(()=>{s&&document.getElementById("chat-input-content-editable").focus()},[]);let j=async()=>{try{let e=await fetch("/api/emoji"),t=await e.json();h(t),t.forEach(e=>{let t=document.createElement("link");t.href=e.url,t.rel="preload",t.as="image",document.head.appendChild(t)})}catch(e){console.error("cannot fetch custom emoji",e)}};return(0,d.useEffect)(()=>{j()},[]),(0,i.jsx)("div",{id:"chat-input",className:K().root,children:(0,i.jsxs)("div",{className:p()(K().inputWrap,r>300&&K().maxCharacters),children:[(0,i.jsx)(H(),{id:"chat-input-content-editable",html:l.current,placeholder:a?"Send a message to chat":"Chat is disabled",disabled:!a,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||e.metaKey||e.ctrlKey||e.altKey||(e.preventDefault(),g())},onChange:e=>{let t=J()(e.target.value,{allowedTags:["b","i","em","strong","a","br","p","img"],allowedAttributes:{img:["class","alt","title","src"]},allowedClasses:{img:["emoji"]},transformTags:{h1:"p",h2:"p",h3:"p"}});l.current!==t&&(l.current=t),n(_())},style:{width:"100%"},role:"textbox","aria-label":"Chat text input"}),a&&(0,i.jsxs)("div",{style:{display:"flex",paddingLeft:"5px"},children:[(0,i.jsx)(R.Z,{content:(0,i.jsx)(q,{customEmoji:c,onEmojiSelect:e=>{x(e)},onCustomEmojiSelect:(e,t)=>{let a='<img src="'.concat(t,'" alt="').concat(e,'" title="').concat(e,'" class="emoji" />');x(a)}}),trigger:"click",placement:"topRight",children:(0,i.jsx)("button",{type:"button",className:K().emojiButton,title:"Emoji picker button",children:(0,i.jsx)(Y,{})})}),(0,i.jsx)("button",{type:"button",className:K().sendButton,title:"Send message Button",onClick:g,children:(0,i.jsx)(X,{})})]})]})})};var $=a(71368),ee=a.n($);function et(){return(et=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var ea=function(e){return d.createElement("svg",et({xmlns:"http://www.w3.org/2000/svg",width:500,height:500,viewBox:"0 0 132.292 132.292"},e),s||(s=d.createElement("linearGradient",{id:"moderator_svg__a",x1:432.851,x2:464.644,y1:49.977,y2:49.977,gradientUnits:"userSpaceOnUse"},d.createElement("stop",{offset:0,stopColor:"#2087e2"}),d.createElement("stop",{offset:1,stopColor:"#b63fff"}))),r||(r=d.createElement("path",{fill:"url(#moderator_svg__a)",d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82z",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),n||(n=d.createElement("path",{fill:"#1d1535",fillOpacity:.335,d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z"})),o||(o=d.createElement("path",{fill:"#e2e8f0",fillOpacity:.306,d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203 31.949-4.809 50.249-20.11 50.249-20.11z"})),l||(l=d.createElement("path",{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))};let es=()=>(0,i.jsxs)("div",{className:ee().chatModerationNotification,children:[(0,i.jsx)(ea,{className:ee().icon}),"You are now a moderator."]});var er=a(61120),en=a.n(er);let eo=e=>{let{message:{body:t,user:{displayName:a}},highlightString:s}=e;return(0,i.jsxs)("div",{className:p()([en().chatSystemMessage,"chat-message_system"]),children:[(0,i.jsx)("div",{className:en().user,children:(0,i.jsx)("span",{className:en().userName,children:a})}),(0,i.jsx)(b.wZ,{className:en().message,content:t,matchers:[new N.xc("url",{customTLDs:["online"]}),new E("highlight",{highlightString:s})]})]})};var el=a(56654),ei=a.n(el);let ec=f()(()=>Promise.all([a.e(2074),a.e(8725)]).then(a.t.bind(a,8725,23)),{loadableGenerated:{webpack:()=>[8725]},ssr:!1}),ed=e=>{let{isAuthorModerator:t,userColor:a,displayName:s}=e;return(0,i.jsxs)("div",{className:ei().root,children:[(0,i.jsxs)("span",{style:{color:"var(--theme-color-users-".concat(a,")")},children:[(0,i.jsx)("span",{className:ei().icon,children:(0,i.jsx)(ec,{})}),(0,i.jsx)("span",{className:ei().user,children:s}),t&&(0,i.jsx)("span",{className:ei().moderatorBadge,children:(0,i.jsx)(U,{userColor:a})})]}),"joined the chat."]})};var eh=a(71577);let eu=f()(()=>Promise.all([a.e(2074),a.e(437)]).then(a.t.bind(a,20437,23)),{loadableGenerated:{webpack:()=>[20437]},ssr:!1}),em=e=>{let{onClick:t}=e;return(0,i.jsx)("div",{className:_().toBottomWrap,id:"scroll-to-chat-bottom",children:(0,i.jsx)(eh.Z,{type:"default",style:{color:"currentColor"},icon:(0,i.jsx)(eu,{}),onClick:t,children:"Go to last message"})})};var e_=a(88881),eg=a.n(e_);let ep=e=>{let{body:t}=e;return(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:eg().chatAction})};var ex=a(71230),eC=a(15746),ej=a(24093),ef=a(31654),eb=a.n(ef);let eN=f()(()=>a.e(9069).then(a.bind(a,49069)),{loadableGenerated:{webpack:()=>[49069]},ssr:!1}),ev=f()(()=>a.e(5584).then(a.bind(a,15584)),{loadableGenerated:{webpack:()=>[15584]},ssr:!1}),eE=f()(()=>a.e(7268).then(a.bind(a,97268)),{loadableGenerated:{webpack:()=>[97268]},ssr:!1}),eM=e=>{let t,{message:a}=e,{body:s,title:r,image:n,link:o,type:l}=a;switch(l.toString()){case"FEDIVERSE_ENGAGEMENT_FOLLOW":t=eN;break;case"FEDIVERSE_ENGAGEMENT_LIKE":t=ev;break;case"FEDIVERSE_ENGAGEMENT_REPOST":t=eE}return(0,i.jsx)("div",{className:p()([eb().follower,"chat-message_social"]),children:(0,i.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:(0,i.jsxs)(ex.Z,{wrap:!1,children:[(0,i.jsxs)(eC.Z,{span:6,className:eb().avatarColumn,children:[(0,i.jsx)(ej.C,{src:n,alt:"Avatar",className:eb().avatar,size:"large",children:r.charAt(0).toUpperCase()}),(0,i.jsx)(t,{className:eb().icon})]}),(0,i.jsxs)(eC.Z,{children:[(0,i.jsx)(ex.Z,{className:eb().account,children:r}),(0,i.jsx)(ex.Z,{className:eb().body,dangerouslySetInnerHTML:{__html:s}})]})]})})})};var ew=a(44964),ey=a.n(ew);let eT=f()(()=>Promise.all([a.e(2074),a.e(1668)]).then(a.t.bind(a,51668,23)),{loadableGenerated:{webpack:()=>[51668]},ssr:!1}),eS=e=>{let{message:t}=e,{oldName:a,user:s}=t,{displayName:r,displayColor:n}=s,o="var(--theme-color-users-".concat(n,")");return(0,i.jsxs)("div",{className:ey().nameChangeView,children:[(0,i.jsx)("div",{className:ey().icon,children:(0,i.jsx)(eT,{})}),(0,i.jsxs)("div",{className:ey().nameChangeText,children:[(0,i.jsx)("span",{style:{color:o},children:a}),(0,i.jsx)("span",{className:ey().plain,children:" is now known as "}),(0,i.jsx)("span",{style:{color:o},children:r})]})]})};var ek=a(25449),eG=a(69183);function eA(e){let{user:t}=e,a=new ek.n(t);return a.isModerator}let eB=e=>{let{messages:t,usernameToHighlight:a,chatUserId:s,isModerator:r,showInput:n,height:o,chatAvailable:l,focusInput:m=!0}=e,[g,p]=(0,d.useState)(!1),[x,C]=(0,d.useState)(!1),j=(0,d.useRef)(null),f=(0,d.useRef)(null),b=new Set;(0,d.useEffect)(()=>()=>{clearTimeout(f.current)},[]);let N=e=>(0,i.jsx)(eM,{message:e}),v=e=>{let{user:{displayName:t,displayColor:a}}=e,s=eA(e);return(0,i.jsx)(ed,{displayName:t,userColor:a,isAuthorModerator:s})},E=e=>{let{body:t}=e;return(0,i.jsx)(ep,{body:t})},M=e=>{let t=eA(e);return t?(0,i.jsx)(es,{}):(0,i.jsx)("div",{style:{width:"1px",height:"1px"}})},w=(e,n)=>{var o,l,c;let d=function(e,t,a){if(e.length<2)return!1;let s=e[t];if(!s||!s.user)return!1;let{user:{id:r}}=s,n=e[t-1];if((null==n?void 0:n.type)!==u.C.CHAT||!(null==n?void 0:n.timestamp)||!s.timestamp)return!1;let o=new Date(null==n?void 0:n.timestamp).getTime(),l=new Date(s.timestamp).getTime();return!(l-o>4e4)&&r===(null==n?void 0:n.user.id)&&!(a.size>=5)}(t,e,b);d?b.add(n.id):b.clear();let h=eA(n);return(0,i.jsx)(W,{message:n,showModeratorMenu:r,highlightString:a,sentBySelf:(null===(o=n.user)||void 0===o?void 0:o.id)===s,sameUserAsLast:d,isAuthorModerator:h,isAuthorBot:null===(l=n.user)||void 0===l?void 0:l.isBot,isAuthorAuthenticated:null===(c=n.user)||void 0===c?void 0:c.authenticated},n.id)},y=(e,t)=>{switch(t.type){case u.C.CHAT:return w(e,t);case u.C.NAME_CHANGE:return(0,i.jsx)(eS,{message:t});case u.C.CONNECTED_USER_INFO:return M(t);case u.C.USER_JOINED:return v(t);case u.C.CHAT_ACTION:return E(t);case u.C.SYSTEM:return(0,i.jsx)(eo,{message:t,highlightString:a},t.id);case u.C.FEDIVERSE_ENGAGEMENT_FOLLOW:case u.C.FEDIVERSE_ENGAGEMENT_LIKE:case u.C.FEDIVERSE_ENGAGEMENT_REPOST:return N(t);default:return null}},T=e=>{clearTimeout(f.current),f.current=setTimeout(()=>{var t;null===(t=e.current)||void 0===t||t.scrollTo({top:1/0,left:0,behavior:"auto"}),C(!0)},150),p(!1)};(0,d.useEffect)(()=>{setTimeout(()=>{T(j)},500)},[]);let S=(0,d.useMemo)(()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.OO,{id:"virtuoso",style:{height:o},className:_().virtuoso,ref:j,data:t,itemContent:(e,t)=>y(e,t),initialTopMostItemIndex:t.length-1,followOutput:()=>!!x&&(p(!1),T(j),"smooth"),alignToBottom:!0,atBottomThreshold:70,atBottomStateChange:e=>{C(e),e?p(!1):p(!0)}}),g&&(0,i.jsx)(em,{onClick:()=>{T(j)}})]}),[t,a,s,r,g,x]);return(0,i.jsx)(h.SV,{fallbackRender:e=>{let{error:t,resetErrorBoundary:a}=e;return(0,i.jsx)(eG.A,{componentName:"ChatContainer",message:t.message,retryFunction:a})},children:(0,i.jsxs)("div",{id:"chat-container",className:_().chatContainer,children:[S,n&&(0,i.jsx)("div",{className:_().chatTextField,children:(0,i.jsx)(Q,{enabled:l,focusInput:m})})]})})};eB.defaultProps={showInput:!0,height:"auto"}},88881:function(e){e.exports={chatAction:"ChatActionMessage_chatAction__x9Xsg"}},45761:function(e){e.exports={toBottomWrap:"ChatContainer_toBottomWrap__3V5wa",show:"ChatContainer_show__OBPqg",chatContainer:"ChatContainer_chatContainer__O2lYN",virtuoso:"ChatContainer_virtuoso__OS9Kz",chatTextField:"ChatContainer_chatTextField__OqCGL"}},56654:function(e){e.exports={root:"ChatJoinMessage_root__vuVXa",moderatorBadge:"ChatJoinMessage_moderatorBadge__HF66k",user:"ChatJoinMessage_user__kYpU9",icon:"ChatJoinMessage_icon__TzTHn"}},71368:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__kgFWe",icon:"ChatModeratorNotification_icon__7FdGg"}},44964:function(e){e.exports={nameChangeView:"ChatNameChangeMessage_nameChangeView__z4WoO",nameChangeText:"ChatNameChangeMessage_nameChangeText__PTEQP",plain:"ChatNameChangeMessage_plain__heTPn",icon:"ChatNameChangeMessage_icon__TWCil"}},31654:function(e){e.exports={follower:"ChatSocialMessage_follower__TyNGH",avatar:"ChatSocialMessage_avatar__QbcNk",avatarColumn:"ChatSocialMessage_avatarColumn__inCWq",body:"ChatSocialMessage_body__aY2Oa",account:"ChatSocialMessage_account__uGSKr",icon:"ChatSocialMessage_icon__fiCk6"}},61120:function(e){e.exports={chatSystemMessage:"ChatSystemMessage_chatSystemMessage__c6XEN",user:"ChatSystemMessage_user__6yHSJ",message:"ChatSystemMessage_message__ySq5g"}},14866:function(e){e.exports={root:"ChatTextField_root__4oUkJ",inputWrap:"ChatTextField_inputWrap__1mAjD",maxCharacters:"ChatTextField_maxCharacters__yGT4s",emojiButton:"ChatTextField_emojiButton__ON_Cu",sendButton:"ChatTextField_sendButton__MOmD4"}},73295:function(e){e.exports={badge:"ChatUserBadge_badge__1EdUp"}},75774:function(e){e.exports={root:"ChatUserMessage_root__79heB",user:"ChatUserMessage_user__xUEp9",repeatUser:"ChatUserMessage_repeatUser__HnoyL",userBadges:"ChatUserMessage_userBadges__L6wat",message:"ChatUserMessage_message__MJ9LD",ownMessage:"ChatUserMessage_ownMessage__d28A3",background:"ChatUserMessage_background__Tfghp",modMenuWrapper:"ChatUserMessage_modMenuWrapper__7fblv",messagePadding:"ChatUserMessage_messagePadding__Xp1F6",messagePaddingCollapsed:"ChatUserMessage_messagePaddingCollapsed__qxN0E"}},22868:function(){},14777:function(){},99830:function(){},70209:function(){}}]);