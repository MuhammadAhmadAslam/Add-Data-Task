
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
            window.location.reload()
        }
    })


function writing() {

    for (let i = 0; i <= SNo; i++) {
        let key = `Student-${i}`
        if (localStorage.getItem(key)) {
           var data = JSON.parse(localStorage.getItem(key))
           var tr = document.createElement('tr')
            tabledata.appendChild(tr)
            const table = document.getElementsByTagName('tr');

            tr.innerHTML += ` 
                    <td id='serialNo'></td>
                    <td>${data[0]}<i class="fa-solid fa-trash-can" id='deleteIcon'></i></td>
                    <td>${data[1]}</td>
                    <td>${data[2]}</td>
                `
                  window.location.reload
                  var serialNo = document.querySelectorAll('#serialNo')
                  var deleteIcon = document.querySelectorAll('#deleteIcon')
                  deleteIcon.forEach((icon, index)=>{
                        icon.addEventListener('click' , ()=>{
                            tabledata.removeChild(tr);
                            localStorage.removeItem(`Student-${i}`)
                            window.location.reload()
                        })
                  })
        }
    }
}





// alert('Your table has ' + iRowCount + ' rows.');