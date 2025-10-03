function compoundInterest(p, t, r) {
  const simpleInterest = Math.round((p * t * r) / 100);
  return p + simpleInterest;
}

function detailedMessage(description, p, t, r, expected, actual) {
  return `❌ ${description}\n
  p, t, r: [${p, t, r}] \n
  expected: ${expected}\n
  actual: ${actual}`;
}

function composeMessage(description, p, t, r, expected, actual) {
  if (expected === actual) {
    return `✅${description}`;
  }
  return detailedMessage(description, p, t, r, expected, actual);
}

function testCompoundInterest(description, p, t, r, expected) {
  const actual = compoundInterest(p, t, r);

  console.log(composeMessage(description, p, t, r, expected, actual));
}

function testAll() {
  testCompoundInterest('rate and time is one', 1, 1, 1, 1);
}

testAll();
