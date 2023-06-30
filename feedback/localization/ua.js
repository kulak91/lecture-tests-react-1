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
    'booking should contain title, date, number of guests and final price': 'Бронювання має містити назву, дату, кількість гостей та остаточну ціну',
    'should cancel a booking on cancel button click': 'Слід скасувати бронювання після натискання кнопки скасування',
    'should sort bookings by date ascending': 'Має сортувати бронювання за датою в порядку зростання',

    'Footer': 'Footer',
    'should be visible on main page': 'Має бути видно на головній сторінці',
    'should be visible on sign in page': 'Має бути видно на сторінці входу',
    'should be at the bottom of a page': 'Має бути внизу сторінки',

    'Header': 'Header',
    'should be visible on main page': 'Mає бути видно на головній сторінці',
    'should have navigation on main page': 'Повинна мати навігацію на головній сторінці',
    'should not have navigation on sign in page': 'Не має мати навігацію на сторінці входу',
    'should navigate to main page on logo click': 'Повинен перейти на головну сторінку після натискання логотипу',
    'should navigate to bookings page on bookings item click': 'Повинен перейти на сторінку бронювань, клацнувши елемент бронювання',
    'should show profile navigation on profile item hover': 'Має відображати навігацію профілю при наведенні курсора на елемент профілю',
    'profile navigation should have username': 'У навігації профілю має бути ім’я користувача',
    'should navigate to sign in page on sign out button click': 'Повинен перейти на сторінку входу після натискання кнопки виходу',

    'Main Page': 'Main Page',
    'trip card should contain title, image, duration, level, price and link to trip page': 'Карта подорожі повинна містити назву, зображення, тривалість, рівень, ціну та посилання на сторінку подорожі',
    'should filter cards by search': 'Має фільтрувати картки за пошуком',
    'should filter cards by level': 'Має фільтрувати картки за рівнем',
    'should filter cards by duration': 'Має фільтрувати картки за тривалістю',
    'should apply multiple filters at the same time': 'Є можливість застосувати кілька фільтрів одночасно',
    'should handle filters reset': 'Має обробляти скидання фільтрів',

    'Routing': 'Routing',
    'should have /sign-up route for sign up page': 'Повинен мати маршрут /sign-up для сторінки реєстрації',
    'should have /sign-in route for sign in page': 'Повинен мати маршрут /signin для сторінки входу',
    'should have / route for main page': 'Повинен мати / маршрут для головної сторінки',
    'should have /trip/:id route for trip page': 'Повинен мати маршрут /trip/:id для сторінки подорожі',
    'should have /bookings route for bookings page': 'Повинен мати маршрут /bookings для сторінки бронювань',
    'should navigate to main page on unknown route': 'Має перейти на головну сторінку невідомим маршрутом',

    'Sign In Page': 'Sign In Page',
    'form should contain email and password fields': 'Форма повинна містити поля електронної пошти та пароля',
    'should not submit form when email is missing': 'Не повинен надсилати форму, якщо електронна адреса відсутня',
    'should not submit sign in form when password is invalid': 'Не повинен надсилати форму входу, якщо пароль недійсний',
    'should navigate to main page after form submit': 'Має перейти на головну сторінку після надсилання форми',
    'should navigate to sign up page on sign up button click': 'Має перейти на сторінку реєстрації після натискання кнопки реєстрації',

    'Sign Up Page': 'Sign Up Page',
    'form should contain full name, email and password fields': 'Форма повинна містити повне ім’я, адресу електронної пошти та пароль',
    'should not submit form when full name is missing': 'Не повинно надсилати форму, якщо відсутнє повне ім’я',
    'should not submit form when email is missing': 'Не повинно надсилати форму, якщо електронна адреса відсутня',
    'should not submit sign in form when password is invalid': 'Не повинно надсилати форму входу, якщо пароль недійсний',
    'should navigate to main page after form submit': 'Має перейти на головну сторінку після надсилання форми',
    'should navigate to sign in page on sign in button click': 'Має перейти на сторінку входу після натискання кнопки входу',


    'Trip Page': 'Trip Page',
    'should contain title, image, duration, level, price and description of a trip': 'має містити назву, зображення, тривалість, рівень, ціну та опис поїздки',
    'should open modal on book a trip button click': 'Після натискання кнопки «Забронювати поїздку» має відкритися модальне вікно',
    'book a trip modal should contain title, duration, level, date field, guests field and price': 'Модальне вікно бронювання поїздки має містити назву, тривалість, рівень, поле дати, поле гостей і ціну',
    'should show total price when changing guests in book a trip modal': 'Має вказувати загальну вартість під час зміни гостя в режимі бронювання поїздки',
    'should not submit modal when date is not in the future': 'Не має сабмітити модальне вікно, якщо дата не в майбутньому',
    'should not submit modal when number of guests is invalid': 'Не має сабмітити модальне вікно, якщо кількість гостей недійсна',
    'should close modal after form submit': 'Слід закрити модальне вікно після надсилання форми',
    'should add one more item to bookings page after modal form submit': 'Повинно додати ще один товар на сторінку бронювання після надсилання модальної форми',
    'should close modal on close button click': 'guests закрити  модальне вікно після натискання кнопки закриття',
};
