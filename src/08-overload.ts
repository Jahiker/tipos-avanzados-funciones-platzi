// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => Nico

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Jahiker');
console.log('🚀 ~ file: 08-overload.ts:13 ~ rtaArray: Jahiker =>', rtaArray);

const rtaString = parseStr(['J', 'a', 'h', 'i', 'k', 'e', 'r']);
console.log(
  '🚀 ~ file: 08-overload.ts:16 ~ rtaString: [J,a,h,i,k,e,r] =>',
  rtaString
);
