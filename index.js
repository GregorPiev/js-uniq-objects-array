// Import stylesheets
import './style.css';
import * as _ from 'lodash';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var source = [{x:1, y: 0},{x:2,y:0},{x:3, y:1},{x:4,y:1},{x:5,y:3}, {x:1},{x:2},{x:3},{x:4},{x:5}];

// console.log(Array.from(source));
var source = _.uniqBy(source, 'x');
var source = _.uniqBy(source, 'y');

//console.log(Array.from(sourceSet));

for(let i=0; i<=source.length; i++){
  console.log(i);
  console.log(source[i]);
}