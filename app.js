const showEye2 = document.getElementById('show-eye2')
let inpForm3 = document.getElementById('form-3-input')
let progress = document.getElementById('file')
const body = document.getElementById('div')
const btnShow = document.getElementById('btn-show')
const btnCancel = document.getElementById('btn-cancel')
const second = document.getElementsByClassName('second')
const third = document.getElementsByClassName('full')
const showEye = document.getElementById('show-eye')
const input2 = document.getElementById('input-2')
let btnSet = document.getElementById('set-changes')
let btnReset = document.getElementById('reset-changes')
let inputColor = document.getElementById('input-color')
let inputRadius = document.getElementById('input-radius')
let inputHeight = document.getElementById('input-height')
let inputWidth = document.getElementById('input-width')
let box = document.getElementById('change-box')
let progressInfo = document.getElementById('show-info')

btnShow.addEventListener('click', function(){
    body.style.display = 'flex';
    // console.log('btnCancel')
    second[0].classList.add('active')
})
btnCancel.addEventListener('click', function(){
    body.style.display = 'none'
    second[0].classList.remove('active')
})
body.addEventListener('click', function(event){
    
    if(event.target.id == "div" && second[0].classList.contains('active')){
        second[0].classList.remove('active');
        body.style.display = 'none'
    }
})

input2.addEventListener('keyup', function(){
    if (input2.value.length > 0){
        showEye.style.display = 'flex'
    }else {
        showEye.style.display = 'none'
    }
})
inpForm3.addEventListener('keyup', function(){
    if(inpForm3.value.length > 0){
        showEye2.style.display = 'flex'
    }else{
        showEye2.style.display = 'none'
    }
})
showEye.addEventListener('click', function(){
    input2.autofocus = false
    if (input2.type == 'password'){
        showEye.innerHTML = '&#9681;' 
        input2.type = 'text'
    }else{
        input2.type = 'password'       
        showEye.innerHTML = '&#9680;' 
    }
})


// console.log(inputColor, inputHeight, inputRadius, inputWidth)
btnSet.addEventListener('click', function(){
    box.style.width = inputWidth.value + 'px'
    box.style.height = inputHeight.value + 'px'
    box.style.borderRadius = inputRadius.value
    box.style.backgroundColor = inputColor.value 
})
btnReset.addEventListener('click', function(){
    box.style = 'initial'
    inputWidth.value = ""
    inputHeight.value = ""
    inputRadius.value = ""
    inputColor.value = ""
});



// let valInpForm3 = inpForm3.value
showEye2.addEventListener('click', function(){
    inpForm3.autofocus = false    
    if (inpForm3.type == 'password'){
        showEye2.innerHTML = '&#9681;' 
        inpForm3.type = 'text'
    }else{
        inpForm3.type = 'password'       
        showEye2.innerHTML = '&#9680;' 
    }
})
inpForm3.addEventListener('keyup', function(){
    follow()
})
// console.log(Function,  addEventListener )
function follow(){
    if(inpForm3.value.length == 0){
        progressInfo.textContent = ""
        progress.removeAttribute('value')
    }
    else if(inpForm3.value.length > 0 && inpForm3.value.length <= 4){
        progress.setAttribute('value', 33)
        progressInfo.textContent = "Too Weak!"
        progressInfo.style.color = 'red'
    }
    else if(inpForm3.value.length > 4 && inpForm3.value.length <= 8){
        progress.value = 67
        progressInfo.textContent = "Not Bad!"
        progressInfo.style.color = 'gray'
    }else{
        progress.value = 100   
        progressInfo.textContent = "Perfect!"
        progressInfo.style.color = '#00ff00'
    }
}
