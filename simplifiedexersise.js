// Prerequisites:
// - functions, objects, conditionals
// - arrow functions
// - array functions: map, filter, find, reduce, every, some..

const products = [
    "iPhone 13", 
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",
    "iPhone 12",
    "iPhone 12 Pro",
    "OnePlus 10 Pro",
    "OnePlus 9",
    "Nokia G20",
    "Samsung Galaxy S20",
    "Samsung Galaxy S21",
    "Samsung Galaxy S22",
    "Sony Xperia 10",
    "Xiaomi Redmi 9A",
  ];
  
  
  const favorites = [];
  
  // Task 1. Add new Products: Google Pixel 6 Pro, Motorola Moto G31, Honor X7

    products.push ("Google Pixel 6 Pro", "Motorola Moto G31", "Honor X7");
    console.log(products);
  
  // Task 2. remove Sony Xperia 10 from the list

    let withoutSony = products.filter(element => {

        return element !== "Sony Xperia 10";
    });

    console.log(withoutSony);

  
  // Task 3. list the products with "Galaxy" in their names

   let phonesWithGalaxy = products.filter(element => {
    
        return element.includes("Galaxy");
    })

    console.log(phonesWithGalaxy);

  
  // Task 4. Add Google Pixel 6 Pro, OnePlus 10 Pro, iPhone 13 Pro Max to favorites

    favorites.push("Google Pixel 6 Pro" , "OnePlus 10 Pro", "iPhone 13 Pro Max");

    console.log(favorites);

  // Task 5. remove OnePlus 10 Pro from favorites
    
    const newFavorites = favorites.filter(phonetype => {

        return phonetype !== "OnePlus 10 Pro";
    });

    console.log(newFavorites);
  
  // Task 6. Calculate and print the number of products that have "Pro" in their names
  
  // Try to implement this in two ways. 1. using reduce 2. using filter and length
 

    let phoneswithPro = products.reduce((accumulator, phoneType) => {

        if(phoneType.includes("Pro")){

        return accumulator += 1 ;

        } else{  

        return accumulator;
        }
    },0);

    console.log(phoneswithPro);

 
// Task 7. Print an array that has either iOS or Android for each product based on the name
// e.g. if the product has iphone in the name, it should be iOS; otherwise it should be android
// the resulting array could be ["iOS", "iOS", "iOS", "Android", "Android", "Android", "Android"...]

    let phoneOperatingsystem = products.map((element) => {

    if(element.includes("iPhone")){
        return  "ios";

    } else{
    return "android";

    }
    })

    console.log(phoneOperatingsystem);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

  
  // Task 8. Print an array with the count of words for each product. Numbers could be regarded as words
  // the resulting array could look sth like this [2, 3, 4, 2, 2, 3, 3, 2, 2, 3, 3, 3, 2, 2...]

        let countWords = products.map((element) => {

            let newArray = element.split(" ");

            return newArray.length;
        })

        console.log(countWords);
  

 // Task 9. Print only the products that end with "Pro"
        let phoneEndingPro = products.filter((element) => {

            if (element.endsWith("Pro")){

            return element;
            } 
        })

        console.log(phoneEndingPro);  
  // Task 10. Print the products that are NOT in the favorites array

    let notInFavourites = products.filter((element) => {
        if (favorites.find(element2 => element2 === element)){

        return false;

        } else {

        return element;
        }
    
    })

    console.log(notInFavourites);
   
  // Task 11. Check if all the items in favorites are iPhones (have "iPhone" in the name). Print the boolean output.

        let checkIphone = favorites.every((element) => {

            element.includes("iPhone");
        });

        console.log(checkIphone); 
 
  
  // Task 12. Check if any of the items in favorites contain the number 12 or 13. Print the boolean output.
    let check12or13 =favorites.some((element) => {

        if(element.includes("13" || "12")){

        return true;
        }
    });

    console.log(check12or13);
  
  // hint: 
  // 1. push,  2. filter,  3. filter,  4. push,  5. filter,  6. reduce/filter-length
  // 7. map,   8. map,     9. filter + string method to check string ending 
  // 10. find in filter,   11. every,   12. some 