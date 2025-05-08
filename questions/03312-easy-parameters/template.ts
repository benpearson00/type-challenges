type MyParameters<T extends (...args: any[]) => any> = T extends (...unknown: infer P) => unknown ? P : never
