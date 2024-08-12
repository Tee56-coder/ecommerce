const shop = document.getElementById('shop');
// const tomiBoy = document.getElementById('tomiboy');

const shopData = [
    {
        img: 'https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9sbG9mJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D',
        id: '1',
        name: 'Jollof rice',
        price: 350
    },
    {
        img: 'https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9sbG9mJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D',
        id: '2',
        name: 'Spaghetti and Turkey',
        price: 350
    },
    {
        img: 'https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9sbG9mJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D',
        id: '3',
        name: 'Dodo and Beans',
        price: 350
    },
    {
        img: 'https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9sbG9mJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D',
        id: '4',
        name: 'Eba and Egusi',
        price: 350
    },
    {
        img: 'https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9sbG9mJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D',
        id: '5',
        name: 'Fried Rice',
        price: 350      
    },
    {
        img: 'https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9sbG9mJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D',
        id: '6',
        name: 'potato and Gizzard',
        price: 350
    },

]


populateShop();

// const populateShop = function () {

// }

function populateShop() {
    return shop.innerHTML = shopData.map(function(shopItem){
        // return `<div id=${shopItem.id} class='item'>
        //             <img alt="food-Image" src=${shopItem.img}>
        //             <div>\

        //             <h1>${shopItem.name}</h1>
        //                 <p>$${shopItem.price}</p></div>
        //         </div>
        //         `
        
        const { id, img, name, price } = shopItem;
        return `<div id=${id} class='item'>
                    <img alt="food-Image" src=${img}>
                    <div>\

                    <h1>${name}</h1>
                        <p>$${price}</p></div>
                </div>
                `
    }).join('');
}


// // popo();

// // function popo () {
// //     return tomiBoy.innerHTML = shopData.map(function(toms){
// //         return `<h1>${toms.name}</h1>`
// //     }).join('');
// // }

// // console.log(shopData.map(function(toms){
// //     return toms.name;
// // }).join(' '));


// const toms = {
//     name: 'Tomsky',
//     type: 'human',
//     gender: 'male',
//     place: 'nigeria',
//     thing:  125
// }

// console.log();

// const myProps = {
//     name: toms.name,
//     type: toms.type,
//     thing: toms.thing
// }

// console.log(myProps.type);

// DESTRUCTURING
// const { name, type, gender, place, thing } = toms

// console.log(name);

// for (bokks of shopData) {
//     const { id, name, price, img } = bokks;

//     console.log(id);
// }

// for (let i = 0; i < shopData.length; ++i) {
//     // console.log(shopData[i]);

//     const { id, name, price, img } = shopData[i]

//     if(name !== 'Eba and Egusi') continue;
//     console.log(name);

// }


// console.log(shopData[4]);

// Quick Intro to Spread Operator

const spreadExample = [...shopData, 'toms', 'josh']

console.log(spreadExample);