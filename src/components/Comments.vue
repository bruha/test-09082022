<template>
<div>
  <Comment :user="state.users[0]" @submit="onSubmit" />
  <div v-for="comment in state.comments">
    {{ comment.typeId }}
    {{ comment.comment }}
    <a :href="getUserLink(comment.userId)">{{ getUserName(comment.userId) }}</a>
  </div>
</div>
</template>

<style lang="scss" scoped>

</style>
<script setup lang="ts">
import Comment from './Comment.vue'
import { useCommentsStore } from '../useCommentsStore'
const { state, addComment, getUserName, getUserLink } = useCommentsStore()!
function onSubmit(comment: { comment: string, userId: number, typeId: number }) {
  console.log(comment)
  addComment(comment)
}
</script>
