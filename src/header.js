function Header() {
    let dom = document.getElementById('root');
    let child = document.createElement('div');
    child.innerText = 'header';
    dom.append(child);
}

export default Header