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