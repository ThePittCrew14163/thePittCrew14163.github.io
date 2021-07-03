async function RenderTempletesAsync() {
    let promisething = await fetch("templates.html")
    let data = await promisething.text()
    parser = new DOMParser()
    let templates = parser.parseFromString(data, 'text/html')

    let navbar = templates.querySelector('#navbar')
    let navClone = navbar.content.cloneNode(true)
    document.body.prepend(navClone)

    //let header = templates.querySelector('#header')
    //let headerClone = header.content.cloneNode(true)
    //document.body.prepend(headerClone)

    let footer = templates.querySelector('#footer')
    let footerClone = footer.content.cloneNode(true)
    document.body.append(footerClone)
}