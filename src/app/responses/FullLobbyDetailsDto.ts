export interface FullLobbyDetailsDto {
  gameCode: string;
  hostId: number;
  hostName: string;
  hostBoardId: number;
  hostReadyStatus: boolean;
  hostBoard: string[][];
  opponentId: number;
  opponentName: string;
  opponentBoardId: number;
  opponentReadyStatus: boolean;
}
