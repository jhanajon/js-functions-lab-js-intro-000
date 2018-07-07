// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}


function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(days, holiday) {
  return `It's ${days} days until ${holiday}!`
}

///added a reverse in string options but modified index-test.js to reflect the expectation:
//expect(holidayCountdown(20, "Mother's Day"))
//in lieu of
//expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")

// then I split up into separate functions in the test file


function holidayCountdownReverse(days, holiday) {
  return `It's ${days} days until ${holiday}!`
}
