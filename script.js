// // app 1

// var genColor = () => {
//     var red = Math.floor(Math.random() * 256)
//     var green = Math.floor(Math.random() * 256)
//     var blue = Math.floor(Math.random() * 256)
//     console.log(red, green, blue);

//     var box = document.querySelector(".main")
//     box.style = `background-color:rgb(${red},${green},${blue})`
// }




// app 2

// var btn = document.querySelector("#gen")
// var btn = document.querySelector("#gen")
// var head = document.querySelector("#head")
// btn.addEventListener("click", () => {
//     var red = Math.floor(Math.random() * 256) 
//     var green = Math.floor(Math.random() * 256)
//     var blue = Math.floor(Math.random() * 256)
//     console.log(red, green, blue);

    // var box = document.querySelector(".main")
//     box.style = `background-color:rgb(${red},${green},${blue})`
// }
// )



// btn.addEventListener("click", () => {

//     var values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
//     var hex = "#"
//     for (var i = 0; i < 6; i++) {
//         var random = Math.floor(Math.random() * values.length)
//         hex += values[random]
//     }
//     var box = document.querySelector(".main")
//     box.style = `background-color:${hex};`

//     head.innerText = hex

//     console.log(hex);
// })

// var button = document.querySelector("#gen")

// button.addEventListener("click", () => {
//     var audio = new Audio("audio/[Songs.PK] 02 - Mickey Virus - Tose Naina.mp3")
//     audio.play()
// })

// console.log(audio);









var main = document.querySelector(".main")
var btn = document.querySelector("#gen")
var head = document.querySelector("#head")


btn.addEventListener("click",()=>{
    var red = Math.floor(Math.random()*256)
    var green = Math.floor(Math.random()*256)
    var blue = Math.floor(Math.random()*256)

    var num = red.toString()+green.toString()+blue.toString()
    head.innerHTML = num
    main.style = `background-color:rgb(${red},${green},${blue})`
})