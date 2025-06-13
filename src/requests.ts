import { LevelLength } from "./resources/levels";

export interface SearchLevelsOptions {
    type: SearchLevelsType;
    /**
     * Which page to request, defaults to 0
     */
    page?: number;
    /**
     * Search query, user ID or level list depending on type
     *
     * Only valid on types `Query` and `UserLists`
     */
    query?: string;
    /**
     * The ID for the gauntlet being requested
     */
    gauntlet?: number;
    /**
     * Difficulty filter
     */
    difficulty?: SearchListsDifficulty;
    /**
     * Selects which demon difficulty to search. If not present, it will search all demon types
     */
    demonFilter?: SearchListsDemonFilter;
    /**
     * Level length
     */
    length?: LevelLength;
    /**
     * Featured filter
     */
    featured?: boolean;
    /**
     * Original filter
     */
    original?: boolean;
    /**
     * Two players filter
     */
    twoPlayer?: boolean;
    /**
     * Coins filter
     */
    coins?: boolean;
    /**
     * Epic filter
     */
    epic?: boolean;
    /**
     * Legendary filter
     */
    legendary?: boolean;
    /**
     * Mythic filter
     */
    mythic?: boolean;
    /**
     * Unrated filter
     */
    noStar?: boolean;
    /**
     * Rated filter
     */
    star?: boolean;
    /**
     * Official (or custom) song ID, not sent when off
     */
    song?: number;
    /**
     * Newgrounds song, 1 when on and uses song as the ID, not sent when off
     */
    customSong?: number;
}

export enum SearchLevelsType {
    Query = 0,
    MostDownloaded = 1,
    MostLiked = 2,
    Trending = 3,
    Recent = 4,
    UserLevels = 5,
    Featured = 6,
    Magic = 7,
    ModeratorSentLevels = 8,
    Awarded = 11,
    MostLikedInGDWorld = 15,
    HallOfFame = 16,
    FeaturedInGDWorld = 17,
    DailyHistory = 21,
    WeeklyHistory = 22,
    LevelList = 25,
}

export enum SearchLevelsDifficulty {
    NA = -1,
    Demons = -2,
    Easy = 1,
    Normal = 2,
    Hard = 3,
    Harder = 4,
    Insane = 5,
}

export enum SearchLevelsDemonFilter {
    EasyDemon = 1,
    MediumDemon = 2,
    HardDemon = 3,
    InsaneDemon = 4,
    ExtremeDemon = 5,
}

export interface SearchListsOptions {
    type: SearchListsType;
    /**
     * Which page to request, defaults to 0
     */
    page?: number;
    /**
     * Search query, user ID or level list depending on type
     *
     * Only valid on types `Query` and `UserLists`
     */
    query?: string;
    /**
     * Difficulty filter
     */
    difficulty?: SearchListsDifficulty;
    /**
     * Selects which demon difficulty to search. If not present, it will search all demon types
     */
    demonFilter?: SearchListsDemonFilter;
    /**
     * Rated filter
     */
    rated?: boolean;
}

export enum SearchListsType {
    Query = 0,
    MostDownloaded = 1,
    MostLiked = 2,
    Trending = 3,
    Recent = 4,
    UserLists = 5,
    Awarded = 11,
    SentLists = 27,
}

export enum SearchListsDifficulty {
    NA = -1,
    Demons = -2,
    Easy = 1,
    Normal = 2,
    Hard = 3,
    Harder = 4,
    Insane = 5,
}

export enum SearchListsDemonFilter {
    EasyDemon = 1,
    MediumDemon = 2,
    HardDemon = 3,
    InsaneDemon = 4,
    ExtremeDemon = 5,
}

export interface GetUserLeaderboardOptions {
    type?: "top" | "creators";
    /**
     * Limited to 100
     */
    count?: number;
}
