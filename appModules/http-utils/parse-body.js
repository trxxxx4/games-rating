 function parseBody(req, callback) {
 return new Promise((resolve)=>{
    let body = '';
    req.on('data', (chunk)=>{
        body += chunk.toString();
    });
    req.on('end', (chunk)=>{
        resolve(body);
    })
 })   

}
  module.exports = parseBody; 