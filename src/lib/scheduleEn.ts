/**
 * English text for the small set of clubs that have a Hungarian `schedule`
 * string in clubs.json. Presentation-only lookup, not stored on the club
 * itself since it's just a handful of short phrases.
 */
const SCHEDULE_EN: Record<string, string> = {
  Hétvégente: "Weekends",
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
};

export function getScheduleEn(schedule: string | null | undefined): string | null {
  if (!schedule) return null;
  return SCHEDULE_EN[schedule] ?? schedule;
}
