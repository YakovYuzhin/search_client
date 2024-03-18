import { User } from "../types/User";

export function calcGenderAmount(arr: Array<User>): any {
  let amount = {
    w: 0,
    m: 0,
  };
  for (let a of arr) {
    a.male === "w" ? amount.w++ : amount.m++;
  }
  return amount;
}

export function calcusersAgeGroups(arr: Array<User>): any {
  let groups = {
    "20+": 0,
    "20-": 0,
  };
  for (let a of arr) {
    a.age >= 20 ? groups["20+"]++ : groups["20-"]++;
  }
  return groups;
}
