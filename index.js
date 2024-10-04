var m=e=>{throw TypeError(e)};var T=(e,t,s)=>t.has(e)||m("Cannot "+s);var u=(e,t,s)=>(T(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?m("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s);import{a as q,S as P,i as p}from"./assets/vendor-mdVVRe9K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const g=document.querySelector(".gallery");function y(e){return e.map(({webformatURL:t,largeImageURL:s,tags:a,likes:r,views:o,comments:c,downloads:v})=>` 
<li class="thumb"> 
    <a href="${s}" 
            class="gallery-item" > 
    <div class="photo-card"> 
            <img src="${t}" alt="${a}"  loading="lazy" 
            class="gallery-image"/> 
        <div class="info"> 
            <p class="info-item"> 
            <b>Likes</b>${r} 
            </p> 
            <p class="info-item"> 
            <b>Views</b>${o} 
            </p> 
            <p class="info-item"> 
            <b>Comments</b>${c} 
            </p> 
            <p class="info-item"> 
            <b>Downloads</b>${v} 
            </p> 
         </div> 
    </div> 
    </a> 
</li>`).join("")}function E(){g.innerHTML=""}function O(e){g.insertAdjacentHTML("beforeend",y(e))}var l,d;class R{constructor(){h(this,l,"29527006-ad6e7c34d6702116665004a30");h(this,d,"https://pixabay.com/api/");this.page=1,this.searchQuery="",this.per_page=15}async fetchPictures(){return(await q.get(u(this,d),{params:{key:u(this,l),q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,page:this.page,per_page:this.per_page}})).data}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(t){this.searchQuery=t}}l=new WeakMap,d=new WeakMap;const i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),form:document.querySelector("#search-form"),readmore:document.querySelector(".readmore"),buttonToTop:document.querySelector(".scroll-to-top")};let _=new P(".gallery a",{captionsData:"alt",captionDelay:250});i.form.addEventListener("submit",M);i.readmore.addEventListener("click",$);const n=new R;async function M(e){e.preventDefault();const t=e.currentTarget.searchQuery.value.trim();if(n.query=t,n.query==="")return p.info({position:"topRight",title:"Sorry",message:"Please, type what you want  to search!"});const s=new URL(window.location);s.searchParams.set("searchQuery",t),window.history.pushState({},"",s),n.resetPage(),E(),w();try{const{hits:a,totalHits:r}=await n.fetchPictures();if(a.length===0)return i.readmore.classList.add("hidden"),f();const o=y(a);i.gallery.innerHTML=o,b(),r<=n.per_page?(i.readmore.classList.add("hidden"),S()):i.readmore.classList.remove("hidden")}catch(a){f(a)}finally{L(),i.form.reset()}}async function $(){n.incrementPage(),w();try{const{hits:e,totalHits:t}=await n.fetchPictures();O(e),H(),b(),n.page*n.per_page>=t&&S()}catch(e){f(e)}finally{L()}}function w(){i.loader.classList.remove("hidden")}function L(){i.loader.classList.add("hidden")}function b(){_.refresh("show.simplelightbox")}function H(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}i.buttonToTop.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>Q();function Q(){window.scrollY>60?i.buttonToTop.classList.remove("js-transparent"):i.buttonToTop.classList.add("js-transparent")}function f(e){console.log("Error fetching images:",e.message),p.error({position:"topRight",title:"Error",message:"Something went wrong while fetching images. Please try again later!"})}function S(){i.readmore.classList.add("hidden"),p.info({position:"topRight",title:"End of Search",message:"You have reached the end of the results!"})}
//# sourceMappingURL=index.js.map
