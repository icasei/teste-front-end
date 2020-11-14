<template>
    <div>
        <div class="card-body">
            <h5 class="card-title">
                <a 
                    :href="'https://www.youtube.com/watch?v=' + video.id.videoId"
                    class="card-link"
                    target="_blank"
                >{{ video.snippet.title }}</a>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
                {{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}
                <p class="card-text">{{ video.snippet.description }}</p>
            </h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoListItem',
    props: ['video']
}
</script>

<style>

</style>