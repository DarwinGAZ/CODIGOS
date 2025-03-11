const player = 0;
const computer = Math.floor(Math.random() * 3);

if (player === 0 && computer === 0) {
    console.log("empate");
} else if (computer === 1) {
    console.log("computador ganhou");
} else if (computer === 2) {
    console.log("player ganhou");
} else {
    console.log("ocorreu um erro");
}

if (player === 1 && computer === 1) {
    console.log("empate");
} else if (computer === 1) {
    console.log("computador ganhou");
} else if (computer === 2) {
    console.log("player ganhou");
} else {
    console.log("ocorreu um erro");
}

if (player === 2 && computer === 2) {
    console.log("empate");
} else if (computer === 1) {
    console.log("computador ganhou");
} else if (computer === 2) {
    console.log("player ganhou");
} else {
    console.log("ocorreu um erro");
}
