document.getElementById('sim').addEventListener('mouseenter', () => {
    let bait = document.querySelector("#sim")
    bait.style.position="absolute"
    bait.style.top = `${parseInt(Math.random()*100)}%`
    bait.style.left = `${parseInt(Math.random()*100)}%`
})

function clickNao(){
    alert("👍")
}