var read=require('readline-sync');
var chalk=require('chalk');
var userName=read.question(chalk.rgb(190,160,189)('What is your good name? '));
console.log(chalk.rgb(190,160,189)("Hello ")+chalk.rgb(100,180,255)(userName)+chalk.rgb(190,160,189)(", Welcome to this app"));
var dob=read.question(chalk.rgb(190,160,189)('What is your DOB? Tell us in ')+chalk.rgb(100,100,255).bgWhite("dd-mm-yyyy")+chalk.rgb(190,160,189)("format "));
if(isNaN(dob.split('-').join('')))console.log(chalk.red("Put in your DOB as asked in the specified format please"));
else{
var array=dob.split('-');
if(array[0].length>2){
  console.log(chalk.red("Please put in your DOB correctly"));
  }
else if(array[1].length>2 || array[1]>12){
  console.log(chalk.red("Please put in your DOB correctly"));
  
  }
else if(array[2].length>4){
  console.log(chalk.red("Please put in your DOB correctly"));
  
  }
else{
function leap(yr){
if(yr%400==0)return true;
if(yr%100==0)return false;
if(yr%4==0)return true;
return false;}
if(leap(array[2]))
console.log(chalk.rgb(250,250,100)("Hurrah! you are a special child! share this with your friends"));
else
console.log("Your's is not a leap year my friend, sorry!");
}
}