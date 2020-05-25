<template>
  <Layout>
    <nav>
      <div class="flex-between">
        <g-link to="/">Home</g-link>
        <g-link to="/posts">All Posts</g-link>
      </div>
      <h1 class="mb-0">Tags</h1>
      <p class="mt-0 mb-0">Click on a tag to read posts of that topic. Tags are sorted alphabetically.</p>
    </nav>

    <div class="pad">
      <ul>
        <li v-for="tag in tags" v-bind:key="tag">
          <a v-bind:href="/tags/ + tag ">{{ tag }}</a>
        </li>
      </ul>
    </div>

  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "Tags",
    meta: [
      {
        name: "description",
        content:
          "Tags of posts of Coder Bootcamp."
      },
      { name: "author", content: "Ravi Teja" }
    ]
  },

  data() {
    return {
      tags: ''
    }
  },

  mounted() {
    let allTags = [];

    this.$page.posts.edges.forEach(edge => {
      edge.node.tags.forEach(tag => {
        allTags.push(tag.title);
      })
    });

    this.tags = ([...new Set(allTags)]).sort();
  }
};
</script>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
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