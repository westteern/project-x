!function(){!function(){var e={openModalBtn:document.querySelector("[data-modal-header-open]"),closeModalBtn:document.querySelector("[data-modal-header-close]"),modal:document.querySelector("[data-modal-header]")};function t(){document.body.classList.toggle("modal-open-header"),e.modal.classList.toggle("hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();var e=document.querySelectorAll(".js-list button"),t=document.querySelectorAll(".js-list span"),n={icecream:0,icecoffee:0,milshakes:0};e[0].addEventListener("click",(function(){if(!(n.icecream>0))return alert("WRONG QUANTITY!!! It cannot be a negative number");n.icecream-=1,t[0].textContent=n.icecream})),e[1].addEventListener("click",(function(){n.icecream+=1,t[0].textContent=n.icecream})),e[2].addEventListener("click",(function(){if(!(n.icecoffee>0))return alert("WRONG QUANTITY!!! It cannot be a negative number");n.icecoffee-=1,t[1].textContent=n.icecoffee})),e[3].addEventListener("click",(function(){n.icecoffee+=1,t[1].textContent=n.icecoffee})),e[4].addEventListener("click",(function(){if(!(n.milshakes>0))return alert("WRONG QUANTITY!!! It cannot be a negative number");n.milshakes-=1,t[2].textContent=n.milshakes})),e[5].addEventListener("click",(function(){n.milshakes+=1,t[2].textContent=n.milshakes}))}();
//# sourceMappingURL=index.f43cdcf1.js.map