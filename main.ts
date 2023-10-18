    /* Copyright (c) 2020 MTHS All rights reserved
    *
    * Created by: Cedric
    * Created on: Oct 2023
    * This program mixes colors
    */

// setup
pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P14, 0)

// turn on LED
input.onButtonPressed(Button.A, function () {
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString('red')

  // turn off LED
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.pause(1000)

  basic.showString('Green')
  // turn on LED
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.pause(1000)

  // turn off LED
  pins.digitalWritePin(DigitalPin.P15, 0)
  basic.pause(1000)

  basic.showString('Blue')
  // turn on LED
  pins.digitalWritePin(DigitalPin.P14, 1)
  basic.pause(1000)

  // turn off LED
  pins.digitalWritePin(DigitalPin.P14, 0)
  basic.pause(1000)

  basic.showString('Magenta')
  // turn on LED
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.pause(1000)

  // turn off LED
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.pause(1000)

  basic.showString('Yellow')
  // turn on LED
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.pause(1000)

  // turn off LED
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.pause(1000)

  basic.showString('Cyan')
// turn on LED
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P14, 1)
  basic.pause(1000)

// turn off LED
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P14, 0)
  basic.pause(1000)

  //
  basic.showString('white')
  // turn on LED
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.pause(1000)

  // turn off LED
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.pause(1000)
})
