let { httpError, httpError2 } = require('../helpers/handlerError')
let userModel = require('../models/users')

let getItems = async (req,res) => {
    try {
        const listAll = await userModel.find({})
        res.send({ Datos: listAll })
    } catch (e) {
        httpError(res,e)
    }
}

let getItem = async (req,res) => {
 try {
	const id = req.params.id
        const listId = await userModel.findById({"_id":id})
        res.send({ Datos: listId })
    } catch (e) {
        httpError(res,e)
    }
}

let createItem = async (req,res)  => {
    try {
        const { name, age, email, profesion } = req.body
        const detailRes = await userModel.create({
            name, age, email, profesion
        })
        res.send({ Datos: detailRes })
    } catch (e) {
        httpError(res,e)
    }
}

let updateItem = async (req,res) => {
    try {
        const id = req.params.id
        const { name, age, email, profesion } = req.body
        
        const updateId = await userModel.update({"_id":id},
        {
            $set:{
                "name": name,
                "age": age,
                "email" : email,
                "profesion": profesion
            }
        })
        res.send({ Datos: updateId })
    } catch (e) {
        httpError(res,e)
    }
}

let deleteItem = async (req,res) => {
    try {
        const id = req.params.id
        const deleteItem = await userModel.deleteOne({"_id": id})
        res.send({Datos: deleteItem})
    } catch (e) {
        httpError(res,e)

    }
}

module.exports = {getItem, getItems, createItem,updateItem, deleteItem}