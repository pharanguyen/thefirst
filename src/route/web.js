import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initwebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/conna', homeController.getConnaPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displaygetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putEditCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);




    router.get('/hoitoanit', (req, res) => {
        return res.send('hello toan')

    });
    return app.use("/", router)//đường link api

}

module.exports = initwebRoutes;