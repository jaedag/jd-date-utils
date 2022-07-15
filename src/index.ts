


export const getTime = (time: Date) => {
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
  }
  
  export const setTime = (timeArray: number[]) => {
    const now = new Date()
    now.setHours(timeArray[0])
    now.setMinutes(timeArray[1])
    now.setMilliseconds(timeArray[2])
  
    return now
  }
  export const parseTimeToDate = (timeString: string) => {
    const array = timeString.split(':')

    const numArray = array.map(element => parseInt(element))
    
    const datetime = setTime([...numArray, 0])
    return datetime.toISOString()
  }
  
  export const getMondayThisWeek = (date: Date) => {
    const firstDate = date
    const numberOfDaysBefore = date.getDay()
  
    if (numberOfDaysBefore === 0) {
      firstDate.setDate(firstDate.getDate() - 6)
    } else {
      firstDate.setDate(firstDate.getDate() - numberOfDaysBefore + 1)
    }
    return firstDate
  }
  
  export const parseNeoTime = (timestamp: string) => {
    if (!timestamp) {
      return
    }


    const data = new Date(timestamp)
    let hrs:string|number = data.getHours()
    let mins:string|number = data.getMinutes()
    let secs:string|number = data.getSeconds()
    if (hrs <= 9) hrs = `0${hrs}`
    if (mins < 10) mins = `0${mins}`
    if (secs < 10) secs = `0${secs}`
    const postTime = `${hrs}:${mins}:${secs}`
    return postTime
  }
  
  export const parseDate = (date: string) => {
    // Receives the current date and returns text "Today, Yesterday,etc"
  
    // Get today's date
    const todaysDate = new Date()
  
    // Create date from input value
    const inputDate = new Date(date)
  
    // To calculate the time difference of two dates
    const differenceInTime = todaysDate.getTime() - inputDate.getTime()
  
    // To calculate the no. of days between two dates
    const differenceInDays = differenceInTime / (1000 * 3600 * 24)
  
    // call setHours to take the time out of the comparison
    if (inputDate.toDateString() === todaysDate.toDateString()) {
      // Date equals today's date
      return 'Today'
    }
    if (differenceInDays <= 1) {
      // Date equals yesterday's date
      return 'Yesterday'
    }
    if (Math.floor(differenceInDays) < 7) {
      // Date equals yesterday's date
      return `${Math.floor(differenceInDays)} days ago`
    }
  
    return inputDate.toDateString()
  }
  
  export const getHumanReadableDate = (date: string, weekday?: true) => {
    if (!date) {
      return
    }
    if (weekday) {
      return new Date(date).toLocaleDateString('en-gb', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      })
    }
  
    return new Date(date).toLocaleDateString('en-gb', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  
  type MemberType =  {
      dob: {
          date: string
      }
  }

  export const getMemberDob = (displayMember: MemberType) => {
    if (!displayMember) {
      return
    }
    if (displayMember.dob?.date) {
      return getHumanReadableDate(displayMember.dob?.date)
    }
    return null
  }
  
  export const getWeekNumber = (date?: string) => {


    const currentdate: any = date ? new Date(date) : new Date()
    const oneJan: any = new Date(currentdate.getFullYear(), 0, 1)
    const adjustedForMonday = 8 - oneJan.getDay() // Checking the number of days till Monday when the week starts
    oneJan.setDate(oneJan.getDate() + adjustedForMonday)
    const numberOfDays = Math.floor(
      (currentdate - oneJan) / (24 * 60 * 60 * 1000)
    )
  
    const result = Math.ceil(numberOfDays / 7)
  
    return result
  }
  
  export const last3Weeks = () => {
    const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toString()
    const last2Weeks = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toString()
  
    return [getWeekNumber(), getWeekNumber(lastWeek), getWeekNumber(last2Weeks)]
  }
  
  export const isToday = (date: string) => {
    return parseDate(date) === 'Today'
  }
  
  //Arrivals Specific Date Functions
  export const getTodayTime = (timeString: string) => {
    return new Date().toISOString().slice(0, 10) + timeString?.slice(10)
  }
  
  export const addHours = (date: string, hours: number) => {
    const newDate = new Date(date)
    newDate.setHours(newDate.getHours() + hours)
    return newDate
  }
  
  export const addMinutes = (date: string, minutes: number) => {
    const newDate = new Date(date)
    newDate.setMinutes(newDate.getMinutes() + minutes)
    return newDate
  }
  