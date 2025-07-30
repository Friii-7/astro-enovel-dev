# Firebase Setup for Contact Form

## Prerequisites
- Firebase project "contactosenovel" already created
- Firebase CLI installed (optional, for deployment)

## Setup Instructions

### 1. Get Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your "contactosenovel" project
3. Click on the gear icon (⚙️) next to "Project Overview" to open Project Settings
4. Scroll down to "Your apps" section
5. If you don't have a web app, click "Add app" and choose "Web"
6. Register your app with a nickname (e.g., "Enovel Website")
7. Copy the configuration object

### 2. Update Configuration
1. Open `src/lib/firebase-config.js`
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
export const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "contactosenovel.firebaseapp.com",
  projectId: "contactosenovel",
  storageBucket: "contactosenovel.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

### 3. Enable Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (preferably close to your users)
5. Click "Done"

### 4. Set Firestore Rules (Optional)
Update `firestore.rules` to allow write access to the contactosenovel collection:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactosenovel/{document} {
      allow write: if true;  // Allows anyone to write to contactosenovel collection
      allow read: if false;  // No one can read (for privacy)
    }
  }
}
```

### 5. Test the Form
1. Run your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check Firebase Console > Firestore Database to see the submitted data

## Data Structure
Each form submission creates a document in the "contactosenovel" collection with:
- `nombre`: First name
- `apellido`: Last name  
- `correo`: Email address
- `empresa`: Company name (optional)
- `mensaje`: Message content
- `timestamp`: Server timestamp

## Security Notes
- The current setup allows anyone to write to the database
- For production, consider implementing authentication or rate limiting
- Consider adding CAPTCHA or other spam prevention measures

## Troubleshooting

### Error: "Missing or insufficient permissions"
If you get this error, follow these steps:

1. **Deploy Firestore Rules:**
   ```bash
   firebase deploy --only firestore:rules
   ```

2. **Verify Firestore Database is Enabled:**
   - Go to Firebase Console → Firestore Database
   - If not enabled, click "Create database"
   - Choose "Start in test mode"

3. **Check Firebase Configuration:**
   - Ensure your `firebase-config.js` has the correct credentials
   - Verify the project ID matches your Firebase project

4. **Test Connection:**
   - Open `test-firebase.html` in your browser
   - Update the Firebase config in the test file
   - Click "Test Firebase Connection"

### Common Issues:
- **Firebase CLI not installed:** `npm install -g firebase-tools`
- **Not logged in:** `firebase login`
- **Wrong project:** `firebase use contactosenovel`
- **Network issues:** Check internet connection
- **CORS issues:** Ensure domain is authorized in Firebase Console

### Debug Steps:
1. Check browser console for detailed error messages
2. Verify Firebase configuration is correct
3. Ensure Firestore Database is enabled
4. Check network connectivity
5. Verify domain is authorized in Firebase Console → Authentication → Settings → Authorized domains 