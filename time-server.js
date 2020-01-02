/* Time Server (Exercise 10 of 13)

Your server should listen to TCP connections on the port provided by the  
  first argument to your program. For each connection you must write the  
  current date & 24 hour time in the format:  
   
     "YYYY-MM-DD hh:mm"  
   
  followed by a newline character. Month, day, hour and minute must be  
  zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
  After sending the string, close the connection.  

*/

const net = require("net");
const PORT = process.argv[2];

const server = net.createServer(socket => {
  let date = new Date();
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  let hour = date.getHours();
  let minute = date.getMinutes();

  let today = `${year}-${month}-${day} ${hour}:${minute}\n`;

  socket.end(today);
});

server.listen(PORT);
