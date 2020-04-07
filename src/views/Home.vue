<template>
  <div class="Home">
    <Banner></Banner>
    <Navigation></Navigation>
    <Specialbar></Specialbar>
    <Todaystopic></Todaystopic>
    <FooterTabbar></FooterTabbar>
  </div>
</template>

<script>
import Todaystopic from '@/components/Todaystopic'
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
    Specialbar,
    Todaystopic
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
.Home{
  background: #f0f2f5;
}
</style>