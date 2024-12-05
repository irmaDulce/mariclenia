input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        # # # # #
        # # # # #
        `)
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        # # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 1, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Eu te amo")
    for (let index = 0; index < 400; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
basic.showString("Oi")
basic.forever(function () {
	
})
