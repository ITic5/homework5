//Exercises from lesson
let name = "Stefan";
let vowels = ["a", "e", "i", "o", "u"];
if(vowels.includes(name[0].toLowerCase())){
    console.log("The name begins with a vowel")
}else{
    console.log("The name begins with a consonant");
}

//Loops
let carBrands = [
    "Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Buick",
    "Cadillac", "Chevrolet", "Chrysler", "Citroën", "Dodge", "Ferrari", "Fiat", "Ford",
    "Genesis", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Lamborghini",
    "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Mazda", "McLaren", "Mercedes-Benz",
    "Mini", "Mitsubishi", "Nissan", "Pagani", "Peugeot", "Porsche", "Ram", "Renault", "Rolls-Royce",
    "Saab", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"
];
// for(let i = 0; i < carBrands.length; i++){
//     console.log(carBrands[i]);
// }

//Homework
for(let i = 0; i < carBrands.length; i++){
    if(carBrands[i][0].toLowerCase() === "a"){
        continue;
    }
    else{
        console.log(carBrands[i]);
    }
}