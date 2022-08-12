export interface Profile {
   id?: string,
   username?: string,
   totalWins?: number,
   totalLosses?: number,
   friendsList?: Profile
 }