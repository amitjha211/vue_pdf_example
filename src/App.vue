<template>
  <div  class="row" id="app" >
    <div class="col-md-2">
    </div>
    <div class="col-md-10"  >
      <pdfViewer v-bind:link="'static/assembly64.pdf'" />
    </div>
  </div>
</template>

<script>
import  HelloWorld from './components/HelloWorld'
import  pdfViewer from './components/pdfViewer'

export default {
  name: 'App',
  components: {
    HelloWorld,pdfViewer
  }
}
</script>
