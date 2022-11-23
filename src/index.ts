/**
 * This program creates an hourglass using recursion.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-11-22
 */

// Import
import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * Function of Hourglass
 *
 * @param {number} userInt length of the hourglass
 * @param {number} center middle of the hourglass
 */
function hourglass(userInt: number, center: number): void {
  // Set variable
  let userHourglass = ''

  // Process
  for (let counterOne = 0; counterOne < center; counterOne++) {
    userHourglass += ' '
  }

  for (let counterTwo = 0; counterTwo < userInt; counterTwo++) {
    userHourglass += '* '
  }
  console.log(userHourglass)

  // Recursion
  if (userInt > 1) {
    hourglass(userInt - 1, center + 1)
  }
  console.log(userHourglass)
}

// Input
console.log('\nAssignment 4')
const userString = prompt('Enter an integer : ')
const userInt = parseInt(userString)
console.log('')

// Process
if (isNaN(userInt)) {
  console.log('Invalid input entered.')
} else if (userInt < 1) {
  console.log('Integer must be greater than 1.')
} else {
  hourglass(userInt, 0)
}

// Output
console.log('\nDone.')
