require('dotenv').config();
import * as admin from "firebase-admin";

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.SA_KEY_PROJECT_ID,
        privateKey: process.env.SA_KEY_PRIVATE_KEY!.replace(/\\n/g, '\n'),
        clientEmail: process.env.SA_KEY_CLIENT_EMAIL
    }),
    databaseURL: process.env.FIRESTORE_DB_URL,
})

const db = admin.firestore();
db.settings({ignoreUndefinedProperties: true});

export {admin, db};