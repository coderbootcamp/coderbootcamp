<template>
  <div>
    <div v-for="(post, index) in posts" v-bind:key="post.id" style="margin:3rem 0rem">
      <small v-if="! noIndex">
        #{{ index + 1 }}
      </small>
      <h3 class="mb-0 mt-0">{{ post.node.title }}</h3>
      <p class="mb-0 mt-0">{{ post.node.excerpt }}</p>
      <small>Updated on {{ new Date(post.node.updatedOn).toDateString() }}</small>
      <p class="mt-0"><a v-bind:href="post.node.path">Read Post</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts", "noIndex"]
}
</script>