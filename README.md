# Knights-Travails
  Knights Travails is a project based on the popular game of chess.
 The project presents a knight's movement algorithm that finds the shortest path the knight must take to travel from a starting point to an end point.
 The algorithm is built using the data structure: Graphs.

## Technologies
* webkack
* eslint
* prettier
* gh-pages
  
## live preview 
https://hubfrt1337.github.io/Knights-Travails/

# Installation
`git clone https://github.com/hubfrt1337/Knights-Travails.git`

Run in CMLI:
`npm install
npm run build
npm run start`

# How to use?
Create a new graph using:
`const graph = new Graph(8);`
To visualize how the chessboard looks, use:
`console.log(graph.matrix);`
To find the shortest path for the knight, use the command:
KnightMoves([start], [end]);
Both start and end take two arguments: the x and y coordinates, ranging from [0, 0] to [7, 7].
The function returns an array representing the shortest possible path the knight can take.



