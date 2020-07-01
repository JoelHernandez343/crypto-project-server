const bigintModArith = require('bigint-mod-arith');

const primes = [
  2425967623052370772757633156976982469681n,
  1451730470513778492236629598992166035067n,
  6075380529345458860144577398704761614649n,
  3615415881585117908550243505309785526231n,
  5992830235524142758386850633773258681119n,
  4384165182867240584805930970951575013697n,
  5991810554633396517767024967580894321153n,
  6847944682037444681162770672798288913849n,
  4146162919458530168953357282201621124057n,
  5570373270183181665098052481109678989411n,
];

const e = 2946061206446183136035364744505844247510411120867004678223655427763264058485174539n;

function Y(x, n) {
  // x^d mod n
  let y = bigintModArith.modPow(x, d, n);
  return y;
}

function keyGeneration() {
  let p = primes[Math.random() * (primes.length - 1)];
  let q = primes[Math.random() * (primes.length - 1)];
  n = p * q;
  let phi = (p - 1n) * (q - 1n);
  let d = bigintModArith.modInv(e, phi);

  console.log(`e: ${e}`);
  console.log(`N: ${n}`);
  console.log(`p: ${p}`);
  console.log(`q: ${q}`);
  console.log(`phi(n): ${phi}`);
  console.log(`d: ${d}`);

  return { n, d };
}
