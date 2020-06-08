function reverseString(string) {
   return string.split('').reverse().join('');
}
var str = prompt("Enter in your name to be reversed:");
alert(randomString(str));

function splitString(string) {
   return string.split().reverse('').join();
}
var str2 = prompt("Enter in your name to see the first and last characters of your name:");
alert(randomString(str2));



function randomString(string) {
   return string.split('').reverse('').join();
}
var str3 = prompt("Enter in your name to see your name jumbled:");
alert(randomString(str3));

document.querySelector(".string").innerHTML = (reverseString(str));
document.querySelector(".split").innerHTML = (splitString(str2));
document.querySelector(".random").innerHTML = (randomString(str3));