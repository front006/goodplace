$(document).ready(function () {
	//placeholder
	const formItems = document.querySelectorAll('.form-field');
	for (let item of formItems) {
		const thisParent = item.closest('.form-item');
		const thisPlaceholder = thisParent.querySelector('.fake-placeholder');

		//focus
		item.addEventListener('focus', function () {
			thisPlaceholder.classList.add('active');
		});

		//no focus
		item.addEventListener('blur', function () {

			if (item.value.length > 0) {
				thisPlaceholder.classList.add('active');
			} else {
				thisPlaceholder.classList.remove('active');
			}
		})
	};
	$(".phone").mask("+7(999)999-99-99");
	$.fn.setCursorPosition = function (pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};
	$('input[name="tel"]').click(function () {
		$(this).setCursorPosition(3); // set position number
	});
    //FORM VALIDATE
	$('.contact-form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			tel: {
				required: true,
			}
			
		},
		messages: {
			email: {
				required: 'Введите email',
				email: 'отсутсвует символ @'
			},
			
			tel: {
				required: 'Поле не должно быть пустым'
			}
		},
		submitHandler: function (form) {
			ajaxFormSubmit();
		}

	});

	//*************************************************** */
	// Функция AJAX запрса на сервер

	function ajaxFormSubmit() {

		let string = $(".contact-form").serialize(); // Соханяем данные введенные в форму в строку.

		//Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$(".contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});
		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	}



});