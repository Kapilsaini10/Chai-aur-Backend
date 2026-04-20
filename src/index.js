import dotenv from "dotenv";
dotenv.config({path: "./env"});
import connectDB from "./db/db.js";



connectDB()
 .then(() => {
     app.listen(process.env.PORT || 8000, () => {
        console.log(`0 server is runnig at port : ${process.env.PORT}`);
     })
})
.catch((err) => {
    console.log("Mongo db connetion failed !!! ", err)
})