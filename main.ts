radio.onReceivedNumber(function (receivedNumber) {
    Radio = receivedNumber
    Kitronik_Move_Motor.stop()
    if (Radio == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 5)
        basic.pause(500)
    } else if (Radio == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 5)
        basic.pause(500)
    } else if (Radio == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 35)
        basic.pause(500)
    } else if (Radio == 4) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 30)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    Kitronik_Move_Motor.stop()
})
let Radio = 0
radio.setGroup(1)
