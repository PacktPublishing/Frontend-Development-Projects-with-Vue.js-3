export default {
	addCat(state) {
		state.numCats++;
	},
	addDog(state) {
		state.numDogs++;
	},
	setFirstName(state, name) {
		if(name !== '') state.firstName = name;
	},
	setLastName(state, name) {
		if(name !== '') state.lastName = name;
	},
	setFavoriteFilm(state, film) {
		if(film !== '') state.favoriteFilm = film;
	}

}