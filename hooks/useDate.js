const dayjs = require("dayjs")

const useDate = () => {
  const getHour = (date) => {
    return dayjs(date).format('HH:mm')
  }

  const getDay = (date) => {
    return dayjs(date).format('ddd DD MMM')
  }

  return {
    getHour,
    getDay
  }
}

export default useDate;