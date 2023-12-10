//This is the class that will manage all your APIs
const USERS_API = "https://randomuser.me/api/?results=10&inc=email,name"



class APIManager {
    constructor() {
        this.data = {}
    }
    getUsers(){
        return $.get(USERS_API)
        .then((result)=>{
            const users = result.results.map(r=> {
                return {name : r.name.first+ " "+ r.name.last, email: r.email}
            })
            this.data['users'] = users
            return users
        })
        .catch((error)=>{
            console.log("Getting users failed")
        })
        
    }
    
    


}
