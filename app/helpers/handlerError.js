let httpError = (res,err) => {
    res.status(500)
    res.send({ERROR:'Lo siento, no puedo resolver esto'})
    console.log(err)
}

let httpError2 = (res,err)  => {
    res.status(200)
    res.send({Actualización: "Realizada con Exito "})
    console.log(err)
}
 
module.exports = { httpError, httpError2 }