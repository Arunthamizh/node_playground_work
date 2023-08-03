"use strict";

// const sum = function(name){
//     console.log('This is the list function',this.name)
// }
// const sum = (x) =>{
//     return x * x
// }
// const sum = (x) => x*x
var events = {
  name: "marriage",
  vister: ['asd', 'dsa', 'wwwww'],
  getName: function getName() {
    var _this = this;

    // standard function
    // this.vister.forEach(function(data){
    //                       //****     the below .this is not accesable in the standerd function because they having own .this
    //     console.log(data + ' visited ' + this.vister);
    // })
    // arrow function
    this.vister.forEach(function (data) {
      //  *****  the below .this is accesable in the arrow function because () => don`t bind there own this value
      console.log(data + ' visited ' + _this.name);
    });
  }
}; // console.log(sum(2));

events.getName();