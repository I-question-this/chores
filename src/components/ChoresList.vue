<template>
  <div>
		<input
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
import Vue from "vue"
import Chore from './Chore.vue'
import { db } from './firebaseInit'

export default Vue.extend({
  components: {
		Chore
  },
  data() {
		return {
			newChoreText: '',
			chores: [] as any[]
		}
	},
	// firestore() {
	// 	return {
	// 		chores: db.collection('chores').orderBy('createdAt')
	// 	}
  // },
	created () {
		db.collection('chores').get().then((querySnapshot) => {
        querySnapshot.forEach((chore) => {
          let data = {
						'id': chore.id,
						'name': chore.data().name,
            'description': chore.data().description
          }
          this.chores.push(data)
        })
      })
  },
	methods: {
		addChore () {
			const name = this.newChoreText.trim();
			const description = '';
			if (name) {
				const createdAt = new Date()
				db.collection('chores').add({ createdAt, description, name })
				this.newChoreText = '';
			}
		},
		removeChore (idToRemove: string) {
			db.collection('chores').doc(idToRemove).delete()
		}
	}
})
</script>
