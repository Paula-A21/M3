const fs = require("fs");
const {request} = require("../utils/request");
const process = require("process");

function pwd(print) {
    print(process.cwd());
  }
  
  function date(print) {
    print(Date());
  }
  
  function echo(print, args) {
    print(args);
  }
  
  function ls(print) {
    fs.readdir(process.cwd(),(error, files) => {
      if(error) throw error
      print(files.join(' '));
  
    })
  
  }
  
  function cat(print, args) {
    fs.readFile(args, 'utf-8', (error, data) => {
      if(error) throw error
    print(data)
    })
  }
  
  function head(print, args) {
    fs.readFile(args, 'utf-8', (error, data) => {
      if(error) throw error
      const lines = data.split('\n');
      const firstLine = lines[0];
      print(firstLine);
    })
  }
  
  function tail(print, args) {
    fs.readFile(args, 'utf-8', (error, data) => {
      if(error) throw error
      const lines = data.split('\n');
      const n = lines.length - 1
      const lastLine = lines[n].trim();
      print(lastLine);
    })
  }

function curl(print, args) {
    request(`https://${args}`, (error, response) => {
        if(error) throw error;
        print(response);
    });
}

module.exports = {
    pwd,
    tail,
    head,
    cat,
    ls,
    echo,
    date,
    curl
};
