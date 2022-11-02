// var test = document.getElementByClassName['test']
// let fname = ('jon','ged')
// test[1].innerHTML = fname;


// document.getElementById('change') .src='flag.jpg'


// document.getElementById('change').style.height='300px'

// var imgchange = document.getElementById('change')
// const changeimg = () => {
//     imgchange.src = 'flag.jpg'
// }

// const textChange = () => {
//     var text = document.getElementById('text').value
//     document.getElementById('textChange').innerHTML = text
// }


// New
// var demo = document.getElementById('demo');
// var htmlStr = "<span style='color:white; background-color:green;'>I am a span</span>"

// demo.innerHTML = htmlStr;

// finding elements with tagname
// var demo = document.getElementById('demo');
// var pTags = demo.getElementsByTagName('p');
// console.log(pTags);

// var firstPTags = document.querySelector('p')
// console.log(firstPTags);

// var allPTags = document.querySelectorAll('p')
// console.log(allPTags);

var allPTags = document.querySelectorAll('#demo p')
console.log(allPTags);


// Adding Events AND event listeners
var box = document.getElementById('box');

box.addEventListener('mouseenter', () => {
    box.classList.add('mouseenter')
    if (box.classList.contains('mouseleave')){
        box.classList.remove('mouseleave')
    }
});

box.onmouseleave = () => {
    box.classList.add('mouseleave')
    if (box.classList.contains('mouseenter')){
        box.classList.remove('mouseenter')
    }
}



box.addEventListener('click', () => {
    box.classList.remove('mouseenter', 'mouseleave')
})

document.body.addEventListener('click', () =>{
    box.classList.remove('mouseenter', 'mouseleave')
})