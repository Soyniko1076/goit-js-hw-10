!function(){var e="https://api.thecatapi.com/v1",t="live_Yev63kKIKQlvuwfV91tmMhA4RcWdQRKBtpQEc40LBA3Gqtc0uo9ZdRzJSAOtGlda",n={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};function o(n){return fetch("".concat(e,"/images/search?api_key=").concat(t,"&breed_ids=").concat(n)).then((function(e){if(!e.ok)throw new Error("response.statusText");return e.json()}))}fetch("".concat(e,"/breeds?api_key=").concat(t)).then((function(e){if(!e.ok)throw new Error("response.statusText");return e.json()})).then((function(e){!function(e){var t=e.map((function(e){var t=e.id,n=e.name;return"<option value=".concat(t,">").concat(n,"</option>")})).join("");n.select.insertAdjacentHTML("beforeend",t)}(e)})).catch((function(e){return console.log(e)})),n.select.addEventListener("change",o),o().then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}();
//# sourceMappingURL=index.55f96dd0.js.map
