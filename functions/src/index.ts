/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import {Server} from "./server";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

//? Init Express App
const server = new Server();
(async () => {
    await server.start();
})();

exports.app = functions.https.onRequest(server.app);


