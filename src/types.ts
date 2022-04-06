
/* MAIN */

type FN<Arguments extends unknown[], Return> = ( ...args: Arguments ) => Return;

type Result<Arguments, Return> = {
  called: boolean,
  calls: number,
  this: any,
  arguments: Arguments,
  return: Return
};

/* EXPORT */

export type {FN, Result};
