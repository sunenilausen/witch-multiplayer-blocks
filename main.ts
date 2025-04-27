namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
    sprites.destroy(sprite, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player2, function (sprite, otherSprite) {
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
    sprites.destroy(sprite, effects.fire, 100)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        player2_projectile = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
        player2_projectile.setPosition(player_a.x, player_a.y)
        player2_projectile.setVelocity(player_a.vx, player_a.vy)
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        player2_projectile = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile2)
        player2_projectile.setPosition(player_b.x, player_b.y)
        player2_projectile.setVelocity(player_b.vx, player_b.vy)
    }
})
let player2_projectile: Sprite = null
let player_b: Sprite = null
let player_a: Sprite = null
player_a = sprites.create(sprites.swamp.witchBack0, SpriteKind.Player)
player_b = sprites.create(sprites.castle.princess2Back, SpriteKind.Player2)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), player_a)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), player_b)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 100)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 100)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 0)
