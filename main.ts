namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
    sprites.destroy(sprite, effects.fountain, 100)
})
mp.onScore(10, function (player2) {
    mp.gameOverPlayerWin(player2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player2, function (sprite, otherSprite) {
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
    sprites.destroy(sprite, effects.fire, 100)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        shot = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
        shot.setPosition(playerRed.x, playerRed.y)
        shot.setVelocity(playerRed.vx, playerRed.vy)
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        shot = sprites.create(img`
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
        shot.setPosition(playerBlue.x, playerBlue.y)
        shot.setVelocity(playerBlue.vx, playerBlue.vy)
    }
})
let shot: Sprite = null
let playerBlue: Sprite = null
let playerRed: Sprite = null
playerRed = sprites.create(sprites.swamp.witchForward0, SpriteKind.Player)
playerBlue = sprites.create(sprites.castle.princess2Front, SpriteKind.Player2)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), playerRed)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), playerBlue)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 100)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 100)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 0)
