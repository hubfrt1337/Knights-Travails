class Graph{
    constructor(size){
        this.adjacencyList = new Map();
        this.matrix = Array.from({ length: size},() => Array(size).fill(0))
    }
    addVertex(vertex){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, [])
        }
    }
    addEdge(vertex, vertex2){
        this.adjacencyList.get(vertex).push(vertex2)
        this.adjacencyList.get(vertex2).push(vertex)
    }
    reconstructPath(visitedVertices, startNode, endNode){
        let curr = endNode;
        const shortestPath = []
        while(curr !== null){
            shortestPath.push(curr)
            curr = visitedVertices[curr];
        }
        console.log(shortestPath.reverse())
    }
    knightMoves(start, end){
        const concatArr = start.concat(end)
        for(let number of concatArr){
            if(number > 7 || number < 0){
                return false;
            }
        }
        const adjacency = new Map();
        start = JSON.stringify(start)
        end = JSON.stringify(end);
        adjacency.set(start, createConnections(start));
        const visitedVertices = {}
        visitedVertices[start] = null
        let queue = [start];
        while(queue.length > 0){
            //console.log(queue)
            let curr = queue.shift();
            if(curr === end){
                return this.reconstructPath(visitedVertices, start, end)
            }
            let currAdj = adjacency.get(curr);
            //console.log("adjacencies " + currAdj)
            for(const adj of currAdj){
                if(!visitedVertices.hasOwnProperty(adj)){
                    visitedVertices[adj] = curr;
                    adjacency.set(adj, createConnections(adj))
                    queue.push(adj)
                    //console.log(queue)
                    //console.log(visitedVertices)
                }
            }
        }
        return;
    }
}

function createConnections(vertex){
    vertex = JSON.parse(vertex);
    let jump1 = [vertex[0] -2, vertex[1] +1];
    let jump2 = [vertex[0] -1, vertex[1] +2];
    let jump3 = [vertex[0] +1, vertex[1] +2];
    let jump4 = [vertex[0] +2, vertex[1] +1];
    let jump5 = [vertex[0] -2, vertex[1] -1];
    let jump6 = [vertex[0] -1, vertex[1] -2];
    let jump7 = [vertex[0] +1, vertex[1] -2];
    let jump8 = [vertex[0] +2, vertex[1] -1];
    const arrayOfVertices = [jump1, jump2, jump3, jump4, jump5, jump6, jump7, jump8]
    let filteredVertices = arrayOfVertices.filter((arrayEl) => {
        if(arrayEl[0] > 7 || arrayEl[0] < 0) return false;
        if(arrayEl[1] > 7 || arrayEl[1] < 0) return false;
        return true;
    }).map(el => JSON.stringify(el))
    return filteredVertices;
}


window.Graph = Graph;
