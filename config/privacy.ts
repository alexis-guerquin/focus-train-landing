export const privacyServices = {
  firebaseAuthentication: false,
  firebaseFirestore: false,
  firebaseCloudFunctions: false,
  firebaseAnalytics: false,
  firebaseCrashlytics: false,
  appleStoreKit: false,
  signInWithApple: false,
  mapLibre: false,
  railwayDataProvider: false,
} as const;

// Activer uniquement les services réellement présents dans l’application.
