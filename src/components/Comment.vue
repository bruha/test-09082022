<template>
  <form @submit.prevent="onSubmit">
    <textarea v-model="comment" :placeholder="`Add a note for ${props.user.name}`"></textarea>
    <br />
    {{ currentTypeId }}
    <label v-for="type of types">
      <input type="radio" name="commentType" :value="type.id" :checked="type.id === currentTypeId" @click="changeType(type)" />
      {{ type.name }}
    </label>
    <button>Submit</button>
  </form>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, PropType } from 'vue-demi'
import type { IType, IUser } from '../types'

const props = defineProps({
  user: {
    type: Object as PropType<IUser>,
    required: true
  }
})
const emit = defineEmits(['submit'])

const types: IType[] = [{
  id: 0,
  name: 'note',
},{
  id: 1,
  name: 'call',
},{
  id: 2,
  name: 'coffee',
},{
  id: 3,
  name: 'beer',
},{
  id: 4,
  name: 'meeting',
}]
const currentTypeId = ref(types[0].id)
const comment = ref('')

function changeType(type: IType) {
  currentTypeId.value = type.id
}
function onSubmit() {
  emit('submit', {
    comment: comment.value,
    userId: props.user.id,
    typeId: currentTypeId.value
  })
}
</script>
