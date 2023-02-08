const opnng = async () => {
    let template = await fetch("opnng.html")
    template = await template.text()
    return ({
        template: template,
        setup() {/*...*/ }
    })
}

const wine = async () => {
    let template = await fetch("wine.html")
    template = await template.text()
    return ({
        template: template,
        setup() {/*...*/ }
    })
}

const cuisine = async () => {
    let template = await fetch("three.html")
    template = await template.text()
    return ({
        template: template,
        setup() {/*...*/ }
    })
}

const art = async () => {
    let template = await fetch("app.html")
    template = await template.text()
    return ({
        template: template,
        components: {
            "component_three" : await three(),
        },
        setup() {/*...*/ }
    })
}

const history = async () => {
    let template = await fetch("app.html")
    template = await template.text()
    return ({
        template: template,
        components: {
            "component_three" : await three(),
        },
        setup() {/*...*/ }
    })
}

const membership = async () => {
    let template = await fetch("app.html")
    template = await template.text()
    return ({
        template: template,
        components: {
            "component_three" : await three(),
        },
        setup() {/*...*/ }
    })
}

const book = async () => {
    let template = await fetch("book.html")
    template = await template.text()
    return ({
        template: template,
        components: {
            "component_three" : await three(),
        },
        setup() {/*...*/ }
    })
}

const init = async () => {
    const index = Vue.createApp(await app());       
    const routings = VueRouter.createRouter({
    history : VueRouter.createWebHashHistory(),
        routes : [
            {path:'/', component: await opnng()},
            {path:'/wine', component: await wine()}
        ]
    })
    index.use(routings)
    index.mount("#app")
}

init()