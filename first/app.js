const inputData  = document.querySelector('input')
const submit = document.querySelector('#submit')
const form = document.querySelector('.form')
const taskdiv = document.querySelector('.tasks')
// storing inputs
let task = [];
// listing the form submission
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newTask = inputData.value
    inputData.value = ''
    // handling input error
    if(!newTask){
        alert("please input value !!!")
    }
    task= [...task, newTask];
    if(task){
        const alltask = task.map(tasks=>{
        return (
            `<div>
                <p>${tasks}</p>
                <button>remove</button>
            </div>              
                `
        )    
    }).join('')
    taskdiv.innerHTML = alltask
    }
})