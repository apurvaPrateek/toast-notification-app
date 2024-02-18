const successBtn = document.querySelector(".success");
const errorBtn = document.querySelector(".error");
const invalidBtn = document.querySelector(".invalid");
const toastBox = document.querySelector(".toastBox");

successBtn.addEventListener("click", ()=>{
    const toast = document.createElement("div");
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i>Successfully submitted!`;
    toast.classList.add("toast","toast-success");
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);
})

errorBtn.addEventListener("click", ()=>{
    const toast = document.createElement("div");
    toast.innerHTML = `<i class="fa-solid fa-square-xmark"></i>Please fix the error!`;
    toast.classList.add("toast","toast-error");
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);
})

invalidBtn.addEventListener("click", ()=>{
    const toast = document.createElement("div");
    toast.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again!`;
    toast.classList.add("toast","toast-invalid");
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);
})

