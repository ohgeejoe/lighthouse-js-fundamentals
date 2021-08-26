//this program takes the parades movements by direction (N,S,E,W) given by variable "moves" and provides a grid co-ordinate spot.
 const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
 let y = 0;
 let x = 0;

const finalPosition = function (moves) {
 for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      y++;
    }
    else if (moves[i] === "south") {
      y--;
    }
    else if (moves[i] === "east") {
      x++;
    }
    else if(moves[i] === "west") {
      x--;
    }    
}
return[x,y];
}

console.log(finalPosition(moves));

/* for loop, N = y=++, S = y--, E = x ++, W = x-- 
At the end return x,y

need to iterate through al the array positions. and perform the increments.
*/

/*for (let i = 0; i < moves.length; i++)
for (let i = 0; i < moves.length; i++)*/
