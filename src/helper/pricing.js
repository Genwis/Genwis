/**
 * Created by iampamungkas on 4/9/18.
 */

function Pricing(price) {
  const money = parseFloat(price)
  let numerator = 0
  let res = ''
  for (let i = money.length; i >= 0; i--) {
    numerator++
    res += money[i]
    if (numerator === 3) {
      res += '.'
      numerator = 0
    }
  }
  return res
}
