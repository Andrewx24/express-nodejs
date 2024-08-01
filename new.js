var globalVar ='global';

function scope() {
    var foo ='1';
    if (true){
        var foo ='2';
    }
    console.log(globalVar);
    console.log(window.globalVar)
    console.log(foo);
    console.log(bar);
}

scope();


let newglobalVar ='global';
function newscope() { 
    let foo ='1';
    if (true){
        let foo ='2';
    }
    console.log(newglobalVar);
    console.log(window.newglobalVar)
    console.log(foo);
    console.log(bar);
}
newscope();