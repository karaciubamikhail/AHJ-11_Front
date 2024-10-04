export function validateNumber (numbers){
    const number = numbers.toString();
    const digits = number.replace(/\D/g, "").split("").map(Number);
    let sum = 0;
    let isSecond = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        if (isSecond) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
    sum += digit;
    isSecond = !isSecond;
  }
  return sum % 10 === 0;
}