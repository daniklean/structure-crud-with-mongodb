let express = require('express')
let router = express.Router()
let {getItem, getItems, createItem, updateItem, deleteItem} = require('../controllers/users')

router.get('/', getItems)

router.post('/', createItem)

router.get('/:id', getItem)

router.put('/:id',updateItem)

router.delete('/:id', deleteItem)

module.exports = router