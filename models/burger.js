const orm = require( '../config/orm' )

// let burgers = [
//     { id: 0, name: "Cheese Burger", devoured: false },
//     { id: 1, name: "McBurger", devoured: true },
// ]

function getAvailable(){
    return orm.selectAll().filter( burger=>burger.devoured == false )
    // return burgers.filter( burger=>burger.devoured == false )
}

function getDevoured(){
    return orm.selectAll().filter( burger=>burger.devoured == true )
    // return burgers.filter( burger=>burger.devoured == true )
}

function add( name ){
    return orm.insertOne( name )
    // burgers.push( { id: Date.now(), name, devoured: false } )
}

function devour( id ){
    return orm.updateOne( id,"devoured",true )
    // const idx = burgers.findIndex( burger=>burger.id == id )
    // // mark the burger as devoiured
    // burgers[idx].devoured = true
}

module.exports = {
    getAvailable, getDevoured, add, devour
}