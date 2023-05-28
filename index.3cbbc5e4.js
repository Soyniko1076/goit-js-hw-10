fetch("https://api.thecatapi.com/v1/breeds?api_key=live_Yev63kKIKQlvuwfV91tmMhA4RcWdQRKBtpQEc40LBA3Gqtc0uo9ZdRzJSAOtGlda&").then((t=>{if(!t.ok)throw new Error("resp.statusText");return t.json()})).then((t=>console.log(t))).catch((t=>console.log(t)));
//# sourceMappingURL=index.3cbbc5e4.js.map
