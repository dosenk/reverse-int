module.exports = function reverse(n) {
    let num = n < 0 ? String(n).slice(1) : String(n);
    return Number(num.split('').reverse().join(''));
}