
#Burger

##Week of 14 Homework Node Express Handlebars

Link: https://danburgerjoint.herokuapp.com/

This is a burger logger that keeps track of all the burgers you want to eat and have ate. For the list that you want to eat there is a devour button that will update the database that the burger has been eaten.

Using MySQL to keep track of the burgers. Using Node for the backend experience. Express to host the page. Handlebars to create the page. This will also demonstrate the ORM (Object-relational mapping).

##Installing

After cloning this

```
npm install
```

##Setting Up

then you will need to create a key.js file in the same directory as the server.js. Inside the key.js file you will enter in your mysql password with the following format.

```
const key = {
	mysql: "YOURMYSQLPASSWORD"
};

module.exports = key;
```

You should also go into the ```config/connection.js``` to double check then connection's informations

In the db directory you will notice the schema and seed for the sql database.

After you got your database set up

##Running It

You will want to ```node server.js``` and go to your localhost:5000. There you will be able to log all the burgers you ate.

HAVE FUN BURGER EATING
