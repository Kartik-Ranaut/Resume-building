// variables declared
// about section variabes
let name;
let role;
let email;
let phone;
let address;
let linkedin;
//education section variable
let BoardHighSchool;
let percentageHighSchool;
let BoardIntermediate;
let percentageIntermediate;
let skills;

//projects section variables
let projectname;
let projectsDescription;
let githubrepolink;
let startDateProject;
let endDateProject;

//work
let organization;
let responsibility;
let locationWork;
let endDateWork;
let deswork;



let aboutsave = document.querySelector("#aboutsave");
let nameabout= document.querySelector("#name");
let roleabout=document.querySelector("#role");
let emailabout=document.querySelector("#email");
let phoneabout = document.querySelector("#phone");
let addressabout =document.querySelector("#address");
let linkedinabout=document.querySelector("#linkedin");

// about section in reume div
let resumeabout=document.querySelector(".aboutres")

let namejs=document.querySelector("#namejs");

let rolejs=document.querySelector("#rolejs");
let emailjs=document.querySelector("#emailjs");
let adderessjs=document.querySelector("#addressjs");
let phonejs=document.querySelector("#phonejs");
let linkedinjs=document.querySelector("#linkedinjs");
aboutsave.addEventListener('click',()=>{
    namejs.innerHTML=`${nameabout.value}`;
    rolejs.innerHTML=`${roleabout.value}`;
    emailjs.innerHTML=`${emailabout.value}`;
    phonejs.innerHTML=`${phoneabout.value}`;
    adderessjs.innerHTML=`${addressabout.value}`;
    linkedinjs.innerHTML=`${linkedinabout.value}`
})


//educational details
