function $(query){
  return document.querySelector(query)
}

let getRandomNumber = n => Math.floor(Math.random() * n);

document.querySelectorAll("option").forEach((item) => {
  item.value = item.innerText;
})
// -- // -- // -- // -- // -- // -- // 
let bgcolor;
let char = [0, 1,2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


function generate(){
  
  bgcolor = `linear-gradient(${$("select").value}, ${$("#col1").value},${$("#col2").value})`
  $(".preview").style.background = bgcolor;
  $("code").innerText = bgcolor;
}


$("select").onchange = generate;
$("#col1").oninput = generate;
$("#col2").oninput = generate;



function generateRandomLinearGradient(){
  
  let pos = document.querySelectorAll("option")[getRandomNumber(8)].value;
  let col1 = "#";
  let col2 = "#";
  
  for(let i=0;i<6;i++){
    
    col1 += char[getRandomNumber(char.length)];
    col2 += char[getRandomNumber(char.length)];
    
  }
  
  $("select").value = pos;
  $("#col1").value = col1;
  $("#col2").value = col2;
  
  generate();
  
}



$("#random").onclick = generateRandomLinearGradient;
onload = generateRandomLinearGradient;


function copy(){
  
  $("#code").value = $("code").innerText;
  $("#code").select();
  document.execCommand("copy");
  createModal($("#code").value);
  
}

function createModal(txt){
  
  let modal = document.createElement("div");
  modal.className = "modal";
  let modalText = document.createTextNode("Color was copied!");
  modal.appendChild(modalText);
  document.body.appendChild(modal);
  setTimeout(()=>{
    modal.style.animationName = "hidden";
    setTimeout(()=>{
      modal.remove();
    }, 700);
  },1300);
  
  
}

$("#copy").onclick = copy;

