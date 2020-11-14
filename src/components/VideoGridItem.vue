<template>
    <div>
        <a :href="'https://www.youtube.com/watch?v=' + video.id.videoId" target="_blank">
            <img :src="video.snippet.thumbnails.medium.url" alt="YouTube Thumbnail" class="card-img-top">
        </a>
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
            </h6>
            <p class="card-text">{{ video.snippet.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoGridItem',
    props: ['video']
};
</script>

<style>
a {
    color: black;
}
</style>