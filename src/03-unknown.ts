let anyVar: any;
anyVar = true;
anyVar = 54;
anyVar = 'text';
anyVar = {};

anyVar.doSomething();

let unknownVar: unknown;
unknownVar = true;
unknownVar = 651;
unknownVar = {};

if(typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
