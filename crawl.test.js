const { normalizeURL, getURLFromHTML } = require("./crawl.js")
const { test, expect } = require("@jest/globals")


test('normalizeURL strip protocol', () => {
    const input = "https://abcdef.dev/path"
    const actual = normalizeURL(input)
    const expected = "abcdef.dev/path"
    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
    const input = "https://abcdef.dev/path/"
    const actual = normalizeURL(input)
    const expected = "abcdef.dev/path"
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
    const input = "https://abcdef.dev/path"
    const actual = normalizeURL(input)
    const expected = "abcdef.dev/path"
    expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
    const input = "http://abcdef.dev/path"
    const actual = normalizeURL(input)
    const expected = "abcdef.dev/path"
    expect(actual).toEqual(expected)
})

test('getURLFromHTML absolute', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://abcdef.dev/path/">
                abcdef Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://abcdef.dev/path/"
    const actual = getURLFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://abcdef.dev/path/"]
    expect(actual).toEqual(expected)
})

test('getURLFromHTML relative', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">
                abcdef Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://abcdef.dev"
    const actual = getURLFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://abcdef.dev/path/"]
    expect(actual).toEqual(expected)
})

test('getURLFromHTML both', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://abcdef.dev/path1/">
                abcdef Blog Path 1
            </a>
            <a href="/path2/">
                abcdef Blog Path 2
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://abcdef.dev"
    const actual = getURLFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://abcdef.dev/path1/", "https://abcdef.dev/path2/"]
    expect(actual).toEqual(expected)
})

test('getURLFromHTML invalid', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="invalid">
                invalid URL
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://abcdef.dev/path/"
    const actual = getURLFromHTML(inputHTMLBody, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})