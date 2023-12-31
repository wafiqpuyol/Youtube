// https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time
// in miliseconds

var units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: 24 * 60 * 60 * 1000 * 365 / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
}

var rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

var getRelativeTime = (d1, d2 = new Date()) => {
    var elapsed = d1 - d2

    // "Math.abs" accounts for both "past" & "future" scenarios
    for (var u in units)
        if (Math.abs(elapsed) > units[u] || u == 'second')
            return rtf.format(Math.round(elapsed / units[u]), u)
}

export const getDate = (localDate) => {
    var date = new Date(localDate)
    var myDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + "/" + date.getFullYear();
    return getRelativeTime(+new Date(myDate))
}