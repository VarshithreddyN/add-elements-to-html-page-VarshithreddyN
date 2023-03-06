let block=(type,text)=>{
    let ele=document.getElementById("demo");
   let  typeOfInput=document.createElement(type);
    let textInside=document.createTextNode(text);
    ele.appendChild(typeOfInput);
    typeOfInput.appendChild(textInside);
}
block("BUTTON","NAMEINSDE");
block("h2","welcome to heading");
block("p","welcome to paragraph");


