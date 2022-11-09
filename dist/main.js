(()=>{"use strict";let e=document.createElement("h2");e.classList.add("title"),e.textContent="Customer Favourites";let t=document.createElement("div");t.classList.add("menu");let n=document.createElement("div"),a=document.createElement("h2");a.textContent="Spinach Burek 7€";let c=document.createElement("img");c.src="../src/images/Spinach-burek.png",c.alt="A picture of spinnach burek",n.classList.add("menu-img"),n.append(a,c);let l=document.createElement("div"),m=document.createElement("h2");m.textContent="Potato Burek 7€";let s=document.createElement("img");s.src="../src/images/Potato-burek.png",s.alt="A picture of potato burek",l.classList.add("menu-img"),l.append(m,s);let r=document.createElement("div"),o=document.createElement("h2");o.textContent="Beef Burek 8€";let d=document.createElement("img");d.src="../src/images/Beef-burek.png",d.alt="A picture of beef burek",r.classList.add("menu-img"),r.append(o,d);let i=document.createElement("div"),u=document.createElement("h2");u.textContent="Cheese Burek 7€";let p=document.createElement("img");p.src="../src/images/Cheese-burek.png",p.alt="A picture of cheese burek",i.classList.add("menu-img"),i.append(u,p);let h=document.createElement("div"),g=document.createElement("h2");g.textContent="Beef and Mushroom Burek 9€";let E=document.createElement("img");E.src="../src/images/beef&mushroom.png",E.alt="A picture of beef and mushroom burek",h.classList.add("menu-img"),h.append(g,E);let b=document.createElement("div"),f=document.createElement("h2");f.textContent="Chicken Gyro 9€";let C=document.createElement("img");C.src="../src/images/Chicken-gyro.png",C.alt="A picture of chicken gyro",b.classList.add("menu-img"),b.append(f,C),t.append(n,l,r,i,h,b);let k=document.querySelector("#content"),y=document.createElement("nav");y.classList.add("nav");let v=document.createElement("h1");v.textContent="Betim's Bureks!",v.classList.add("title");let x=document.createElement("h2");x.textContent="Menu";let L=document.createElement("h2");L.textContent="Contact",y.append(v,x,L);let B=document.createElement("div");B.classList.add("intro");let A=document.createElement("div"),w=document.createElement("h2");w.classList.add("name");let W=document.createElement("span");W.classList.add("secret"),W.textContent="Betim",w.textContent=` ${W.textContent}: Restaurant Owner`;let S=document.createElement("img");S.id="chef",S.src="../src/images/chef-betim.png",S.alt="A picture of a chef",A.append(w,S);let q=document.createElement("div");q.setAttribute("id","rest-desc");let F=document.createElement("span");F.classList.add("secret"),F.textContent="secret";let M=document.createElement("p");M.textContent=`Whether you are new to Balkan dishes, or consider yourself a master chef when it comes to cooking them, at Betim's Bureks we guarnetee to satisify your appetite and, more importantly, your taste buds! We believe nothing is more enjoyable than a delicious meal overseeing a beautiful sight. We pride ourselves as having the best bureks in all the Balkans, and some critics say all of Europe! What makes a delicious burek? Fresh ingreidents, patience, and the esstenial ingredient, my ${F.textContent} recipe! Don't take my word for it, come and try one yourself! We are a family-owned business and have been making stomachs happy and full since 1889. From my family to yours, we hope to see you soon!`,q.append(M),B.append(A,q);let J=document.createElement("div");J.classList.add("beach");let P=document.createElement("h3");P.classList.add("title"),P.textContent="Where You Will Be Eating";let R=document.createElement("img");R.id="beach-img",R.src="../src/images/balkan-beach.png",R.alt="A picture of an old Balkan style building near a body of water and a valley next to it",J.append(P,R);let $=document.createElement("footer");$.classList.add("footer");let j=document.createElement("img"),z=document.createElement("a");z.setAttribute("href","https://github.com/RamizHida"),z.setAttribute("target","_blank"),j.id="footer",j.src="../src/images/github.png",z.append(j),$.append(z),k.append(y,B,J,$);let D=document.createElement("form"),G=document.createElement("label");G.for="name",G.textContent="Name";let H=document.createElement("input");H.type="text",H.id="name",H.required,H.placeholder="John Smith";let N=document.createElement("label");N.textContent="Email",G.for="email";let O=document.createElement("input");O.type="email",O.id="email",O.required=!0,O.placeholder="Johnsmith@gmail.com";let T=document.createElement("div");T.classList.add("message");let Y=document.createElement("label");Y.textContent="Message",Y.for="message";let _=document.createElement("textarea");_.id="message",_.maxLength="200",_.cols="30",_.rows="5",_.placeholder="Type your message here",T.append(Y,_);let I=document.createElement("button");I.textContent="Send",D.append(G,H,N,O,T,I),x.addEventListener("click",(()=>{for(;k.lastChild&&"nav"!=k.lastChild.getAttribute("class");)k.removeChild(k.lastChild);k.append(e,t,$)})),L.addEventListener("click",(()=>{for(;k.lastChild&&"nav"!=k.lastChild.getAttribute("class");)k.removeChild(k.lastChild);k.append(D,$)}))})();