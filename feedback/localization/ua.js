module.exports = {
	'GREETINGS': 'Hola amigo👋\n\n' +
		'Я - Binary авто-тест 🤖. Готовий отримати фідбек про свою роботу?\n\n' +
    'Хочу зазначити, що я оцінюю тільки функціонал, за який ти можеш отримати максимум ${total} балів.\n' +
		'Код перегляне розробник із байнарі, але тільки за умови, що твоя робота буде бомбезною 💣💥',
	'GO_THROUGH_THE_LIST': 'Давай пройдемось по пунктах 📔',
	'RESULT_PERFECT': 'Чудово! Всі тести пройдено 🎉. Так тримати!\n\nТвій поточний бал: ${score}/${total}🦜',
	'RESULT_GOOD': 'Непогана робота 👍. Але деякий функціонал зламався. Якщо в тебе ще залишилися спроби, то було б добре виправити помилки 🛠️\n\nТвій поточний бал: ${score}/${total}🦜',
	'RESULT_BAD': 'Можна було б краще 🤷. Якщо в тебе залишились спроби, то виправ помилки. Я вірю в тебе 🙏\n\nТвій поточний бал: ${score}/${total}🦜',
	'RESULT_WORST': 'Здається суттєва частка функціоналу перестала працювати як треба.\n' +
		'Проте може буте й таке, що я не зміг отримати доступ до репозиторію. Перевір чи коректно вказаний лінк: https://github.com/[твій нікнейм]/homepage\n' +
		'Також перевір, чи є публічний доступ до репозиторія.\n' +
		'Якщо і це не допомогло, то напиши до служби підтримки.',

    'Bookings Page': 'Bookings Page',
    'booking should contain title, date, number of guests and final price': 'booking should contain title, date, number of guests and final price',
    'should cancel a booking on cancel button click': 'should cancel a booking on cancel button click',
    'should sort bookings by date ascending': 'should sort bookings by date ascending',

    'Footer': 'Footer',
    'should be visible on main page': 1,
    'should be visible on sign in page': 1,
    'should be at the bottom of a page': 1,

    'Header': 'Header',
    'should be visible on main page': 1,
    'should have navigation on main page': 1,
    'should not have navigation on sign in page': 1,
    'should navigate to main page on logo click': 1,
    'should navigate to bookings page on bookings item click': 1,
    'should show profile navigation on profile item hover': 1,
    'profile navigation should have username': 1,
    'should navigate to sign in page on sign out button click': 1,

    'Main Page': 'Main Page',
    'trip card should contain title, image, duration, level, price and link to trip page': 1,
    'should filter cards by search': 1,
    'should filter cards by level': 1,
    'should filter cards by duration': 1,
    'should apply multiple filters at the same time': 1,
    'should handle filters reset': 1,

    'Routing': 'Routing',
    'should have /sign-up route for sign up page': 1,
    'should have /sign-in route for sign in page': 1,
    'should have / route for main page': 1,
    'should have /trip/:id route for trip page': 1,
    'should have /bookings route for bookings page': 1,
    'should navigate to main page on unknown route': 1,

    'Sign In Page': 'Sign In Page',
    'form should contain email and password fields': 1,
    'should not submit form when email is missing': 1,
    'should not submit sign in form when password is invalid': 1,
    'should navigate to main page after form submit': 1,
    'should navigate to sign up page on sign up button click': 1,

    'Sign Up Page': 'Sign Up Page',
    'form should contain full name, email and password fields': 1,
    'should not submit form when full name is missing': 1,
    'should not submit form when email is missing': 1,
    'should not submit sign in form when password is invalid': 1,
    'should navigate to main page after form submit': 1,
    'should navigate to sign in page on sign in button click': 1,


    'Trip Page': 'Trip Page',
    'should contain title, image, duration, level, price and description of a trip': 1,
    'should open modal on book a trip button click': 1,
    'book a trip modal should contain title, duration, level, date field, guests field and price': 1,
    'should show total price when changing guests in book a trip modal': 1,
    'should not submit modal when date is not in the future': 1,
    'should not submit modal when number of guests is invalid': 1,
    'should close modal after form submit': 1,
    'should add one more item to bookings page after modal form submit': 1,
    'should close modal on close button click': 1,
};
