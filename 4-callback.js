setTimeout(()=>{
console.log('callfunction')
},2000);

const names = ['ss','sss','gsda']

const namesh = names.filter((name)=>{
    return name.length <= 4
});

// const geocode = (address, callback)=>{
// setTimeout(()=> {
//     const data = {
//         latitude: 0,
//         longtitude: 0
//     }
//     const data1 =1
//    callback(data);
// },2000);

// }

// geocode('pondy',(data1)=>{
//     console.log(data1)
// })


// *****************************

const add = (num1,num2,sum)=>{
    setTimeout(()=>{
        sum(num1+num2);
    },2000)

    }

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
