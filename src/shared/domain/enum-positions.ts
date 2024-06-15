export enum FutsalPosition {
  GOALKEEPER = 'Goleiro',
  FIXO = 'Fixo',
  ALA = 'Ala',
  PIVO = 'Pivô',
}

// Enum para posições de jogadores de futebol (campo)
export enum FootballPosition {
  GOALKEEPER = 'Goalkeeper',
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
}

// Enum para posições de jogadores de futebol de sete (society)
export enum SoccerSevenPosition {
  GOALKEEPER = 'Goleiro',
  FIXO = 'Fixo',
  LEFT_WING = 'Ponta Esquerda',
  RIGHT_WING = 'Ponta Direita',
  MIDFIELD = 'Meio-Campo',
  FORWARD = 'Atacante',
}

export enum PlayerPosition {
  // Posições de futsal
  FUTSAL_GOALKEEPER = 'Goleiro de Futsal',
  FUTSAL_FIXO = 'Fixo de Futsal',
  FUTSAL_ALA = 'Ala de Futsal',
  FUTSAL_PIVO = 'Pivô de Futsal',

  // Posições de futebol (campo)
  SOCCER_GOALKEEPER = 'Goleiro de Futebol',
  SOCCER_RIGHT_BACK = 'Lateral Direito de Futebol',
  SOCCER_LEFT_BACK = 'Lateral Esquerdo de Futebol',
  SOCCER_CENTER_BACK = 'Zagueiro Central de Futebol',
  SOCCER_DEFENSIVE_MIDFIELD = 'Volante de Futebol',
  SOCCER_CENTRAL_MIDFIELD = 'Meia Central de Futebol',
  SOCCER_ATTACKING_MIDFIELD = 'Meia Ofensivo de Futebol',
  SOCCER_RIGHT_WING = 'Ponta Direita de Futebol',
  SOCCER_LEFT_WING = 'Ponta Esquerda de Futebol',
  SOCCER_FORWARD = 'Atacante de Futebol',
  SOCCER_STRIKER = 'Centroavante de Futebol',

  // Posições de futebol de sete (society)
  SOCCER_SEVEN_GOALKEEPER = 'Goleiro de Futebol Society',
  SOCCER_SEVEN_FIXO = 'Fixo de Futebol Society',
  SOCCER_SEVEN_LEFT_WING = 'Ponta Esquerda de Futebol Society',
  SOCCER_SEVEN_RIGHT_WING = 'Ponta Direita de Futebol Society',
  SOCCER_SEVEN_MIDFIELD = 'Meio-Campo de Futebol Society',
  SOCCER_SEVEN_FORWARD = 'Atacante de Futebol Society',
}

export function translatePosition(position: PlayerPosition): string {
  switch (position) {
    case PlayerPosition.SOCCER_GOALKEEPER:
      return 'Goleiro de Futebol';
    case PlayerPosition.SOCCER_RIGHT_BACK:
      return 'Lateral Direito de Futebol';
    case PlayerPosition.SOCCER_LEFT_BACK:
      return 'Lateral Esquerdo de Futebol';
    case PlayerPosition.SOCCER_CENTER_BACK:
      return 'Zagueiro Central de Futebol';
    case PlayerPosition.SOCCER_DEFENSIVE_MIDFIELD:
      return 'Volante de Futebol';
    case PlayerPosition.SOCCER_CENTRAL_MIDFIELD:
      return 'Meia Central de Futebol';
    case PlayerPosition.SOCCER_ATTACKING_MIDFIELD:
      return 'Meia Ofensivo de Futebol';
    case PlayerPosition.SOCCER_RIGHT_WING:
      return 'Ponta Direita de Futebol';
    case PlayerPosition.SOCCER_LEFT_WING:
      return 'Ponta Esquerda de Futebol';
    case PlayerPosition.SOCCER_FORWARD:
      return 'Atacante de Futebol';
    case PlayerPosition.SOCCER_STRIKER:
      return 'Centroavante de Futebol';
    case PlayerPosition.SOCCER_SEVEN_GOALKEEPER:
      return 'Goleiro de Futebol Society';
    case PlayerPosition.SOCCER_SEVEN_FIXO:
      return 'Fixo de Futebol Society';
    case PlayerPosition.SOCCER_SEVEN_LEFT_WING:
      return 'Ponta Esquerda de Futebol Society';
    case PlayerPosition.SOCCER_SEVEN_RIGHT_WING:
      return 'Ponta Direita de Futebol Society';
    case PlayerPosition.SOCCER_SEVEN_MIDFIELD:
      return 'Meio-Campo de Futebol Society';
    case PlayerPosition.SOCCER_SEVEN_FORWARD:
      return 'Atacante de Futebol Society';
    default:
      throw new Error('Posição de jogador não reconhecida');
  }
}
