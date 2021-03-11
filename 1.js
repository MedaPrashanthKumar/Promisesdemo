//create a new promise

let status = true ;

const prm = new Promise((resolve , reject)=>{

    if(status == true){

        resolve("promise is resolved")

    }
    else{
        reject("promise is rejected")
    }

})

console.log(prm)


//consume promise
prm
.then(result=>{
    console.log(result)
})

.catch(err=>{
    console.log(err)
})