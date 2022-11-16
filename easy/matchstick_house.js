function matchHouses(num){if(num<1){return 0;}var triangle_sticks=3*num;var base_sticks=1*num;var wall_sticks=num+1;var total_sticks=triangle_sticks+base_sticks+wall_sticks;return total_sticks;}console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));
console.log(matchHouses(0))