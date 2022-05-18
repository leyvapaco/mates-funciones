let pi = 0
let radianes = 0
let seno = 0
let coseno = 0
let x = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 50; index++) {
        led.plotBarGraph(
        input.acceleration(Dimension.Y),
        250
        )
        basic.pause(500)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    pi = 3.14159265359
    radianes = 0
    while (radianes <= 2 * pi) {
        seno = Math.sin(radianes)
        coseno = Math.cos(radianes)
        serial.writeValue("g.cero", 0)
        serial.writeValue("g.seno", seno)
        serial.writeValue("g.coseno", coseno)
        radianes += pi / 180
        if (radianes >= 2 * pi) {
            radianes = 0
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    while (true) {
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
    }
})
input.onButtonPressed(Button.B, function () {
    serial.writeValue("luz", Math.map(input.lightLevel(), 0, 255, 0, 10))
    basic.pause(500)
})
input.onPinPressed(TouchPin.P1, function () {
    x = 0
    while (true) {
        x = x + 1
        y = Math.sqrt(x)
        serial.writeValue("g.x", x)
        serial.writeValue("g.y", y)
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
