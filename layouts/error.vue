<template>
	<section>
		<div id="lost">
			<div class="lost">
				<h1>404</h1>
				<img :src="img" alt="Lost Tourist">
				<h2>This Page Doesn't Exist!</h2>
				<h4>It Seems you're Lost</h4>
				<nuxt-link to="/" class="btn">Go To Home</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	layout: 'error-layout',
	data() {
		return {
			img: '/lost-tourist.png',
		}
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins/index.scss';
#lost {
	margin: 7em 0 3em 0;
	@include flexColCenter;
	.lost {
		@include flexColCenterBoth;
		img {
			width: 250px;
			height: auto;
			margin: 20px 0;
		}
		h1 {
			font-family: var(--rob);
			font-size: 4em;
			font-weight: lighter;
		}
		h2 {
			font-size: 2em;
			font-weight: lighter;
		}
		h4 {
			margin-bottom: 20px;
			font-size: 15px;
		}
	}
	.btn {
		@include btn;
		border-radius: 5px !important;
		width: 200px;
	}
}
</style>