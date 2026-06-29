function addtask(){
  const newtask=document.createElement('li')
  const tasklist=document.getElementById("tasklist")
  newtask.textContent= document.getElementById('inputTask').value;
  tasklist.appendChild(newtask);
  document.getElementById('inputTask').value=""
  deletetask(newtask)
}
function deletetask(newtask){
  const deletbtn=document.createElement('button')
  deletbtn.textContent="delete"
  newtask.appendChild(deletbtn)
  deletbtn.onclick=function(){
    newtask.remove()
  }
}