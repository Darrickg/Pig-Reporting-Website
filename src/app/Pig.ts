import { Loc } from './Loc';

export interface Pig {
    key: string;

    data: {
        /*
        name: string;
        note: string;
        */

        reporterName: string;
        reporterNum: string;
        pigName: string;
        pigBreed: string;
        pId: string;
        location: Loc;
        note: string;
        time: string;
        status: boolean;
    }
}