class Student 
{ 
studcode:number; 
studname:string; 
grade:string; 
constructor(code:number,name:string,grade:string){ 
this.studname=name; 
this.studcode=code; 
this.grade=grade; 
} 
display():void{ 
console.log("name:",this.studname); 
console.log("code:",this.studcode); 
console.log("grade:",this.grade); 
} 
} 
let obj1 =new Student(9491825377,'dinesh','A+'); 
obj1.display();