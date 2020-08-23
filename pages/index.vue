<template>
    <main>
        <h1>This is the {{ name }} boilerplate </h1>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            name: "Nuxt"
        }
    },
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';
main {
	padding: 2em;
	text-align: center;
	@include flexCenter;
	h1 {
		font-family: var(--sofia);
	}
}
</style>