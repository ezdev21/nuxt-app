<template>
  <div class="p-2 m-2 bg-gray-100">
    <div v-for="post in posts" :key="post.id" class="p-2 rounded-xl m-2 bg-white">
      <h1 class="text-2xl text-primary">{{post.title}}</h1>
      <p class="text-xl">{{post.content}}</p>
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