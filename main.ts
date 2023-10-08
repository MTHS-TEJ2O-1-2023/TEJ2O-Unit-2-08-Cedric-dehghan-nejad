/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Cedric
 * Created on:Oct 2023
 * This program mixes colours
*/

// setup
pins.digitalWritePin(DigitalPin.P16, 1)
basic.showString('red')

// turn on LED
input.onButtonPressed(Button.A, function () {
  pins.digitalWritePin(DigitalPin.P16, 1)
})
// turn off LED
pins.digitalWritePin(DigitalPin.P16, 0)
input.onButtonPressed(Button.B, function () {
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.pause(1000)
})
// setup
pins.digitalWritePin(DigitalPin.P15, 1)
basic.showString('Green')

// turn on LED
input.onButtonPressed(Button.A, function () {
  pins.digitalWritePin(DigitalPin.P15, 1)
})
// turn off LED
pins.digitalWritePin(DigitalPin.P15, 0)
input.onButtonPressed(Button.B, function () {
  pins.digitalWritePin(DigitalPin.P15, 0)
  basic.pause(1000)
})
// setup
pins.digitalWritePin(DigitalPin.P14, 1)
basic.showString('blue')

// turn on LED
input.onButtonPressed(Button.A, function () {
  pins.digitalWritePin(DigitalPin.P14, 1)
})
// turn off LED
input.onButtonPressed(Button.B, function () {
  pins.digitalWritePin(DigitalPin.P14, 0)
  basic.pause(1000)
})
// setup
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P16, 1)

basic.showString('magenta')

// turn on LED
input.onButtonPressed(Button.A, function () {
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
})
// turn off LED
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
input.onButtonPressed(Button.B, function () {
  basic.pause(1000)
})

// setup
pins.digitalWritePin(DigitalPin.P15, 1)
pins.digitalWritePin(DigitalPin.P16, 1)
basic.showString('yellow')

// turn on LED
input.onButtonPressed(Button.A, function () {
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
})
// turn off LED
input.onButtonPressed(Button.B, function () {
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.pause(1000)
})
// setup
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P15, 1)
basic.showString('cyan')

// turn on LED
input.onButtonPressed(Button.A, function () {
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P14, 1)
})
// turn off LED
input.onButtonPressed(Button.B, function () {
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P14, 0)
  basic.pause(1000)
})
// setup
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P15, 1)
pins.digitalWritePin(DigitalPin.P16, 1)
basic.showString('white')

// turn on LED
input.onButtonPressed(Button.A, function () {
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
})
// turn off LED
input.onButtonPressed(Button.B, function () {
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.pause(1000)
})
