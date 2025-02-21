//Exercises from lesson
let name = "Stefan";
let vowels = ["a", "e", "i", "o", "u"];
if (vowels.includes(name[0].toLowerCase())) {
    console.log("The name begins with a vowel")
} else {
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
for (let i = 0; i < carBrands.length; i++) {
    if (carBrands[i][0].toLowerCase() === "a") {
        continue;
    } else {
        console.log(carBrands[i]);
    }
}

//Exercises under the lesson
//Exercise 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    if(numbers[number] % 2 === 0){
        console.log("The number is Even.");
    }else {
        console.log("The number is Odd.");
    }
}

//Exercise 2
let cars = [
    {
        brand: "Volvo",
        model: "XC90",
        year: 2024,
        color: "Black"
    },
    {
        brand: "Audi",
        model: "RS6",
        year: 2022,
        color: "Nardo Grey"
    },
    {
        brand: "BMW",
        model: "M3",
        year: 2023,
        color: "Isle of Man Green"
    },
    {
        brand: "Porsche",
        model: "911 GT3 RS",
        year: 2021,
        color: "Arctic Grey"
    }
];
for (car in cars) {
    let carBrand = cars[car].brand;
    let carModel = cars[car].model;
    let carYear = cars[car].year;
    let carColor = cars[car].color;
    let message = `This ${carBrand} ${carModel} is my favorite car from ${carYear} in ${carColor} color.`
    switch (carBrand) {
        case "Volvo":
            console.log(message);
            break;
        case "Audi":
            console.log(message);
            break;
        case "BMW":
            console.log(message);
            break;
        case "Porsche":
            console.log(message);
            break;
    }
}

//Exercise 3
let students = [
    {
        name: "John",
        grade: 18,
    },
    {
        name: "Steph",
        grade: 99,
    },
    {
        name: "Tom",
        grade: 49,
    },
    {
        name: "Anna",
        grade: 51,
    },
    {
        name: "Cameron",
        grade: 98,
    },
]
for (let student in students) {
    let studentName = students[student].name;
    let studentGrade = students[student].grade;
    if (studentGrade < 51) {
        console.log(studentName + " failed the test with grade of " + studentGrade + ".");
    }else{
        console.log(studentName + " passed the test with grade of " + studentGrade + ". Congratulations!");
    }
}

//Exercise 4
let grades = [25, 38, 85, 44, 98, 12, 58, 76, 81, 70, 66];
for (let grade in grades) {
    if (grades[grade] < 50) {
        console.log("Failed - " + grades[grade]);
    }else if (grades[grade] < 76) {
        console.log("Average - " + grades[grade]);
    }else if (grades[grade] < 91) {
        console.log("Good - " + grades[grade]);
    }else{
        console.log("Excellent - " + grades[grade]);
    }
}

//Exercise 5
let fruits = ["banana", "apple", "mango", "kiwi"];
for (let fruit in fruits) {
    switch (fruits[fruit]) {
        case "banana":
            console.log("Banana is yellow");
            break;
        case "apple":
            console.log("Apple is red");
            break;
        case "mango":
            console.log("Mango is orange");
            break;
        case "kiwi":
            console.log("Kiwi is green");
            break;
    }
}

//Exercise 6
let books = [
    {
        title: "Title 1",
        author: "Author 1",
        year: 2020,
        genre: "Genre 1"
    },
    {
        title: "Title 2",
        author: "Author 2",
        year: 1999,
        genre: "Genre 2"
    },
    {
        title: "Title 3",
        author: "Author 3",
        year: 2000,
        genre: "Genre 3"
    },
    {
        title: "Title 4",
        author: "Author 4",
        year: 1985,
        genre: "Genre 4"
    },

];
for (let book in books) {
    let bookName = books[book].title;
    let bookYear = books[book].year;
    if (bookYear < 2000) {
        console.log(bookName + " is OLD book.");
    }else{
        console.log(bookName + " is NEW book.");
    }
}

//Exercise 7
let employees = [
    {
        name: "Steph",
        salary: 56500,
    },
    {
        name: "Mark",
        salary: 28200,
    },
    {
        name: "John",
        salary: 89800,
    },
    {
        name: "Marie",
        salary: 44600,
    },
    {
        name: "Angelina",
        salary: 50000,
    },
    {
        name: "Sarah",
        salary: 268500,
    }
];
for (let employee in employees) {
    let employeeName = employees[employee].name;
    let employeeSalary = employees[employee].salary;
    if (employeeSalary > 50000) {
        console.log(employeeName + " has High Salary.");
    }else if (employeeSalary > 29999) {
        console.log(employeeName + " has Medium Salary.");
    }else{
        console.log(employeeName + " has Low Salary.");
    }
}

//Exercises 8
let cities = ["New York", "Belgrade", "Tokyo"];
for (let city in cities) {
    switch (cities[city]) {
        case "New York":
            console.log("Welcome to " + cities[city]);
            break;
        case "Belgrade":
            console.log("Welcome to " + cities[city]);
            break;
        case "Tokyo":
            console.log("Welcome to " + cities[city]);
            break;
    }
}
