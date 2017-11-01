# Loopback with MongoDB

### Install loopback
```shell
$ npm install -g loopback-cli
```

### Create loopback project
```shell
$ lb
? What's the name of your application? itp
? Enter name of the directory to contain the project: itp
   create itp/
     info change the working directory to itp

? Which version of LoopBack would you like to use? 3.x (current)
? What kind of application do you have in mind? api-server (A LoopBack API server with local User auth)
```
In this case, my project name is itp and I chose lookpack 3.x and api-server.  

### Start loopback
```shell
$ cd itp
$ node .
```

### Install MongoDB and Connector
```shell
$ brew install mongodb
$ brew services start mongodb
$ mongo

MongoDB server version: 3.4.10
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	http://docs.mongodb.org/
Questions? Try the support group
	http://groups.google.com/group/mongodb-user
Server has startup warnings:
2017-11-01T16:47:08.217-0400 I CONTROL  [initandlisten]
2017-11-01T16:47:08.217-0400 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-11-01T16:47:08.217-0400 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2017-11-01T16:47:08.217-0400 I CONTROL  [initandlisten]

$ npm install --save loopback-connector-mongodb
$ lb datasource mongoDS --connector mongoDB

? Enter the datasource name: mongoDS
? Select the connector for mongoDS: MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database):
? host: localhost
? port: 27017
? user:
? password:
? database: itp

```

Then, open common/itp.json change name from mongoDS -> db and delete data which is named db by loopbck.  

### Test loopback
```shell
$ node .
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer

```

Go to http://localhost:3000/explorer and Click itp and Add data with "Post" and check data with "Get".  



