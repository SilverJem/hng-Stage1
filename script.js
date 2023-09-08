let day =  document.getElementById("weekday")
  let utctime = document.getElementById("utcTime")
  let date = new Date()
  const currentUtcTime = Date.now();
  let daysOfWeek = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  day.innerHTML += ` ${daysOfWeek[date.getDay()]}`
  utctime.innerHTML += ` ${currentUtcTime}`