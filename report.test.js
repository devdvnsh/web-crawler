const { sortPages } = require("./report.js")
const { test, expect } = require("@jest/globals")


test('sortPages 2 pages', () => {
    const input = {
        "https://abcdef.dev/path": 1,
        "https://abcdef.dev": 3
    }
    const actual = sortPages(input)
    const expected = [
        ["https://abcdef.dev", 3],
        ["https://abcdef.dev/path", 1]
    ]
    expect(actual).toEqual(expected)
})
test('sortPages 5 pages', () => {
    const input = {
        "https://abcdef.dev/path1": 1,
        "https://abcdef.dev": 3,
        "https://abcdef.dev/path2": 5,
        "https://abcdef.dev/path3": 2,
        "https://abcdef.dev/path4": 9,
    }
    const actual = sortPages(input)
    const expected = [
        ["https://abcdef.dev/path4", 9],
        ["https://abcdef.dev/path2", 5],
        ["https://abcdef.dev", 3],
        ["https://abcdef.dev/path3", 2],
        ["https://abcdef.dev/path1", 1]
    ]
    expect(actual).toEqual(expected)
})
