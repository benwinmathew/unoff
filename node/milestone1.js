//1. CALLBACK:

console.log("User 1 sent a request, EXAMPLE 1");
setTimeout(callback, 5000);
console.log("user 2 sent a request, EXAMPLE 1");
setTimeout(callback, 5000);
console.log("user 3 sent a request, EXAMPLE 1");
setTimeout(callback, 5000);

function callback() {
    console.log("Queried the database and data will be received in 5 secs, EXAMPLE 1");
}

//example 2

console.log("start");

function loginUser(email, username, callback) {
    setTimeout(() => {
        console.log("Inside the function");
        callback({
            myUserName: username,
            email: email
        })
    }, 3000)
}

function getUserVideo(username, callback) {
    setTimeout(() => {
        callback(['vid1', 'vid2', 'vid3']);
    }, 2000);
}

function getVidDetails(video, callback) {
    setTimeout(() => {
        callback('Video details is here');
    }, 2000);
}


let username = loginUser('benwinmathew@gmail.com', 'benwinmathew', username => {
    console.log(username);
    getUserVideo(username, video => {
        console.log(video);
        getVidDetails(video, videoDetails => {
            console.log(videoDetails);
        });
    });
});



console.log("Finish");


//PROMISE:

//example 1:

let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('success');
    }else {
        reject('failed');
    }
})

p.then((messege) => console.log("This is then block " + messege))
.catch((messege) => {console.log("This is catch block " + messege)})


//example 2:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("got the user");
        reject(new Error("user not logged in"));
    }, 2000);
});

promise
.then(user2 => {
    console.log(user2);
})
.catch(err => console.log(err.message));


//example 3:

console.log("Start");

function login(email, passwoed) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("we are in login function");
        resolve({username: email});
    }, 1000);
});
}
//sort of requseting data from API(above login function)

function getVid(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    });
}

function vidDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This video was taken long ago");
        }, 1000);
    });

}

// let username = loginUser('benwinmathew@gmail.com', 'benwinmathew', username => {
//     console.log(username);
//     getUserVideo(username, video => {
//         console.log(video);
//         getVidDetails(video, videoDetails => {
//             console.log(videoDetails);
//         });
//     });
// });              //These are known as CALLBACK HELL


login("benwin mather", "benwin@gm,gmail.com")
.then(usserrr => console.log(usserrr))          //return value passes to the next 'then'
.then(userr => getVid())
.then(userrr => console.log(userrr))
.then(details => vidDetails())
.then(detail => console.log(detail));          //Easier way to understand the code


    //sync(opp.) way of this:
    //const user = loginUser('ed', 'sdf');
    //const video = vidDetails(user.email)


console.log("finish");



//ASYNC AWAIT:
    //It still uses Promises but its is lot more nicer and easier to read than promises
    //Syntax is very simple.

    const yt = new Promise(resolve => {
        setTimeout(() => {
            console.log("getting stuff from Youtube");
            resolve({videos: [1, 2, 3, 4, 5]}); 
        }, 2000);
    });
    
    const fb = new Promise(resolve => {
        setTimeout(() => {
            console.log("stuff from Facebook Meta");
            resolve({user: 'name'}); 
        }, 2000);
    });
    
    Promise.all([yt, fb])
    .then(result => console.log(result)); 
    //the result is not gonna comeback untill the both promises are fullfilled.
      
//example 2:

console.log("Start");

function login1(userId, email) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("we are in login function");
        resolve({username: userId, email: email});
    }, 1000);
});
}
//sort of requseting data from API(above login function)

function getVid1(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Wee are in getVid Function");
            resolve({videos: ["video1", "video2", "video3"]});
        }, 2000);
    });
}

function vidDetails1(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is video Details");
        }, 1000);
    });

}

// login("benwin mather", "benwin@gm,gmail.com")
// .then(usserrr => console.log(usserrr))
// .then(userr => getVid())
// .then(userrr => console.log(userrr))
// .then(details => vidDetails())
// .then(detail => console.log(detail));  

async function diplayUser() {

    try {
        const loggedUser = await login1("Ramya", 'ramyaduraisamy@gmail.com');
        console.log(loggedUser);
        const video = await getVid1(loggedUser.userId);
        console.log(video);
        const details = await vidDetails1(video[0]);
        console.log(details);
    }catch(err) {
        console.log(err);
    }

}
diplayUser()

console.log("Finish");


///////////////////////////////////////


//HTTP METHODS:

    // GET
    // The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

    // POST (create)
    // The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

    // PUT (update)
    // The PUT method replaces all current representations of the target resource with the request payload.
    // PUT is idempotent: calling it once or several times successively has the same effect (that is no side effect), 
    //where successive identical POST may have additional effects, like passing an order several times.

    // DELETE
    // The DELETE method deletes the specified resource.

    //Safe mode: GET
    //Unsafe mode: POST, PUT, DELETE 


//HTTP STATUS CODE:
// ref link: https://www.restapitutorial.com/httpstatuscodes.html

    // 2xx Success - Everything is going good
    // 3xx Redirecting - redirect you to the next page
    // 4xx Client Error - Error from the cliemt side
    // 5xx Server Error - Error from the server side