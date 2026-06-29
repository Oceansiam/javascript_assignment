const people = ["Alice Anderson","Aaron Adams","Bella Brown", "Brian Black",
                "Cathy Carter","Charles Cooper","Diana Davis","Daniel Drake","Ella Evans",
                "Ethan Edwards","Fiona Fisher","Frank Foster","Grace Green","Gavin Gray",
                "Hannah Harris","Henry Hill","Isabella Ingram","Ian Irving","Jack Johnson",
                "Julia James"];
                
const result = people.filter((value) => {
    return value.charAt(0) == "A";
});

console.log("result = ", result);
