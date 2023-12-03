/* eslint-disable */

export function convertToFP(fn: Function, arity: number, a: any[] = []) {
  if (a.length >= arity) {
    return fn.apply(a.slice(0, arity).reverse())
  }

  return function (...args: any[]) {
    return convertToFP(fn, arity, a.concat(args))
  }
}
