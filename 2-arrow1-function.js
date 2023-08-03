// const sum = function(name){
//     console.log('This is the list function',this.name)
// }

// const sum = (x) =>{
//     return x * x
// }

// const sum = (x) => x*x
// console.log(sum(2));


const events ={
    name:"marriage",
    vister:['asd','dsa','wwwww'],
    getName: function(){

        // standard function

        this.vister.forEach(function(data){
          //****     the below .this is not accessible in the standard function because they having own .this
            console.log(data + ' visited ' + this.name + this);
        })

        // arrow function

        // this.vister.forEach((data) => {
        //     //  *****  the below .this is accessible in the arrow function because () => don`t bind there own this value
        //     console.log(data + ' visited ' + this.name );
        // })
        }
    }

events.getName()
