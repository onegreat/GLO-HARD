let arr = [2, 3, 4, 16, 48, 68, 71];

for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).startsWith("2") || String(arr[i]).startsWith("4")) {
        console.log(arr[i])
    }
}