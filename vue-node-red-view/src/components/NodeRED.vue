<template>
  <div class="row">
    <div class="row">
      <div class="col-sm">
        <h1>{{infoTitle}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'NodeRED',
  props: {
    msg: String
  },
  data () {
    return {
      infoTitle: "Node-RED INDEX"
    }
  },
  methods: {
 
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>