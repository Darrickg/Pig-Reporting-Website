// if TAs are seeing this, I accidentally flipped long and lat in the functionalities but the form names are correct (please follow the form titles)

export interface Loc {
    key: string;

    data: {
        /*
        name: string;
        note: string;
        */

        name: string;
        lat: number;
        long: number;
        count: number;
    }
}  