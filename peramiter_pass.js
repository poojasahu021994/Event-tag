function dom(check){
    let a = document.querySelector('#text');
    if(check==1)
        {
        a.style.color ="blue";
    a.style.fontSize = "20px";
    a.style.fontStyle ="italic";
    a.style.backgroundColor ="white"

    }
    
    if(check==2){
        a.style.color ="Red";
    a.style.fontSize = "24px";
    a.style.fontStyle ="italic";
    a.style.backgroundColor ="green"
    }
}