### MongoDB shell commands

make sure that you have a connection to MongoDB:
on port mongodb://localhost:27017/on mongodb compass.

To create a database type the following command in shell:

```sh 
use database name
```

To create collection in the database use the following command:

```sh 
db.createCollection("your_collection_name")
```
To insert data into our collection use the following command:

```sh 
db.your_collection_name.insertOne({name:'name',regno:231})
```
To run the node js file open the folder in the vs code and write click on the folder named ex10 readonly:

> Note press `CTRL+J` to open the inbuilt terminal of vs code.

> On the terminal check the a the path of your terminal ends at ex10 readonly>

then on your terminal:

>Note type ex10 readonly> it is just the location where powershell PS:C:\user\ex10 readonly> is loacated

```sh 
ex10 readonly> npm i
ex10 readonly> node findcode.js
```
> Note if you are trying on your own the dont user `npm i`:
> Use `npm i mongoose` and hit enter

then the code will run on the following port:

```sh
http://127.0.0.1:8000
```
