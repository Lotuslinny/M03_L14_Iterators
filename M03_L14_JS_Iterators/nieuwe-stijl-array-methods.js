/* Gebruik dezelfde kleuren-array als startpunt
Gebruik de forEach array method, om alle items in je array te loggen naar de console. */
const array1 = ['yellow', 'blue', 'red', 'orange'];
array1.forEach(element => console.log(element));

/*  1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
For loop: 4 regels code. While loop: 6 regels code.

2.Hoeveel regels neemt mijn forEach method in beslag?
forEach: 2 regels code.

3.Welke voordelen heeft het gebruiken van een array method nog meer
t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld
makkelijker leesbaar? Waarom?
forEach, omdat je niet allemaal variabelen uit moet schrijven.
4.Kun je een array method gebruiken op een object? Het antwoord is nee.
De objecteigenschappen van de array en de lijst met arrayelementen zijn
namelijk gescheiden en de kopie- en mutatiebewerkingen van de array kunnen
niet worden toegepast op deze benoemde eigenschappen


5.Stel je hebt een object met 45 properties. Probeer eens uit te zoeken
gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop:
Looping through the properties of an object.
for...in loops*/
const object = { a: 3, b: 2, c: 6, d: 8, e: 11 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

