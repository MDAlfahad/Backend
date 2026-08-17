import { configDotenv } from "dotenv";
import connectDb from "./db/database.js";
import { app } from "./app.js";
import { UserData } from "./routes/userData.js";

configDotenv()


connectDb()

.then(()=>{
 

    app.get("/data", (req, res)=>{
        res.send("This is my data at server mongodb")
    })
    

    app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    
    })

})
.catch((err)=>{
    console.log("MongoDb connection failed !!!", err);
    
})