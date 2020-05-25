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
      <div style="margin-top: 1rem;">
        <h2 class="mt-0">Topics</h2>
      </div>

      <div id="topics">
        <div v-for="edge in $page.topics.edges " v-bind:key="edge.node.id" class="topic-item">
          <img v-bind:src="edge.node.logo" v-bind:alt="edge.node.title" height="64">
          <a v-bind:href="edge.node.path"><h2 class="mb-0">{{ edge.node.title }}</h2></a>
          <p class="mt-0 mb-0">{{ edge.node.description }}</p>
        </div>
      </div>

      <h2 style="margin-top: 3rem;" class="mb-0">Posts</h2>
      <p class="mt-0">Read blog posts <g-link to="/posts">here.</g-link></p>       
  
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
query Topic {
  topics: allTopic(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        description
        path
        logo
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

<style scoped>
#topics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.topic-item {
  padding: 2rem;
  background-color:aliceblue;
  text-align: center;
}

@media (max-width: 768px) {
  #topics {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }
 }
</style>