var data = [
  {
    q: "HTML ka full form kya hai?",
    o: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Mark Language"],
    a: 0
  },

  {
    q: "CSS kis kaam ke liye use hota hai?",
    o: ["Design and Styling", "Programming Logic", "Database Handling"],
    a: 0
  },

  {
    q: "JavaScript ka main use kya hai?",
    o: ["Interactivity", "Only Design", "Only Structure"],
    a: 0
  },

  {
  q: "CSS ka full form kya hai?",
  o: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet"],
  a: 0
  },

  {
  q: "JavaScript me output ke liye use hota hai?",
  o: ["print()", "console.log()", "echo()"],
  a: 1
},

  {
  q: "CSS me text size ke liye property?",
  o: ["font-style", "font-size", "text-size"],
  a: 1
},

  {
    q: "CSS me color dene ke liye property?",
    o: ["color", "font-size", "background"],
    a: 0
  },

  {
    q: "External JavaScript file ka extension?",
    o: [".java", ".js", ".javascript"],
    a: 1
  },

  {
    q: "HTML file ka extension?",
    o: [".html", ".ht", ".hml"],
    a: 0
  },

  {
    q: "Background color ke liye CSS property?",
    o: ["bgcolor", "background-color", "color-bg"],
    a: 1
  }
];

var index = 0;
var marks = 0;

function loadQ(){
  document.getElementById("ques").innerHTML = data[index].q;

  document.getElementById("t0").innerHTML = data[index].o[0];
  document.getElementById("t1").innerHTML = data[index].o[1];
  document.getElementById("t2").innerHTML = data[index].o[2];
}

function nextQ(){

  var opt = document.getElementsByName("op");
  var sel = -1;

  for(var i = 0; i < opt.length; i++){
    if(opt[i].checked){
      sel = i;
    }
  }

  if(sel == -1){
    alert("Answer select karo");
    return;
  }

  if(sel == data[index].a){
    marks++;
  }

  index++;

  if(index < data.length){
    loadQ();
  }
  else{
    showResult();
  }
}

function showResult(){

  document.getElementById("box").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("final").innerHTML =
     "Score: " + marks + " / " + data.length;
}

function startAgain(){
  index = 0;
  marks = 0;

  document.getElementById("box").style.display = "block";
  document.getElementById("result").style.display = "none";

  loadQ();
}

loadQ();
