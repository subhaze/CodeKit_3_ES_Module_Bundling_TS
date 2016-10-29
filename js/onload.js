import {upper, title} from './text';
import {add, increment} from './nested/maths';

console.log( upper('yell a message here.') );
console.log( title('title case message here.') );

console.log(`2 + 3 = ${add( 2,3 )}`);
console.log(`increment 4 by 1 = ${increment( 4 )}`);
console.log(`increment 4 by 3 = ${increment( 4, 3 )}`);