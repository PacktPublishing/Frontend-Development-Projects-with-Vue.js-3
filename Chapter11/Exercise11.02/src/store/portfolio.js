export default {
	state: {
		websites: [
			"https://www.raymondcamden.com",
			"https://codabreaker.rocks"
		]
	},
	mutations: {
		addSite(state, url) {
			state.websites.push(url);
		}
	}
}