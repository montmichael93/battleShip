let grid = {
  A: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  B: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  C: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  D: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  E: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  F: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  G: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  H: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  I: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  J: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
}



for (let entry in grid) {
   console.table(grid[entry].slice(1))
}