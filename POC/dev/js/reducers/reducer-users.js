/*
 * The topics list reducer will always return an array of lists no matter what
 * You need to return something, so if there are no lists then we return an empty array
 * Can load data on page load with AJAX or http Client
 * */

export default function () {
    return [
        {
            id: "A1201",
            first: "Rohan LLC Shoes",
            thumbnail: "https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/1280x782/546b6eac1d833_-_2013-nissan-z-lg.jpg?resize=480:*",
            count: "Count",
            total:"Total",
            subsidy:"Subsidy",
            countnum: "20",
            totalnum:"1600",
            subsidynum:"16.5",
            transactions: [
                {   
            "description": "Granite Keyboardvvv",
            "date": "2019-02-20T15:06:32.153Z",
            "price": 1675
                },
                {
                    "description": "Generic Wooden Bacon",
                    "date": "2019-03-08T17:58:17.636Z",
                    "price": 2540
                },
                {
                    "description": "Pants",
                    "date": "2019-03-11T11:48:04.699Z",
                    "price": 1558
                },
                {   
                    "description": "Awesome Mouse",
                    "date": "2019-03-10T14:57:47.403Z",
                    "price": 2002
                }
            ]
        },
        {
            id: "A1202",
            first: "Carroll - Lang Grocery",
            thumbnail: "https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/1280x782/546b6eac1d833_-_2013-nissan-z-lg.jpg?resize=480:*",
            count: "Count",
            total:"Total",
            subsidy:"Subsidy",
            countnum: "10",
            totalnum:"1000",
            subsidynum:"10",
            pricing:{
                "subsidy": 9,
                "discount_subsidy": 6,
                "discount_cutoff": 600
            }

        },
        {
            id: "A1203",
            first: "Runolfsdottir Group Health",
            thumbnail: "https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/1280x782/546b6eac1d833_-_2013-nissan-z-lg.jpg?resize=480:*",
            seats: "Seats - 1",
            colour: "Colour - grey",
            count: "Count",
            total:"Total",
            subsidy:"Subsidy",
            countnum: "2",
            totalnum:"1300",
            subsidynum:"15"
        },
        {
            id: "A1204",
            first: "Bartell, Walter and Koch Toys",
            thumbnail: "https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/1280x782/546b6eac1d833_-_2013-nissan-z-lg.jpg?resize=480:*",
            seats: "Seats - 1",
            colour: "Colour - grey",
            count: "Count",
            total:"Total",
            subsidy:"Subsidy",
            countnum: "4",
            totalnum:"200",
            subsidynum:"5"
        }
        
    ]
}


