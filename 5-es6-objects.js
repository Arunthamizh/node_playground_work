// *****  object property shorthand in ES6  ***** //

const name = 'Arunthamizh'
const age = 18

//  ***** normal object construction

const user = {
    name: name,
    age: age,
    location: 'pondicherry'
}

//  ****** shorthand object constrution

const sh_user = {
    name,
    age,
    location: 'pondicherry'
}

// call object property shorthand

console.log(sh_user);


//  *******************  end **********

// ****** object destructuring ***** //


const mobile = {
    m_name: 'Honor',
    model: '6x',
    price: 12000,
    offer: undefined,
}

//  ** normal to acccess the property in variable

// const m_name = mobile.m_name;
// const model = mobile.model;


// **** shorthand method for above

const { m_name, price: finalPrice_renamed, offer = '10%' } = mobile

console.log(finalPrice_renamed,'rrtrtrt' + offer)
//  *******************  end **********

//  ***************** start ***********
// object destructuring in the function

// const getMobile = ({ model, price }) => {
//     console.log(model, price);
// }

// getMobile(mobile);

//  *******************  end **********

