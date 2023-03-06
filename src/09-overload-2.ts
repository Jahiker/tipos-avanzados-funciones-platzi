// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => Nico
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true
  }
}

const rtaArray = parseStr('Jahiker');
rtaArray.reverse();
console.log('🚀 ~ file: 08-overload.ts:13 ~ rtaArray: Jahiker =>', rtaArray);

const rtaString = parseStr(['J', 'a', 'h', 'i', 'k', 'e', 'r']);
rtaString.toLocaleLowerCase();
console.log(
  '🚀 ~ file: 08-overload.ts:16 ~ rtaString: [J,a,h,i,k,e,r] =>',
  rtaString
);

const rtaBool = parseStr(1651);
console.log("🚀 ~ file: 09-overload-2.ts:37 ~ rtaBool:", rtaBool)
