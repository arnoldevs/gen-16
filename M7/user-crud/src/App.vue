<template>
	<UserForm />
	<UserList />
</template>
<script>
// Import the UserForm and UserList components
import UserForm from "./components/UserForm.vue";
import UserList from "./components/UserList.vue";
export default {
	components: {
		UserForm,
		UserList,
	},
};
</script>
