import app from './firebase.js'
import {addDoc, collection, getFirestore} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToMinvClub(subscription){
    const db = getFirestore(app)
    const minvClubCollection = collection(db, 'minv-club')
    const docRef = await addDoc(minvClubCollection, subscription)
    return docRef.id
}