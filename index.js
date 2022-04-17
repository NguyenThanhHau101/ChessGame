const square = document.getElementsByClassName("square");

function CreateChessPieces(){
  for(let i = 1; i <= 64; i++){
    let column = i % 8;
    if (column == 0) column = 8;
    let row = (i - column) / 8;
    console.log(column, row);
    if ((row % 2 == 1 && column % 2 == 1) || (row % 2 == 0 && column % 2 == 0)){
      let id = "square" + i.toString();
      document.getElementById(id).style.backgroundColor = "#65C18C"; 
    } else {
      let id = "square" + i.toString();
      document.getElementById(id).style.backgroundColor = "#E9DAC1";
    }
  }
  for(let i = 9; i <= 16; i++){
    let id = "square" + i.toString();
    let piece = document.createElement("img");
    piece.src="./img/black_P.svg";
    piece.style.width = "80px";
    document.getElementById(id).appendChild(piece);
  }
  for(let i = 49; i <= 56; i++){
    let id = "square" + i.toString();
    let piece = document.createElement("img");
    piece.src="./img/white_P.svg";
    piece.style.width = "80px";
    document.getElementById(id).appendChild(piece);
  }
  let root_b1 = document.createElement("img");
  root_b1.src = "./img/black_R.svg";
  root_b1.style.width = "80px";
  document.getElementById("square1").appendChild(root_b1);
  let root_b2 = document.createElement("img");
  root_b2.src = "./img/black_R.svg";
  root_b2.style.width = "80px";
  document.getElementById("square8").appendChild(root_b2);
  let knight_b1 = document.createElement("img");
  knight_b1.src = "./img/black_N.svg";
  knight_b1.style.width = "80px";
  document.getElementById("square2").appendChild(knight_b1);
  let knight_b2 = document.createElement("img");
  knight_b2.src = "./img/black_N.svg";
  knight_b2.style.width = "80px";
  document.getElementById("square7").appendChild(knight_b2);
  let bishop_b1 = document.createElement("img");
  bishop_b1.src = "./img/black_B.svg";
  bishop_b1.style.width = "80px";
  document.getElementById("square3").appendChild(bishop_b1);
  let bishop_b2 = document.createElement("img");
  bishop_b2.src = "./img/black_B.svg";
  bishop_b2.style.width = "80px";
  document.getElementById("square6").appendChild(bishop_b2);
  let queen_b = document.createElement("img");
  queen_b.src = "./img/black_Q.svg";
  queen_b.style.width = "80px";
  document.getElementById("square4").appendChild(queen_b);
  let king_b = document.createElement("img");
  king_b.src = "./img/black_K.svg";
  king_b.style.width = "80px";
  document.getElementById("square5").appendChild(king_b);
  
  let root_w1 = document.createElement("img");
  root_w1.src = "./img/white_R.svg";
  root_w1.style.width = "80px";
  document.getElementById("square64").appendChild(root_w1);
  let root_w2 = document.createElement("img");
  root_w2.src = "./img/white_R.svg";
  root_w2.style.width = "80px";
  document.getElementById("square57").appendChild(root_w2);
  let knight_w1 = document.createElement("img");
  knight_w1.src = "./img/white_N.svg";
  knight_w1.style.width = "80px";
  document.getElementById("square63").appendChild(knight_w1);
  let knight_w2 = document.createElement("img");
  knight_w2.src = "./img/white_N.svg";
  knight_w2.style.width = "80px";
  document.getElementById("square58").appendChild(knight_w2);
  let bishop_w1 = document.createElement("img");
  bishop_w1.src = "./img/white_B.svg";
  bishop_w1.style.width = "80px";
  document.getElementById("square62").appendChild(bishop_w1);
  let bishop_w2 = document.createElement("img");
  bishop_w2.src = "./img/white_B.svg";
  bishop_w2.style.width = "80px";
  document.getElementById("square59").appendChild(bishop_w2);
  let queen_w = document.createElement("img");
  queen_w.src = "./img/white_Q.svg";
  queen_w.style.width = "80px";
  document.getElementById("square60").appendChild(queen_w);
  let king_w = document.createElement("img");
  king_w.src = "./img/white_K.svg";
  king_w.style.width = "80px";
  document.getElementById("square61").appendChild(king_w);
}
CreateChessPieces();