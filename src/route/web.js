import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initwebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/conna', homeController.getConnaPage);


    router.get('/hoitoanit', (req, res) => {
        return res.send('hello toan')

    });
    return app.use("/", router)//đường link api

}

module.exports = initwebRoutes;