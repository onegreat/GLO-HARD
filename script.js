let arr = [2, 3, 4, 16, 48, 68, 71];

for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).startsWith("2") || String(arr[i]).startsWith("4")) {
        console.log(arr[i])
    }
}

function isPrime(n) {
    for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2) if (n % i == 0) return false;
    return n > 1;
}

const res = [...Array(100)].reduce((a, _, i) => a.concat(isPrime(i) ? `Делители числа ${i}: 1 и ${i}` : []), []).join('\n');

console.log(res);