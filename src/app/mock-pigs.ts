// this is only a mock to test the website, this needs to be in the storage API later!!!!

/* inside data:
        reporterName: string;
        reporterNum: string;
        pigName: string;
        pigBreed: string;
        location: string;
        note: string;
        time: string;
        status: boolean;
*/

import {Pig} from './Pig'

export const PIGS: Pig[] = [
    {
        "key": "100",
        "data": {
            "reporterName": "Bobby",
            "reporterNum": "236-869-4743",
            "pigName": "Darrick",
            "pigBreed": "Pot-Bellied",
            "location": "there",
            "note": "test data num 1",
            "time": "today",
            "status": true
        }
    },
    {
        "key": "101",
        "data": {
            "reporterName": "Bobby",
            "reporterNum": "236-869-4743",
            "pigName": "Sean",
            "pigBreed": "Pot-Bellied",
            "location": "there",
            "note": "test data num 2",
            "time": "today",
            "status": true
        }
    },
    {
        "key": "102",
        "data": {
            "reporterName": "Bobby",
            "reporterNum": "236-869-4743",
            "pigName": "Jennifer",
            "pigBreed": "Pot-Bellied",
            "location": "there",
            "note": "test data num 3",
            "time": "today",
            "status": true
        }
    },
    {
        "key": "103",
        "data": {
            "reporterName": "Bobby",
            "reporterNum": "236-869-4743",
            "pigName": "Nicholas",
            "pigBreed": "Pot-Bellied",
            "location": "there",
            "note": "test data num 4",
            "time": "today",
            "status": true
        }
    }
]