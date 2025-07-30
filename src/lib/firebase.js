// Firebase configuration for contactosenovel project
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to save contact form data
export async function saveContactForm(formData) {
  try {
    const docRef = await addDoc(collection(db, "contactosenovel"), {
      nombre: formData.nombre,
      apellido: formData.apellido,
      correo: formData.correo,
      empresa: formData.empresa || '',
      mensaje: formData.mensaje,
      timestamp: serverTimestamp()
    });
    
    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error: error.message };
  }
}

export { db }; 