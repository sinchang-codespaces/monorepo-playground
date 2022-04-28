import { isArrayWithElement } from '@sinchang/package1'

export const getFirstElementOfArray = <T>(input: T[]): T | undefined => {
  if (isArrayWithElement(input)) return input[0]

  return undefined
}
