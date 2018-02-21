document.addEventListener('DOMContentLoaded', function(event){
	var view = document.getElementById('screen')
	var store = document.getElementsByClassName('buttonNum')
	var act = document.getElementsByClassName('operator')
	var clear = document.getElementById('buttonClear')
	var result = document.getElementById('equals')
	var numbers1 = []
	var numbers2 = []
	var operator = ''
	// var final = numbers1.length - 1
	// var viewer = ''
	var reset = false

	for (var i = 0; i < store.length; i++) {
		store[i].addEventListener('click',function (event) {
			//if (view.innerHTML == 'Sparta Calculator') {
				view.innerHTML = event.target.innerHTML;
				numbers1.push(event.target.innerHTML);
				// viewer = view.innerHTML
				if (operator) {
					view.innerHTML = event.target.innerHTML;
					numbers2.push(event.target.innerHTML);
				// 	view.innerHTML += event.target.innerHTML
				}
		})
	}

	for (var i = 0; i < act.length; i++) {
		act[i].addEventListener('click',function (event) {
			view.innerHTML = event.target.innerHTML;
			operator = event.target.innerHTML
			// viewer = view.innerHTML
			// console.log(view.innerHTML)
		})
	}

	result.addEventListener('click', function (event) {
		switch (operator) {
			case '+':
			view.innerHTML = parseInt(numbers1.join('')) + parseInt(numbers2.join(''));
			break;
			case '-':
			view.innerHTML = parseInt(numbers1.join('')) - parseInt(numbers2.join(''));
			break;
			case '*':
			view.innerHTML = parseInt(numbers1.join('')) * parseInt(numbers2.join(''));
			break;
			case '/':
			view.innerHTML = parseInt(numbers1.join('')) / parseInt(numbers2.join(''));
			break;
		}
		reset = true
		if (reset) {
			numbers1 = []
			numbers2 = []
			operator = ''
		}
	})

	clear.addEventListener('click', function (event) {
		view.innerHTML = 'Sparta Calculator'
	})

});