// console.log("hello from the obj js file");
//  object
// var car_color = "red"
// var car_brand = "mahindra"
// var car_type = "xuv"
// var car  = { 
//     name : "thar" ,
//     color : "black" ,
//     brand : "mahinadra",
//     type : "xuv",
//     tegline : function teg(){ 
//         console.log("this is thar 4*4 very power full car ");
        
//     }
// }

console.log('object in advance');

// var student = { 
//     name: "siddhant",
//     class : "10th",
//     strem : "maths"
// }


// var student2 = { 
//     name: "aman",
//     class : "11th",
//     strem : "maths"
// }

// var student = { 
//     name: "siddhant",
//     class : "10th",
//     strem : "maths"
// }
 function createStudent(name , classs , strem){ 
    return{ 
        name: name,
        class : classs,
        strem : strem
    }
 }


var student1 = createStudent( "siddhant" , 11 , "bio" );
console.log(student1);
var student2 = createStudent("harsh " , 9 , 'allsub')
console.log(student2);

