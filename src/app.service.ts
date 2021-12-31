import { Injectable } from '@nestjs/common';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  getDocs,
} from 'firebase/firestore';
import firebaseApp from './shared/firebase.config';

@Injectable()
export class AppService {
  db = getFirestore(firebaseApp);
  specialOfTheDay = doc(this.db, 'dailySpecial/2021-09-18');

  async storeSpecial() {
    const docData = {
      description: 'A delicious vanila latte',
      price: 3.99,
      milk: 'Whole',
      vegan: false,
    };
    try {
      await setDoc(this.specialOfTheDay, docData, { merge: true });
      console.log('Document added to the collection');
      return { success: true };
    } catch (error) {
      console.log(`I got an error! ${error}`);
      return { success: false };
    }
  }

  async storeOrder() {
    const ordersCollection = collection(this.db, 'orders');
    try {
      const newDoc = await addDoc(ordersCollection, {
        customer: 'Arthur',
        drink: 'Latte',
        total_cost: (100 + Math.floor(Math.random() * 400)) / 100,
      });
      console.log(`Your doc was created at ${newDoc.path}`);
      return { success: true };
    } catch (error) {
      console.log(`I got an error ${error}`);
      return { success: false };
    }
  }

  async getAllSpecial() {
    const specialQuery = query(collection(this.db, 'dailySpecial'));

    const querySnapshot = await getDocs(specialQuery);
    const allDocs = querySnapshot.forEach((snap) => {
      console.log(
        `Document ${snap.id} contains ${JSON.stringify(snap.data())}`,
      );
    });
  }
}
