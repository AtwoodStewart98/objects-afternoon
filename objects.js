// Create an object called user that has name, age, password properties and assign them appropriate values.

var user = {
  name: 'Painis Cupcake',
  age: 83,
  password: 'Iwill347you'
}

// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

user.email = 'painisweak@teamfortress2.com';
user.username = 'Soldier76';
user.alertUser = function() {alert(user.name)};

// Now loop over your user object and alert each of the keys.

for (var key in user) {
  alert(key);
}

// Now loop over your user object and alert each of the values for each key.

for (var key in user) {
  alert(user[key]);
}

// Remove the username from your user object

user.username = "";

// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

var creditCard = {
  number: 212954759,
  cvc: 232,
  type: 'Visa',
  limit: '$200'
}

// Create a variable called alternating. Set it equal to the string bonusCategories.

var alternating = 'bonusCategories';

/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set its value to an array of 3 items that are objects.
    Each object should have one key value pair.
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%)

    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.

    */

creditCard[alternating] = [{category: 'Dank Memes', percent: '42%'}, {category: 'Comic Book Stores', percent: '8%'}, {category: 'Ice Cream Shops', percent: '5%'}];
creditCard.bank = {bankName: 'Chase', bankAddress: '9023 Broadway Blvd'};

// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

function yolo(creditCard, user) {
  for (var key in obj) {

  }
}

/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

  function loopy(obj) {
    for (var i=0; i<obj.allies.length; i++) {
      if (obj.allies[i] === 'LittleFinger') {
        obj.allies[i] = 'Dragon Lady';
        obj.alive = 'More Than Ever';
      }
    }
    return obj;
  }
