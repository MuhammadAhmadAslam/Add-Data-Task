
    var add = document.getElementById('Add');
    var nameInput = document.getElementById('name');
    var email = document.getElementById('email');
    var rollNo = document.getElementById('RollNo')
    var tabledata = document.getElementById('tabledata');
       var SNo = localStorage.getItem('SNo') ? parseInt(localStorage.getItem('SNo')) : 0;


writing()





    add.addEventListener('click' , (e)=>{
        if (nameInput.value != '' && email.value != '') {
            SNo++
        e.preventDefault();
            localStorage.setItem(`Student-${SNo}` , JSON.stringify([nameInput.value , email.value , rollNo.value]))
               localStorage.setItem('SNo', SNo);
            nameInput.value = ''
            email.value = ''
            rollNo.value = ''
            writing()
        }
    })


function writing() {
    for (let i = 0; i <= SNo; i++) {
        let key = `Student-${i}`
        if (localStorage.getItem(key)) {
           var data = JSON.parse(localStorage.getItem(key))
           console.log(data);
              tabledata.innerHTML += ` <tr>
                      <td id='serialNo'>${i}</td>
                      <td>${data[0]}</td>
                      <td>${data[1]}</td>
                      <td>${data[2]}</td>
                  </tr>`
                  var serialNo = document.querySelectorAll('#serialNo')
                  for (let j = 0; j < i; j++) {
                    if (serialNo[j].innerHTML != i) {
                        localStorage.setItem('SNo', i);
                    }
                    
                  }
        }
    }
}




// var add = document.getElementById('Add');
// var nameInput = document.getElementById('name');
// var email = document.getElementById('email');
// var rollNo = document.getElementById('RollNo');
// var tabledata = document.getElementById('tabledata');
// var SNo = localStorage.getItem('SNo') ? parseInt(localStorage.getItem('SNo')) : 0;

// writing();

// add.addEventListener('click', (e) => {
//     if (nameInput.value != '' && email.value != '') {
//         e.preventDefault();
//         SNo++;
//         localStorage.setItem(`Student-${SNo}`, JSON.stringify([nameInput.value, email.value, rollNo.value]));
//         localStorage.setItem('SNo', SNo);
//         nameInput.value = '';
//         email.value = '';
//         rollNo.value = '';
//         writing();
//     }
// });

// function writing() {
//     tabledata.innerHTML = ''; // Clear existing table data
//     for (let i = 1; i <= SNo; i++) { // Iterate from 1 to SNo
//         let key = `Student-${i}`;
//         if (localStorage.getItem(key)) {
//             var data = JSON.parse(localStorage.getItem(key));
//             tabledata.innerHTML += `<tr>
//                     <td>${i}</td>
//                     <td>${data[0]}</td>
//                     <td>${data[1]}</td>
//                     <td>${data[2]}</td>
//                 </tr>`;
//         }
//     }
// }























// var btn = document.getElementById('btn');
// var formDiv = document.getElementById('formDiv');
// var tabledata = document.getElementById('tabledata');
// var SNo = 0;


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