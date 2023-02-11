export declare function onAuthStateChanged(
  auth: Auth,
  nextOrObserver: NextOrObserver<User>,
  error?: ErrorFn,
  completed?: CompleteFn
): Unsubscribe;
