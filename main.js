import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter you age:",
    }]);
console.log(`Inshallah ${60 - answers.age} you will be 60 years old.`);
