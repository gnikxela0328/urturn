"use strict";(self.webpackChunk_urturn_docs=self.webpackChunk_urturn_docs||[]).push([[13],{6013:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(7378),n=a(8944),r=a(9131),s=a(1884);const c="sidebar_k3AJ",m="sidebarItemTitle_KLf2",i="sidebarItemList_y0e6",o="sidebarItem_hZwW",g="sidebarItemLink_RCuc",u="sidebarItemLinkActive_wdkZ";var d=a(9213);function E(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:i},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))))))}const b=function(e){const{sidebar:t,toc:a,children:s,...c}=e,m=t&&t.items.length>0;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(E,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},9794:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(7378),n=a(6013),r=a(4823),s=a(4263);const c="tag_ImVg";function m(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(r.Z,e))))),l.createElement("hr",null))}const i=function(e){let{tags:t}=e;const a=(0,s.PZ)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(m,{key:e.letter,letterEntry:e}))))};const o=function(e){const{tags:t,sidebar:a}=e,r=(0,s.MA)();return l.createElement(n.Z,{title:r,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},l.createElement("h1",null,r),l.createElement(i,{tags:Object.values(t)}))}},4823:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7378),n=a(8944),r=a(1884);const s="tag_VWGF",c="tagRegular_sIPu",m="tagWithCount_YgKf";const i=function(e){const{permalink:t,name:a,count:i}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,{[c]:!i,[m]:i})},a,i&&l.createElement("span",null,i))}}}]);