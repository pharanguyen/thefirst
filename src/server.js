import express from "express"
import bodyParser from "body-parser";// Lấy tham số từ client,ví dụ ..
import viewEngine from "./config/viewEngine"
import initWebRoutes from './route/web'
require('dotenv').config();// dòng này giúp chạy dòng let port = process.env.PORT || 6969;

let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT;// process.evn + tham số
// Port === undefined => port = 6969
app.listen(port, () => {
    // callback
    console.log("Backennd Nodejs is running : " + port)
})


