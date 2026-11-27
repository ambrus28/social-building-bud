/**
 * English text for the small set of clubs that have a Hungarian `schedule`
 * string in clubs.json. Presentation-only lookup, not stored on the club
 * itself since it's just a handful of short phrases.
 */
const SCHEDULE_EN: Record<string, string> = {
  Hétvégente: "Weekends",
  "Hetente többször, változó helyen": "Several times a week, changing venues",
  "Kedd és csütörtök este, vasárnap reggel, Szabadság tér és Margitsziget":
    "Tue & Thu evenings, Sun mornings, Liberty Square and Margaret Island",
  "Szombat esténként": "Saturday evenings",
  Havonta: "Monthly",
  "Keddenként, Margitsziget": "Tuesdays, Margaret Island",
  "Havonta, vezetett túrák": "Monthly, guided hikes",
  "Hetente, Puskás Aréna melletti pálya": "Weekly, court next to Puskás Aréna",
  "Szerda este, kéthetente szombat reggel": "Wednesday evenings, every other Saturday morning",
  "Kéthetente szombat este": "Every other Saturday evening",
  "Minden vasárnap": "Every Sunday",
  "Szerda délelőtt": "Wednesday mornings",
  "Kéthetente hétfő délelőtt": "Every other Monday morning",
  "Vasárnap este": "Sunday evenings",
  "Szerda és péntek este": "Wednesday and Friday evenings",
  "Kedd és csütörtök este, kéthetente szombat reggel": "Tue & Thu evenings, every other Saturday morning",
  "Csütörtök este": "Thursday evenings",
  "Kedd este": "Tuesday evenings",
  "Hetente többször": "Several times a week",
  "Havonta többször": "Several times a month",
  "1-2 hetente, hétvégén": "Every 1-2 weeks, at weekends",
  "Hétfő, kedd és csütörtök este": "Monday, Tuesday and Thursday evenings",
  "Havi naptár szerint": "Per monthly calendar",
  "Havonta több hétvégi túra": "Several weekend hikes a month",
  "Havonta, utolsó péntek": "Monthly, last Friday",
  "Havonta, a hónap elején": "Monthly, early in the month",
  "Hétfő és kedd este, szombat reggel": "Monday and Tuesday evenings, Saturday mornings",
  "Kedd este, naptár szerint": "Tuesday evenings, per calendar",
  "Minden kedden 18:00": "Every Tuesday, 18:00",
  "Szerda este": "Wednesday evenings",
  "Szerda este és vasárnap délelőtt": "Wednesday evenings and Sunday mornings",
  "Szerda este, hétvégén reggel": "Wednesday evenings, weekend mornings",
  "Szombatonként": "Saturdays",
  "Tavasztól őszig": "Spring to autumn",
  "Hetente, változó programokkal": "Weekly, with varied events",
  "Egy-két havonta": "Every one to two months",
  "Havonta, harmadik vasárnap": "Monthly, third Sunday",
  "Havonta, kedd este": "Monthly, Tuesday evening",
  "Havonta, szerda este": "Monthly, Wednesday evening",
  "Havonta, szombatonként": "Monthly, on Saturdays",
  "Havonta, vasárnap délután": "Monthly, Sunday afternoon",
  "Havonta, változó napokon": "Monthly, on varying days",
  "Hétfő este": "Monday evenings",
  "Hétfő és csütörtök este, kedd és péntek reggel": "Mon & Thu evenings, Tue & Fri mornings",
  "Hétfő és szerda reggel": "Monday and Wednesday mornings",
  "Néhány havonta": "Every few months",
  "Szombat este": "Saturday evenings",
};

export function getScheduleEn(schedule: string | null | undefined): string | null {
  if (!schedule) return null;
  return SCHEDULE_EN[schedule] ?? schedule;
}
