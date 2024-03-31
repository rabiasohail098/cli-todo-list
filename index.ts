#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


// todo list

let todos:string [] = [" "];
async function  createTodos (todos:string[]){
  do{  let ans = await inquirer.prompt(
            {type:"list",
            message:"Select an operation",
            name:"select",
            choices:["add","update","view","delete"],
            }
)
if (ans.select=="add"){
    let addtodo = await inquirer.prompt(
        {
           type: "input",
           message:"add item to todo list.",
           name:"todo",
        },
    )
        todos.push(addtodo.todo)
        console.log(todos);
}
if (ans.select=="update"){
    let updatetodo = await inquirer.prompt(
        {type:"list",
         message:"Select an item for update",
         name:"todo",
         choices:todos.map(i => i)
        }
    )
    let addtodo= await inquirer.prompt(
        {type:"input",
         message:"Add item to todo",
         name:"todo"
        }
    )
    let newtodos= todos.filter(a => a !== updatetodo.todo)
    todos = [...newtodos,addtodo.todo]
    console.log(todos);
}
if (ans.select=="view"){
    console.log(todos)
};
if (ans.select=="delete"){
    let deletetodo = await inquirer.prompt(
        {type:"list",
        message:"Select an item for delete.",
        name:"todo",
        choices:todos.map(i => i),
    }
    )
    let newtodos= todos.filter(a => a !== deletetodo.todo)
    todos=[...newtodos]
    console.log(todos);
    
}
}
while(true)}
createTodos(todos);















