let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

document.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }

  switch (event.code) {
    case "KeyQ":
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let size = Math.random() * 100 + 50;
      let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      drawRectangle(x, y, size, size, col);
      break;
    case "KeyW":
      randomEllipse();
      break;
    case "KeyE":
      randomTriangle();
      break;
    case "KeyR":
      randomOctagon();
      break;      
    case "KeyT":
      randomTarget();
      break;
  }
});

function randomEllipse() {
  let w = Math.random() * 100 + 50;
  let h = Math.random() * 100 + 50;
  let x = Math.random() * (canvas.width - w) + w / 2;
  let y = Math.random() * (canvas.height - h) + h / 2;
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawEllipse(x, y, w, h, c);
}

function drawRectangle(x, y, w, h, col) {
  ctx.fillStyle = col;
  ctx.strokeStyle = col;
  ctx.lineWidth = 5;
  ctx.strokeRect(x, y, w, h);
}

function drawEllipse(x, y, w, h, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
  ctx.fill();
}

function randomTriangle() {
  let size = Math.random() * 100 + 50;
  let x1 = Math.random() * (canvas.width - size);
  let y1 = Math.random() * (canvas.height - size);
  let x2 = x1 + size;
  let y2 = y1;
  let x3 = x1 + size / 2;
  let y3 = y1 - (Math.sqrt(3) * size) / 2;
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawTriangle(x1, y1, x2, y2, x3, y3, c);
}

function drawTriangle(x1, y1, x2, y2, x3, y3, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fill();
}

function randomOctagon() {
  let size = Math.random() * 100 + 50;
  let x = Math.random() * (canvas.width - size);
  let y = Math.random() * (canvas.height - size);
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawOctagon(x, y, size, c);
}

function drawOctagon(x, y, size, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    ctx.lineTo(
      x + size * Math.cos((2 * Math.PI * i) / 8),
      y + size * Math.sin((2 * Math.PI * i) / 8)
    );
  }
  ctx.closePath();
  ctx.fill();
}


function drawTarget(x, y, size, col) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = col;

  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(x, y, size - i * 20, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

function randomTarget() {
  let size = Math.random() * 50 + 50;
  let x = Math.random() * (canvas.width - size * 2) + size;
  let y = Math.random() * (canvas.height - size * 2) + size;
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawTarget(x, y, size, c);
}
