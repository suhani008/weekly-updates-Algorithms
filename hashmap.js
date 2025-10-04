
const studentPassed ={
    "suhani":true,
    "rajver":false,
    "sahil" : true,
};
for (let student in studentPassed){
    if(studentPassed[student]){
        console.log(`${student } has passed `);
    }
    else{
        console.log(`${student} has failed`);
    }
}

