function startTime() {
  let today = new Date()
  let h = today.getHours()
  let amOrPm = h >= 12 ? "pm" : "am"
  h = h % 12 || 12
  let m = today.getMinutes()
  let s = today.getSeconds()
  h = checkTime(h)
  m = checkTime(m)
  s = checkTime(s)
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + amOrPm
}

let = setInterval(startTime, 1000)

function checkTime(i) {
  if (i <= 9) {
    i = "0" + i
  }
  return i
}
