<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <i class="fab fa-youtube fa-2x"></i>
                    <span class="ml-3">YouBusca</span>
                </a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style scoped>
a {
    cursor: default;
}

i {
    vertical-align: middle;
    color: red;
}

i + span {
    vertical-align: middle;
}
</style>