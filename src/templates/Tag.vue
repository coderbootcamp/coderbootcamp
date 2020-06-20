<template>
  <Layout>
    <nav class="nav">
       <div class="flex-between">
        <g-link to="/">Home</g-link>
        <g-link to="/posts">All Posts</g-link>
        <g-link to="/tags">Explore Tags</g-link>
      </div>
      <h1 class="mb-0"><i>#{{ tag }}</i> Posts</h1>
    </nav>
  
    <div class="pad">
      <posts-list v-bind:posts="$page.posts.edges"></posts-list>
    </div>
  </Layout>
</template>

<page-query>
query Posts ($title: String!) {
  posts: allPost(filter: { tags: { contains: [$title] }}) {
    edges {
      node {
        id
        title
        path
        updatedOn
        tags {
          id
          title
        }
      }
    }
  }
}
</page-query>

<script>
import PostsList from "~/components/PostsList.vue";

export default {
  metaInfo() {
    return {
      title: this.tag,
      meta: [{ name: "description", content: 'Posts with ' + this.tag + ' tag.' }]
    };
  },

  data() {
    return {
      tag: ''
    }
  },

  components: {
    PostsList
  },

  mounted() {
    const pageParams = location.href.split("tags/");
    
    this.tag = pageParams[1].replace("/", "");
  }
}
</script>