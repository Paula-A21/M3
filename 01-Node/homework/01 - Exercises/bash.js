const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function bash() {
   process.stdout.write("prompt > ")
   process.stdin.on('data',(data)=> {
      
      const args = data.toString().trim();

      const cmd = args.split(" ")[0];

      if(!commands.hasOwnProperty(cmd)){
         print(`command not found: ${cmd}`)
      }
      else{
         commands[cmd](print, args.slice(cmd.length).trim());
      }
   })
}
// Dentro de ella tendrás que utilizar el método stdout.write del objeto process dos veces
function print(output){
   process.stdout.write(output)
   process.stdout.write("\nprompt > ")
}

bash();

module.exports = {
   print,
   bash,
};
