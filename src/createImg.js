import Photo from "./Photo_1108_5a.jpg";

function CreateImg() {
    let root = document.getElementById('root')
    let img = new Image()
    img.src = Photo
    img.classList.add('img')
    root.append(img)
}

export default CreateImg