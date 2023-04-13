const images = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1663054930892-66993fd3e146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1249&q=80',
        text: 'Text One'
    },  
    {
        url: 'https://images.unsplash.com/photo-1597910037242-3539dde9a439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        text: 'Text Two'
    },  
    {
        url: 'https://images.unsplash.com/photo-1597910037177-4f1c411a3802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        text: 'Text Three'
    },  
    {
        url: 'https://images.unsplash.com/photo-1597910038072-88d7f0a60a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        text: 'Text Four'
    },
    {
        url: 'https://images.unsplash.com/photo-1597910037283-e728413e079c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        text: 'Text Five'
    },  
    {
        url: 'https://images.unsplash.com/photo-1547013571-585f53927cd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        text: 'Text Six'
    }
]

let index = 0
let wrapper  = document.getElementById('wrapper')
let caption  = document.getElementById('caption')
let back     = document.getElementById('back')
let foreword = document.getElementById('forword')


back.onclick     = () => navigate(-1)
foreword.onclick = () => navigate(1)


loadImage(0)

function navigate(direction) {
index = (index + direction)
if(index > (images.length - 1)){
    index = 0
} 

if(index < 0){
    index = (images.length - 1)
}
    loadImage(index)
}


function loadImage(index){
    wrapper.src = images[index].url
    caption.innerText = images[index].text
}

let navigation = document.getElementById('navigation')
function generateImgNavigation(images){
    for(let i = 0; i < images.length; i++){
        let img = document.createElement("img")
        img.src = images[i].url
        img.onclick = () => loadImage(i)
        navigation.appendChild(img)
    }
}

generateImgNavigation(images)