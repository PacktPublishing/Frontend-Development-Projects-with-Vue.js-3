export default {
	name(state) {
		return state.firstName + ' ' +state.lastName
	},
	totalPets(state) {
		return state.numCats + state.numDogs
	}

}