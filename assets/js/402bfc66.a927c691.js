"use strict";(self.webpackChunkten_docs=self.webpackChunkten_docs||[]).push([[9770],{6377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),s=t(1151);const r={sidebar_position:4},o="Interaction with Ethereum",a={id:"architecture/interaction-with-ethereum",title:"Interaction with Ethereum",description:"Ten serves as a confidential extension to Ethereum, enabling assets to move seamlessly between the two networks. While many sidechains and L2 solutions have developed bridges to address mismatches between different network models, Ten's approach is distinct, ensuring a decentralized and secure interaction.",source:"@site/docs/architecture/interaction-with-ethereum.md",sourceDirName:"architecture",slug:"/architecture/interaction-with-ethereum",permalink:"/docs/architecture/interaction-with-ethereum",draft:!1,unlisted:!1,editUrl:"https://github.com/ten-protocol/ten-documentation/blob/main/docs/architecture/interaction-with-ethereum.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Consensus Mechanism",permalink:"/docs/architecture/consensus"},next:{title:"Governance",permalink:"/docs/architecture/governance"}},c={},l=[{value:"Deposits",id:"deposits",level:2},{value:"Withdrawals",id:"withdrawals",level:2},{value:"Rollup Finality",id:"rollup-finality",level:2},{value:"Ten Public Events",id:"ten-public-events",level:2}];function d(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interaction-with-ethereum",children:"Interaction with Ethereum"}),"\n",(0,i.jsx)(n.p,{children:"Ten serves as a confidential extension to Ethereum, enabling assets to move seamlessly between the two networks. While many sidechains and L2 solutions have developed bridges to address mismatches between different network models, Ten's approach is distinct, ensuring a decentralized and secure interaction."}),"\n",(0,i.jsx)(n.h2,{id:"deposits",children:"Deposits"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Process"}),": Users deposit supported ERC tokens into the Bridge contract's address. Once the transaction is confirmed on Ethereum L1, the Ten-enabled wallet automatically creates an L2 transaction, crediting the user's Ten account with wrapped tokens."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Finality Consideration"}),": Due to Ethereum's probabilistic finality, Ten introduces a dependency mechanism between L2 rollups and L1 blocks to ensure accurate crediting of L2 accounts."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"withdrawals",children:"Withdrawals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Requirement"}),": To move assets back to Ethereum, Ten provides a secure withdrawal function."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Decentralized Approach"}),": Ten employs economic incentives on top of the POBI protocol to ensure a decentralized withdrawal process, avoiding reliance on multi-signature technology or long waiting periods."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"rollup-finality",children:"Rollup Finality"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standard Delay"}),": Typically, a rollup is considered final if a standard number of Ethereum blocks (equivalent to a 1-day period) have passed since its publication on Ethereum L1."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Competing Forks"}),": If multiple forks are detected, finality is suspended on all forks, and withdrawals are halted. The protocol has mechanisms to address such scenarios and ensure user satisfaction."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ten-public-events",children:"Ten Public Events"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use Cases"}),": Ethereum applications can utilize Ten for tasks like organizing fair lotteries or publishing poker game results, which require data originating in L2 to be final."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Public Events"}),': Applications within Ten can emit special "Public Events". Once these events reach finality, they are exposed to external contracts on Ethereum L1.']}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);