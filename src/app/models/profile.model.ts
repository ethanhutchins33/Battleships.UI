export interface Profile {
  id: string;
  username?: string;
  totalWins?: number;
  totalLosses?: number;
  FriendsList?: Profile;
}
