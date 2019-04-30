function Content() {
    let dom = document.getElementById('root')
    let child = document.createElement('div')
    child.innerText = 'content'
    dom.append(child)
}

export default Content