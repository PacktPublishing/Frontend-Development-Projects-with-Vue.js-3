<template>
  <div>
  <h1>About a user: {{$route.params.id}}</h1>
  <RouterLink :to="{ name: 'userinfo', params: { id: id }}">Info
    </RouterLink> |
  <RouterLink :to="`/user/${id}/extra`">Extra</RouterLink>

  <RouterView/>
  </div>

</template>
<script>
import users from '../assets/users.js';
export default {
  props: {
    id: Number
  },
  data() {
    return {
      name: '',
      age: 0
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const user = users[vm.id];
      vm.name = user.name;
      vm.age = user.age;
    })
  }
}
</script>

