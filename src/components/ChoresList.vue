<template>
  <div>
		<form@keydown.enter="addChore">
			<input
			v-model="newChoreName"
			placeholder="New Chore Name"
			/>
			<input
			v-model="newChoreDescription"
			placeholder="New Chore Description (Optional)"
			/>
		</form>
		
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
import Vue from "vue"
import Chore from './Chore.vue'
import { db } from '../helpers/firebaseInit'

export default Vue.extend({
  components: {
		Chore
  },
  data() {
		return {
			newChoreName: '',
			newChoreDescription: '',
			chores: [] as any[]
		}
	},
	firestore() {
		return {
			chores: db.collection('chores')
		}
  },
	methods: {
		addChore () {
			const name = this.newChoreName.trim();
			const description = this.newChoreDescription.trim();
			if (name) {
				const createdAt = new Date()
				db.collection('chores').add({ createdAt, description, name })
				this.newChoreName = ''
				this.newChoreDescription = '';
			}
		},
		removeChore (idToRemove: string) {
			db.collection('chores').doc(idToRemove).delete()
		}
	}
})
</script>
