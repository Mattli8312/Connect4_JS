/**
 * Stores global application values
 */
 const Menu = document.getElementById('menu');
 const board = document.getElementById('gameboard');
 const width = 7;
 const height = 6;
 const GB = new GameBoard(width, height);
 let red_turn = true;
 let winner = null;
 
 GB.Initialize();