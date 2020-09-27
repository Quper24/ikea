const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const subcatalog = document.querySelector('.subcatalog');
const catalogList = document.querySelector('.catalog-list');

btnBurger.addEventListener('click', () => {
	catalog.classList.add('open');
	overlay.classList.add('active');
})
catalogList.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e.target.closest('.catalog-list__item'))
	if (e.target.closest('.catalog-list__item')) {
		subcatalog.classList.add('subopen')
	}
})
