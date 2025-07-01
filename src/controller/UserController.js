import UserServices from "../services/UserServices.js"

const createUser = async (req,res) =>{
    const {name,password,phone, email,address} = req.body

    const data = await UserServices.createUser(req.body)
}

export {createUser}  //named export import garda ni curly braces ma halnu parxaaa