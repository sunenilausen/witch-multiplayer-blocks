@namespace
class SpriteKind:
    Player2 = SpriteKind.create()
    Projectile2 = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    mp.change_player_state_by(mp.player_selector(mp.PlayerNumber.TWO), MultiplayerState.score, 1)
    sprites.destroy(sprite, effects.fountain, 100)
sprites.on_overlap(SpriteKind.Projectile2, SpriteKind.player, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    mp.change_player_state_by(mp.player_selector(mp.PlayerNumber.ONE), MultiplayerState.score, 1)
    sprites.destroy(sprite2, effects.fire, 100)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Player2, on_on_overlap2)

def on_button_multiplayer_a_pressed(player2):
    global shot
    if mp.is_button_pressed(mp.player_selector(mp.PlayerNumber.ONE), mp.MultiplayerButton.A):
        shot = sprites.create(sprites.projectile.explosion1, SpriteKind.projectile)
        shot.set_position(playerRed.x, playerRed.y)
        shot.set_velocity(playerRed.vx, playerRed.vy)
    elif mp.is_button_pressed(mp.player_selector(mp.PlayerNumber.TWO), mp.MultiplayerButton.A):
        shot = sprites.create(img("""
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
                """), SpriteKind.Projectile2)
        shot.set_position(playerBlue.x, playerBlue.y)
        shot.set_velocity(playerBlue.vx, playerBlue.vy)

mp.on_button_event(mp.MultiplayerButton.A, ControllerButtonEvent.PRESSED, on_button_multiplayer_a_pressed)

def on_on_score(player22):
    mp.game_over_player_win(player22)
mp.on_score(10, on_on_score)

shot: Sprite = None
playerBlue: Sprite = None
playerRed: Sprite = None
playerRed = sprites.create(sprites.swamp.witch_back0, SpriteKind.player)
playerBlue = sprites.create(sprites.castle.princess2_back, SpriteKind.Player2)
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE), playerRed)
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.TWO), playerBlue)
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.ONE), 100, 100)
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.TWO), 100, 100)
mp.set_player_state(mp.player_selector(mp.PlayerNumber.ONE), MultiplayerState.score, 0)
mp.set_player_state(mp.player_selector(mp.PlayerNumber.TWO), MultiplayerState.score, 0)