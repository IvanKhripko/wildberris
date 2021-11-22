const search = function () {
    const cartBtn = document.querySelector('.button-cart');
    const input = document.querySelector('.search-block > input');
    // console.log(input);
    const searchBtn = document.querySelector('.search-block > button');
    // console.log(searchBtn);

    input.addEventListener('input', (event) => {
        console.log(event.target.value);
    })
}

search();