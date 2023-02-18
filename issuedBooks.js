let issuedBooks =[];
let count=0;
document.getElementById('issueBook').addEventListener("click",function(){
  
   console.log('inside');
    issuedBooks.push({
        id:++count, book_name:document.getElementById('bkname').value, issued_to:document.getElementById('issuedTo').value, issued_time:new Date(), status:"Not Returned"
    })
    console.log(issuedBooks);
    var table = document.getElementById('tableBody')
    for(let index = issuedBooks.length-1;index<issuedBooks.length;index++){
      var row = ` <tr>
      <td>${issuedBooks[index].id}</td>
      <td>${issuedBooks[index].book_name}</td>
      <td>${issuedBooks[index].issued_to}</td>
      <td>${issuedBooks[index].issued_time}</td>
      <td>${issuedBooks[index].status}</td>
      </tr>`
      table.innerHTML+=row
    }
 document.getElementById('bkname').value=''
 document.getElementById('issuedTo').value=''
})

