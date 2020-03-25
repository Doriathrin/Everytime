<template>
  <div class="Home">
    <Banner></Banner>
    <Navigation></Navigation>
    <Specialbar></Specialbar>
    <FooterTabbar></FooterTabbar>
  </div>
</template>

<script>
import Specialbar from '@/components/Specialbar'
import Navigation from '@/components/Navigation'
import Banner from '@/components/Banner'
import FooterTabbar from '@/components/FooterTabbar'
export default {
  name: 'Home',
  components: {
    FooterTabbar,
    Banner,
    Navigation,
    Specialbar
  },
  data() { 
    return {
      
    }
  },
  methods: {

  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
}
</style>