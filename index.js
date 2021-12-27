// Import stylesheets
import './style.css';
import * as _ from 'lodash';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Do uniq values in array of objects and array values</h1>`;

console.info('\n%cObject array','color: red;font-size: 18px')
var source = [{x:1, y: 0},{x:2,y:0},{x:3, y:1},{x:4,y:1},{x:5,y:3}, {x:1},{x:2},{x:3},{x:4},{x:5}];

var source = _.uniqBy(source, 'x');
var source = _.uniqBy(source, 'y');

console.log(Array.from(source));

for(let i=0; i<source.length; i++){  
  console.log(source[i]);
}


console.info('\n%cObject array. Second approach','color: red;font-size: 18px')
var sourceNoUniqe = [
  {x:1, y: 0},
  {x:2,y:0},
  {x:3, y:1},
  {x:4,y:1},
  {x:5,y:3}, 
  {x:1, y:0},
  {x:2},
  {x:3},
  {x:4,y:4},
  {x:5,y:5}
];
var sourseUniq = _.uniqWith(sourceNoUniqe, _.isEqual);
for(let i=0; i<sourseUniq.length; i++){
  console.log(i);
  console.log(sourseUniq[i]);
}

console.info('\n%cValues array','color: red;font-size: 18px')
var s_arr = [1,2,3,4,5,6,1,2,3,4,5,6,7,8];
var ss_arr = new Set(s_arr);
console.log(Array.from(ss_arr));