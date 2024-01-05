let button = document.getElementById("btn")

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>Yayy! You were clicked</b> Enjoy your learning with codewithharry."
})

button.addEventListener("contextmenu", () => {
    alert("don't hack us by right click.")
})

button.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode)
})