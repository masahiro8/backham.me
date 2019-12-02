//最大公約数
export const gcd = (m, n) => {
  // 剰余
  let r;

  if (m < n) {
    // m >= nにする
    r = m; //一時退避
    m = n;
    n = r;
  }

  while ((r = m % n) != 0) {
    m = n;
    n = r;
  }

  return n;
};
