function conductingTest(status)
{
    const promiseOfTest = new Promise((resolve , reject)=>{
        if(status == true){
            setTimeout(()=>{
                resolve("Test is ready to be conducted")
            },5000);
        }
        else{
            setTimeout(()=>{
                reject("Ooopss.....due to some technical issue , test is postponed")
            },5000);
        }
    })
    //return promise
    return promiseOfTest;
    
}

//callingfunction
conductingTest(false)
.then(result=>{
    console.log(result)
})
.catch(err=>{
    console.error(err)
})