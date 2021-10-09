radio.onReceivedNumber(function (receivedNumber) {
    Radio = receivedNumber
    Kitronik_Move_Motor.stop()
    if (Radio == 1) {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
        moveMotorZIP.show()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 0)
        basic.pause(500)
    } else if (Radio == 2) {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
        moveMotorZIP.show()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 0)
        basic.pause(500)
    } else if (Radio == 3) {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
        moveMotorZIP.show()
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
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Purple))
        moveMotorZIP.show()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 30)
        basic.pause(500)
    } else if (Radio == 5) {
        Kitronik_Move_Motor.stop()
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        moveMotorZIP.show()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
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
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
radio.setGroup(1)
Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Standard)
Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Right, 7)
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
moveMotorZIP.show()
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
basic.forever(function () {
    if (Kitronik_Move_Motor.measure() < 5) {
        Kitronik_Move_Motor.beepHorn()
    }
})
