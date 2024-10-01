import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery");function h(o){return o.map(({webformatURL:i,largeImageURL:n,tags:t,likes:e,views:r,comments:s,downloads:f})=>` 
<li class="thumb"> 
    <a href="${n}" 
            class="gallery-item" > 
    <div class="photo-card"> 
            <img src="${i}" alt="${t}"  loading="lazy" 
            class="gallery-image"/> 
        <div class="info"> 
            <p class="info-item"> 
            <b>Likes</b>${e} 
            </p> 
            <p class="info-item"> 
            <b>Views</b>${r} 
            </p> 
            <p class="info-item"> 
            <b>Comments</b>${s} 
            </p> 
            <p class="info-item"> 
            <b>Downloads</b>${f} 
            </p> 
         </div> 
    </div> 
    </a> 
</li>`).join("")}function d(){c.innerHTML=""}function p(o){c.insertAdjacentHTML("beforeend",h(o))}const g="29527006-ad6e7c34d6702116665004a30",y="https://pixabay.com/api/";function b(o){const i=new URLSearchParams({key:g,q:encodeURIComponent(o),image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${y}?${i.toString()}`;return fetch(n).then(t=>{if(!t.ok)throw new Error("Error fetching images.");return t.json()}).then(t=>(t.hits.length===0&&a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),t.hits)).catch(t=>{a.error({position:"topRight",title:"Error",message:"Error fetching images. Try again!"}),console.error("Error fetching images:",t)})}const l=document.querySelector(".loader"),u=document.querySelector("#search-form");u.addEventListener("submit",L);function L(o){o.preventDefault();let i=o.currentTarget.searchQuery.value.trim();if(i==="")return a.info({position:"topRight",title:"Sorry",message:"Please, type what you what to search!"});d(),S(),b(i).then(n=>{p(n),w()}).catch(n=>{console.error("Error fetching images:",n),a.error({position:"topRight",title:"Error",message:"Something went wrong while fetching images. Please try again later!"})}).finally(()=>{E(),u.reset()})}function w(){new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh("show.simplelightbox",function(){})}function S(){l.classList.remove("hidden")}function E(){l.classList.add("hidden")}
//# sourceMappingURL=index.js.map
