function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    for (const pro in reactElement.props) {
       domElement.setAttribute(pro, reactElement.props[pro])
    }
    
    mainContainer.appendChild(domElement);
}

const mainContainer = document.querySelector("#root");

const reactElement = {
    type: 'a',
    props: {
        href: 'hasnain.pdf',
        target: '_blank',
        download: 'hasnain.pdf'
    },
    children: 'CLICK ME TO VISIT LINK!'
}

customRender(reactElement, mainContainer)