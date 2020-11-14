<template>
    <div class="container">
        <nav>
            <ul class="pagination justify-content-center">
                <li class="page-item" v-bind:class="{ disabled: prevPageToken === undefined }">
                    <a @click="prevPage" href="#" class="page-link">Anterior</a>
                </li>
                <li class="page-item" v-bind:class="{ disabled: nextPageToken === undefined }">
                    <a @click="nextPage" href="#" class="page-link">Próximo</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['prevPageToken', 'nextPageToken'],
    methods: {
        prevPage() {
            this.$emit('prev-page');
        },
        nextPage() {
            this.$emit('next-page');
        }
    }
};
</script>

<style>
.page-link {
    box-shadow: none !important;
}
</style>