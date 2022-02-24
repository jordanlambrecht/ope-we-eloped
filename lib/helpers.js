export function RandomArrayItem(length) {
  return Math.floor(Math.random() * length)
}

export function msToTime(duration) {
  let milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  let showTime = ''

  // hours
  if (hours > 1) {
    showTime += hours + ' hrs '
  } else if (hours === 1) {
    showTime += hours + 'hr '
  }

  // minutes
  if (minutes < 10) {
    showTime += '0' + minutes + ' min'
  } else if (minutes > 10) {
    showTime += minutes + ' min'
  }

  return showTime
}

export function pluralize(count, itemName) {
  let output = count + ' ' + itemName
  if (count === 1) return output
  else return (output += 's')
}
