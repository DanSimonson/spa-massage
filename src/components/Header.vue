<template>
    <header class='grey darken-3'>
        <h1>{{ title }}</h1>
    </header>
</template>
<script>
    export default {
        data() {
            return {
                title: 'My Spa-Massage Business Name'
            }
        }
    }
</script>
<style scoped>
    header {
        padding: 10px;
        margin-bottom: 5px;
        color: green
    }

    h1 {
        text-align: center;
    }
</style>