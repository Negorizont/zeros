module.exports = function zeros(expression) {
  const stringArray = expression.split('*');

  let fiveCount = 0,
      twoCount = 0,
      step = 0;

  stringArray.forEach(function(stringNum) {
    
    let intNum = parseInt(stringNum);

    (stringNum.includes('!!')) ? step = 2 : step = 1;

    for (let i = 0; i < intNum; intNum -= step) {
      let currentNumber = intNum;

      while (currentNumber > 0) {
        if (currentNumber % 5 == 0) {
          fiveCount++; 
        }

        currentNumber /= 5;
      }

      currentNumber = intNum;

      while (currentNumber > 0) {
        if (currentNumber % 2 == 0) {
          twoCount++; 
        }

        currentNumber /= 2;
      }
    }

  });

  return fiveCount > twoCount ? twoCount : fiveCount;
};
