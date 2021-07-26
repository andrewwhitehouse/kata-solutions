// See https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
function primesUpTo(n) {
  let possiblePrime = Array(n+1);
  for(let i=2; i <= n; i++) {
    possiblePrime[i] = true;
  }
  for(let i=2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (possiblePrime[i]) {
      for(let j=i*i; j <= n; j+=i) {
        possiblePrime[j] = false;
      }
    }
  }
  let result = [];
  for(let i=2; i <= n; i++) {
    if (possiblePrime[i]) {
      result.push(i);
    }
  }
  return result;
}

function sumOfDivided(lst) {
  let maxAbsoluteValue = lst.reduce((a,b) => Math.max(Math.abs(a),Math.abs(b)),0);
  let primes = primesUpTo(maxAbsoluteValue); // maxAbsoluteValue could be negative
  // Accumulate map of prime factors, and their multiples e.g. {2: [12], 3: [12, 15], 5: [15]}
  let allFactors = primes.reduce((acc, prime) => {
    let multiples = lst.filter(n => n % prime == 0); // numbers in list of which this prime is a factor
    for(let mult of multiples) {
      if (prime in acc) {
        acc[prime].push(mult);
      } else {
        acc[prime] = [mult];
      }
    }
    return acc;
  }, {});
  let result = [];
  for (const [factor, multiples] of Object.entries(allFactors)) {
    result.push([parseInt(factor), multiples.reduce((a,b) => a+b)]);
  }
  return result;
}

module.exports = {sumOfDivided};