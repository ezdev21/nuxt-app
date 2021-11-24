export const state=()=>({
   posts:[],
   post:{},
   comments:[]
})

export const getters={
  getPosts:(state)=>{
   return state.posts;
  },
  getSinglePost:(state)=>(id)=>{
   return state.posts.find(post=>post.id==id);
  },
  getComments:(state)=>(id)=>{
    let post=state.posts.find(id);
    return post.comments;
  }
}

export const mutations={
  addPost(state,title,content){
   let post={};
   post.title=title;
   post.content=content;
   state.posts.unshift(post);
  }, 
  addComment(state,id,body){
    let post=state.posts.find(post=>post.id==id);
    let comment={};
    comment.body=body;
    post.comments.unshift(comment);
  }
}