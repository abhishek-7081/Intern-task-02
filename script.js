let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerHTML = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete"
    delbtn.classList.add("delete")

    item.appendChild(delbtn)
    ul.appendChild(item);
    // console.log(inp.value)
    inp.value = ""
})
// this doesnot work for new added task
// let delbtns =document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click",function(){
//         // this.parentElement.remove()
//         let par=this.parentElement
//         console.log(par)
//         par.remove()
//     })
// }


// this works for new added task
document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("delete")) {
        let par = event.target.parentElement;
        par.remove();
    }
});

// let delbtns =document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click",function(){
//         // this.parentElement.remove()
//         let par=this.parentElement
//         console.log(par)
//         par.remove()
//     })
// }
// same as above
// let delbtns = document.querySelectorAll(".delete");
// delbtns.forEach(delbtn => {
//     delbtn.addEventListener("click", function() {
//         // this.parentElement.remove()
//         let par = this.parentElement;
//         console.log(par);
//     });
// });
