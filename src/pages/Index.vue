<template>
  <Layout>
    <nav style="text-align: center;">
      <g-image
        alt="Coder Bootcamp"
        src="~/assets/images/coderbootcamp.svg"
        width="128"
        class="d-none d-md-block"
      />
      <h1 class="mb-0">Coder Bootcamp</h1>
      <p class="mt-0">For Developers.</p>
    </nav>

    <div class="pad">
      <h2 style="margin-top: 3rem;" class="mb-0">Latest Posts</h2>
      <posts-list v-bind:posts="$page.posts.edges"></posts-list>

      <div style="display: flex; justify-content: space-between; background-color: lightcyan; padding: 0rem 2rem;flex-wrap: wrap;">
        <h3>Read <g-link to="/posts">more posts</g-link></h3>       
        <h3>Explore <g-link to="/posts">tags</g-link></h3>       
      </div>

  
      <h2 style="margin-top: 3rem;">Stay In Touch</h2>
      <ul>
        <li>
          <a href="https://twitter.com/CoderBootcamp" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://instagram.com/coderbootcamp" target="_blank">Instagram</a></li>
        <li>
          <a href="https://facebook.com/coderbootcamp" target="_blank">Facebook</a>
        </li>
        <li>
          <a
            href="https://github.com/coderbootcamp/coderbootcamp"
            target="_blank"
          >GitHub</a>
        </li>
      </ul>
    </div>

    <footer>
      <p class="text-muted text-center mt-5">
        Made with
        <a href="https://gridsome.org">gridsome</a> and hosted using
        <a href="https://netlify.com">Netlify.</a> Writing and maintaining by
        <a href="https://insidert.com">Ravi Teja.</a>
      </p>
    </footer>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost(sortBy: "updatedOn", order: DESC, limit: 3) {
    edges {
      node {
        id
        title
        excerpt
        path
        updatedOn
      }
    }
  }
}
</page-query>

<script>
import PostsList from "~/components/PostsList.vue";

export default {
  metaInfo: {
    title: "Coder Bootcamp",
    meta: [
      {
        name: "description",
        content:
          "Coder Bootcamp is for developers to read about programming languages, libraries, frameworks, ecosystems, talks, communities, people and more."
      },
      { name: "author", content: "Ravi Teja" }
    ]
  },

  components: {
    PostsList
  }
};
</script>