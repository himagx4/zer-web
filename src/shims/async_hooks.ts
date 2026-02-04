// Browser build için stub.
// Hono'nun context-storage middleware'i bunu ister ama Pages'ta çalışmayacak.
// Build kırılmasın diye minimal stub veriyoruz.
export class AsyncLocalStorage<T = unknown> {
  getStore(): T | undefined {
    return undefined;
  }
  run<R>(_store: T, callback: () => R): R {
    return callback();
  }
  enterWith(_store: T): void {}
  disable(): void {}
}
