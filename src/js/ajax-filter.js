function ajaxSend(url, params) {
	// Отправляем запрос
	fetch(`${url}?${params}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	})
		.then(response => response.json())
		.then(json => render(json))
		.catch(error => console.error(error))
}

// Filter movies
const forms = document.querySelector('form[name=filter]');

forms.addEventListener('submit', function (e) {
	// Получаем данные из формы
	e.preventDefault();
	let url = this.action;
	let params = new URLSearchParams(new FormData(this)).toString();
	ajaxSend(url, params);
});

function render(data) {
	// Рендер шаблона
	let template = Hogan.compile(html);
	let output = template.render(data);

	const div = document.querySelector('.popular-films__row-main');
	div.innerHTML = output;
}

let html = '\
{{#movies}}\
	  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 mb-auto d-block">\
                <a href="/movie/{{ movie.pk }}/" class="popular-films__item">\
						<img src = "{{ movie.poster_big }}" alt = "{{ movie.title }}" class="w-100 img-fluid">\
                    <div class="popular-films__raitings raitings">\
                      {% if movie.raitings_kp == None %}\
                      <div class="raitings__kp" style="display: none"></div>\
                      {% else %}\
                      <div class="raitings__kp">kp: {{ movie.raitings_kp }}</div>\
                      {% endif %}\
                      {% if movie.raitings_imdb == None %}\
                      <div class="raitings__imdb" style="display: none"></div>\
                      {% else %}\
                      <div class="raitings__imdb">imdb: {{ movie.raitings_imdb }}</div>\
                      {% endif %}\
                    </div>\
                    <div class="popular-films__body">\
                      <div class="popular-films__title-film">{{ movie.title }}</div>\
                      <div class="popular-films__years-film">{{ movie.year }}</div>\
                      <div class="popular-films__country-film">{{ movie.country }}</div>\
                    </div>\
                </a>\
            </div>\
{{/movies}}'
