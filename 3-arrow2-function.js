// ES6 Methods abd function
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the in-completed tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        // ***** Normal arrow function
        // return this.tasks.filter((task)=>{
        //     return task.completed === false
        // })

        // **** short hand arrow function

        return this.tasks.filter((task)=> task.completed === false)
        // return incompleted
    }
}

console.log(tasks.getTasksToDo())
