export default {
	async updateFavoriteFilm(context, film) {
		try {
			let response = await fetch('https://swapi.dev/api/films?search='+encodeURIComponent(film));
			let data = await response.json();
			if(data.count === 1) context.commit('setFavoriteFilm', film);
			else console.log('Ignored setting non-Star Wars film '+film+' as favorite.'); 
		} catch(e) {
			console.error(e);
		}
	}

}