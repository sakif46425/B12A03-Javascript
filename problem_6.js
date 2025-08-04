/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var currentSalary = startingSalary;

for (var i = 0; i < experience; i++) {
    currentSalary += currentSalary * 0.05
}

currentSalary = currentSalary.toFixed(2);

console.log(startingSalary);
console.log(experience);
console.log(currentSalary);