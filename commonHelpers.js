import{i}from"./assets/vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c="45376910-43038ea3ca87cb1ac327a6384",l="https://pixabay.com/api/";async function u(n){const t=`${l}?key=${c}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`,o=await fetch(t);if(!o.ok)throw new Error("Failed to fetch images");return(await o.json()).hits}function f(n){const t=document.querySelector(".gallery");if(t.innerHTML="",n.length===0){m();return}const o=n.map(s=>d(s)).join("");t.insertAdjacentHTML("beforeend",o)}function d({webformatURL:n,largeImageURL:t,tags:o,likes:s,views:e,comments:r,downloads:a}){return`
    <div class="image-card">
      <a href="${t}" target="_blank" rel="noopener noreferrer">
        <img src="${n}" alt="${o}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b> ${s}
        </p>
        <p class="info-item">
          <b>Views</b> ${e}
        </p>
        <p class="info-item">
          <b>Comments</b> ${r}
        </p>
        <p class="info-item">
          <b>Downloads</b> ${a}
        </p>
      </div>
    </div>
  `}function m(){i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"})}const p=document.querySelector("#search-form"),g=document.querySelector("#search-input");p.addEventListener("submit",async n=>{n.preventDefault();const t=g.value.trim();if(t===""){iziToast.warning({title:"Warning",message:"Please enter a search query!"});return}try{const o=await u(t);f(o)}catch{iziToast.error({title:"Error",message:"Failed to fetch images. Please try again later."})}});
//# sourceMappingURL=commonHelpers.js.map
