<template>
  <Layout>
    <nav>
      <div class="flex-between">
        <g-link to="/">Home</g-link>
                <g-link to="/tags" class="btn btn-secondary">Explore Tags</g-link>
      </div>

      <h1 class="mb-0">Posts</h1>
      <p class="mt-0 mb-0">Sorted by latest first.</p>
    </nav>
  

    <div class="pad">
      <posts-list v-bind:posts="$page.posts.edges"></posts-list>
    </div>

  </Layout>
</template>

<script>
import PostsList from "~/components/PostsList.vue";

export default {
  metaInfo: {
    title: "Posts - Coder Bootcamp",
    meta: [
      {
        name: "description",
        content:
          "Posts from Coder Bootcamp."
      },
      { name: "author", content: "Ravi Teja" }
    ]
  },

  components: {
    PostsList
  }
};
</script>

<page-query>
query Posts {
  posts: allPost(sortBy: "updatedOn", order: DESC) {
    edges {
      node {
        id
        title
        excerpt
        path
        updatedOn
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>