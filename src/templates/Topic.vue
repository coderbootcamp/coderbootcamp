<template>
  <Layout>
    <nav>
      <div class="flex-between" style="margin-bottom: 2rem;">
        <g-link to="/">Home</g-link>
        <!-- <g-link to="/posts">All Posts</g-link> -->
      </div>
      <div class="text-center">
        <img v-bind:src="$page.topic.logo" v-bind:alt="$page.topic.title" height="128">
        <h1 class="mb-0 mt-0">{{ $page.topic.title }}</h1>
        <p class="mt-0 mb-0">{{ $page.topic.description }}</p>
      </div>
    </nav>

    <div class="pad" v-html="$page.topic.content"></div>

    <footer>
      <small class="mt-0 mb-0">Updated on {{ new Date($page.topic.updatedOn).toDateString() }}.</small>
    </footer>
  </Layout>
</template>

<page-query>
query Topic ($path: String!) {
   topic (path: $path) {
    id
    title
    logo
    description
    website
    updatedOn
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.topic.title,
      meta: [{ name: "description", content: this.$page.topic.description }]
    };
  },
};
</script>