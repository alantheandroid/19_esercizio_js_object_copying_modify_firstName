const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = "Simon";

/* viene modificato anche il valore del primo oggetto perché
non abbiamo davvero creato una copia dell'oggetto ma solo 
un passaggio per riferimento, ovvero entrambi gli oggetti
puntano allo stesso spazio di memoria */

console.log(person1);
console.log(person2);
