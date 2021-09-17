<template>
  <div class="row">
    <div class="row">
      <div class="col-sm">
        <h1>{{infoTitle}}</h1>
        <!-- 追記 -->
        <h3>{{timeStamp}}</h3>
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
 
// 追記
import axios from 'axios'
 
export default {
  name: 'NodeRED',
  props: {
    msg: String
  },
  data () {
    return {
      infoTitle: "Node-RED INDEX",
      timeStamp: 0
    }
  },
  methods: {
    // 追記
    getTimestamp:async function(){
      // 開発サーバーと本番サーバーでの分岐処理 ここから
      let urlTimeStampAPI = '/api1';
      let localEndPoint = '//localhost:18801';
      if( window.location.host == 'localhost:8080'){
        // 開発サーバー(npm run serve)
        urlTimeStampAPI = localEndPoint + urlTimeStampAPI;
      } // ここまで
      console.log("urlTimeStampAPI ",urlTimeStampAPI);
      const response = await axios.get(urlTimeStampAPI);
      console.log(response);
      this.timeStamp = response.data.timestamp;
    }
  },
  mounted () {
    // 追記
    this.getTimestamp();
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>