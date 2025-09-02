const addBtn = document.getElementById('add-btn');
const countBtn = document.getElementById('count-btn');
const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const cartShoes = document.getElementById('cartShoes');
const cartServiced = document.querySelector('.cartServiced');
const goods = document.querySelector('.goods');
const cartCounter = document.getElementById('cartCounter');
const burger = document.querySelector('.bx-menu');
const navbar = document.querySelector('.navbar');
const backBtn = document.querySelector('.nav-back');
let count = 0

burger.addEventListener('click', () => {
    navbar.classList.toggle('open')
    burger.style.display = 'none'
})

backBtn.addEventListener('click', () => {
    navbar.classList.toggle('open')
    burger.style.display = 'block'
})

cartCounter.style.display = 'none';

cartShoes.addEventListener('click', () => {
    cartServiced.classList.toggle('show')
})


plusBtn.addEventListener('click', function () {
    count += 1;
    countBtn.textContent = count;
    if (count > 0) {
        cartCounter.style.display = 'inline'
        cartCounter.textContent = count
    }
});


minusBtn.addEventListener('click', function () {
    if (count > 0) {
        count -= 1;
        countBtn.textContent = count;
        cartCounter.style.display = 'inline'
        cartCounter.textContent = count
    }
    if (count === 0) {
        cartCounter.style.display = 'none'
    }
});

const productImages = document.querySelectorAll('.scroll-image img');
const mainImage = document.querySelector('.main-image');


productImages.forEach(image => {
    image.addEventListener('click', () => {
        mainImage.innerHTML = '';
        const img = image.getAttribute('src');
        const reImage = img.replace('-thumbnail', '')
        const imgSrc = document.createElement('img');
        imgSrc.setAttribute('src', reImage)
        mainImage.appendChild(imgSrc)
    })
})

const mainImageSrc = document.querySelector('.main-image img')
mainImageSrc.addEventListener('click', () => {
    console.log(mainImageSrc.getAttribute('src'))
    
})

addBtn.addEventListener('click', () => {
    goods.innerHTML = ''
    const good = document.createElement('div');
    good.className = 'good';
    good.innerHTML = `
    <img style="width: 40px; height: 40px;border-radius: 5px;" src="${mainImage.querySelector('img').getAttribute('src')}">
    <div class="information">
        <p style="font-size: 14.5px;">Fall Limited Edition Sneakers</p>
        <p id="priceGood">$125.00 x <span id="counterGood">${count}</span> <strong style="color: black;">$${count * 125}</strong></p>
    </div>
    <i id="deleteBtn" class="bx bx-trash"></i>
    `
    const btn = document.createElement('div');
    btn.innerHTML = `
    <button id="checkGood">Checkout</button>
    `

    if (count === 0) {
        const p = document.createElement('div');
        p.innerHTML = `
        <p>Your Cart is Empty</p>
        `
        goods.appendChild(p)
        goods.removeChild(good)
    }

    goods.appendChild(good)
    goods.appendChild(btn)

    const deleteBtn = good.querySelector('#deleteBtn');
    deleteBtn.addEventListener('click', () => {
        count = 0
        countBtn.textContent = count
        goods.removeChild(good);
        goods.removeChild(btn)
        cartCounter.style.display = 'none'
    })
})

