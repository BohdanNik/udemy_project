let numberOfFilms;
function start() {
	numberOfFilms = prompt('Сколько фильмов вы посмотрели?','');

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('Сколько фильмов вы посмотрели?','');
	}
}
start();


let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++){
		let a = prompt('Один из последних просмотреннных фильмов?',''),
			b = prompt('На сколько оцениваете его?','');
		
		if (a == null || b == null || a == '' || b == '' || a.length > 50){
			i--;
		}
		else{
			personalMovieDB.movies[a] = b;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10){
		console.log('Просмотрено довольно мало фильмов');
	} 
	else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){console.log('Вы классический зритель');}
	else if(personalMovieDB.count > 30){console.log('Вы киноман');}
	else {console.log('Произошла ошибка');}
}
detectPersonalLevel();

function showMyDB() {
	if(personalMovieDB.privat == false){
		console.log(personalMovieDB);
	}
}
showMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++){
		let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
		personalMovieDB.genres[i-1] = genre;
	}
}
writeYourGenres();


