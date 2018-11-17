<template>
  <div>
		<BaseInputText
			v-model="newChoreText"
			placeholder="New Chore"
			@keydown.enter="addChore"
		/>
		<ul v-if="chores.length">
			<Chore
				v-for="chore in chores"
				:key="chore.id"
				:chore="chore"
				@remove="removeChore"
			/>
		</ul>
		<p v-else>
			Nothing left in the list. Add a chore in the input above.
		</p>
  </div>
</template>

<script lang="ts">
import BaseInputText from './BaseInputText.vue'
import Chore from './Chore.vue'
import Vue from 'vue'

let nextChoreId = 1

export default Vue.extend({
  components: {
		BaseInputText, Chore
  },
  data () {
    return {
			newChoreText: '',
      chores: [
				{
					id: nextChoreId++,
					text: 'Learn Vue'
				},
				{
					id: nextChoreId++,
					text: 'Learn about single-file components'
				},
				{
					id: nextChoreId++,
					text: 'Fall in love'
				}
			]
    }
	},
	methods: {
		addChore () {
			const trimmedText = this.newChoreText.trim()
			if (trimmedText) {
				this.chores.push({
					id: nextChoreId++,
					text: trimmedText
				})
				this.newChoreText = '';
			}
		},
		removeChore (idToRemove) {
			this.chores = this.chores.filter(chore => {
				return chore.id !== idToRemove
			})
		}
	}
})
</script>
