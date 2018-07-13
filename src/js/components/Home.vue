<template>
<div id="home-wrapper">
	<sidebar />
	<main-content />
</div>
</template>



<script>

let data = function() {
	return {
		input: ``
	}
};

let components = {
	sidebar: require('./Sidebar.vue'),
	mainContent: require('./Content.vue'),
};

export default {
	data,
	components
}
</script>