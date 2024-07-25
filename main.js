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
    return shop.innerHTML = shopData.map(function(each){
        return `<div id=${each.id} class='item'>
                    <img alt="food-Image" src=${each.img}>
                    <div>\

                    <h1>${each.name}</h1>
                        <p>$${each.price}</p></div>
                </div>
                `
    }).join('');
}


// popo();

// function popo () {
//     return tomiBoy.innerHTML = shopData.map(function(toms){
//         return `<h1>${toms.name}</h1>`
//     }).join('');
// }

// console.log(shopData.map(function(toms){
//     return toms.name;
// }).join(' '));
