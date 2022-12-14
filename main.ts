//% color="#ff0000" weight=100 icon"\f001"
namespace jinglebells {
    //% block
    export function playJingleBells() {
    }
}
    
function jingleAllTheWay () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function oneHorseOpenSleighEnd () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function sleighOh () {
    music.playTone(294, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function playJingleBells () {
    jingleBells()
    jingleBells()
    jingleAllTheWay()
    ohWhatFunIt()
    isToRideInA()
    oneHorseOpen()
    sleighOh()
    jingleBells()
    jingleBells()
    jingleAllTheWay()
    ohWhatFunIt()
    isToRideInA()
    oneHorseOpenSleighEnd()
}
function isToRideInA () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function jingleBells () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function oneHorseOpen () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function ohWhatFunIt () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
