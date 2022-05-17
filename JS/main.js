let addBtn = document.querySelector(".add-task");
let taskInput = document.querySelector("input.taskInput");
let tasksArea=document.querySelector(".list-group")
let deleteTaskBtn=document.querySelector(".delete-tasks")
let deleteUl=document.querySelector(".uls")

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

document.addEventListener("keyup",function(e){
    if(e.keyCode==13){
       Add()
    }
})

// ('.bi-trash3').click(function(){
//     $(this).parent().remove(); // or $(this).closest("li").remove();
//   });

function Add(){
    if(taskInput.value.length>0){
    let newTaskElement="<li class='list-group-item items'><i class='bi bi-trash3'></i> "+" "+taskInput.value+"&nbsp &nbsp "+dateTime+"</li>"
    tasksArea.innerHTML+=newTaskElement;
    taskInput.value=""
    }
    else{
        alert("Empty")
    }
    
    deleteTaskBtn.classList.remove("d-none")
}

addBtn.onclick=()=>{
    Add()
}

// let trashIcon=document.querySelector(".trash-icon")
//this.taskInput.remove();

deleteTaskBtn.onclick=()=>{
    let selectLi=document.querySelectorAll(".items")
    for(let i=0;i<selectLi.length;i++){
        selectLi[i].remove();
    }
    deleteTaskBtn.classList.add("d-none")

}

