!function(){var e="https://api.thecatapi.com/v1",t="live_Yev63kKIKQlvuwfV91tmMhA4RcWdQRKBtpQEc40LBA3Gqtc0uo9ZdRzJSAOtGlda",n=function(n){return fetch("".concat(e,"/images/search?api_key=").concat(t,"&breed_ids=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log(e)}))},c={select:document.querySelector("select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};fetch("".concat(e,"/breeds?api_key=").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log(e)})).then((function(e){!function(e){var t=e.map((function(e){var t=e.id,n=e.name;return"<option value=".concat(t,">").concat(n,"</option>")})).join("");c.select.insertAdjacentHTML("beforeend",t)}(e),c.loader.classList.add("unvisible"),c.select.classList.remove("unvisible")})).catch((function(e){console.log(e),c.loader.classList.add("unvisible"),c.error.classList.remove("unvisible")})),c.select.addEventListener("change",(function(e){c.loader.classList.remove("unvisible");var t=e.target.value;c.catInfo.innerHTML="",n(t).then((function(e){return function(e){var t=e.map((function(e){var t=e.url,n=e.breeds;return'<img src="'.concat(t,'" width=\'350\' hight=\'auto\'><div class="wrapper"><h1 class="title">').concat(n[0].name,'</h1><p class="description">').concat(n[0].description,'</p>\n      <span class="accent">Temperament: </span><p>').concat(n[0].temperament,"</p></div>")})).join("");c.catInfo.insertAdjacentHTML("beforeend",t),c.loader.classList.add("unvisible")}(e)})).catch((function(e){console.log(e),c.error.classList.remove("unvisible"),c.loader.classList.add("unvisible")}))}))}();
//# sourceMappingURL=index.5f925f03.js.map