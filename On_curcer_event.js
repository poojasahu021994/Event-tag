check=true
function change(){
    let selecteddiv = document.querySelector("#img");
    if(check==true){
    selecteddiv.style.backgroundImage="url(https://imageupscaler.com/wp-content/uploads/2024/05/fox-in-the-forest.jpg)";
check=false
}
else{
    selecteddiv.style.backgroundImage="url(https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg)";
    check=true
}

}
//  function imachange(){
//     let selecteddiv = document.querySelector("#img");
//     selecteddiv.style.backgroundImage="url(https://imageupscaler.com/wp-content/uploads/2024/05/fox-in-the-forest.jpg)"
//  }

