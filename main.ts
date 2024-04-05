input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        Tempo += -1
        basic.showNumber(Tempo)
        basic.pause(100)
    }
})
let Tempo = 0
basic.showNumber(0)
Tempo = 10
