var btn = document.getElementById('btn');
var formDiv = document.getElementById('formDiv');
var tabledata = document.getElementById('tabledata');
var SNo = 0;
btn.addEventListener('click', ()=>{
    formDiv.innerHTML = `<form>
    <input type="text" placeholder="Enter Your Name...."  required id="name">
    <input type="email" placeholder="Enter Your Email..." required  id="email">
    <input type="number" placeholder="Roll No..." id="RollNo">
    <button id="Add">Add</button>
    </form>`

    var add = document.getElementById('Add');
    var nameInput = document.getElementById('name');
    var email = document.getElementById('email');
    var rollNo = document.getElementById('RollNo')

    add.addEventListener('click' , (e)=>{
        if (nameInput.value != '' && email.value != '') {
            SNo++
        e.preventDefault();
            // formDiv.innerHTML = ``
            localStorage.setItem(`Student-${SNo}` , JSON.stringify([nameInput.value , email.value , rollNo.value]))
        nameInput.value = ''
        email.value = ''
        rollNo.value = ''
        writing()
        }
    })
})

function writing() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith(`Student-${SNo}`)) {
           var data = JSON.parse(localStorage.getItem(key))
        }
        
    }
    tabledata.innerHTML += ` <tr>
            <td>${SNo}</td>
            <td>${data[0]}</td>
            <td>${data[1]}</td>
            <td>${data[2]}</td>
        </tr>`
}

// var btn = document.getElementById('btn');
// var formDiv = document.getElementById('formDiv');
// var tabledata = document.getElementById('tabledata');
// var SNo = 0;

// // Create the form elements only once
// var form = `<form>
//     <input type="text" placeholder="Enter Your Name...."  required id="name">
//     <input type="email" placeholder="Enter Your Email..." required  id="email">
//     <input type="number" placeholder="Roll No..." id="RollNo">
//     <button id="Add">Add</button>
//     </form>`;

// formDiv.innerHTML = form;

// var add = document.getElementById('Add');
// var nameInput = document.getElementById('name');
// var email = document.getElementById('email');
// var rollNo = document.getElementById('RollNo')

// // Load data from local storage when the page loads
// loadData();

// add.addEventListener('click', (e)=>{
//     if (nameInput.value!= '' && email.value!= '') {
//         SNo++
//         e.preventDefault();
//         localStorage.setItem(`Student-${SNo}`, JSON.stringify([nameInput.value, email.value, rollNo.value]))
//         nameInput.value = ''
//         email.value = ''
//         rollNo.value = ''
//         loadData()
//     }
// })

// function loadData() {
//     tabledata.innerHTML = ''; // clear the table data
//     for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         if (key.startsWith('Student-')) {
//             let data = JSON.parse(localStorage.getItem(key));
//             tabledata.innerHTML += ` <tr>
//                 <td>${key.replace('Student-', '')}</td>
//                 <td>${data[0]}</td>
//                 <td>${data[1]}</td>
//                 <td>${data[2]}</td>
//             </tr>`
//         }
//     }
// }