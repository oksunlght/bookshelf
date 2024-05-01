var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=i),i.register;var n=i("i3bGI");const r=document.querySelector(".single-category-list"),l=document.querySelector(".backdrop"),a=document.querySelector(".book-wrapper"),s=document.querySelector(".pop-up-book"),c=document.querySelector(".home-wrap");function d(e){let{author:t,book_image:o,buy_links:i,description:n,title:r}=e,s=i.filter(({name:e})=>"Amazon"===e).map(({url:e})=>`<a href="${e}" target=\u{201D}_blank\u{201D} class="amazon"></a>`),c=i.filter(({name:e})=>"Apple Books"===e).map(({url:e})=>`<a href="${e}" target=\u{201D}_blank\u{201D} class="apple-books"></a>`),d=`
    <img src="${o}" alt="${r}" class="pop-book-image" />
    <div class="book-description">
    <h2 class="pop-up-title">${r}</h2>
    <p class="pop-up-author">${t}</p>
    <p class="pop-up-description">${n}</p>
    <ul class="buy-links">
    <li class="buy-link-item">${s}</li>
    <li class="buy-link-item">${c}</li>
    </ul>
    </div>
    `;a.innerHTML=d,l.classList.remove("is-hidden")}function u(){l.classList.add("is-hidden")}document.querySelector(".purchase-button"),r.addEventListener("click",e=>{e.preventDefault();let t=e.target.closest(".single-category__item");if(!t)return;let o=t.dataset.id;(0,n.default).getBookByID(o).then(d)}),c.addEventListener("click",e=>{e.preventDefault();let t=e.target.closest(".home__book-item");if(!t)return;let o=t.dataset.id;(0,n.default).getBookByID(o).then(d)}),s.addEventListener("click",u),window.addEventListener("keydown",function(e){l.classList.contains("is-hidden")||"Escape"!==e.code||u()}),l.addEventListener("click",function(e){e.target===e.currentTarget&&u()});
//# sourceMappingURL=index.d5ee75ab.js.map
