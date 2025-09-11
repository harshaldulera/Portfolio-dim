import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase app (safe on both server and client)
const app = initializeApp(firebaseConfig);

// Lazily initialize and cache Analytics only in the browser
let cachedAnalytics: Analytics | null | undefined;

export async function getAnalyticsInstance(): Promise<Analytics | null> {
  if (cachedAnalytics !== undefined) {
    return cachedAnalytics ?? null;
  }
  if (typeof window === "undefined") {
    cachedAnalytics = null;
    return null;
  }
  const supported = await isSupported().catch(() => false);
  cachedAnalytics = supported ? getAnalytics(app) : null;
  return cachedAnalytics;
}

export { app };