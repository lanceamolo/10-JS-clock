function startTime() {
  let today = new Date()
  let h = today.getHours()
  h = h >= 12 ? h - 12 : h
  let m = today.getMinutes()
  let s = today.getSeconds()
  h = zeroBefore(h)
  m = zeroBefore(m)
  s = zeroBefore(s)
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s
}

startTime()
setInterval(startTime, 1000)

function zeroBefore(i) {
  if (i <= 9) {
    i = "0" + i
  }
  return i
}
