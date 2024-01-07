let parent = document.querySelector(".parent")
let child = document.querySelector(".child")
let grandchild = document.querySelector(".grandchild")

parent.addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Parent was clicked.")
})

child.addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Child was clicked.")
})

grandchild.addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Grand Child was clicked.")
})