import { readFileSync, writeFileSync } from 'node:fs'

const lines = readFileSync('./update-report.txt', 'utf-8').split('\n')
const blankLinesCleaned = lines.filter(line => line.trim() !== '')
const removedFirstAndLast = blankLinesCleaned.slice(1, -1)

writeFileSync('./update-report.txt', removedFirstAndLast.join('\n'), 'utf-8')
