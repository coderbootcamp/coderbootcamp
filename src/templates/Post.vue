<template>
  <Layout>
    <nav class="nav">
      <div class="flex-between">
        <g-link to="/">Home</g-link>
        <g-link to="/posts">All Posts</g-link>
      </div>
      <h1 class="mb-0">{{ $page.post.title }}</h1>
      <p
        class="mt-0 mb-0"
      >Written by {{ $page.post.author }}.</p>
    </nav>

    <div class="pad">
      <div v-html="$page.post.content"></div>
  
      <div style="margin-top: 3rem;">
        <h3 class="mb-0">Tags:</h3>
        <p v-for="tag in $page.post.tags" v-bind:key="tag.title" class="mb-0 mt-0">
          <a v-bind:href="tag.path">#{{ tag.title }}</a>
        </p>
      </div>
    </div>

    <footer>
      <p class="mt-0 mb-0">Updated on {{ formatDate($page.post.updatedOn) }}. {{ $page.post.timeToRead }} min read.</p>
    </footer>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post (path: $path) {
    id
    title
    excerpt
    updatedOn
    timeToRead
    tags {
      id
      title
      path
    }
    author
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [{ name: "description", content: this.$page.post.excerpt }]
    };
  },

  methods: {
    formatDate(date) {
      let formattedDate = new Date(date);

      let options = { year: "numeric", month: "long", day: "numeric" };

      return new Intl.DateTimeFormat("en-IN", options).format(formattedDate);
    }
  }
};
</script>