!function(){var e={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};document.querySelector(".breed-select"),document.querySelector(".loader");fetch("".concat("https://api.thecatapi.com/v1","/breeds?api_key=").concat("live_Yev63kKIKQlvuwfV91tmMhA4RcWdQRKBtpQEc40LBA3Gqtc0uo9ZdRzJSAOtGlda")).then((function(e){if(!e.ok)throw new Error("response.statusText");return e.json()})).then((function(t){!function(t){var o=t.map((function(e){var t=e.id,o=e.name;return"<option value=".concat(t,">").concat(o,"</option>")})).join("");e.select.insertAdjacentHTML("beforeend",o)}(t)})).catch((function(e){return console.log(e)}))}();
//# sourceMappingURL=index.04799193.js.map
