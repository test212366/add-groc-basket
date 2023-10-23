let cart = {
	'bread': {
		'price': 400
	},
	'eggs': {
		'price': 1000
	},
}
// let out = '<div class="pricing-table tow">'
// for (let key in cart) {
// 	out += `<div class="price">${cart[key]['price']}</div>`
// }
// out += `</div>`

// document.querySelector('cardz').innerHTML = out
//динамический вывод товаров

const data = {} //товары в корзину data
document.querySelector('.tovar').addEventListener('click', event => {
	if (event.target.classList.contains('plus')) {
		let id = event.target.dataset['id']
		if (data[id] !== undefined) {
			data[id]['count']++
		}
		else {
			data[id] = cart[id]
			data[id]['count'] = 1
		}
		localStorage.setItem('cart', JSON.stringify(data))
		console.log(data)
	}
})