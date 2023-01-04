module.exports = function reverse (n) {
  if (n !== 0) {
    let str = `${n}`;
    let arr = str.split('');
    let arrRev = arr.reverse();
    str = arrRev.join('');
    return parseInt(str);
  } else {
    return 0;
  }
}
