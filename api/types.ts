export interface Player {
  username: string; // Имя игрока
  kills: number; // Количество убийств
}

export interface Team {
  name: string; // Название команды
  players: Player[]; // Игроки команды
  points: number; // Количество очков
  place: number; // Место в турнирной таблице
  total_kills: number; // Количество убийств
}

export enum MatchStatus {
  Scheduled = 'Scheduled', // матч запланирован, но еще не начался
  Ongoing = 'Ongoing', // матч в процессе проведения
  Finished = 'Finished', // матч завершен
}

export interface Match {
  time: string; // Время проведения матча (ISO 8601 date-time string)
  title: string; // Название матча
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number; // Счет домашней команды
  awayScore: number; // Счет гостевой команды
  status: MatchStatus;
}

export interface SuccessfulResponse<T> {
  ok: boolean; // Indicated whether the response is successful.
  data: T; // If successful, response from api
}

export interface MatchesResponse {
  matches: Match[];
}

//type for get matches
export type GetMatchesResponseType = SuccessfulResponse<MatchesResponse>;
