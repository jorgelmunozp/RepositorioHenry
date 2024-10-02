// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // La función recibe dos argumentos llamados "num" y "exponent" los cuales son numeros.
  // Debes Retorna el valor de "num" elevado al "exponent".
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 5 ---> 0
  // Tu código:
  return Math.pow(num,exponent)
}

console.log(elevar(2, 2))
console.log(elevar(0, 5))

module.exports = elevar;