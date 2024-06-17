export enum PlayerPosition {
  GOALKEEPER = 'Goleiro',
  FIXO = 'Fixo',
  ALA = 'Ala',
  PIVO = 'Pivô',

  RIGHT_BACK = 'Lateral Direito',
  LEFT_BACK = 'Lateral Esquerdo',
  CENTER_BACK = 'Zagueiro Central',
  DEFENSIVE_MIDFIELD = 'Volante',
  CENTRAL_MIDFIELD = 'Meia Central',
  ATTACKING_MIDFIELD = 'Meia Ofensivo',
  RIGHT_WING = 'Ponta Direita',
  LEFT_WING = 'Ponta Esquerda',
  FORWARD = 'Atacante',
  STRIKER = 'Centroavante',
  MIDFIELD = 'Meio-Campo',
}

export function translatePosition(position: PlayerPosition): string {
  switch (position) {
    case PlayerPosition.GOALKEEPER:
      return 'Goleiro';
    case PlayerPosition.RIGHT_BACK:
      return 'Lateral Direito';
    case PlayerPosition.LEFT_BACK:
      return 'Lateral Esquerdo';
    case PlayerPosition.CENTER_BACK:
      return 'Zagueiro';
    case PlayerPosition.DEFENSIVE_MIDFIELD:
      return 'Volante';
    case PlayerPosition.CENTRAL_MIDFIELD:
      return 'Meia';
    case PlayerPosition.ATTACKING_MIDFIELD:
      return 'Meia Ofensivo';
    case PlayerPosition.RIGHT_WING:
      return 'Ponta Direita';
    case PlayerPosition.LEFT_WING:
      return 'Ponta Esquerda';
    case PlayerPosition.FORWARD:
      return 'Atacante';
    case PlayerPosition.STRIKER:
      return 'Centroavante';
    case PlayerPosition.GOALKEEPER:
      return 'Goleiro';
    case PlayerPosition.FIXO:
      return 'Fixo';
    case PlayerPosition.LEFT_WING:
      return 'Ponta Esquerda';
    case PlayerPosition.RIGHT_WING:
      return 'Ponta Direita';
    case PlayerPosition.MIDFIELD:
      return 'Meio-Campo';
    case PlayerPosition.FORWARD:
      return 'Atacante';
    default:
      throw new Error('Posição de jogador não reconhecida');
  }
}
