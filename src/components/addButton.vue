<template>
    <svg @click="toggleIsActive" width="44" height="44" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 44C10.8497 44 1 34.1503 1 22C1 9.84974 10.8497 0 23 0C35.1503 0 45 9.84974 45 22C45 34.1503 35.1503 44 23 44Z" fill="#FF8F79"/>
        <path d="M37.9018 21H7.5488C6.69344 21 6 21.6934 6 22.5488C6 23.4042 6.69344 24.0976 7.5488 24.0976H37.9018C38.7571 24.0976 39.4506 23.4042 39.4506 22.5488C39.4506 21.6934 38.7571 21 37.9018 21Z" fill="white"/>
        <path d="M22 6.5488V36.9018C22 37.7571 22.6934 38.4506 23.5488 38.4506C24.4042 38.4506 25.0976 37.7571 25.0976 36.9018V6.5488C25.0976 5.69344 24.4042 5 23.5488 5C22.6934 5 22 5.69344 22 6.5488Z" fill="white"/>
    </svg>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations(['toggleIsActive']),
    }
}
</script>

<style scoped>

</style>