// Fourteen days of room slots: the grid that wide exists for.
const days = Array.from({ length: 14 }, (_, index) => index + 5)
const hours = ["09", "10", "11", "13", "14", "15", "16"]
const booked = new Set(["7-10", "8-14", "12-09", "15-15", "16-11", "18-13"])

export function Demo() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="grid min-w-max grid-cols-15 gap-1 tabular-nums">
        <span />
        {days.map((day) => (
          <span key={day} className="text-center text-muted-foreground">
            10/{day}
          </span>
        ))}
        {hours.map((hour) => (
          <div key={hour} className="contents">
            <span className="pr-2 text-right text-muted-foreground">
              {hour}:00
            </span>
            {days.map((day) => (
              <span
                key={day}
                className={
                  booked.has(`${day}-${hour}`)
                    ? "h-10 rounded-control bg-primary"
                    : "h-10 rounded-control bg-muted"
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
