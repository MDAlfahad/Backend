import { configDotenv } from "dotenv";
import connectDb from "./db/database.js";

configDotenv()


connectDb()

.then(()=>{
    app.on((err)=>{
        console.log("Server Side Error");
        throw err
        
    })
    app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    
    })

})
.catch((err)=>{
    console.log("MongoDb connection failed !!!", err);
    
})