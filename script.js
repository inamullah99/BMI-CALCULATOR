var age = document.getElementById("age")
var height = document.getElementById("height")
var weight = document.getElementById("weight")
var submit = document.getElementById("submitt")
var result = document.getElementById("result")

submit.addEventListener("click", calculateBMI => {
    if(weight.value != "" && height.value != "") {
        w = weight.value
        h = height.value
        h = h / 3.281
        result.value =  w/(h*h)
    } else {
        result.value = 0
    }
})