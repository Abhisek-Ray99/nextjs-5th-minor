import connectDB from '../../../utils/connectDB'
import Users from '../../../models/userModel'
import Register from '../../register'

connectDB()

export default async (req, res) => {
    switch(req,method){
        case "POST":
            await Register(req,res)
            break;
    }
}

const register = async (req, res) => {
    try {
        const { name, email, password, cf_password} = req.body;
    } catch (err) {
        
    }
}