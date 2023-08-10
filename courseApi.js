var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
const port = process.env.PORT || 2450;

let customers = [
  {
    custId: 1,
    name: "ABC",
    password: "abc1234",
    role: "admin",
    email: "abc@gmail.com",
  },
  {
    custId: 2,
    name: "Willie",
    password: "willie1234",
    role: "student",
    email: "willie@gmail.com",
  },
  {
    custId: 3,
    name: "Jack",
    password: "jack1234",
    role: "faculty",
    email: "jack@gmail.com",
  },
  {
    custId: 4,
    name: "James",
    password: "james1234",
    role: "student",
    email: "james@gmail.com",
  },
  {
    custId: 5,
    name: "Harry",
    password: "harry1234",
    role: "faculty",
    email: "harry@gmail.com",
  },
  {
    custId: 6,
    name: "Tia",
    password: "tia1234",
    role: "student",
    email: "tia@gmail.com",
  },
  {
    custId: 7,
    name: "Aditya",
    password: "aditya123",
    role: "faculty",
    email: "aditya@gmail.com",
  },
  {
    custId: 8,
    name: "Sonu",
    password: "sonu1234",
    role: "student",
    email: "sonu@gmail.com",
  },
  {
    custId: 9,
    name: "Ellie",
    password: "ellie1234",
    role: "student",
    email: "ellie@gmail.com",
  },
  {
    custId: 10,
    name: "Gia",
    password: "gia1234",
    role: "faculty",
    email: "gia@gmail.com",
  },
];
let courses = [
  {
    courseId: 1,
    name: "ANGULAR",
    code: "ANG97",
    description: "All fundamentals of Angular 7",
    faculty: ["Daniel", "Jack","Aditya"],
    students: ["Sam","Willie"],
  },
  {
    courseId: 2,
    name: "JAVASCRIPT",
    code: "JS124",
    description: "Intoduction to javascript",
    faculty: ["Aditya"],
    students: ["James", "Joy", "Monu", "Rita"],
  },
  {
    courseId: 3,
    name: "REACT",
    code: "RCT56",
    description: "React Javascript library",
    faculty: ["Jack", "Gia"],
    students: ["Raima", "Rita", "Sonu", "James"],
  },
  {
    courseId: 4,
    name: "BOOTSTRAP",
    code: "BS297",
    description: "Bootstrap Designing Framework",
    faculty: [],
    students: ["James", "Tia", "Ellie"],
  },
  {
    courseId: 5,
    name: "CSS",
    code: "CS365",
    description: "Basic stylesheet language",
    faculty: [],
    students: ["James", "Rita", "Monica"],
  },
  {
    courseId: 6,
    name: "REST AND MICROSERVICES",
    code: "RM392",
    description: "Introduction to Microservices",
    faculty: [],
    students: ["Sam"],
  },
  {
    courseId: 7,
    name: "NODE",
    code: "ND725",
    description: "Introduction to Node",
    faculty: ["Sonia"],
    students: ["Saransh", "Shrey", "Monica","Willie"],
  },
];
let faculties = [
  { id: 5, name: "Daniel", courses: ["ANGULAR"] },
  { id: 4, name: "Sonia", courses: ["NODE"] },
  { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
  { id: 2, name: "Gia", courses: ["REACT"] },
  { id: 1, name: "Aditya", courses: ["ANGULAR"] },
];
let classes = [
  {
    classId: 1,
    course: "REACT",
    time: "07:45",
    endTime: "08:45",
    topic: "Redux",
    facultyName: "Jack",
  },
  {
    classId: 2,
    course: "ANGULAR",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Jack",
  },
  {
    classId: 3,
    course: "JAVASCRIPT",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Aditya",
  },
];
let students = [
  {
    id: 16,
    name: "Willie",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "NODE"],
  },
  {
    id: 15,
    name: "Tia",
    dob: "30-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: [],
  },
  {
    id: 14,
    name: "Apoorv",
    dob: "31-August-1998",
    gender: "male",
    about: "Want to learn new technologies",
    courses: [],
  },
  {
    id: 13,
    name: "Joy",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"],
  },
  {
    id: 12,
    name: "Rachel",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: [],
  },
  {
    id: 11,
    name: "Monica",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["CSS", "NODE"],
  },
  {
    id: 10,
    name: "Monu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"],
  },
  {
    id: 9,
    name: "Sonu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["REACT"],
  },
  {
    id: 8,
    name: "Raima",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["REACT"],
  },
  {
    id: 7,
    name: "Rita",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "REACT", "CSS"],
  },
  {
    id: 6,
    name: "Shrey",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["NODE"],
  },
  {
    id: 5,
    name: "Saransh",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: ["NODE"],
  },
  {
    id: 4,
    name: "Sanya",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: [],
  },
  {
    id: 3,
    name: "James",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"],
  },
  {
    id: 2,
    name: "Sam",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "REST AND MICROSERVICES"],
  },
  {
    id: 1,
    name: "Ellie",
    dob: "12-June-1992",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["BOOTSTRAP"],
  },
];

// FOR LOGIN

app.post("/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var cust = customers.find(function (item) {
    return item.email === email && item.password === password;
  });
  let custRec = {
    name: cust.name,
    email: cust.email,
    role: cust.role,
  };
  if (cust) res.send(custRec);
  else res.status(404).send("Incorrect Email or Password");
});

//   APIS USED BY ROLE ADMIN

// TO REGISTER NEW STUDENT/FACULTY

app.post("/register", function (req, res) {
  let maxId = customers.reduce(
    (acc, curr) => (curr.custId > acc ? curr.custId : acc),
    0
  );
  let newId = maxId + 1;
  if(req.body.role==="student"){
    let maxId=students.reduce((acc,curr)=>curr.id>acc?curr.id:acc,0);
    let newId=maxId+1;
    let obj={id:newId,name:req.body.name,gender:"",dob:"",courses:[]};
    students.unshift(obj);
  }
  if(req.body.role==="faculty"){
    let maxId=faculties.reduce((acc,curr)=>curr.id>acc?curr.id:acc,0);
    let newId=maxId+1;
    let obj={id:newId,name:req.body.name,courses:[]};
    faculties.unshift(obj);
  }
  const cust = { custId: newId, ...req.body };
  customers.unshift(cust);
  var customerRes = {
    name: req.body.name,
    role: req.body.role,
    email: req.body.email,
  };
  res.send(customerRes);
});

// TO GET ALL STUDENTS

app.get("/getStudents", function (req, res) {
  let course = req.query.course;
  let arr1 = students;
  if (course) {
    let courseArr = course.split(",");
    arr1 = arr1.filter((a1) =>
      courseArr.find((c1) => a1.courses.find((a) => a === c1))
    );
  }
  let resArr = pagination(arr1, +req.query.page);
  res.json({
    page: +req.query.page,
    items: resArr,
    totalItems: 3,
    totalNum: arr1.length,
  });
});

// TO GET ALL FACULTIES

app.get("/getFaculties",function(req,res){
    let course=req.query.course;
    let arr1=faculties;
    if(course){
        let coursArr=course.split(",");
        arr1=arr1.filter((a1)=>coursArr.find((c1)=>a1.courses.find((a)=>a===c1)));
    }
    let resArr=pagination(arr1, parseInt(req.query.page));
    res.json({
        page: +req.query.page,
        items: resArr,
        totalItems: 3,
        totalNum: arr1.length,
    })
})

// TO GET STUDENTS TO COURSE

app.get("/getStudentNames",function(req,res){
    let resArr=students;
    let stuArr=resArr.map((s1)=>s1.name);
    res.send(stuArr);
})

// TO GET FACULTY TO COURSE

app.get("/getFacultyNames",function(req,res){
    let facultyArr=faculties.map((f1)=>f1.name);
    res.send(facultyArr);
})

// TO GET ALL COURSES

app.get("/getCourses",function(req,res){
    res.send(courses);
})

// TO ADD STUDENT TO COURSE

app.put("/putCourse",function(req,res){
let index=courses.findIndex((c1)=>c1.name===req.body.name);
let stuArr=req.body.students;
let facultyArr=req.body.faculty;
courses[index]=req.body;
for(let i=0;i<stuArr.length;i++){
    let i1=students.findIndex((s1)=>s1.name===stuArr[i]); 
    let course=students[i1].courses.find((c1)=>c1===courses[index].name);
    if(!course){
        students[i1].courses.push(courses[index].name)
    }
}
for(let i=0;i<students.length;i++){
    let find=stuArr.includes(students[i].name);
    if(!find){
        let ind=students[i].courses.find((s1)=>s1===courses[index].name);
        if(ind){
            let i2=students[i].courses.findIndex((s1)=>s1===courses[index].name);
        students[i].courses.splice(i2,1);
        }
    }
}
for(let i=0;i<facultyArr.length;i++){
    let i1=faculties.findIndex((s1)=>s1.name===facultyArr[i]); 
    let course=faculties[i1].courses.find((c1)=>c1===courses[index].name);
    if(!course){
        faculties[i1].courses.push(courses[index].name)
    }
}
for(let i=0;i<faculties.length;i++){
    let find=facultyArr.includes(faculties[i].name);
    if(!find){
        let ind=faculties[i].courses.find((s1)=>s1===courses[index].name);
        if(ind){
            let i2=faculties[i].courses.findIndex((s1)=>s1===courses[index].name);
        faculties[i].courses.splice(i2,1);
        }
    }
}
res.send(req.body);
})
app.get("/courses/:courseId",function(req,res){
  let courseId=req.params.courseId;
  let course=courses.find((c1)=>c1.courseId===+courseId);
  res.send(course);
})
// FOR POSTING STUDENT DETAILS

app.post("/postStudentDetails",function(req,res){
    let index=students.findIndex((s1)=>s1.name===req.body.name);
    let obj={id:students[index].id,...req.body,courses:students[index].courses};
    students[index]=obj;
    res.send(students[index]);
})

// FOR GETTING STUDENT DETAILS

app.get("/getStudentDetails/:name",function(req,res){
    let name=req.params.name;
    let index=students.findIndex((s1)=>s1.name===name);
    let obj=students[index];
    res.send(obj);
})

// FOR GETTING STUDENT COURSE DETAILS

app.get("/getStudentCourse/:name",function(req,res){
    let name=req.params.name;
    let student=students.find((s1)=>s1.name===name);
    let courseArr=courses.filter((c1)=>student.courses.find((c)=>c===c1.name));
    res.send(courseArr);
})

// get student class

app.get("/getStudentClass/:name",function(req,res){
    let name=req.params.name;
    let index=students.findIndex((s1)=>s1.name===name);
    let courses=students[index].courses;
    let resArr=classes.filter((c1)=>courses.find((c)=>c===c1.course));
    console.log(resArr)
    res.send(resArr);
})

// API USED BY ROLE = FACULTY


// GET FACULTY COURSE
app.get("/getFacultyCourse/:name",function(req,res){
    let name=req.params.name;
    let index=faculties.findIndex((f1)=>f1.name===name);
    let courseArr=faculties[index].courses;
    let resArr=courses.filter((c1)=>courseArr.find((c)=>c===c1.name));
    res.send(resArr);
})

//GET FACULTY CLASS

app.get("/getFacultyClass/:name",function(req,res){
    let name=req.params.name;
    let index=faculties.findIndex((f1)=>f1.name===name);
    let resArr=classes.filter((c1)=>c1.facultyName===faculties[index].name);
    res.send(resArr);
})

// POST A NEW CLASS

app.post("/postClass",function(req,res){
    let maxId=classes.reduce((acc,curr)=>curr.classId>acc?curr.classId:acc,0);
    let newId=maxId+1;
    let obj={classId:newId,...req.body};
    let index1=faculties.findIndex((f1)=>f1.name===req.body.facultyName);
    faculties[index1].courses.push(req.body.course)
    let index=courses.findIndex((c1)=>c1.name===req.body.course);
    courses[index].faculty.push(req.body.facultyName);
    classes.push(obj);
    res.send(obj);
})

// EDIT A SCHEDULED CLASS
app.get("/getClass/:classId",function(req,res){
  let classId=req.params.classId;
  let index=classes.findIndex((c1)=>c1.classId===+classId);
  let item=classes[index];
  console.log(item);
  res.send(item);
})
app.put("/postClass/:classId",function(req,res){
    let classId=req.params.classId;
    let index=classes.findIndex((c1)=>c1.classId===+classId);
    let obj={classId:classId,...req.body};
    classes[index]=obj;
    res.send(classes[index]);
})
// PAGINATION FUNCTION
function pagination(obj, page) {
  const postCount = obj.length;
  const perPage = 10;
  var resArr = obj;
  resArr = resArr.slice(page * 3 - 3, page * 3);
  return resArr;
}
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
