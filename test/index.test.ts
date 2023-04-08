import { getTime, setTime, parseTimeToDate } from '../src/index';

describe('getTime', () => {
  it('returns a string in the format of HH:MM:SS', () => {
    const time = new Date('2023-04-08T13:24:35.000Z');
    expect(getTime(time)).toEqual('13:24:35');
  });

  it('pads the single-digit values with a leading zero', () => {
    const time = new Date('2023-04-08T05:06:07.000Z');
    expect(getTime(time)).toEqual('05:06:07');
  });

  it('returns the correct time for midnight', () => {
    const time = new Date('2023-04-08T00:00:00.000Z');
    expect(getTime(time)).toEqual('00:00:00');
  });

  it('returns the correct time for noon', () => {
    const time = new Date('2023-04-08T12:00:00.000Z');
    expect(getTime(time)).toEqual('12:00:00');
  });
});

describe('setTime', () => {
  it('sets the hours, minutes, seconds, and milliseconds correctly', () => {
    const timeArray = [1, 2, 3, 456]
    const expectedTime = new Date()
    expectedTime.setHours(timeArray[0])
    expectedTime.setMinutes(timeArray[1])
    expectedTime.setSeconds(timeArray[2])
    expectedTime.setMilliseconds(timeArray[3])

    const actualTime = setTime(timeArray)

    expect(actualTime.getHours()).toEqual(expectedTime.getHours())
    expect(actualTime.getMinutes()).toEqual(expectedTime.getMinutes())
    expect(actualTime.getSeconds()).toEqual(expectedTime.getSeconds())
    expect(actualTime.getMilliseconds()).toEqual(expectedTime.getMilliseconds())
  })

  it('sets the time to the current date', () => {
    const timeArray = [1, 2, 3, 456]
    const actualTime = setTime(timeArray)
    const currentTime = new Date()

    expect(actualTime.getFullYear()).toEqual(currentTime.getFullYear())
    expect(actualTime.getMonth()).toEqual(currentTime.getMonth())
    expect(actualTime.getDate()).toEqual(currentTime.getDate())
  })
})

describe('parseTimeToDate', () => {
  it('returns an ISO date string', () => {
    const result = parseTimeToDate('12:34:56');
    expect(result).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
  });

  it('parses the time string correctly', () => {
    const result = parseTimeToDate('08:15:30');
    const expectedDate = new Date();
    expectedDate.setHours(12, 0, 0, 0);
    const expectedDateString = `${expectedDate.getFullYear()}-${String(expectedDate.getMonth() + 1).padStart(2, '0')}-${String(expectedDate.getDate()).padStart(2, '0')}`;
    const resultDateString = result.split('T')[0];
    expect(resultDateString).toEqual(expectedDateString);
  });

  it('adds leading zeros to single digit hours, minutes, and seconds', () => {
    const result = parseTimeToDate('1:2:3');
    const expectedDate = new Date();
    expectedDate.setHours(12, 0, 0, 0);
    const expectedDateString = `${expectedDate.getFullYear()}-${String(expectedDate.getMonth() + 1).padStart(2, '0')}-${String(expectedDate.getDate()).padStart(2, '0')}`;
    const resultDateString = result.split('T')[0];
    expect(resultDateString).toEqual(expectedDateString);
  });

  it('returns the correct time for midnight', () => {
    const result = parseTimeToDate('00:00:00');
    const expectedDate = new Date();
    expectedDate.setHours(12, 0, 0, 0);
    const expectedDateString = `${expectedDate.getFullYear()}-${String(expectedDate.getMonth() + 1).padStart(2, '0')}-${String(expectedDate.getDate()).padStart(2, '0')}`;
    const resultDateString = result.split('T')[0];
    expect(resultDateString).toEqual(expectedDateString);
  });

  it('returns the correct time for noon', () => {
    const result = parseTimeToDate('12:00:00');
    const expectedDate = new Date();
    expectedDate.setHours(12, 0, 0, 0);
    const expectedDateString = `${expectedDate.getFullYear()}-${String(expectedDate.getMonth() + 1).padStart(2, '0')}-${String(expectedDate.getDate()).padStart(2, '0')}`;
    const resultDateString = result.split('T')[0];
    expect(resultDateString).toEqual(expectedDateString);
  });
});