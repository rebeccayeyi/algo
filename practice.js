function fibo(n) {
  if (n === 1) return n;
  else {
    return n + fibo(n - 1);
  }
}
