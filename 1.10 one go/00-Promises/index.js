var ans = new Promise((res, rej) => {
    var num = Math.floor(Math.random() * 10)

    if (num > 5){
        return res();
    }
    else{
        return rej();
    }
});

ans
.then(()=> {
    console.log("above")
})
.catch(()=> {
    console.log("below")
})  