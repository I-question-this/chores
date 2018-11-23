import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp;

export const db = firebaseApp.firestore();
// Something to do with new time stamp methods.
// Not doing this may break the app later
const settings = {timestampsInSnapshots: true};
db.settings(settings);