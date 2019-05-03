// import Header from './header';
// import Sidebar from './sidebar';
// import Content from './content';
import Photo from './Photo_1108_5a.jpg'
import style from './index.scss'
import CreateImg from './createImg'

CreateImg()

let root = document.getElementById('root')
let img = new Image()
img.src = Photo
img.classList.add(style.img)
root.append(img)

// new Header();
// new Sidebar();
// new Content();

