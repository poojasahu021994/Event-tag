check=true
function dom(){
    let a = document.querySelector('#text');
    if(check==true)
        {
        a.style.color ="blue";
    a.style.fontSize = "20px";
    a.style.fontStyle ="italic";
    a.style.backgroundColor ="red"
    
    check=false;
    }
    else{
        a.style.color ="red";
    a.style.fontSize = "50px";
    a.style.fontStyle ="italic";
    a.style.backgroundColor ="green"
    check=true
    }
    // let b = document.querySelector('.heading');
    // b.style.color = "green";
    // console.log(a);
    // console.log(b);
}