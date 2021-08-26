// This program is a function that takes the name, year of birth and current year to calculate age and log it.

function ageCalculator (name, yearOfBirth, currentYear)
{
  let age = currentYear - yearOfBirth ;
  return ( name + " is " + age + " years old." ) ;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));