
/* TYPES */

type result = {
  called: boolean;
  calls: number;
  this: any;
  arguments: any[];
  return: any;
};

type fn = ( ...args: any[] ) => any;

/* EXPORT */

export {result, fn};
