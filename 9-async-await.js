

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b<0){
                return reject('number should be in positive')
            }
            resolve(a + b)
        }, 2000)
    })
}


// async function and use await
// That async function retuen the promise
// promise method then and
const dowork = async()=>{
// return 'Arunthamizh' //then
// throw new Error('Something went wrong') //catch
    const sum = await add(9, 80);
    const sum2 = await add(sum, 9);
    const sum3 = await add(sum2, 10);
    return sum3

}



dowork().then((result)=>{
console.log(result)
}).catch((e)=>{
console.log('e',e);
})

