<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <h1>{{post.title}}</h1>
      <p>{{post.content}}</p>
    </div>
  </div>
</template>
<script>
export default {
 data(){
  return{

  }
 },
 mounted(){
  axios.get('/posts')
  .then(res=>{
   this.posts=res.data;
  })
 }
}
</script>