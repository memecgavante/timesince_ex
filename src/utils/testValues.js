import { msInSecond, msInHour, msInMinute, msInDay } from "./constants.js";

const now = new Date();
let minusMinute = now.setMinutes(now.getMinutes() - 1);
function setMinusHour(hour) {
  let minusHour = new Date();
  minusHour.setHours(minusHour.getHours() - hour);
  return minusHour;
}
function setMinusMinute(minute) {
  let minusMinute = new Date();
  minusMinute.setMinutes(minusMinute.getMinutes() - minute);
  return minusMinute;
}
function setMinusSecond(second) {
  let minusSecond = new Date();
  minusSecond.setSeconds(minusSecond.getSeconds() - second);
  return minusSecond;
}

new Date().setHours(now.getHours() - 1);
export const testValues = {
  // a ___in ms
  week: new Date("Dec 23, 2024"),
  day: new Date("Dec 29, 2024"),
  hour: setMinusHour(1),
  minute: setMinusMinute(1),
  second: setMinusSecond(1),
  now: new Date(),
};

// testDifferences
// a week / 7 days ago
// const difference = time.getTime() - testValues.week;
// a day ago
// const difference = time.getTime() - testValues.day;
// 59 minutes ago
// const difference = time.getTime() - testValues.hour-1;
// 1 hour ago
// const difference = time.getTime() - testValues.hour + 1;
// now - 1 ms
// const difference = time.getTime() - testValues.second - 1;
// now
// const difference = time.getTime() - testValues.now;

// 1s ago
// const difference = time.getTime() - testValues.second + 1;
