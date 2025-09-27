let NICO = 0
basic.showIcon(IconNames.Happy)
for (let index = 0; index < 4; index++) {
    if (input.soundLevel() == 0) {
        NICO = randint(0, 10)
    }
    if (led.point(0, 0)) {
        led.plot(0, 0)
        led.unplot(0, 0)
    }
}
basic.forever(function () {
	
})
