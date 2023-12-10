const render = new Renderer()
const apiManager = new APIManager()
apiManager.getUsers().then((data)=>{
    render.renderUsers(data)
})