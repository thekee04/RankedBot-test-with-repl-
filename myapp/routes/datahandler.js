function writedata(data){
  const fs = require('fs');
  var contenta = 'extends layout\n\nblock content\n  '
  if (data instanceof Array) {
    for (element in data) {
      contenta = contenta + `p ${Number(element)+1} ${data[element]}\n  `
    }
  }
  
  const content = contenta;
  
  try {
    fs.writeFileSync('./views/lel.pug', content);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
}

function getdata(){
  
}

module.exports = {writedata,getdata}