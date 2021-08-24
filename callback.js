
const funcA = () => {
    setTimeout (() => {
        console.log(`This is first function`);
    funcB();
    }, 2000);
}

const funcB = () => {
    console.log(`This is second function`);
}

funcA();
// funcB();
//------------------------------------------------

const personOne = ((friend, second) => {

    console.log(`hey there!! ${friend}`)
    second();

});

const personTwo = (() => {
    
    console.log(`hey what's up?`);

});

personOne("John", personTwo);
// personTwo();

