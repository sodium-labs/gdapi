import { z } from "zod";

export const levelMappings = {
    1: "id",
    2: "name",
    3: "description",
    5: "version",
    6: "playerId",
    8: "difficultyDenominator",
    9: "difficultyNumerator",
    10: "downloads",
    12: "officialSong",
    13: "gameVersion",
    14: "likes",
    15: "length",
    16: "dislikes",
    17: "demon",
    18: "stars",
    19: "featureScore",
    25: "auto",
    30: "copiedId",
    31: "twoPlayer",
    35: "customSongId",
    37: "coins",
    38: "verifiedCoins",
    39: "starsRequested",
    42: "epic",
    43: "demonDifficulty",
    44: "isGauntlet",
    45: "objects",
};

export enum LevelDifficultyDenominator {
    NA = 0,
    Assigned = 10,
}

export enum LevelDifficultyNumerator {
    Unrated = 0,
    Easy = 10,
    Normal = 20,
    Hard = 30,
    Harder = 40,
    Insane = 50,
}

export enum LevelLength {
    Tiny = 0,
    Short = 1,
    Medium = 2,
    Long = 3,
    XL = 4,
    Platformer = 5,
}

export enum LevelEpicRating {
    None = 0,
    Epic = 1,
    Legendary = 2,
    Mythic = 3,
}

export enum LevelDemonDifficulty {
    Easy = 3,
    Medium = 4,
    Hard = 0,
    Insane = 5,
    Extreme = 6,
}

export const levelSchema = z.object({
    /**
     * The id of the level
     */
    id: z.coerce.number().int(),
    /**
     * The name of the level
     */
    name: z.string(),
    /**
     * The level description
     */
    description: z.string().transform(val => Buffer.from(val, "base64").toString("utf-8")),
    /**
     * The version of the level published
     */
    version: z.coerce.number().int(),
    /**
     * The player ID of the level author
     */
    playerId: z.coerce.number().int(),
    /**
     * Returns 0 if the level is N/A, returns 10 if a difficulty is assigned.
     *
     * @type {LevelDifficultyDenominator}
     */
    difficultyDenominator: z.coerce.number().int(),
    /**
     * The nominator used for calculating the level difficulty. Divided by the denominator to get the difficulty icon.
     *
     * Nowadays just 0 = unrated, 10 = easy, 20 = normal, 30 = hard, 40 = harder, 50 = insane.
     *
     * Can be also used to determine the demon difficulty as a side-effect of the voting system.
     *
     * @type {LevelDifficultyNumerator}
     */
    difficultyNumerator: z.coerce.number().int(),
    /**
     * The amount of times the level has been downloaded
     */
    downloads: z.coerce.number().int(),
    /**
     * The official song number used by the level, if applicable
     */
    officialSong: z.coerce.number().int().optional(),
    /**
     * The GD version the level was uploaded in.
     * Divide the version number by ten to get the correct number.
     */
    gameVersion: z.coerce
        .number()
        .int()
        .transform(val => {
            if (val === 1) {
                return 10;
            }
            if (val <= 7) {
                return val + 9;
            }
            if (val === 10) {
                return 17;
            }
            return val;
        }),
    /**
     * likes - dislikes
     */
    likes: z.coerce.number().int(),
    /**
     * A number from 0-4, where 0 is tiny and 4 is XL
     *
     * @type {LevelLength}
     */
    length: z.coerce.number().int(),
    /**
     * dislikes - likes
     */
    dislikes: z.coerce.number().int().optional(),
    /**
     * 	If the level's difficulty is demon
     */
    demon: z.coerce.boolean(),
    /**
     * The amount of stars rewarded for completing the level
     */
    stars: z.coerce.number().int(),
    /**
     * 0 if the level is not featured, otherwise a positive number. The higher it is, the higher the level appears on the featured levels list.
     */
    featureScore: z.coerce.number().int(),
    /**
     * 	If the level's difficulty is auto
     */
    auto: z.coerce.boolean(),
    /**
     * The ID the of the original level (if the level was copied)
     */
    copiedId: z.coerce.number().int(),
    /**
     * Whether the level uses two player mode
     */
    twoPlayer: z.coerce.boolean(),
    /**
     * The ID of the custom Newgrounds song used in the level
     */
    customSongId: z.coerce.number().int(),
    /**
     * The number of user coins placed in the level
     */
    coins: z.coerce.number().int(),
    /**
     * If the level's user coins are verified (silver)
     */
    verifiedCoins: z.coerce.boolean(),
    /**
     * The star value requested for the level
     */
    starsRequested: z.coerce.number().int(),
    /**
     * The epic rating for the level
     *
     * @type {LevelEpicRating}
     */
    epic: z.coerce.number().int(),
    /**
     * The difficulty of the demon rating. Can also be used to determine the level difficulty non-demons had before rating as a side-effect of the voting system.
     *
     * @type {LevelDemonDifficulty}
     */
    demonDifficulty: z.coerce.number().int(),
    /**
     * If the level is in a gauntlet
     */
    isGauntlet: z.coerce.boolean(),
    /**
     * The amount of objects in the level, used to determine if the level is considered "large". It caps at 65535
     */
    objects: z.coerce.number().int(),
});

export type Level = z.infer<typeof levelSchema>;
