let caxote = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("auau miau")
    basic.pause(randint(1000, 5000))
    basic.showIcon(IconNames.Silly)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    caxote += 1
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . . . #
        . . . . #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # . . . .
        # . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
