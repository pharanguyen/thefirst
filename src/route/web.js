import express from "express";

let router = express.Router();

let initwebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('hello Na')

    });
    return app.use("/", router)//đường link api

}

module.exports = initwebRoutes;