"use strict";(self.webpackChunkobscuro_docs=self.webpackChunkobscuro_docs||[]).push([[7401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Set Up Dev Environment",s={unversionedId:"getting-started/for-developers/setup-dev-env",id:"getting-started/for-developers/setup-dev-env",title:"Set Up Dev Environment",description:"1. Wallet Setup & Configuration",source:"@site/docs/getting-started/for-developers/setup-dev-env.md",sourceDirName:"getting-started/for-developers",slug:"/getting-started/for-developers/setup-dev-env",permalink:"/obscuro-documentation/docs/getting-started/for-developers/setup-dev-env",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/for-developers/setup-dev-env.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Explore Contracts in Obscuro",permalink:"/obscuro-documentation/docs/getting-started/for-developers/explore-contracts-in-obscuro"},next:{title:"Develop & Deploy dApp",permalink:"/obscuro-documentation/docs/getting-started/for-developers/develop-deploy-dapp"}},l={},p=[{value:"1. Wallet Setup &amp; Configuration",id:"1-wallet-setup--configuration",level:2},{value:"2. Setting Up the Environment",id:"2-setting-up-the-environment",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-dev-environment"},"Set Up Dev Environment"),(0,o.kt)("h2",{id:"1-wallet-setup--configuration"},"1. Wallet Setup & Configuration"),(0,o.kt)("p",null,"To start building on Obscuro, you first need to set up and configure your wallet with the Obscuro network."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Install MetaMask"),": ",(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/download/"},"Install")," MetaMask either as a browser extension or mobile app."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Configure MetaMask for Obscuro"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Visit the ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.obscu.ro/"},"Obscuro hosted gateway")," for wallet setup."),(0,o.kt)("li",{parentName:"ul"},"Click on 'Join' and follow the on-screen instructions."),(0,o.kt)("li",{parentName:"ul"},"Learn more about the ",(0,o.kt)("a",{parentName:"li",href:"/docs/tools-infrastructure/hosted-gateway"},"Obscuro Gateway"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Acquire Testnet ETH Tokens"),": To perform transactions, you'll need testnet ETH tokens. Refer to our ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/for-users/get-tokens"},"Getting tokens"),".")),(0,o.kt)("h2",{id:"2-setting-up-the-environment"},"2. Setting Up the Environment"),(0,o.kt)("p",null,"Once your wallet is ready, you can proceed with the development and deployment of your smart contracts."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Choose an IDE"),": Use your preferred development environment or Integrated Development Environment (IDE) like Truffle, Remix, Hardhat, or Foundry. Check out IDE compatibility and its features ",(0,o.kt)("a",{parentName:"li",href:"/docs/tools-infrastructure/compatible-tools"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Connect IDE to MetaMask"),": Ensure your chosen IDE is connected to your MetaMask wallet.")))}d.isMDXComponent=!0}}]);