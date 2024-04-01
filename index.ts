import inquirer from "inquirer";

async function wordscounter(){

    const res = await inquirer.prompt({
        type: "input",
        name: "paragraph",
        message: "Enter a paragraph..."
    })

    let freespaces = res.paragraph.replace(/\s+/g,"");
    console.log(freespaces.length);

}

wordscounter();