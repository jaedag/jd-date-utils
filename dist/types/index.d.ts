export declare const getTime: (time: Date) => string;
export declare const setTime: (timeArray: number[]) => Date;
export declare const parseTimeToDate: (timeString: string) => string;
export declare const getMondayThisWeek: (date: Date) => Date;
export declare const parseNeoTime: (timestamp: string) => string | undefined;
export declare const parseDate: (date: string) => string;
export declare const getHumanReadableDate: (date: string, weekday?: true) => string | undefined;
declare type MemberType = {
    dob: {
        date: string;
    };
};
export declare const getMemberDob: (displayMember: MemberType) => string | null | undefined;
export declare const getWeekNumber: (date?: string) => number;
export declare const last3Weeks: () => number[];
export declare const isToday: (date: string) => boolean;
export declare const getTodayTime: (timeString: string) => string;
export declare const addHours: (date: string, hours: number) => Date;
export declare const addMinutes: (date: string, minutes: number) => Date;
export {};
