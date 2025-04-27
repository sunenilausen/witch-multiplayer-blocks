namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
    sprites.destroy(sprite, effects.fountain, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player2, function (sprite, otherSprite) {
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
    sprites.destroy(sprite, effects.fire, 100)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        skud = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
        skud.setPosition(heks.x, heks.y)
        skud.setVelocity(heks.vx, heks.vy)
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        skud = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . 6 9 9 6 . . . . . . 
            . . . . . . 8 9 9 8 . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile2)
        skud.setPosition(fe.x, fe.y)
        skud.setVelocity(fe.vx, fe.vy)
    }
})
mp.onScore(10, function (player2) {
    mp.gameOverPlayerWin(player2)
})
let skud: Sprite = null
let fe: Sprite = null
let heks: Sprite = null
heks = sprites.create(sprites.swamp.witchBack0, SpriteKind.Player)
fe = sprites.create(sprites.castle.princess2Back, SpriteKind.Player2)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), heks)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), fe)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 100)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 100)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 0)
