let pi = 0
let radianes = 0
let seno = 0
let coseno = 0
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    while (true) {
        serial.writeValue("luz", input.lightLevel())
        basic.pause(500)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("P2")
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
	
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    while (true) {
        led.plotBarGraph(
        Math.map(input.lightLevel(), 0, 255, 0, 10),
        10
        )
        basic.pause(500)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 1000; index++) {
        serial.writeValue("m.tiempo", input.runningTime() / 1000)
        serial.writeValue("m.aceleracion", input.acceleration(Dimension.Y))
        basic.pause(500)
    }
})
