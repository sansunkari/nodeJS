let users = [
    {name:'user1',age:20},
    { name: 'user2', age: 30 },
];

function createUsers(user) {

    return new Promise(function (res,rej) {
        setTimeout(() => {
            users.push(user);
            let userCreated = true;
            if (userCreated) {
                res();
            }else{
                rej("user not created");
            }
        }, 2000);    
    });
    
}

function getUsers() {
    return new Promise(function (res,rej) {
        setTimeout(() => {
            console.log(users);
            res();
        }, 1000);

    });
    
}

createUsers({ name: 'user3', age: 25 }).then(()=>{
    getUsers();
}).catch((msg)=>{
    console.log(msg);
});

(async function () {
    await createUsers({ name: 'user3', age: 25 });
    await getUsers();
    
})().catch((msg)=>{
    console.log(msg);
});

// let p = new Promise(function (res,rej) {
    
//     if (true) {
//         res();
//     }else{
//         rej()
//     }
// });