// Resolve - Reject-pending

function myFunction(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error =  true;
            if (!error) {
               console.log("your promise has been resolved");
               resolve();
            }
            else{
               console.log("your promise has not been resolved");
               reject();
            }
        }, 3000);
    })
}

myFunction().then(function(){
    console.log("user: thanks for resolving. ")
});
myFunction().catch(function(error){
    console.log("user: please resolve pending problems."+ error)
})