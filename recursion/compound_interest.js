function compoundInterest(p, t, r) {
  const simpleInterest = (p * t * r) / 100;
  return simpleInterest;
}

function detailedMessage(description, p, t, r, expected, actual) {
  return `❌ ${description}\n
  p, t, r: [${p, t, r}] \n
  expected: ${expected}\n
  actual: ${actual}`;
}

function composeMessage(description, p, t, r, expected, actual) {
  if (Math.round(expected) === Math.round(actual)) {
    return `✅${description}`;
  }
  return detailedMessage(description, p, t, r, expected, actual);
}

function testCompoundInterest(description, p, t, r, expected) {
  const actual = compoundInterest(p, t, r);

  console.log(composeMessage(description, p, t, r, expected, actual));
}

function testAll() {
  testCompoundInterest('rate and time is one', 1, 1, 1, 0);
  testCompoundInterest('rate is ten', 1, 1, 10, 0);
  testCompoundInterest('principal is greater than 1', 1000, 1, 10, 100);
}

testAll();
