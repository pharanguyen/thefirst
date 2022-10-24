
import { json } from 'body-parser';
import e from 'express';
import db from '../models/index'
import CRUDService from "../services/CRUDService"

let getHomePage = async (req, res) => {

    try {
        let data = await db.User.findAll();
        console.log('--------------------------------')
        console.log(data)
        console.log('--------------------------------')
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)

        });

    } catch (e) {
        console.log(e)
    }

}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}
let getConnaPage = (req, res) => {
    return res.render('test2/conna.ejs')
}
let getCRUD = (req, res) => {
    return res.render('CRUD/crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    //console.log(req.body);//show gias tri tren view load
    return res.send('post crud');
}
let displaygetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();

    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}
let getEditCRUD = async (req, res) => {
    let UserId = req.query.id;
    console.log(UserId)
    if (UserId) {

        let userData = await CRUDService.getUserInfoById(UserId);

        return res.render('editCRUD.ejs', {
            user: userData
        })
    } else {
        return res.send('hello from get edit crud')

    }



}
let putEditCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })


}
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        let allUser = await CRUDService.deleteUserById(id);
        return res.render('displayCRUD.ejs', {
            dataTable: allUser
        })

    } else {
        return res.send('user not found')
    }




}


// object:{
//  key:'',
//  value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getConnaPage: getConnaPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displaygetCRUD: displaygetCRUD,
    getEditCRUD: getEditCRUD,
    putEditCRUD: putEditCRUD,
    deleteCRUD: deleteCRUD
}