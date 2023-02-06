const minute = 60;
const hour = 60 * minute;
const day = hour * 24;

const minHourUnits = (seconds) => [
  { sufix: ":", amount: Math.trunc(seconds / hour), print: true, pad: 2 },
  {
    sufix: ":",
    amount: Math.trunc((seconds % hour) / minute),
    print: true,
    pad: 2,
  },
  { sufix: "", amount: Math.trunc(seconds % minute), print: true, pad: 2 },
];

const minHourUnitsDesc = (seconds) => [
  { sufix: "h ", amount: Math.trunc(seconds / hour), print: true, pad: 2 },
  {
    sufix: "m ",
    amount: Math.trunc((seconds % hour) / minute),
    print: true,
    pad: 2,
  },
  { sufix: "s", amount: Math.trunc(seconds % minute), print: true, pad: 2 },
];

const descHourUnits = (seconds) => [
  {
    sufix: "d ",
    amount: Math.trunc(seconds / day),
    print: seconds >= day,
    pad: 1,
  },
  {
    sufix: "h ",
    amount: Math.trunc((seconds % day) / hour),
    print: seconds >= hour,
    pad: 1,
  },
  {
    sufix: "m ",
    amount: Math.trunc((seconds % hour) / minute),
    print: seconds >= minute,
    pad: 1,
  },
  { sufix: "s", amount: Math.trunc(seconds % minute), print: true, pad: 1 },
];

const padStartAmount = (unit) => {
  unit.amount = String(unit.amount).padStart(unit.pad, "0");
  return unit;
};

export default (seconds, units) => {
  const parts = units ? units(seconds) : descHourUnits(seconds);

  return parts
    .filter((v) => v.amount)
    .filter((unit) => unit.print)
    .map(padStartAmount)
    .reduce((acc, unit) => `${acc}${unit.amount}${unit.sufix}`, "")
    .trim();
};

export const formatHour = (seconds) =>
  minHourUnits(seconds)
    .filter((unit) => unit.print)
    .map(padStartAmount)
    .reduce((acc, unit) => `${acc}${unit.amount}${unit.sufix}`, "")
    .trim();

export const formatDescHour = (seconds) =>
  minHourUnitsDesc(seconds)
    .filter((unit) => unit.print)
    .map(padStartAmount)
    .reduce((acc, unit) => `${acc}${unit.amount}${unit.sufix}`, "")
    .trim();
