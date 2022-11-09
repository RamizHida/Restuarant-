(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"94d676950d0db0da0fdd.png",n=e.p+"76423b65c122258de764.png",a=e.p+"22cfdd1cba253783ce51.png";let c=document.querySelector("#content"),l=document.createElement("nav");l.classList.add("nav");let d=document.createElement("h1");d.textContent="Betim's Bureks!",d.classList.add("title");let r=document.createElement("h2");r.textContent="Menu";let o=document.createElement("h2");o.textContent="Contact",l.append(d,r,o);let i=document.createElement("div");i.classList.add("intro");let s=document.createElement("div"),m=document.createElement("h2");m.classList.add("name");let u=document.createElement("span");u.classList.add("secret"),u.textContent="Betim",m.textContent=` ${u.textContent}: Restaurant Owner`;let p=document.createElement("img");p.id="chef",p.src=t,p.alt="A picture of a chef",s.append(m,p);let h=document.createElement("div");h.setAttribute("id","rest-desc");let g=document.createElement("span");g.classList.add("secret"),g.textContent="secret";let E=document.createElement("p");E.textContent=`Whether you are new to Balkan dishes, or consider yourself a master chef when it comes to cooking them, at Betim's Bureks we guarnetee to satisify your appetite and, more importantly, your taste buds! We believe nothing is more enjoyable than a delicious meal overseeing a beautiful sight. We pride ourselves as having the best bureks in all the Balkans, and some critics say all of Europe! What makes a delicious burek? Fresh ingreidents, patience, and the esstenial ingredient, my ${g.textContent} recipe! Don't take my word for it, come and try one yourself! We are a family-owned business and have been making stomachs happy and full since 1889. From my family to yours, we hope to see you soon!`,h.append(E),i.append(s,h);let f=document.createElement("div");f.classList.add("beach");let b=document.createElement("h3");b.classList.add("title"),b.textContent="Where You Will Be Eating";let C=document.createElement("img");C.id="beach-img",C.src=n,C.alt="A picture of an old Balkan style building near a body of water and a valley next to it",f.append(b,C);let v=document.createElement("footer");v.classList.add("footer");let y=document.createElement("img"),k=document.createElement("a");k.setAttribute("href","https://github.com/RamizHida"),k.setAttribute("target","_blank"),y.id="footer",y.src=a,k.append(y),v.append(k),c.append(l,i,f,v);let x=document.createElement("form"),L=document.createElement("label");L.for="name",L.textContent="Name";let w=document.createElement("input");w.type="text",w.id="name",w.required,w.placeholder="John Smith";let B=document.createElement("label");B.textContent="Email",L.for="email";let A=document.createElement("input");A.type="email",A.id="email",A.required=!0,A.placeholder="Johnsmith@gmail.com";let S=document.createElement("div");S.classList.add("message");let W=document.createElement("label");W.textContent="Message",W.for="message";let $=document.createElement("textarea");$.id="message",$.maxLength="200",$.cols="30",$.rows="5",$.placeholder="Type your message here",S.append(W,$);let F=document.createElement("button");F.textContent="Send",x.append(L,w,B,A,S,F);const T=e.p+"7b7977f717f98eb9d750.png",j=e.p+"294169285326d71319d4.png",q=e.p+"f2f803729d7cf5a965cf.png",M=e.p+"4ec95588e5d7cddcd8dc.png",J=e.p+"5d0e6e74394c5c87fe0d.png",N=e.p+"5bcdb402b7aec7083b34.png";let P=document.createElement("h2");P.classList.add("title"),P.textContent="Customer Favourites";let R=document.createElement("div");R.classList.add("menu");let z=document.createElement("div"),D=document.createElement("h2");D.textContent="Spinach Burek 7€";let G=document.createElement("img");G.src=T,G.alt="A picture of spinnach burek",z.classList.add("menu-img"),z.append(D,G);let H=document.createElement("div"),O=document.createElement("h2");O.textContent="Potato Burek 7€";let Y=document.createElement("img");Y.src=j,Y.alt="A picture of potato burek",H.classList.add("menu-img"),H.append(O,Y);let _=document.createElement("div"),I=document.createElement("h2");I.textContent="Beef Burek 8€";let K=document.createElement("img");K.src=q,K.alt="A picture of beef burek",_.classList.add("menu-img"),_.append(I,K);let Q=document.createElement("div"),U=document.createElement("h2");U.textContent="Cheese Burek 7€";let V=document.createElement("img");V.src=M,V.alt="A picture of cheese burek",Q.classList.add("menu-img"),Q.append(U,V);let X=document.createElement("div"),Z=document.createElement("h2");Z.textContent="Beef and Mushroom Burek 9€";let ee=document.createElement("img");ee.src=J,ee.alt="A picture of beef and mushroom burek",X.classList.add("menu-img"),X.append(Z,ee);let te=document.createElement("div"),ne=document.createElement("h2");ne.textContent="Chicken Gyro 9€";let ae=document.createElement("img");ae.src=N,ae.alt="A picture of chicken gyro",te.classList.add("menu-img"),te.append(ne,ae),R.append(z,H,_,Q,X,te),r.addEventListener("click",(()=>{for(;c.lastChild&&"nav"!=c.lastChild.getAttribute("class");)c.removeChild(c.lastChild);c.append(P,R,v)})),o.addEventListener("click",(()=>{for(;c.lastChild&&"nav"!=c.lastChild.getAttribute("class");)c.removeChild(c.lastChild);c.append(x,v)})),d.addEventListener("click",(()=>{for(;c.lastChild&&"nav"!=c.lastChild.getAttribute("class");)c.removeChild(c.lastChild);c.append(i,f,v)}))})();