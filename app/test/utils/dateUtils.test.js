import { zeroFill, format12Hour, format24Hour } from '../../utils/dateUtils'

it("zeroFill should add a left zero", () => {
    const expected = "01"
    expect(zeroFill("1")).toBe(expected)
})

it("zeroFill should no add a left zero", () => {
    const expected = "10"
    expect(zeroFill("10")).toBe(expected)
})


it("format 24 hour should return the hour and minute with 24hh:mm format", () => {
    const date1 = new Date(2019, 1, 1, 4, 30, 20)
    const expected1 = "04:30"
    expect(format24Hour(date1)).toBe(expected1)

    const date2 = new Date(2019, 1, 1, 16, 30, 20)
    const expected2 = "16:30"
    expect(format24Hour(date2)).toBe(expected2)

    const date3 = new Date("none")
    const expected3 = ""
    expect(format24Hour(date3)).toBe(expected3)
})

it("format 12 hour should return the hour and minute with 12hh:mm tt format", () => {
    const date1 = new Date(2019, 1, 1, 4, 30, 20)
    const expected1 = "04:30 AM"
    expect(format12Hour(date1)).toBe(expected1)

    const date2 = new Date(2019, 1, 1, 16, 30, 20)
    const expected2 = "04:30 PM"
    expect(format12Hour(date2)).toBe(expected2)

    const date3 = new Date(2019, 1, 1, 24, 30, 20)
    const expected3 = "00:30 AM"
    expect(format12Hour(date3)).toBe(expected3)

    const date4 = new Date(2019, 1, 1, 12, 30, 20)
    const expected4 = "12:30 PM"
    expect(format12Hour(date4)).toBe(expected4)

    const date5 = new Date(2019, 1, 1, 0, 30, 20)
    const expected5 = "00:30 AM"
    expect(format12Hour(date5)).toBe(expected5)

    const date6 = new Date("none")
    const expected6 = ""
    expect(format24Hour(date6)).toBe(expected6)
})