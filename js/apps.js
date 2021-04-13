'use strict';
// create a constructor 
// set items into the locat storage 
// create a function for the randon salary 
//create the table 
// create an event listener 


function Employee (name , email , department)
{
    this.name= name ;
    this.email= email;
    this.department= department; 
    Employee.all.push(this);
    localStorage.setItem( 'employee',JSON.stringify(Employee.all));
}
Employee.all = [] ;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


let nameEl = document.getElementById('name');
let tableEl = document.getElementById('table');
let formEl = document.getElementById('form');
let emailEl = document.getElementById('email');
let departmentEl = document.getElementById('select');




formEl.addEventListener('submit' , renderFunc);

let data = JSON.parse(localStorage.getItem('employee'));

if (data !== null)
{
    Employee.all= data;
}

let x= 1 ; 

function renderFunc(e)
{

    e.preventDefault();
    let emp = new Employee (nameEl.value , emailEl.value , departmentEl.value);
    // console.log (nameEl.value , emailEl.value , departmentEl.value);
    
    x++;

    window.location.reload();

   

}




let trEl = document.createElement('tr');
tableEl.append(trEl); 
 let tdEl1 = document.createElement('td');
 trEl.append(tdEl1);
 tdEl1.textContent= "Name";

 let tdEl2 = document.createElement('td');
 trEl.append(tdEl2);
 tdEl2.textContent= "Email";

let tdEl3 = document.createElement('td');
 trEl.append(tdEl3);
 tdEl3.textContent= "Department";

 let tdEl4 = document.createElement('td');
 trEl.append(tdEl4);
 tdEl4.textContent= "Salary";

let sum = 0 ; 
let totalArr = [];
 for (let i= 0 ; i <Employee.all.length ; i ++)
 {
     let trEl2 = document.createElement('tr');
     tableEl.append(trEl2);

     let newTd = document.createElement('td');
     tableEl.append(newTd);
     newTd.textContent = Employee.all[i].name ; 

     let newTd2 = document.createElement('td');
     tableEl.append(newTd2);
     newTd2.textContent = Employee.all[i].email ; 

     let newTd3 = document.createElement('td');
     tableEl.append(newTd3);
     newTd3.textContent = Employee.all[i].department ; 

    let newTd4 = document.createElement('td');
     tableEl.append(newTd4);
     newTd4.textContent = getRandomInt (100,500)  ; 
      totalArr.push(Number( newTd4.textContent));
      sum += totalArr[i];

 }

 let rightDiv = document.querySelector('.right');
 let totalEl = document.createElement('h3');
 rightDiv.append(totalEl);
 totalEl.textContent= ` Total = ${sum}`