import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",e=>{e.preventDefault();const o=parseInt(e.target.delay.value,10),t=e.target.state.value;setTimeout(()=>{t==="fulfilled"?Promise.resolve(`✅ Fulfilled promise in ${o}ms`).then(s=>r.show({message:s,messageSize:"16px",backgroundColor:"rgba(89, 161, 13, 1)",messageColor:"white",iconColor:"white",progressBarColor:"rgba(50, 97, 1, 1)",close:!1,position:"topRight"})):Promise.reject(`❌ Rejected promise in ${o}ms`).catch(s=>r.show({message:s,messageSize:"16px",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"white",iconColor:"white",progressBarColor:"rgba(181, 27, 27, 1)",close:!1,position:"topRight"}))},o)});
//# sourceMappingURL=commonHelpers2.js.map