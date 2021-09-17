let express = require('express')
let router = express.Router()
let fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (filename) => {
    return filename.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)
    if(!skip){
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
        console.log('Archivos Cargados en rutas Dinamicamente',fileWithOutExt)
    }
})

router.get('*', (req,res) => {
    res.status(404)
    res.send({ERROR: 'Not Found '})
})

module.exports = router