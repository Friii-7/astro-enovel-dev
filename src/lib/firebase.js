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
    console.log("Attempting to save form data:", formData);
    
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
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    
    // Provide more specific error messages
    let errorMessage = "Error al guardar el formulario";
    if (error.code === 'permission-denied') {
      errorMessage = "Error de permisos. Verifica la configuración de Firebase.";
    } else if (error.code === 'unavailable') {
      errorMessage = "Servicio no disponible. Intenta nuevamente.";
    } else if (error.code === 'network-error') {
      errorMessage = "Error de conexión. Verifica tu internet.";
    }
    
    return { success: false, error: errorMessage };
  }
}

export { db }; 