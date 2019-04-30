function Sidebar() {
    let dom = document.getElementById('root')
    let child = document.createElement('div')
    child.innerText = 'sidebar'
    dom.append(child)
}

export default Sidebar