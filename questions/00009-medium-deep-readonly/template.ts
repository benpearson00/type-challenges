type DeepReadonly<T> = T extends Function
  ? T
  : { readonly [key in keyof T]: DeepReadonly<T[key]> }
