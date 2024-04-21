// if you have any doubts on how to connect or how to work open readmeshcodes.md file and have a read.

const http = require('http');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/college')

.then(function(){
console.log('DB Connected')
})

const studentSchema = new mongoose.Schema({name:String, email:String, phone:String});

const studentmodel = mongoose.model('students',studentSchema);

const server = http.createServer(function(req,res){

res.writeHead('200',{'Content-Type':'text/html'});
studentmodel.find().then(function(students){

res.write("<table border=1 cellspacing=0 width=400>");
res.write("<tr><th>Name</th><th>Email</th><th>Phone</th></tr>");
students.forEach(student=>{
res.write("<tr>");
res.write("<td>"+student.name+"</td>");
res.write("<td>"+student.email+"</td>");
res.write("<td>"+student.phone+"</td>");
res.write("</tr>");
})
res.end();
})

})
server.listen('8000',function(){
console.log('Server started at port http://127.0.0.1:8000');
})