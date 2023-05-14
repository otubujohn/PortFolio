const factorial = (x) => {
  if (x == 0) {
    return 1;
  }

  if (x > 0) {
    return x * factorial(x - 1);
  }
};

factorial(5);
