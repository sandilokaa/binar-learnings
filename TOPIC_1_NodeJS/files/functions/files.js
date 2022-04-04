const fs = require("fs");

function createData(props){
    const dataToCreate = {
        name: props.name,
        age: props.age
    };

    fs.writeFileSync("./data/data.json", JSON.stringify(dataToCreate));
}

function getData(){
    fs.readFileSync("./data/data.json");
}

module.exports = {createData, getData};