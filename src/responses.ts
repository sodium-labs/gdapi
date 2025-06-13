import { Gauntlet } from "./resources/gauntlets";
import { Level } from "./resources/levels";
import { List } from "./resources/lists";
import { MapPack } from "./resources/mapPacks";
import { Song } from "./resources/songs";

export interface PaginationData {
    /**
     * Total results
     */
    total: number;
    /**
     * Current offset
     */
    offset: number;
    /**
     * Number per page
     */
    amount: number;
}

export interface DailyLevel {
    /**
     * Current daily level index
     */
    index: number;
    /**
     * Time left in seconds
     */
    timeLeft: number;
}

export interface WeeklyLevel {
    /**
     * Current daily level index
     */
    index: number;
    /**
     * Time left in seconds
     */
    timeLeft: number;
}

export interface GauntletsData {
    gauntlets: Gauntlet[];
    hash: string;
}

export interface LevelCreator {
    userId: number;
    username: string;
    accountId: number;
}

export interface LevelsData {
    levels: Level[];
    creators: ListCreator[];
    songs: Song[];
    page: PaginationData;
    hash: string;
}

export interface ListCreator {
    userId: number;
    username: string;
    accountId: number;
}

export interface ListsData {
    lists: List[];
    creators: ListCreator[];
    page: PaginationData;
    hash: string;
}

export interface MapPacksData {
    packs: MapPack[];
    page: PaginationData;
    hash: string;
}
