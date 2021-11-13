import{S as e,i as s,s as t,J as a,e as r,t as c,k as o,c as l,a as i,g as h,d as n,n as v,b as p,f as d,E as f,h as u,K as m,L as g,M as j,F as y,N as b,O as w,G as E,P as _}from"../chunks/vendor-2d7e6306.js";import{s as I}from"../chunks/stores-54162c23.js";function q(e,s,t){const a=e.slice();return a[7]=s[t],a}function S(e){let s,t,a;return{c(){s=r("a"),t=c("Project Repository"),this.h()},l(e){s=l(e,"A",{href:!0,class:!0});var a=i(s);t=h(a,"Project Repository"),a.forEach(n),this.h()},h(){p(s,"href",a=e[7].gitRepo),p(s,"class","svelte-qyhj3")},m(e,a){d(e,s,a),f(s,t)},p(e,t){1&t&&a!==(a=e[7].gitRepo)&&p(s,"href",a)},d(e){e&&n(s)}}}function D(e){let s,t,a;return{c(){s=r("a"),t=c("Project Website"),this.h()},l(e){s=l(e,"A",{href:!0,class:!0});var a=i(s);t=h(a,"Project Website"),a.forEach(n),this.h()},h(){p(s,"href",a=e[7].website),p(s,"class","svelte-qyhj3")},m(e,a){d(e,s,a),f(s,t)},p(e,t){1&t&&a!==(a=e[7].website)&&p(s,"href",a)},d(e){e&&n(s)}}}function A(e){let s,t,a,m,g,j,y,b,w,E,_,I,q=e[7].title+"",A=e[7].description+"",P=e[7].gitRepo&&S(e),x=e[7].website&&D(e);return{c(){s=r("a"),t=r("div"),a=r("h1"),m=c(q),g=o(),j=r("div"),P&&P.c(),y=o(),x&&x.c(),b=o(),w=r("p"),E=c(A),_=o(),this.h()},l(e){s=l(e,"A",{href:!0,class:!0});var r=i(s);t=l(r,"DIV",{class:!0});var c=i(t);a=l(c,"H1",{class:!0});var o=i(a);m=h(o,q),o.forEach(n),g=v(c),j=l(c,"DIV",{class:!0});var p=i(j);P&&P.l(p),y=v(p),x&&x.l(p),p.forEach(n),b=v(c),w=l(c,"P",{class:!0});var d=i(w);E=h(d,A),d.forEach(n),c.forEach(n),_=v(r),r.forEach(n),this.h()},h(){p(a,"class","svelte-qyhj3"),p(j,"class","recent-projects__projects__card__links svelte-qyhj3"),p(w,"class","svelte-qyhj3"),p(t,"class","svelte-qyhj3"),p(s,"href",I="/projects/"+e[7].slug),p(s,"class","recent-projects__projects__card svelte-qyhj3")},m(e,r){d(e,s,r),f(s,t),f(t,a),f(a,m),f(t,g),f(t,j),P&&P.m(j,null),f(j,y),x&&x.m(j,null),f(t,b),f(t,w),f(w,E),f(s,_)},p(e,t){1&t&&q!==(q=e[7].title+"")&&u(m,q),e[7].gitRepo?P?P.p(e,t):(P=S(e),P.c(),P.m(j,y)):P&&(P.d(1),P=null),e[7].website?x?x.p(e,t):(x=D(e),x.c(),x.m(j,null)):x&&(x.d(1),x=null),1&t&&A!==(A=e[7].description+"")&&u(E,A),1&t&&I!==(I="/projects/"+e[7].slug)&&p(s,"href",I)},d(e){e&&n(s),P&&P.d(),x&&x.d()}}}function P(e){let s,t,u,E,_,I,S,D,P,x,H,R,V,k,G,M,T,L,$,F,N,B,C,W,O,Q,z,J,K,Y,U,X,Z,ee,se,te,ae,re,ce,oe,le,ie,he,ne,ve,pe,de,fe,ue,me,ge,je,ye,be,we,Ee,_e,Ie,qe,Se,De,Ae,Pe,xe,He,Re=!1,Ve=()=>{Re=!1};a(e[4]),a(e[5]);let ke=e[0],Ge=[];for(let a=0;a<ke.length;a+=1)Ge[a]=A(q(e,ke,a));return{c(){t=r("div"),u=r("div"),E=r("div"),_=r("h1"),I=c("Nathan Hare"),S=o(),D=r("h2"),P=c("LaSpruca"),x=o(),H=r("div"),R=r("p"),V=c("Software Developer"),k=o(),G=r("p"),M=c("High School Student"),T=o(),L=r("p"),$=c("Got no clue what I am doing"),F=o(),N=m("svg"),B=m("path"),C=o(),W=r("div"),O=o(),Q=r("div"),z=r("div"),J=r("h1"),K=c("Hi i'm Nathan"),Y=o(),U=r("div"),X=r("p"),Z=c("I am a Year 12 student at Whangarei Boys' High School, a swimming coach for Kamo Amateur Swimming Club, a member\n\t\t\tof Questionable Research Labs, and a developer."),ee=o(),se=r("p"),te=c("At School, I take Electronics, Digital Technology, Maths, Physics and, Chemistry, and Economics. I have competed\n\t\t\tin Science Fair, and have won awards at the regional competition twice now. At Questionable, I help many of the\n\t\t\tyounger attendees with their projects as best can."),ae=o(),re=r("p"),ce=c("As a developer, I mostly use programming languages such as Rust, TypeScript, Java, C++. My preferred areas of\n\t\t\tdevelopment are: Native Apps and Backend. I work with, Flutter, React, Svelte, Sapper, Unity Engine, Linux,\n\t\t\tFirebase, GitHub, Actix Web, Spigot and others."),oe=o(),le=r("div"),ie=r("a"),he=r("img"),ve=o(),pe=r("a"),de=r("img"),ue=o(),me=r("a"),ge=r("img"),ye=o(),be=r("a"),we=r("img"),_e=o(),Ie=r("div"),qe=r("div"),Se=r("h1"),De=c("Recent Projects"),Ae=o(),Pe=r("div");for(let e=0;e<Ge.length;e+=1)Ge[e].c();this.h()},l(e){t=l(e,"DIV",{style:!0,class:!0});var s=i(t);u=l(s,"DIV",{class:!0});var a=i(u);E=l(a,"DIV",{class:!0});var r=i(E);_=l(r,"H1",{});var c=i(_);I=h(c,"Nathan Hare"),c.forEach(n),S=v(r),D=l(r,"H2",{});var o=i(D);P=h(o,"LaSpruca"),o.forEach(n),x=v(r),H=l(r,"DIV",{class:!0});var p=i(H);R=l(p,"P",{class:!0});var d=i(R);V=h(d,"Software Developer"),d.forEach(n),k=v(p),G=l(p,"P",{class:!0});var f=i(G);M=h(f,"High School Student"),f.forEach(n),T=v(p),L=l(p,"P",{class:!0});var m=i(L);$=h(m,"Got no clue what I am doing"),m.forEach(n),p.forEach(n),r.forEach(n),a.forEach(n),F=v(s),N=l(s,"svg",{viewBox:!0,xmlns:!0,id:!0,class:!0},1);var g=i(N);B=l(g,"path",{d:!0,class:!0},1),i(B).forEach(n),g.forEach(n),C=v(s),W=l(s,"DIV",{class:!0}),i(W).forEach(n),s.forEach(n),O=v(e),Q=l(e,"DIV",{class:!0});var j=i(Q);z=l(j,"DIV",{class:!0});var y=i(z);J=l(y,"H1",{class:!0});var b=i(J);K=h(b,"Hi i'm Nathan"),b.forEach(n),y.forEach(n),Y=v(j),U=l(j,"DIV",{class:!0});var w=i(U);X=l(w,"P",{class:!0});var q=i(X);Z=h(q,"I am a Year 12 student at Whangarei Boys' High School, a swimming coach for Kamo Amateur Swimming Club, a member\n\t\t\tof Questionable Research Labs, and a developer."),q.forEach(n),ee=v(w),se=l(w,"P",{class:!0});var A=i(se);te=h(A,"At School, I take Electronics, Digital Technology, Maths, Physics and, Chemistry, and Economics. I have competed\n\t\t\tin Science Fair, and have won awards at the regional competition twice now. At Questionable, I help many of the\n\t\t\tyounger attendees with their projects as best can."),A.forEach(n),ae=v(w),re=l(w,"P",{class:!0});var ne=i(re);ce=h(ne,"As a developer, I mostly use programming languages such as Rust, TypeScript, Java, C++. My preferred areas of\n\t\t\tdevelopment are: Native Apps and Backend. I work with, Flutter, React, Svelte, Sapper, Unity Engine, Linux,\n\t\t\tFirebase, GitHub, Actix Web, Spigot and others."),ne.forEach(n),w.forEach(n),oe=v(j),le=l(j,"DIV",{class:!0});var fe=i(le);ie=l(fe,"A",{href:!0});var je=i(ie);he=l(je,"IMG",{src:!0,alt:!0,class:!0}),je.forEach(n),ve=v(fe),pe=l(fe,"A",{href:!0});var Ee=i(pe);de=l(Ee,"IMG",{src:!0,alt:!0,class:!0}),Ee.forEach(n),ue=v(fe),me=l(fe,"A",{href:!0});var xe=i(me);ge=l(xe,"IMG",{src:!0,alt:!0,class:!0}),xe.forEach(n),ye=v(fe),be=l(fe,"A",{href:!0});var He=i(be);we=l(He,"IMG",{src:!0,alt:!0,class:!0}),He.forEach(n),fe.forEach(n),j.forEach(n),_e=v(e),Ie=l(e,"DIV",{class:!0});var Re=i(Ie);qe=l(Re,"DIV",{class:!0});var Ve=i(qe);Se=l(Ve,"H1",{});var ke=i(Se);De=h(ke,"Recent Projects"),ke.forEach(n),Ve.forEach(n),Ae=v(Re),Pe=l(Re,"DIV",{class:!0});var Me=i(Pe);for(let t=0;t<Ge.length;t+=1)Ge[t].l(Me);Me.forEach(n),Re.forEach(n),this.h()},h(){p(R,"class","svelte-qyhj3"),p(G,"class","svelte-qyhj3"),p(L,"class","svelte-qyhj3"),p(H,"class","title__text__list svelte-qyhj3"),p(E,"class","title__text svelte-qyhj3"),p(u,"class","title__text--wrapper svelte-qyhj3"),p(B,"d","m256 0 5.3 30c5.7 30 15.7 90 0 150-16.3 60-58.3 120-58.6 180 0.3 60 42.3 120 64 180 21.3 60 21.3 120-16 180-37.7 60-111.7 120-117.4 180-5.3 60 58.7 120 53.4 180-5.7 60-79.7 120-117.4 180-37.3 60-37.3 120-37.3 150v30h-32v-30-150-180-180-180-180-180-180-150-30z"),p(B,"class","svelte-qyhj3"),p(N,"viewBox","0 0 281.09 1440"),p(N,"xmlns","http://www.w3.org/2000/svg"),p(N,"id","header-wave"),p(N,"class","svelte-qyhj3"),p(W,"class","title__sprucebg svelte-qyhj3"),g(t,"border-bottom-left-radius",e[3]),g(t,"border-bottom-right-radius",e[3]),p(t,"class","title svelte-qyhj3"),p(J,"class","svelte-qyhj3"),p(z,"class","about-me__title svelte-qyhj3"),p(X,"class","svelte-qyhj3"),p(se,"class","svelte-qyhj3"),p(re,"class","svelte-qyhj3"),p(U,"class","about-me__main-content svelte-qyhj3"),he.src!==(ne="/_app/assets/reddit.56f2fda6.svg")&&p(he,"src","/_app/assets/reddit.56f2fda6.svg"),p(he,"alt","Reddit logo"),p(he,"class","svelte-qyhj3"),p(ie,"href","https://reddit.com/u/laspruca"),de.src!==(fe="/_app/assets/gh.a963b647.svg")&&p(de,"src","/_app/assets/gh.a963b647.svg"),p(de,"alt","Github logo"),p(de,"class","svelte-qyhj3"),p(pe,"href","https://github.com/laspruca"),ge.src!==(je="/_app/assets/discord.ab2cef31.svg")&&p(ge,"src","/_app/assets/discord.ab2cef31.svg"),p(ge,"alt","Discord Logo"),p(ge,"class","svelte-qyhj3"),p(me,"href","https://discord.com/users/403646951259635713"),we.src!==(Ee="/_app/assets/email.3b3449f7.svg")&&p(we,"src","/_app/assets/email.3b3449f7.svg"),p(we,"alt","Email logo"),p(we,"class","svelte-qyhj3"),p(be,"href","mailto:me@laspruca.nz"),p(le,"class","about-me__socials svelte-qyhj3"),p(Q,"class","about-me svelte-qyhj3"),p(qe,"class","recent-projects__title"),p(Pe,"class","recent-projects__projects svelte-qyhj3"),p(Ie,"class","recent-projects svelte-qyhj3")},m(a,r){d(a,t,r),f(t,u),f(u,E),f(E,_),f(_,I),f(E,S),f(E,D),f(D,P),f(E,x),f(E,H),f(H,R),f(R,V),f(H,k),f(H,G),f(G,M),f(H,T),f(H,L),f(L,$),f(t,F),f(t,N),f(N,B),f(t,C),f(t,W),d(a,O,r),d(a,Q,r),f(Q,z),f(z,J),f(J,K),f(Q,Y),f(Q,U),f(U,X),f(X,Z),f(U,ee),f(U,se),f(se,te),f(U,ae),f(U,re),f(re,ce),f(Q,oe),f(Q,le),f(le,ie),f(ie,he),f(le,ve),f(le,pe),f(pe,de),f(le,ue),f(le,me),f(me,ge),f(le,ye),f(le,be),f(be,we),d(a,_e,r),d(a,Ie,r),f(Ie,qe),f(qe,Se),f(Se,De),f(Ie,Ae),f(Ie,Pe);for(let e=0;e<Ge.length;e+=1)Ge[e].m(Pe,null);xe||(He=[j(window,"scroll",(()=>{Re=!0,clearTimeout(s),s=setTimeout(Ve,100),e[4]()})),j(window,"resize",e[5])],xe=!0)},p(e,[a]){if(4&a&&!Re&&(Re=!0,clearTimeout(s),scrollTo(window.pageXOffset,e[2]),s=setTimeout(Ve,100)),8&a&&g(t,"border-bottom-left-radius",e[3]),8&a&&g(t,"border-bottom-right-radius",e[3]),1&a){let s;for(ke=e[0],s=0;s<ke.length;s+=1){const t=q(e,ke,s);Ge[s]?Ge[s].p(t,a):(Ge[s]=A(t),Ge[s].c(),Ge[s].m(Pe,null))}for(;s<Ge.length;s+=1)Ge[s].d(1);Ge.length=ke.length}},i:y,o:y,d(e){e&&n(t),e&&n(O),e&&n(Q),e&&n(_e),e&&n(Ie),b(Ge,e),xe=!1,w(He)}}}var x=function(e,s,t,a){return new(t||(t=Promise))((function(r,c){function o(e){try{i(a.next(e))}catch(s){c(s)}}function l(e){try{i(a.throw(e))}catch(s){c(s)}}function i(e){var s;e.done?r(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(o,l)}i((a=a.apply(e,s||[])).next())}))};const H=!0,R=({fetch:e})=>x(void 0,void 0,void 0,(function*(){return{props:{projects:(yield(yield e("/projects/recent-projects.json")).json()).map((e=>Object.assign(Object.assign({},e),{date:new Date(e.date)})))}}}));function V(e,s,t){let a,r;E(e,I,(e=>t(6,r=e)));let{projects:c}=s,o=0,l=0;return e.$$set=e=>{"projects"in e&&t(0,c=e.projects)},e.$$.update=()=>{6&e.$$.dirty&&_(I,r=l>o,r),6&e.$$.dirty&&t(3,a=Math.min(l,o)/o*20+"em")},[c,o,l,a,function(){t(2,l=window.pageYOffset)},function(){t(1,o=window.innerHeight)}]}export default class extends e{constructor(e){super(),s(this,e,V,P,t,{projects:0})}}export{R as load,H as prerender};
