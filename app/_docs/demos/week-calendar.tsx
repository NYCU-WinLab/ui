import { WeekCalendar } from "@/registry/winlab/blocks/week-calendar/week-calendar"

const at = (day: string, time: string) => `2026-11-${day}T${time}:00+08:00`

const events = [
  { title: "Lab Meeting", start: at("02", "15:30"), end: at("02", "17:30") },
  { title: "實驗討論", start: at("02", "16:00"), end: at("02", "17:00") },
  { title: "專題討論", start: at("02", "19:30"), end: at("02", "20:30") },
  { title: "6G 雙週會議", start: at("03", "10:00"), end: at("03", "11:00") },
  {
    title: "校慶",
    start: "2026-11-04T00:00:00+08:00",
    end: "2026-11-05T00:00:00+08:00",
    allDay: true,
  },
  { title: "電腦動畫與特效", start: at("05", "10:10"), end: at("05", "13:00") },
  {
    title: "忙碌",
    start: at("05", "15:30"),
    end: at("05", "17:20"),
    quiet: true,
  },
  {
    title: "研討會",
    start: "2026-11-06T00:00:00+08:00",
    end: "2026-11-08T00:00:00+08:00",
    allDay: true,
  },
]

export function Demo() {
  return (
    <WeekCalendar
      className="w-full text-left"
      from="2026-11-02"
      today="2026-11-04"
      events={events}
    />
  )
}
