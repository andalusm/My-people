
class Renderer {
    
    constructor(){

    }
    render(container, handleTemplate, attribute){
        $(container).empty()
        const source = $(handleTemplate).html();
        const template = Handlebars.compile(source);
        let newHTML = template(attribute );
        $(container).append(newHTML)
    }

    renderUsers(users){
        this.render(".users-container",'#users-template', users)

    }

}