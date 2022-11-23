console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  // Checks to see if the input given is a valid number. (Can be useful if ever changed to
  // a prompt/form as the input or a string is the input).
  let isNum = count;
  count = parseInt(count); //Parses count into a number (for if a prompt/form was used and count is a string).
  let equalNum = isNum == count; //Boolean value for if the two numbers are equal (count is not NaN).

  //If count is NaN after parseInting, the function completes without console logging the odd numbers.
  if (isNaN(count) || equalNum == false) {
    console.log("That is not a valid input. Please input a valid number.");
  } else {
    count = Math.abs(count); //Makes count an absolute value number to account for negatives.
    for (let i = 0; i <= count; i++) {
      if (i % 2 == 1) {
        console.log(i);
      }
    }
  }
}

//Test runs for the function
printOdds(10);
printOdds(50);
printOdds("10");
printOdds();
printOdds("Hello");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  //Start of the check to see if the userName input is a number.
  let isNameNum = parseInt(userName); //If isNameNum == NaN, then it is a string that is not a number.

  //Start of the check to see if the age input is a valid number.
  let ageNum = parseInt(age);
  let equalAge = age == ageNum;

  let aboveSisteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  //If no input is given for the function, this error is logged.
  if (userName == undefined) {
    console.log("No values were given, please give a name and age.");
  }
  //If no input is given for the age in the function, this error is logged.
  else if (age == undefined) {
    console.log("Only one value was given, please provide a name and an age.");
  } //If userName is a number and not a string, this error is logged.
  else if (!isNaN(userName)) {
    console.log(
      "A number appears to be provided for the name, please enter a name."
    );
  } //If the age input is a string, this error is logged.
  else if (isNaN(ageNum) || equalAge == false || ageNum <= 0) {
    console.log("That is not a valid age. Please input a valid age.");
  } else if (age < 16) {
    console.log(belowSixteen);
  } else if (age >= 16) {
    console.log(aboveSisteen);
  }
}

//Test runs for the function
checkAge("Austin", 27);
checkAge("Austin", -27);
checkAge("Austin", "Austin");
checkAge("Austin", "27");
checkAge("Austin", 4);
checkAge("10", 4);
checkAge(10, 4);
checkAge("Austin");
checkAge("10");
checkAge(27);
checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whatQuad(x, y) {
  let xNum = parseInt(x);
  let equalX = x == xNum;

  let yNum = parseInt(y);
  let equalY = y == yNum;

  let pointString = "";

  if (isNaN(xNum) || equalX == false || isNaN(yNum) || equalY == false) {
    pointString =
      "That is not a valid coordinate. Please input an x value and a y value.";
  } else if (x > 0 && y > 0) {
    pointString = "You are in Quadrant 1.";
  } else if (x < 0 && y > 0) {
    pointString = "You are in Quadrant 2.";
  } else if (x > 0 && y < 0) {
    pointString = "You are in Quadrant 4.";
  } else if (x < 0 && y < 0) {
    pointString = "You are in Quadrant 3.";
  } else if (x == 0 && y == 0) {
    pointString = "You are in the center of the Cartesian plane.";
  } else if (x == 0 && y != 0) {
    pointString = "You are on the Y-axis.";
  } else if (x != 0 && y == 0) {
    pointString = "You are on the X-axis.";
  }

  console.log(pointString);
}

//Test runs for the function
whatQuad();
whatQuad("Two");
whatQuad("Two", "Ten");
whatQuad("10", "2");
whatQuad(1, 1);
whatQuad(-1, 1);
whatQuad(-1, -1);
whatQuad(1, -1);
whatQuad(0, 1);
whatQuad(-1, 0);
whatQuad(0, -1);
whatQuad(1, 0);
whatQuad(0, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
  let aNum = parseInt(a);
  let equalA = a == aNum;

  let bNum = parseInt(b);
  let equalB = b == bNum;

  let cNum = parseInt(c);
  let equalC = c == cNum;

  //This will give an error if not enough numbers are provided and/or a NaN is provided.
  if (
    isNaN(aNum) ||
    equalA == false ||
    isNaN(bNum) ||
    equalB == false ||
    isNaN(cNum) ||
    equalC == false
  ) {
    console.log(
      "These are not valid numbers. Please give three valid numbers."
    );
  }

  if (a + b > c && a + c > b && b + c > a) {
    if ((a == b) == c) {
      console.log(`Sides ${a}, ${b}, ${c} make an equilateral triangle`);
    } else if ((a == b) != c || (a == c) != b || (b == c) != a) {
      console.log(`Sides ${a}, ${b}, ${c} make an isosceles triangle`);
    } else {
      console.log(`Sides ${a}, ${b}, ${c} make a scalene triangle`);
    }
  } else {
    //This will print if there is any invalid input, including non-valid inputs.
    console.log("This cannot make a valid triangle.");
  }
}

//Test runs for the function
triangle();
triangle(1);
triangle(1, 1);
triangle(1, 1, 1);
triangle(1, 1, "one");
triangle(1, "one", "1");
triangle("one", 1, 1);
triangle("1", 1, 1);
triangle(1, "1", 1);
triangle(1, 1, "1");
triangle(2, 1, 1);
triangle(1, 2, 1);
triangle(1, 1, 2);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage) {
  let planLimitNum = parseInt(planLimit);
  let equalPlanLimit = planLimit == planLimitNum;

  let dayNum = parseInt(day);
  let equalDay = day == dayNum;

  let usageNum = parseInt(usage);
  let equalUsage = usage == usageNum;

  //This will give an error if not enough numbers are provided and/or a NaN is provided.
  if (
    isNaN(planLimitNum) ||
    equalPlanLimit == false ||
    isNaN(dayNum) ||
    equalDay == false ||
    isNaN(usageNum) ||
    equalUsage == false
  ) {
    console.log(
      "These are not valid numbers. Please give three valid numbers."
    );
    return;
  }

  let daysLeft = 30 - dayNum; //Gives days remaining in month.
  let dailyUseAllowed = planLimit / 30; //Gives daily use allowed.
  dailyUseAllowed = parseFloat(dailyUseAllowed.toFixed(2)); //Changes integer to 2 decimal places and back to number from string.
  let avgUsed = usage / dayNum; //Gives average daily use that has been used.
  avgUsed = parseFloat(avgUsed.toFixed(2)); //Changes integer to 2 decimal places and back to number from string.
  let exceeding = dailyUseAllowed < avgUsed; //If you are using more than allowed then true.
  let notExceeding = dailyUseAllowed > avgUsed; //If you are using less than allowed then true.
  let exceedUse = avgUsed * daysLeft + usage - planLimit; //Gives exceeded data usage.
  exceedUse = parseFloat(exceedUse.toFixed(2)); //Changes integer to 2 decimal places and back to number from string.
  let usageLeft = (planLimit - usage) / daysLeft; //Gives daily amount allowed.
  usageLeft = parseFloat(usageLeft.toFixed(2)); //Changes integer to 2 decimal places and back to number from string.
  let usageOver = usage - planLimit; //Gives a positive number if they have exceeded the plan limit already.
  let warning = "";

  if (exceeding) {
    warning = `You are EXCEEDING your average daily use (${dailyUseAllowed} GB/day),
continuing this excess usage, you'll exceed your data plan by ${exceedUse} GB.`;
  } else if (notExceeding) {
    warning = `You are UNDER your average daily use (${dailyUseAllowed} GB/day),
continuing this usage, you'll not exceed your plan limit this month.`;
  } else {
    warning = `You are EXACTLY MATCHING your average daily use (${dailyUseAllowed} GB/day),
continuing this usage, you'll not exceed your plan limit this month.`;
  }

  if (usage < planLimit) {
    console.log(`${day} days used, ${daysLeft} days remaining. 
Average daily use: ${avgUsed} GB/day.
${warning}
To stay below your data plan, use no more than ${usageLeft} GB/day.`);
  } else {
    console.log(`${day} days used, ${daysLeft} days remaining. 
Average daily use: ${avgUsed} GB/day.
You exceeded your plan limit by ${usageOver} GB.
You no longer have any data left for the month.`);
  }
}

//Test runs for the function
dataPlan(100, 15);
dataPlan(100, "15", 156);
dataPlan(100, "ten", 156);
dataPlan(100, 15, 156);
dataPlan(100, 15, 56);
dataPlan(100, 15, 8);
dataPlan(100, 15, 50);
