function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
export default function capToDashLowerCase(txt) {
    let arr = Array.from(txt);
    let splitCount = 0;
    for (let i = 1; i < txt.length; i++){
        if (isUpper(txt[i]) === true) {
            arr.splice((i + splitCount),0,'-')
            splitCount++;
        }
    }
    return arr.join('').toString().toLowerCase();
}