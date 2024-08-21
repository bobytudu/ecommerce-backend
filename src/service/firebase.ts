import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "../../key.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

const firestore = admin.firestore();

export default firestore;