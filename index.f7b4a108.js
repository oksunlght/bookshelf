!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var r=a("18yUV"),o=document.querySelector(".category-container"),i=document.querySelector(".books-wrapper"),c=document.querySelector(".title"),l=document.querySelector(".single-category-list"),s=document.querySelector(".home-wrap");function u(e,t){var n=t.map((function(e){var t=e._id,n=e.author,a=e.book_image,r=e.title;return'<li class="single-category__item" data-id="'.concat(t,'">\n    \n      <img src="').concat(a,'" alt="').concat(r,'" class="single-category__image" />\n      <p class="book-title">').concat(r,'</p>\n      <p class="book-author">').concat(n,"</p>\n    \n      </li>")})).join("");c.innerHTML=e,s.classList.add("visually-hidden"),l.classList.remove("visually-hidden"),l.innerHTML=n}function d(e){var t=e.split(" "),n=t.length-1,a=t.splice(n,1),r=t.join(" ");return'<h2 class="category-title">'.concat(r,' <span class="category-title_highlight">').concat(a,"</span></h2>")}o.addEventListener("click",(function(e){var t=e.target.dataset.list;if(!t)return;if(e.preventDefault(),"A"!==e.target.nodeName)return;(function(e){var t=document.querySelector(".active");t!==e.target&&t.classList.remove("active");e.target.classList.add("active")})(e),r.default.getBooksByCategory(t).then((function(e){return u(d(t),e)}))})),i.addEventListener("click",(function(e){var t=e.target.dataset.list,n=document.querySelector(".active"),a=document.querySelector("a[data-list='".concat(t,"']"));if(!t)return;if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;n!==t&&n.classList.remove("active");a.classList.add("active"),r.default.getBooksByCategory(t).then((function(e){return u(d(t),e)}))}))}();
//# sourceMappingURL=index.f7b4a108.js.map