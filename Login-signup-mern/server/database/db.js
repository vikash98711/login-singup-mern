import mongoose from "mongoose"

const url = "mongodb+srv://Vikashkumar:Vikashkumar@cluster0.dgp539v.mongodb.net/?retryWrites=true&w=majority&wtimeoutMs=5000"
const Connection =()=>{
    mongoose.connect(`${url}`,()=>{
        console.log("database is connecting")
    })

}
// &wtimeoutMs=5000
export default Connection;



