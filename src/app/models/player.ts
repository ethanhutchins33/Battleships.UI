export interface Player {
  id: number;
  name: string;
  boardId: number;
  ready: boolean;
  board: string[][];
}
