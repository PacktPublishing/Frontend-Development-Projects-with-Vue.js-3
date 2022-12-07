import { reactive } from 'vue';

export const store = reactive({
	name:'',
	occupation:'',
	clear() {
		this.name = '';
		this.occupation = '';
	}
});