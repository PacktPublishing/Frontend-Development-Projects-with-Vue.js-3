import { reactive } from 'vue';

export const store = reactive({
	name:'',
	occupation:'',
	organization: '',
	email: '',
	phonenumber: '',
	clear() {
		this.name = '';
		this.occupation = '';
		this.organization = '';
		this.email = '';
		this.phonenumber = '';
	}
});