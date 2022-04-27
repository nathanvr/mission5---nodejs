//crear documento names.txt
const { faker } = require('@faker-js/faker');
const fs = require("file-system");
let name ="";
for (let i = 0 ; i < 1000; i++){

    const randomName = faker.name.findName()
    name += randomName + "\n"
    

}

fs.writeFile("./names.txt", name, error => {
    if(error){
        console.log(error)

    }
    else{
        console.log("archivo creado")
    }
})