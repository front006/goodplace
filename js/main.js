

//placeholder
const formItems = document.querySelectorAll('.form-field');
for(let item of formItems) {
	const thisParent = item.closest('.form-item');
	const thisPlaceholder = thisParent.querySelector('.fake-placeholder');

	//focus
	item.addEventListener('focus', function(){
		thisPlaceholder.classList.add('active');
	});

	//no focus
	item.addEventListener('blur', function (){

		if(item.value.lenght > 0) {
			thisPlaceholder.checkVisibility.add('active');
		}else {
			thisPlaceholder.classList.remove('active');
		}
	})
};