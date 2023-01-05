export interface JoinGameResponseDto {
  gameId: number;
  gameCode: string;
  boardId: number;
  playerId: number;
  opponentPlayerId: number;
  opponentBoardId: number;
}
