/*starting copy from nodejs website about section*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <style>
      .container{
          display:grid;
          grid-template-columns: 300px 100px 100px;
          grid-template-columns: 300px 100px auto;
          grid-template-columns: 1fr 4fr 1fr;
          grid-gap: 2rem;
      }
      .item{
         
          background-color:red;
          margin:3px;
          border:2px solid black;
  
      }
  
  </style>
  <body>
  
   <div class="container">
       <div class="item">this is item-1</div>
       <div class="item">this is item-2</div>
       <div class="item">this is item-3</div>
       <div class="item">this is item-4</div>
       <div class="item">this is item-5</div>
       <div class="item">this is item-6</div>
       <div class="item">this is item-7</div>
       <div class="item">this is item-8</div>
       <div class="item">this is item-9</div>
   </div>   
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});