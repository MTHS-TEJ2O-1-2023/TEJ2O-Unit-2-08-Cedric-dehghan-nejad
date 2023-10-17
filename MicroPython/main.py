"""
Created by: Cedric
Created on: Sep 2023
This module turns on and off a LED
"""

from microbit import *
while True():
# setup
display.clear()
pin16.write_digital(1)
display.show("red")

# turn on LED
if button_a.is_pressed():
    pin16.write_digital(1)
    sleep(1000)

    # turn off LED
if button_b.is_pressed():
    pin16.write_digital

    # setup
    pin15.write_digital(1)
display.show("Green")
sleep(1000)

# turn on LED
if button_a.is_pressed():
    pin15.write_digital(1)

    # turn off LED
    pin15.write_digital(0)
if button_b.is_pressed():
    pin15.write_digital(0)

    # setup
    pin14.write_digital(1)
display.show("blue")
sleep(1000)

# turn on LED
if button_a.is_pressed():
    pin14.write_digital(1)
    sleep(1000)

# turn off LED
if button_b.is_pressed():
    pin14.write_digital(0)
    pin14.write_digital(0)

    # setup
    pin14.write_digital(1)
    pin16.write_digital(1)
display.show("magenta")
sleep(1000)

# turn on LED
if button_a.is_pressed():
    pin14.write_digital(1)
    pin16.write_digital(1)
    sleep(1000)

# turn off LED
if button_b.is_pressed():
    pin14.write_digital(0)
    pin16.write_digital(0)

    # setup
    pin15.write_digital(1)
    pin16.write_digital(1)
    display.show("yellow")
    sleep(1000)

    # turn on LED
    if button_a.is_pressed():
        pin15.write_digital(1)
    pin16.write_digital(1)
    sleep(1000)

    # turn off LED
    if button_b.is_pressed():
        pin15.write_digital(0)
        pin16.write_digital(0)

    # setup
    pin15.write_digital(1)
    pin14.write_digital(1)
    display.show("cyan")
    sleep(1000)

    # turn on LED
    if button_a.is_pressed():
        pin15.write_digital(1)
    pin14.write_digital(1)
    sleep(1000)

    # turn off LED
    if button_b.is_pressed():
        pin15.write_digital(0)
    pin14.write_digital(0)

    # setup
    pin15.write_digital(1)
    pin14.write_digital(1)
    pin16.write_digital(1)
    display.show("white")
    sleep(1000)

    # turn on LED
    if button_a.is_pressed():
        pin15.write_digital(1)
    pin14.write_digital(1)
    pin16.write_digital(1)
    sleep(1000)

    # turn off LED
    if button_b.is_pressed():
        pin15.write_digital(0)
    pin14.write_digital(0)
    pin16.write_digital(0)
