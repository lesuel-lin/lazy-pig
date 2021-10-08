<template>
  <div class="home-index">
    <top-memu @changePage="changePage"></top-memu>
    <content-page></content-page>
  </div>
</template>
<script>
import TopMemu from './top-memu'
import ContentPage from './content-page'
export default {
  components: {
    TopMemu,
    ContentPage
  },
  data() {
    return {
      
    }
  },
  methods: {
    changePage(name) {
      console.log(name)
    }
  }
}
</script>