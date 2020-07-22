<template>
    <div v-if="endDay == true">
        <h1>end day</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters(['listToDo', 'endDay']),
}
</script>

<style scoped>

</style>