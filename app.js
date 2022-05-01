require('dotenv').config()
const Trello = require("./main");

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('No hay configuración con Api Key y con Token')
}

var trello = new Trello(process.env.KEY, process.env.TOKEN);
var cardTitle = `Card Nueva ${new Date()}`;

console.log("Ejecutando!");


  trello.addCard('Clean car', 'Wax on, wax off', "626eb16230e2d77d5b81d705",
      function (error, trelloCard) {
          if (error) {
              console.log('Could not add card:', error);
          }
          else {
              console.log('Added card:', trelloCard);
          }
      });