import { computed, reactive, ref } from 'vue-demi'
import { createInjectionState } from '@vueuse/shared'
import type { IComment, IType } from './types'

const [useProvideCommentsStore, useCommentsStore] = createInjectionState(() => {
  // state
  const state = reactive({
    users: [{
      id: 0,
      name: 'John Doe',
      link: 'https://twitter.com/johndoe',
    }],
    comments: [] as IComment[],
  })

  // actions
  function addComment(comment: IComment) {
    state.comments.push(comment)
  }
  function getUserName(userId: number) {
    return state.users.find(user => user.id === userId)?.name
  }
  function getUserLink(userId: number) {
    return state.users.find(user => user.id === userId)?.link
  }

  return { state, addComment, getUserName, getUserLink }
})

export { useProvideCommentsStore }
// If you want to hide `useCounterStore` and wrap it in default value logic or throw error logic, please don't export `useCounterStore`
export { useCommentsStore }
