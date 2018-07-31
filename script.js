//lecture variable 1
/*
var name = 'rehan'  ;
console.log (name);

var lastName = 'ashraf';
console.log (lastName);

var age = 21;
console.log(age);

var fullage = true;
console.log(fullage);
*/
 
//lecture variable 2

/*var name= 'rehan';
var age = 26;

//console.log(name + age);

var job, isMarried;
console.log(job);

job = 'developer';
isMarried = false ;

console.log(name + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried +  '.' );
//variable mutation
job = 'it developer';
isMarried = true;

console.log(name + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried +  '.');

//alert nd prompt use
var lastName = prompt ('what is the lastname');
console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried +  '.');
*/

//lecture operator

/*var now = 2018;
var birthyear = now - 21 ; 

birthyear = now - 21 * 2 ;

console.log(birthyear);

var agejohn = 30 ;
var agemark = 30 ;

agejohn = agemark = (3 + 5) * 4 - 6 ;

agejohn++;
agemark *= 2;
agemark = agemark * 2;

console.log(agejohn);
console.log(agemark); */

////lecture if/else condition
/*
var name = 'rehan';
var age = 21 ;
var isMarried = 'yes' ;

if ( isMarried === 'yes')
{
    console.log(name + ' is married! ');
}else
{ 
    console.log(name + ' hopefully marry soon :) ');
}

isMarried = true;

if(isMarried)
{
    console.log('yes');
}else
{
    console.log('no');
}

if(21 === '21')
{
    console.log('something to print');
}
*/

//////lecture boolean logic nd swtich statement
/*
  var age = 20 ;

  if (age < 20 )
  {
      console.log('he is teenager');
  } else if ( age <20 || age < 30)
  {
      console.log('he is young man');
  }
  
  else 
  {
      console.log('he is man ');
  }


  var job = 'developer' ;

  job = prompt ('what rehan do?');

  switch (job)
  {
      case 'teacher':
      console.log('rehan teaches the teacher');
      break;
      
      case 'developer':
      console.log('rehan develop the website');
      break;

      case 'driver':
      console.log('rehan drives the cab');
      break;

      default:
      console.log('rehan do something else');

  } 
  */

//////first chalange
/*
var johnAge = 28 ;
var markAge = 28 ;
var johnHeight =  6.2 ;
var markHeight = 6.2;
var clarkAge = 28;
var clarkHeight = 6.2;

var markTotal = markHeight +  (markAge * 5) ; 
var johnTotal = johnHeight + (johnAge * 5);
var clarkTotal = clarkHeight + (clarkAge * 5);

console.log(markTotal );
console.log(clarkTotal );
console.log(johnTotal)


if (clarkTotal> johnTotal && clarkTotal > markTotal)
{
    console.log('clark wins the game and john and mark loss the game! ');
}else if ( markTotal > johnTotal && markTotal > clarkTotal )
{
   console.log('mark wins the game and john and clark loss the game!');
}else if(johnTotal > markTotal && johnTotal > clarkTotal )
{
    console.log('john wins the game and mark and clark loss the game! ');

}else 
{
    console.log(" Game draw no one win ");
}
*/


///////lecture function 
/*
function calculateAge (yearOfBirth)
{
    var age = 2018 - yearOfBirth;
    return age;
}

var johnAge = calculateAge (1997);
var noraizAge = calculateAge (1994);
var shariqAge = calculateAge (1996);

//console.log(noraizAge);
//console.log(shariqAge);
//console.log(johnAge);


function yearUntilRetirement (name , year )
{
    var age = calculateAge(year)
    var retirement = 65 - age;
    if (retirement >=0 )
    {
        console.log(name + ' retire in ' + retirement + ' years.' );

    }else
    {
        console.log(name + ' is already retire!');
        
    }
  
 
}

yearUntilRetirement ('rehan' , 1997 )
yearUntilRetirement ('noraiz', 1990 )
yearUntilRetirement ('shariq', 1945 )
*/

///////lecture statments and expression


////////lecture array 
/*var names =  ['Rehan', 'Babar', 'Noraiz'];
var year =  ( 1990 , 1990 , 1989);

console.log(names[2]);

names[2] = 'shariq' ;

console.log(names);

var rehan = ['rehan', 'asharf', 1997, 'developer', false];
rehan.push('games');
rehan.pop();
rehan.unshift('MR.');
rehan.shift();
//alert(rehan.indexOf('developer')) ;

console.log(rehan);

if (rehan.indexOf('teacher') === -1)
{
    console.log(' no he is not a techer!');

}
*/


////////lecture object with properties

/*
var rehan = {
    name: 'Rehan',
    fatherName: 'Ashraf',
    yearOfBirth: 1997,
    job:'developer',
    isMarried: false,
}

//console.log(rehan);


rehan.job = 'teacher' ;
rehan.yearOfBirth = 1998 ;
rehan['isMarried'] = true ;

console.log(rehan);


var babar = new Object();
babar.name = 'babar';
babar.fatherName = 'seikh';
babar.job = 'sales men ';
babar.yearOfBirth = 1990;
babar['isMarried']= 'kabi ne hogi';

console.log(babar);
*/

////////////lecture object with methods

/*
var rehan = {
    name: 'Rehan',
    fatherName: 'Ashraf',
    yearOfBirth: 1997,
    job:'developer',
    isMarried: false,
    calculateAge: function(yearOfBirth){
        return 2018 - yearOfBirth ;
    }
}

 console.log(rehan.calculateAge(1997));




var rehan = {
    name: 'Rehan',
    fatherName: 'Ashraf',
    yearOfBirth: 1997,
    job:'developer',
    isMarried: false,
    calculateAge: function(){
      this.age = 2018 - this.yearOfBirth;    
    }
}


rehan.calculateAge();
console.log(rehan);

*/


//////////////lecture loops
/*
for ( var i = 0 ; i < 10 ; i++ )
{
    console.log(i);
}

var names = ['rehan','rahil','jamal','zulfi','babar'];


for (var i = 0 ; i < names.length; i++){
    console.log(names[i]);
}
*/

//////2nd coding test
/*

var years = [ 2004 , 2006 , 1997 , 1995 ];
var ages = [];

for ( var i = 0 ; i < years.length ; i++){
    ages[i]= 2018 - years[i];
}

for ( i = 0 ; i < ages.length ; i++ ){

    if (ages[i] > 18 ) {
        console.log(' The person is ' + i + ' is ' + ages[i] + ' years old, and he is full age. ');
        
    } else {
        console.log(' The person is ' + i + ' is ' + ages[i] + ' years old, and he is not full age. ');
    }
    
}


function  printFullAges(year){
    
    var ages = [];
    var fullAges =[];

    for ( var i = 0 ; i < years.length ; i++){
        ages[i]= 2018 - years[i];
    }
    
    for ( i = 0 ; i < ages.length ; i++ ){
    
        if (ages[i] > 18 ) {
            console.log(' The person is ' + i + ' is ' + ages[i] + ' years old, and he is full age. ');
            fullAges.push(true);
            
        } else {
            console.log(' The person is ' + i + ' is ' + ages[i] + ' years old, and he is not full age. ');
            fullAges.push(false);
        }
    }
    return fullAges;
}

var years = [ 2004 , 2006 , 1997 , 1995 ];
var full_1 = printFullAges(years);
var full_2 = printFullAges ([2011 , 2003 , 2013 , 1993]);
*/

///////// lecture 21: 



