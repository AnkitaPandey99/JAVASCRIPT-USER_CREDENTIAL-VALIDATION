var database = [
    {
        username : "andrei",
        password : "hello"
    },
    {
        username : 'jacob',
        password : '777',
    },
    {
        username : 'zeaa',
        password : '123'
    }
];

var newsfeed = [
    {
        username : "sally",
        timeline : "food is so cool"
    },
    {
        username : "jacob",
        timeline : "js is so boringggg!!!"
    }
];

var askusername = prompt("enter username");
var askpw = prompt("enter password");

function isUserValid(username,password){
    for(var i=0;i<database.length;i++){
        if(username===database[i].username && password===database[i].password){
            return true;
        }
    }
    return false;
}

function signIn(username,password){
    if (isUserValid(username,password)){
        console.log(newsfeed);
    }
    else{
        alert("sorry, wrong credentials");
    }
}

signIn(askusername,askpw);

