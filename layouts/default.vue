<template>
	<section>
		<nuxt />
	</section>
</template>
<script>
import Vue from 'vue'
export default {
	head() {
		return {
			title: `Nuxt boilerplate`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Nuxt boilerplate || A nuxt starting point',
				},
			],
		}
	},
}
</script>
<style lang="scss">
:root {
	--color: #007fff;
	--mont: Montserrat;
	--rob: Roboto;
	--pop: Poppins;
	--met: 'Meticula';
	--sofia: 'Sofia Pro';
	--sans: sans-serif;
	--nuni: Nunito;
	--gradient: linear-gradient(to right, #0055ff 0, #00aaff 100%);
	--grad-rev: linear-gradient(to right, #00aaff 0, #0055ff 100%);
	--bg-gradient-orange: linear-gradient(
		87deg,
		#fb6340 0,
		#fbb140 100%
	) !important;
	--bg-gradient-red: linear-gradient(87deg, #ff0055 0, #f56036 100%) !important;
	--bg-gradient-green: linear-gradient(
		87deg,
		#2dce89 0,
		#2dcecc 100%
	) !important;
	--bg-gradient-info: linear-gradient(
		87deg,
		#11cdef 0,
		#1171ef 100%
	) !important;
	--orange: #fbb140 !important;
	--red: #ff0055 !important;
	--green: #2dce89 !important;
	--white: #fff;
	--light_grey: #ddd;
	--primary: #0055ff;
	--secondary: #00aaff;
	--darkBluey: #293c58;
	--dark: #262d4f;
	--darkVariant: #2c355e;
	--charcoal: #333;
}
html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}
body {
	font-family: var(--met);
	overflow-x: hidden;
}
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
a {
	text-decoration: none !important;
	color: #007fff;
}
section {
	position: relative;
}
ul {
	padding-left: 0;
}
li {
	list-style: none;
}
</style>
