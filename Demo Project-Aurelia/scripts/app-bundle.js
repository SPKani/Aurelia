define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Demo Application";
            config.map([
                {
                    route: ['', 'grid'], moduleId: 'grid/grid',
                    name: 'Grid', title: 'Grid', nav: true
                },
                {
                    route: 'childroute', moduleId: 'childroute/childroute',
                    title: 'Child Route', nav: true
                },
                {
                    route: 'dashboard', moduleId: 'dashboard/dashboard',
                    title: 'Dashboard', nav: true
                },
                {
                    route: 'detail/:id', moduleId: 'grid/detail', name: 'detail'
                }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});



define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-table')
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});



define('web-api',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var latency = 200;
    var id = 0;
    function getId() {
        return ++id;
    }
    var users = [
        {
            "_id": "57ef9cd8e22df324d77c4f07",
            "index": 0,
            "guid": "9bc8e89d-658c-47cf-acc3-b0e225ddb549",
            "isActive": false,
            "balance": "$1,029.59",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "eyeColor": "green",
            "name": "Deana Lindsay",
            "gender": "female",
            "company": "TERRAGO",
            "email": "deanalindsay@terrago.com",
            "phone": "+1 (858) 506-2166",
            "address": {
                "street": "268 Garnet Street",
                "city": "Chicopee",
                "state": "Pennsylvania"
            },
            "registered": "2015-10-30",
            "tags": [
                "reprehenderit",
                "duis",
                "mollit",
                "eiusmod",
                "incididunt",
                "nisi",
                "sunt"
            ]
        },
        {
            "_id": "57ef9cd8392af802937a0974",
            "index": 1,
            "guid": "1436aae5-4540-474a-8bad-4ca6b9c903ac",
            "isActive": true,
            "balance": "$1,302.22",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "blue",
            "name": "Wyatt Kline",
            "gender": "male",
            "company": "MEDMEX",
            "email": "wyattkline@medmex.com",
            "phone": "+1 (827) 579-2502",
            "address": {
                "street": "234 Irwin Street",
                "city": "Irwin",
                "state": "Maine"
            },
            "registered": "2014-06-17",
            "tags": [
                "aute",
                "laboris",
                "sit",
                "voluptate",
                "magna",
                "voluptate",
                "occaecat"
            ]
        },
        {
            "_id": "57ef9cd865c7f5203dc5e126",
            "index": 2,
            "guid": "2bc5aad6-2172-4041-a949-b31729290f25",
            "isActive": true,
            "balance": "$3,066.01",
            "picture": "http://placehold.it/32x32",
            "age": 29,
            "eyeColor": "green",
            "name": "Harmon Huber",
            "gender": "male",
            "company": "SNIPS",
            "email": "harmonhuber@snips.com",
            "phone": "+1 (931) 482-3018",
            "address": {
                "street": "913 Gerritsen Avenue",
                "city": "Nash",
                "state": "American Samoa"
            },
            "registered": "2016-01-25",
            "tags": [
                "do",
                "voluptate",
                "id",
                "do",
                "occaecat",
                "minim",
                "tempor"
            ]
        },
        {
            "_id": "57ef9cd8594cc4bc18a121f7",
            "index": 3,
            "guid": "5d48aae2-9e3c-434e-a835-3abdab56e240",
            "isActive": false,
            "balance": "$3,574.33",
            "picture": "http://placehold.it/32x32",
            "age": 29,
            "eyeColor": "green",
            "name": "Penny Maddox",
            "gender": "female",
            "company": "BALUBA",
            "email": "pennymaddox@baluba.com",
            "phone": "+1 (873) 552-2338",
            "address": {
                "street": "218 Agate Court",
                "city": "Sandston",
                "state": "Oregon"
            },
            "registered": "2016-01-08",
            "tags": [
                "anim",
                "aliqua",
                "consequat",
                "tempor",
                "excepteur",
                "est",
                "enim"
            ]
        },
        {
            "_id": "57ef9cd846b7cd74053c10c9",
            "index": 4,
            "guid": "3c4a0399-68c9-4741-8c77-0e7e0dd9ed00",
            "isActive": true,
            "balance": "$1,363.39",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "brown",
            "name": "Morgan Gomez",
            "gender": "male",
            "company": "AFFLUEX",
            "email": "morgangomez@affluex.com",
            "phone": "+1 (976) 466-3779",
            "address": {
                "street": "632 Highland Avenue",
                "city": "Tuttle",
                "state": "Connecticut"
            },
            "registered": "2014-04-10",
            "tags": [
                "duis",
                "deserunt",
                "id",
                "nostrud",
                "mollit",
                "consequat",
                "ea"
            ]
        },
        {
            "_id": "57ef9cd8d429bf34a0c2dc36",
            "index": 5,
            "guid": "d321b26f-f8ce-461e-9673-5b9497aacea7",
            "isActive": false,
            "balance": "$1,469.54",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "green",
            "name": "Beck Mckay",
            "gender": "male",
            "company": "GEOLOGIX",
            "email": "beckmckay@geologix.com",
            "phone": "+1 (879) 477-3341",
            "address": {
                "street": "936 Woodpoint Road",
                "city": "Wakulla",
                "state": "Mississippi"
            },
            "registered": "2016-05-06",
            "tags": [
                "non",
                "cillum",
                "culpa",
                "irure",
                "nulla",
                "non",
                "occaecat"
            ]
        },
        {
            "_id": "57ef9cd86866468dc1c20447",
            "index": 6,
            "guid": "c097a185-98ee-4bdd-a6ec-a3e5e40801be",
            "isActive": true,
            "balance": "$3,125.22",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "blue",
            "name": "Massey Carlson",
            "gender": "male",
            "company": "EARTHWAX",
            "email": "masseycarlson@earthwax.com",
            "phone": "+1 (871) 471-2647",
            "address": {
                "street": "278 Chapel Street",
                "city": "Taycheedah",
                "state": "Hawaii"
            },
            "registered": "2014-10-22",
            "tags": [
                "ullamco",
                "fugiat",
                "consequat",
                "nostrud",
                "aliqua",
                "consequat",
                "fugiat"
            ]
        },
        {
            "_id": "57ef9cd83f55c1d078fc6cfd",
            "index": 7,
            "guid": "29e53cbb-6353-44a3-a2c8-e7b3176d00af",
            "isActive": false,
            "balance": "$3,663.46",
            "picture": "http://placehold.it/32x32",
            "age": 33,
            "eyeColor": "blue",
            "name": "Hill Hale",
            "gender": "male",
            "company": "CALCU",
            "email": "hillhale@calcu.com",
            "phone": "+1 (877) 598-2610",
            "address": {
                "street": "618 Newport Street",
                "city": "Deercroft",
                "state": "Colorado"
            },
            "registered": "2016-04-18",
            "tags": [
                "nostrud",
                "duis",
                "Lorem",
                "ex",
                "elit",
                "labore",
                "in"
            ]
        },
        {
            "_id": "57ef9cd8f8863a277e1c2055",
            "index": 8,
            "guid": "955a6cd5-b73c-4a6c-9280-76cbc4e232b2",
            "isActive": false,
            "balance": "$2,451.20",
            "picture": "http://placehold.it/32x32",
            "age": 26,
            "eyeColor": "blue",
            "name": "Stokes Hurst",
            "gender": "male",
            "company": "DATAGEN",
            "email": "stokeshurst@datagen.com",
            "phone": "+1 (897) 537-2718",
            "address": {
                "street": "146 Conover Street",
                "city": "Dahlen",
                "state": "North Dakota"
            },
            "registered": "2016-01-30",
            "tags": [
                "est",
                "eu",
                "anim",
                "eiusmod",
                "exercitation",
                "commodo",
                "nulla"
            ]
        },
        {
            "_id": "57ef9cd86b62971bb96f7603",
            "index": 9,
            "guid": "239a3301-1dae-4ef8-ae30-7e92a84c78a2",
            "isActive": false,
            "balance": "$1,753.67",
            "picture": "http://placehold.it/32x32",
            "age": 20,
            "eyeColor": "green",
            "name": "Cain Knapp",
            "gender": "male",
            "company": "NAMEBOX",
            "email": "cainknapp@namebox.com",
            "phone": "+1 (873) 435-3377",
            "address": {
                "street": "460 Bridgewater Street",
                "city": "Manchester",
                "state": "Michigan"
            },
            "registered": "2016-01-04",
            "tags": [
                "fugiat",
                "non",
                "adipisicing",
                "id",
                "incididunt",
                "do",
                "enim"
            ]
        },
        {
            "_id": "57ef9cd8431bccda13eea218",
            "index": 10,
            "guid": "b5671cc8-2776-4180-9cab-2f26fd38c720",
            "isActive": false,
            "balance": "$1,619.16",
            "picture": "http://placehold.it/32x32",
            "age": 22,
            "eyeColor": "brown",
            "name": "Ramirez Valdez",
            "gender": "male",
            "company": "SOLAREN",
            "email": "ramirezvaldez@solaren.com",
            "phone": "+1 (820) 465-2360",
            "address": {
                "street": "932 Battery Avenue",
                "city": "Iola",
                "state": "Virginia"
            },
            "registered": "2014-01-27",
            "tags": [
                "minim",
                "aliqua",
                "culpa",
                "dolore",
                "excepteur",
                "minim",
                "sit"
            ]
        },
        {
            "_id": "57ef9cd8e7379045d04a0540",
            "index": 11,
            "guid": "19b39b01-74e1-495c-b7a6-a88d66420fba",
            "isActive": false,
            "balance": "$1,638.78",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "brown",
            "name": "Alisha Michael",
            "gender": "female",
            "company": "STUCCO",
            "email": "alishamichael@stucco.com",
            "phone": "+1 (800) 497-2778",
            "address": {
                "street": "184 Coffey Street",
                "city": "Trucksville",
                "state": "New York"
            },
            "registered": "2015-03-31",
            "tags": [
                "irure",
                "dolore",
                "minim",
                "excepteur",
                "aliquip",
                "officia",
                "fugiat"
            ]
        },
        {
            "_id": "57ef9cd8059fd44b460b7c38",
            "index": 12,
            "guid": "2a3054d0-a2ea-4ee2-a2f5-f5d1d0573b11",
            "isActive": true,
            "balance": "$1,156.43",
            "picture": "http://placehold.it/32x32",
            "age": 21,
            "eyeColor": "brown",
            "name": "Shepard Russo",
            "gender": "male",
            "company": "MAXIMIND",
            "email": "shepardrusso@maximind.com",
            "phone": "+1 (810) 417-3060",
            "address": {
                "street": "450 Stryker Court",
                "city": "Eagleville",
                "state": "South Dakota"
            },
            "registered": "2014-12-17",
            "tags": [
                "qui",
                "irure",
                "pariatur",
                "eiusmod",
                "tempor",
                "ullamco",
                "aliquip"
            ]
        },
        {
            "_id": "57ef9cd8afc877c47ac02b6a",
            "index": 13,
            "guid": "7ad0c0a8-59ca-457f-9b41-fd1ae83b4f60",
            "isActive": false,
            "balance": "$2,376.34",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "blue",
            "name": "Joyner Cohen",
            "gender": "male",
            "company": "LYRIA",
            "email": "joynercohen@lyria.com",
            "phone": "+1 (962) 595-2903",
            "address": {
                "street": "304 Calder Place",
                "city": "Choctaw",
                "state": "Louisiana"
            },
            "registered": "2016-04-30",
            "tags": [
                "in",
                "sunt",
                "cupidatat",
                "nostrud",
                "laboris",
                "culpa",
                "consequat"
            ]
        },
        {
            "_id": "57ef9cd8aa516857d091b670",
            "index": 14,
            "guid": "47be1205-5fde-4a1b-ba80-5ab56e659c32",
            "isActive": false,
            "balance": "$1,837.95",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "eyeColor": "blue",
            "name": "Doreen Vincent",
            "gender": "female",
            "company": "VANTAGE",
            "email": "doreenvincent@vantage.com",
            "phone": "+1 (972) 484-2153",
            "address": {
                "street": "520 Greenpoint Avenue",
                "city": "Chapin",
                "state": "Rhode Island"
            },
            "registered": "2015-12-11",
            "tags": [
                "cillum",
                "aute",
                "Lorem",
                "occaecat",
                "eu",
                "voluptate",
                "ea"
            ]
        },
        {
            "_id": "57ef9cd8778023bd5ebc71df",
            "index": 15,
            "guid": "3efedc36-6bcd-4f78-b64e-11f6c3374ff0",
            "isActive": true,
            "balance": "$3,412.92",
            "picture": "http://placehold.it/32x32",
            "age": 34,
            "eyeColor": "green",
            "name": "Felicia Osborne",
            "gender": "female",
            "company": "XELEGYL",
            "email": "feliciaosborne@xelegyl.com",
            "phone": "+1 (884) 448-3923",
            "address": {
                "street": "895 Luquer Street",
                "city": "Bluffview",
                "state": "Alabama"
            },
            "registered": "2015-04-11",
            "tags": [
                "elit",
                "veniam",
                "consectetur",
                "sunt",
                "ipsum",
                "incididunt",
                "adipisicing"
            ]
        },
        {
            "_id": "57ef9cd862a19b82a2b57c2a",
            "index": 16,
            "guid": "2a08992f-b1ca-4a75-9b4c-df4ba052f3b2",
            "isActive": false,
            "balance": "$2,053.01",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "green",
            "name": "Dillon Schmidt",
            "gender": "male",
            "company": "KEEG",
            "email": "dillonschmidt@keeg.com",
            "phone": "+1 (869) 554-3796",
            "address": {
                "street": "344 Sullivan Place",
                "city": "Bawcomville",
                "state": "Palau"
            },
            "registered": "2016-07-04",
            "tags": [
                "mollit",
                "duis",
                "pariatur",
                "velit",
                "Lorem",
                "Lorem",
                "anim"
            ]
        },
        {
            "_id": "57ef9cd8b2b36698294cfb64",
            "index": 17,
            "guid": "9644a804-0216-49c7-8625-d15a3bfb31c5",
            "isActive": false,
            "balance": "$2,507.00",
            "picture": "http://placehold.it/32x32",
            "age": 40,
            "eyeColor": "blue",
            "name": "Melody Miranda",
            "gender": "female",
            "company": "ENTHAZE",
            "email": "melodymiranda@enthaze.com",
            "phone": "+1 (849) 464-3618",
            "address": {
                "street": "418 Whitney Avenue",
                "city": "Sanders",
                "state": "Indiana"
            },
            "registered": "2014-04-22",
            "tags": [
                "consequat",
                "commodo",
                "magna",
                "aute",
                "occaecat",
                "ea",
                "minim"
            ]
        },
        {
            "_id": "57ef9cd8410de3de4768210a",
            "index": 18,
            "guid": "3859f0d4-cc87-4d6b-b101-e867b8e5c0cc",
            "isActive": false,
            "balance": "$2,737.68",
            "picture": "http://placehold.it/32x32",
            "age": 36,
            "eyeColor": "green",
            "name": "Wilkerson Melendez",
            "gender": "male",
            "company": "TECHMANIA",
            "email": "wilkersonmelendez@techmania.com",
            "phone": "+1 (952) 481-3063",
            "address": {
                "street": "818 Ocean Parkway",
                "city": "Kerby",
                "state": "Iowa"
            },
            "registered": "2014-11-14",
            "tags": [
                "sit",
                "cupidatat",
                "aliqua",
                "in",
                "officia",
                "pariatur",
                "ex"
            ]
        },
        {
            "_id": "57ef9cd8bda3e38af810f58a",
            "index": 19,
            "guid": "90af70fd-1241-4d07-b3f0-727f7987a60c",
            "isActive": true,
            "balance": "$1,028.57",
            "picture": "http://placehold.it/32x32",
            "age": 37,
            "eyeColor": "blue",
            "name": "Rivera Velazquez",
            "gender": "male",
            "company": "GLEAMINK",
            "email": "riveravelazquez@gleamink.com",
            "phone": "+1 (973) 597-3283",
            "address": {
                "street": "330 Monaco Place",
                "city": "Grahamtown",
                "state": "Northern Mariana Islands"
            },
            "registered": "2016-01-10",
            "tags": [
                "excepteur",
                "est",
                "occaecat",
                "nulla",
                "nostrud",
                "eu",
                "ipsum"
            ]
        },
        {
            "_id": "57ef9cd8351d9509288c8469",
            "index": 20,
            "guid": "c9f0b7e4-f7ec-44b5-ba6b-d9991bb3404b",
            "isActive": true,
            "balance": "$2,456.41",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "blue",
            "name": "Reese Velez",
            "gender": "male",
            "company": "POLARIA",
            "email": "reesevelez@polaria.com",
            "phone": "+1 (950) 549-3805",
            "address": {
                "street": "571 Wilson Avenue",
                "city": "Hannasville",
                "state": "Tennessee"
            },
            "registered": "2016-07-24",
            "tags": [
                "veniam",
                "occaecat",
                "irure",
                "consequat",
                "labore",
                "laboris",
                "Lorem"
            ]
        },
        {
            "_id": "57ef9cd8014e14851bee0084",
            "index": 21,
            "guid": "6691378e-7cb9-4bff-ac93-a79fadfa49d1",
            "isActive": false,
            "balance": "$3,892.36",
            "picture": "http://placehold.it/32x32",
            "age": 33,
            "eyeColor": "blue",
            "name": "Kayla Morgan",
            "gender": "female",
            "company": "VIDTO",
            "email": "kaylamorgan@vidto.com",
            "phone": "+1 (976) 499-2436",
            "address": {
                "street": "188 Lancaster Avenue",
                "city": "Bowden",
                "state": "District Of Columbia"
            },
            "registered": "2015-12-16",
            "tags": [
                "minim",
                "proident",
                "sunt",
                "nostrud",
                "adipisicing",
                "cupidatat",
                "veniam"
            ]
        },
        {
            "_id": "57ef9cd810b76a3d60fb0b9b",
            "index": 22,
            "guid": "26e927c7-63c5-4e82-bdc0-7832cb890156",
            "isActive": false,
            "balance": "$3,668.66",
            "picture": "http://placehold.it/32x32",
            "age": 20,
            "eyeColor": "brown",
            "name": "Benson Snyder",
            "gender": "male",
            "company": "ZOSIS",
            "email": "bensonsnyder@zosis.com",
            "phone": "+1 (923) 595-3264",
            "address": {
                "street": "294 Douglass Street",
                "city": "Hiseville",
                "state": "Marshall Islands"
            },
            "registered": "2016-07-02",
            "tags": [
                "sint",
                "amet",
                "cillum",
                "exercitation",
                "Lorem",
                "amet",
                "ad"
            ]
        },
        {
            "_id": "57ef9cd8d6e3b40316003054",
            "index": 23,
            "guid": "248e3d33-6827-461b-a92e-408a4927d5dc",
            "isActive": true,
            "balance": "$2,253.39",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "eyeColor": "green",
            "name": "Strickland Andrews",
            "gender": "male",
            "company": "COMBOT",
            "email": "stricklandandrews@combot.com",
            "phone": "+1 (969) 560-2376",
            "address": {
                "street": "677 Albemarle Road",
                "city": "Thornport",
                "state": "Florida"
            },
            "registered": "2015-06-15",
            "tags": [
                "culpa",
                "nulla",
                "excepteur",
                "incididunt",
                "nulla",
                "mollit",
                "occaecat"
            ]
        },
        {
            "_id": "57ef9cd8bbf66c3b7757b773",
            "index": 24,
            "guid": "303c36fd-14e0-49f7-b6de-01c6cf866313",
            "isActive": false,
            "balance": "$1,248.11",
            "picture": "http://placehold.it/32x32",
            "age": 21,
            "eyeColor": "blue",
            "name": "Castro Hanson",
            "gender": "male",
            "company": "FURNITECH",
            "email": "castrohanson@furnitech.com",
            "phone": "+1 (901) 512-2724",
            "address": {
                "street": "932 Herkimer Court",
                "city": "Cavalero",
                "state": "Texas"
            },
            "registered": "2014-12-07",
            "tags": [
                "est",
                "aliqua",
                "enim",
                "ex",
                "Lorem",
                "nostrud",
                "eiusmod"
            ]
        },
        {
            "_id": "57ef9cd8aa22d92e5c82b2f6",
            "index": 25,
            "guid": "fd997458-836f-4d24-bbab-a0aa26e68c2d",
            "isActive": false,
            "balance": "$1,264.43",
            "picture": "http://placehold.it/32x32",
            "age": 21,
            "eyeColor": "blue",
            "name": "Iris Nielsen",
            "gender": "female",
            "company": "ROUGHIES",
            "email": "irisnielsen@roughies.com",
            "phone": "+1 (916) 468-3250",
            "address": {
                "street": "824 Doscher Street",
                "city": "Goodville",
                "state": "South Carolina"
            },
            "registered": "2015-08-01",
            "tags": [
                "sint",
                "voluptate",
                "adipisicing",
                "id",
                "eiusmod",
                "veniam",
                "excepteur"
            ]
        },
        {
            "_id": "57ef9cd8e00712c4924d6413",
            "index": 26,
            "guid": "f6b3c048-e563-4fa6-a28f-d358c5b4f74c",
            "isActive": true,
            "balance": "$1,462.23",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "blue",
            "name": "Dionne Boyer",
            "gender": "female",
            "company": "PETIGEMS",
            "email": "dionneboyer@petigems.com",
            "phone": "+1 (826) 510-3961",
            "address": {
                "street": "483 Prospect Avenue",
                "city": "Forestburg",
                "state": "Nevada"
            },
            "registered": "2016-09-09",
            "tags": [
                "ipsum",
                "id",
                "eiusmod",
                "laboris",
                "incididunt",
                "deserunt",
                "anim"
            ]
        },
        {
            "_id": "57ef9cd8a25729d7ccb55e01",
            "index": 27,
            "guid": "376807be-1fdc-4d6a-961c-84b313b81f70",
            "isActive": true,
            "balance": "$1,384.08",
            "picture": "http://placehold.it/32x32",
            "age": 33,
            "eyeColor": "green",
            "name": "Cooke Alford",
            "gender": "male",
            "company": "PROXSOFT",
            "email": "cookealford@proxsoft.com",
            "phone": "+1 (850) 486-2468",
            "address": {
                "street": "870 High Street",
                "city": "Reinerton",
                "state": "Delaware"
            },
            "registered": "2016-03-25",
            "tags": [
                "id",
                "amet",
                "irure",
                "eiusmod",
                "excepteur",
                "nostrud",
                "qui"
            ]
        },
        {
            "_id": "57ef9cd8998c6d6498836a72",
            "index": 28,
            "guid": "fe5ad1f3-c898-4635-bbd8-6c3185e9415f",
            "isActive": false,
            "balance": "$1,658.18",
            "picture": "http://placehold.it/32x32",
            "age": 24,
            "eyeColor": "brown",
            "name": "Goff Lamb",
            "gender": "male",
            "company": "GLOBOIL",
            "email": "gofflamb@globoil.com",
            "phone": "+1 (996) 400-2491",
            "address": {
                "street": "361 Interborough Parkway",
                "city": "Dodge",
                "state": "Kansas"
            },
            "registered": "2016-09-12",
            "tags": [
                "nisi",
                "cupidatat",
                "aliquip",
                "non",
                "et",
                "sint",
                "enim"
            ]
        },
        {
            "_id": "57ef9cd82e0778dff1ee3579",
            "index": 29,
            "guid": "ea213edd-47dd-4fd5-be36-27e34fa7fba1",
            "isActive": false,
            "balance": "$2,355.96",
            "picture": "http://placehold.it/32x32",
            "age": 21,
            "eyeColor": "brown",
            "name": "Barry Ramsey",
            "gender": "male",
            "company": "ACCUPHARM",
            "email": "barryramsey@accupharm.com",
            "phone": "+1 (841) 406-3771",
            "address": {
                "street": "220 Henderson Walk",
                "city": "Gerber",
                "state": "California"
            },
            "registered": "2014-11-15",
            "tags": [
                "cillum",
                "esse",
                "aliqua",
                "do",
                "irure",
                "eu",
                "eu"
            ]
        },
        {
            "_id": "57ef9cd8b7a3f7141cd6787a",
            "index": 30,
            "guid": "05148b5f-e9b2-4697-a25c-b9de7473f4bc",
            "isActive": true,
            "balance": "$1,262.77",
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "eyeColor": "brown",
            "name": "Aguilar Koch",
            "gender": "male",
            "company": "EMERGENT",
            "email": "aguilarkoch@emergent.com",
            "phone": "+1 (829) 518-3177",
            "address": {
                "street": "929 Himrod Street",
                "city": "Leeper",
                "state": "New Jersey"
            },
            "registered": "2015-07-12",
            "tags": [
                "ipsum",
                "eu",
                "cillum",
                "aute",
                "labore",
                "ea",
                "eiusmod"
            ]
        },
        {
            "_id": "57ef9cd83f6b95641c5e3c75",
            "index": 31,
            "guid": "27304437-1b44-4ad8-81e8-710b4b8345ff",
            "isActive": false,
            "balance": "$3,601.82",
            "picture": "http://placehold.it/32x32",
            "age": 24,
            "eyeColor": "brown",
            "name": "Oconnor Hopper",
            "gender": "male",
            "company": "FUELWORKS",
            "email": "oconnorhopper@fuelworks.com",
            "phone": "+1 (891) 493-3016",
            "address": {
                "street": "426 Montieth Street",
                "city": "Hegins",
                "state": "Wyoming"
            },
            "registered": "2015-07-24",
            "tags": [
                "minim",
                "voluptate",
                "elit",
                "incididunt",
                "ut",
                "fugiat",
                "occaecat"
            ]
        },
        {
            "_id": "57ef9cd8369d6e4b835f3fcd",
            "index": 32,
            "guid": "721a77b7-b011-47f4-a810-e7f29e7006c9",
            "isActive": true,
            "balance": "$1,915.04",
            "picture": "http://placehold.it/32x32",
            "age": 20,
            "eyeColor": "green",
            "name": "Daugherty White",
            "gender": "male",
            "company": "BOLAX",
            "email": "daughertywhite@bolax.com",
            "phone": "+1 (826) 594-2129",
            "address": {
                "street": "449 Lester Court",
                "city": "Joes",
                "state": "Massachusetts"
            },
            "registered": "2014-10-13",
            "tags": [
                "Lorem",
                "enim",
                "nostrud",
                "nisi",
                "consequat",
                "ullamco",
                "laborum"
            ]
        },
        {
            "_id": "57ef9cd86305c595658af48b",
            "index": 33,
            "guid": "1cfc8de2-d36c-4ef1-9e40-f088cf75eb82",
            "isActive": true,
            "balance": "$2,866.63",
            "picture": "http://placehold.it/32x32",
            "age": 40,
            "eyeColor": "blue",
            "name": "Kane Mclaughlin",
            "gender": "male",
            "company": "BUZZNESS",
            "email": "kanemclaughlin@buzzness.com",
            "phone": "+1 (832) 531-3366",
            "address": {
                "street": "661 Apollo Street",
                "city": "Crayne",
                "state": "Kentucky"
            },
            "registered": "2014-07-08",
            "tags": [
                "laboris",
                "quis",
                "enim",
                "ea",
                "cupidatat",
                "nisi",
                "ipsum"
            ]
        },
        {
            "_id": "57ef9cd8306a49b3a4173669",
            "index": 34,
            "guid": "0bf330e0-c370-466d-9a5e-4506272fd132",
            "isActive": false,
            "balance": "$1,185.64",
            "picture": "http://placehold.it/32x32",
            "age": 40,
            "eyeColor": "brown",
            "name": "Berry Moore",
            "gender": "male",
            "company": "MOBILDATA",
            "email": "berrymoore@mobildata.com",
            "phone": "+1 (868) 455-2610",
            "address": {
                "street": "655 Eldert Street",
                "city": "Camino",
                "state": "Arizona"
            },
            "registered": "2015-10-08",
            "tags": [
                "labore",
                "dolore",
                "labore",
                "proident",
                "aute",
                "amet",
                "quis"
            ]
        },
        {
            "_id": "57ef9cd80ae90356bd04b760",
            "index": 35,
            "guid": "2be39caa-9fcc-4616-a7b5-f72e3d3cbdaf",
            "isActive": true,
            "balance": "$1,185.60",
            "picture": "http://placehold.it/32x32",
            "age": 26,
            "eyeColor": "blue",
            "name": "Gwendolyn Hunt",
            "gender": "female",
            "company": "DIGIAL",
            "email": "gwendolynhunt@digial.com",
            "phone": "+1 (853) 562-3237",
            "address": {
                "street": "597 Hart Street",
                "city": "Kenmar",
                "state": "Maryland"
            },
            "registered": "2015-10-27",
            "tags": [
                "Lorem",
                "officia",
                "adipisicing",
                "velit",
                "tempor",
                "eiusmod",
                "labore"
            ]
        },
        {
            "_id": "57ef9cd884359a9538967098",
            "index": 36,
            "guid": "63ab3d9c-8138-4f09-baf9-6d76c5ba573a",
            "isActive": true,
            "balance": "$2,469.48",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "green",
            "name": "Willie Garrett",
            "gender": "female",
            "company": "BALOOBA",
            "email": "williegarrett@balooba.com",
            "phone": "+1 (843) 425-3145",
            "address": {
                "street": "456 Maple Avenue",
                "city": "Hackneyville",
                "state": "Illinois"
            },
            "registered": "2014-02-09",
            "tags": [
                "est",
                "aliqua",
                "in",
                "excepteur",
                "ut",
                "eu",
                "fugiat"
            ]
        },
        {
            "_id": "57ef9cd8db282c5f4f1448d4",
            "index": 37,
            "guid": "bc8ce4f1-6cc4-4925-9046-3a5e91f858bc",
            "isActive": true,
            "balance": "$1,067.32",
            "picture": "http://placehold.it/32x32",
            "age": 29,
            "eyeColor": "green",
            "name": "Christina Good",
            "gender": "female",
            "company": "APPLIDECK",
            "email": "christinagood@applideck.com",
            "phone": "+1 (851) 462-3278",
            "address": {
                "street": "650 Arlington Place",
                "city": "Wheaton",
                "state": "West Virginia"
            },
            "registered": "2015-01-28",
            "tags": [
                "cupidatat",
                "ad",
                "consequat",
                "proident",
                "ex",
                "officia",
                "adipisicing"
            ]
        },
        {
            "_id": "57ef9cd88452ab36aa70f054",
            "index": 38,
            "guid": "4db3de26-08ae-40a0-9dc6-cd9aad7bdc25",
            "isActive": false,
            "balance": "$3,016.01",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "brown",
            "name": "Hooper Blair",
            "gender": "male",
            "company": "ANARCO",
            "email": "hooperblair@anarco.com",
            "phone": "+1 (877) 468-2384",
            "address": {
                "street": "535 Bancroft Place",
                "city": "National",
                "state": "Alaska"
            },
            "registered": "2015-02-24",
            "tags": [
                "non",
                "laboris",
                "aliqua",
                "velit",
                "officia",
                "aliqua",
                "in"
            ]
        },
        {
            "_id": "57ef9cd8fd30953315b376ce",
            "index": 39,
            "guid": "2537139a-70e6-438b-980f-a43ee251db50",
            "isActive": true,
            "balance": "$1,259.80",
            "picture": "http://placehold.it/32x32",
            "age": 26,
            "eyeColor": "brown",
            "name": "Wilson Whitley",
            "gender": "male",
            "company": "BUNGA",
            "email": "wilsonwhitley@bunga.com",
            "phone": "+1 (881) 545-2408",
            "address": {
                "street": "536 Delevan Street",
                "city": "Clara",
                "state": "Oklahoma"
            },
            "registered": "2015-05-15",
            "tags": [
                "sunt",
                "officia",
                "officia",
                "est",
                "Lorem",
                "elit",
                "exercitation"
            ]
        },
        {
            "_id": "57ef9cd88d9237233ce5a603",
            "index": 40,
            "guid": "407cc2cb-7eb0-4614-97d8-85a2b0ca2c55",
            "isActive": false,
            "balance": "$1,954.73",
            "picture": "http://placehold.it/32x32",
            "age": 28,
            "eyeColor": "blue",
            "name": "Hilda Osborn",
            "gender": "female",
            "company": "SLOGANAUT",
            "email": "hildaosborn@sloganaut.com",
            "phone": "+1 (975) 466-3813",
            "address": {
                "street": "412 Tudor Terrace",
                "city": "Brecon",
                "state": "Federated States Of Micronesia"
            },
            "registered": "2016-06-23",
            "tags": [
                "anim",
                "culpa",
                "fugiat",
                "minim",
                "occaecat",
                "sit",
                "excepteur"
            ]
        },
        {
            "_id": "57ef9cd839131d7d2e092514",
            "index": 41,
            "guid": "0eb0fb97-2de9-4815-a533-7ac084b94863",
            "isActive": false,
            "balance": "$2,347.37",
            "picture": "http://placehold.it/32x32",
            "age": 29,
            "eyeColor": "blue",
            "name": "Denise Griffin",
            "gender": "female",
            "company": "ATOMICA",
            "email": "denisegriffin@atomica.com",
            "phone": "+1 (858) 538-2320",
            "address": {
                "street": "415 Catherine Street",
                "city": "Onton",
                "state": "Vermont"
            },
            "registered": "2014-06-17",
            "tags": [
                "qui",
                "sunt",
                "commodo",
                "tempor",
                "exercitation",
                "nisi",
                "exercitation"
            ]
        },
        {
            "_id": "57ef9cd89974d5066113c5eb",
            "index": 42,
            "guid": "03ba8cb5-6ad5-47f9-a0f1-28939ade5983",
            "isActive": true,
            "balance": "$3,867.30",
            "picture": "http://placehold.it/32x32",
            "age": 26,
            "eyeColor": "green",
            "name": "Neal Castro",
            "gender": "male",
            "company": "OVATION",
            "email": "nealcastro@ovation.com",
            "phone": "+1 (967) 436-2454",
            "address": {
                "street": "119 Harrison Avenue",
                "city": "Volta",
                "state": "Idaho"
            },
            "registered": "2014-06-22",
            "tags": [
                "Lorem",
                "cupidatat",
                "et",
                "quis",
                "voluptate",
                "incididunt",
                "dolore"
            ]
        },
        {
            "_id": "57ef9cd88d860c6070fafef1",
            "index": 43,
            "guid": "e14b2f74-0aaa-4218-940d-5f7fb2551151",
            "isActive": true,
            "balance": "$3,011.45",
            "picture": "http://placehold.it/32x32",
            "age": 22,
            "eyeColor": "blue",
            "name": "Rich Montoya",
            "gender": "male",
            "company": "ORBAXTER",
            "email": "richmontoya@orbaxter.com",
            "phone": "+1 (866) 530-3039",
            "address": {
                "street": "134 Blake Court",
                "city": "Kaka",
                "state": "Arkansas"
            },
            "registered": "2016-06-21",
            "tags": [
                "sunt",
                "cillum",
                "enim",
                "occaecat",
                "minim",
                "reprehenderit",
                "nulla"
            ]
        },
        {
            "_id": "57ef9cd8e093c420b70f6787",
            "index": 44,
            "guid": "1cabe364-180d-4147-88c7-2154241c22f2",
            "isActive": false,
            "balance": "$2,413.74",
            "picture": "http://placehold.it/32x32",
            "age": 37,
            "eyeColor": "brown",
            "name": "Galloway Wilcox",
            "gender": "male",
            "company": "KENEGY",
            "email": "gallowaywilcox@kenegy.com",
            "phone": "+1 (806) 596-3339",
            "address": {
                "street": "131 Kay Court",
                "city": "Bannock",
                "state": "Ohio"
            },
            "registered": "2014-12-04",
            "tags": [
                "consequat",
                "elit",
                "in",
                "mollit",
                "nostrud",
                "amet",
                "irure"
            ]
        },
        {
            "_id": "57ef9cd8a07f64e3585adaa4",
            "index": 45,
            "guid": "9a0ba82c-3a59-4b8c-a735-16f57c4e5b7b",
            "isActive": true,
            "balance": "$1,419.98",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "eyeColor": "green",
            "name": "Estela Johnson",
            "gender": "female",
            "company": "LUNCHPOD",
            "email": "estelajohnson@lunchpod.com",
            "phone": "+1 (857) 457-3968",
            "address": {
                "street": "909 Cheever Place",
                "city": "Clarence",
                "state": "Missouri"
            },
            "registered": "2015-06-19",
            "tags": [
                "sint",
                "velit",
                "ut",
                "minim",
                "ad",
                "proident",
                "labore"
            ]
        },
        {
            "_id": "57ef9cd863d1b1a4acb74988",
            "index": 46,
            "guid": "8154d3fc-2b77-4107-ab34-42bb23f470e6",
            "isActive": false,
            "balance": "$2,049.10",
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "eyeColor": "green",
            "name": "Lorrie Huffman",
            "gender": "female",
            "company": "SPHERIX",
            "email": "lorriehuffman@spherix.com",
            "phone": "+1 (855) 535-2317",
            "address": {
                "street": "221 Essex Street",
                "city": "Tedrow",
                "state": "Washington"
            },
            "registered": "2016-09-27",
            "tags": [
                "consequat",
                "excepteur",
                "ipsum",
                "ipsum",
                "esse",
                "cillum",
                "qui"
            ]
        },
        {
            "_id": "57ef9cd8e0a6bad7cf9ec1dc",
            "index": 47,
            "guid": "d44f213d-7164-4aba-b5e1-5e8646853e41",
            "isActive": true,
            "balance": "$1,958.21",
            "picture": "http://placehold.it/32x32",
            "age": 37,
            "eyeColor": "brown",
            "name": "Celia Burnett",
            "gender": "female",
            "company": "ENORMO",
            "email": "celiaburnett@enormo.com",
            "phone": "+1 (834) 438-2214",
            "address": {
                "street": "315 Louisiana Avenue",
                "city": "Wauhillau",
                "state": "New Hampshire"
            },
            "registered": "2014-02-21",
            "tags": [
                "officia",
                "cupidatat",
                "ullamco",
                "velit",
                "ad",
                "ea",
                "nostrud"
            ]
        },
        {
            "_id": "57ef9cd8e0617ebaf2a76998",
            "index": 48,
            "guid": "9d09a10a-6b16-44c5-bd72-20ee3188432c",
            "isActive": false,
            "balance": "$3,027.42",
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "eyeColor": "brown",
            "name": "Delaney Hamilton",
            "gender": "male",
            "company": "ACCUSAGE",
            "email": "delaneyhamilton@accusage.com",
            "phone": "+1 (862) 425-3630",
            "address": {
                "street": "407 Oceanview Avenue",
                "city": "Waikele",
                "state": "New Mexico"
            },
            "registered": "2014-07-06",
            "tags": [
                "aliquip",
                "fugiat",
                "cillum",
                "id",
                "excepteur",
                "ad",
                "non"
            ]
        },
        {
            "_id": "57ef9cd831ecdff3ea6aba9e",
            "index": 49,
            "guid": "f5212db5-dfe2-426e-a4e0-83331831bbe8",
            "isActive": false,
            "balance": "$2,970.07",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "green",
            "name": "Elma Baldwin",
            "gender": "female",
            "company": "XANIDE",
            "email": "elmabaldwin@xanide.com",
            "phone": "+1 (991) 445-3729",
            "address": {
                "street": "817 Loring Avenue",
                "city": "Jenkinsville",
                "state": "Virgin Islands"
            },
            "registered": "2015-03-13",
            "tags": [
                "aute",
                "nisi",
                "laborum",
                "incididunt",
                "non",
                "eiusmod",
                "ad"
            ]
        },
        {
            "_id": "57ef9cd86e789f3db59cc997",
            "index": 50,
            "guid": "c24777cb-e9c6-451a-b70b-9ffeefb35ee0",
            "isActive": false,
            "balance": "$1,072.96",
            "picture": "http://placehold.it/32x32",
            "age": 24,
            "eyeColor": "green",
            "name": "Roxie Butler",
            "gender": "female",
            "company": "ISOLOGICA",
            "email": "roxiebutler@isologica.com",
            "phone": "+1 (919) 442-2920",
            "address": {
                "street": "512 Dewey Place",
                "city": "Lacomb",
                "state": "Montana"
            },
            "registered": "2015-05-26",
            "tags": [
                "qui",
                "labore",
                "non",
                "quis",
                "id",
                "quis",
                "anim"
            ]
        },
        {
            "_id": "57ef9cd882f83000536be05a",
            "index": 51,
            "guid": "2798139e-b8ec-409e-aa87-613149059143",
            "isActive": false,
            "balance": "$3,771.00",
            "picture": "http://placehold.it/32x32",
            "age": 38,
            "eyeColor": "blue",
            "name": "Margie Davenport",
            "gender": "female",
            "company": "MALATHION",
            "email": "margiedavenport@malathion.com",
            "phone": "+1 (976) 567-3933",
            "address": {
                "street": "241 Lloyd Court",
                "city": "Stockwell",
                "state": "Puerto Rico"
            },
            "registered": "2016-04-05",
            "tags": [
                "et",
                "reprehenderit",
                "dolor",
                "consequat",
                "sit",
                "qui",
                "mollit"
            ]
        },
        {
            "_id": "57ef9cd8199466c0f80eaef0",
            "index": 52,
            "guid": "0d8ea36b-df98-4b07-952a-4cbac7c92c64",
            "isActive": false,
            "balance": "$2,047.61",
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "eyeColor": "brown",
            "name": "Zelma Macias",
            "gender": "female",
            "company": "ECLIPSENT",
            "email": "zelmamacias@eclipsent.com",
            "phone": "+1 (893) 522-3991",
            "address": {
                "street": "812 Morgan Avenue",
                "city": "Moquino",
                "state": "Minnesota"
            },
            "registered": "2014-03-14",
            "tags": [
                "quis",
                "aliquip",
                "occaecat",
                "ut",
                "duis",
                "est",
                "Lorem"
            ]
        },
        {
            "_id": "57ef9cd8e332fa4683ed0ef2",
            "index": 53,
            "guid": "992c8935-6934-4b46-be34-bb81f596d0cc",
            "isActive": true,
            "balance": "$3,363.81",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "eyeColor": "blue",
            "name": "Dominique Best",
            "gender": "female",
            "company": "SNOWPOKE",
            "email": "dominiquebest@snowpoke.com",
            "phone": "+1 (941) 596-2718",
            "address": {
                "street": "851 Turnbull Avenue",
                "city": "Ruffin",
                "state": "Wisconsin"
            },
            "registered": "2016-03-04",
            "tags": [
                "magna",
                "velit",
                "Lorem",
                "culpa",
                "mollit",
                "adipisicing",
                "eu"
            ]
        },
        {
            "_id": "57ef9cd8b65cc853f277c21a",
            "index": 54,
            "guid": "8f690f7b-cdc8-4c84-b928-44fe3e7bc4b4",
            "isActive": false,
            "balance": "$3,463.40",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "blue",
            "name": "Meyers Navarro",
            "gender": "male",
            "company": "VALREDA",
            "email": "meyersnavarro@valreda.com",
            "phone": "+1 (969) 596-2487",
            "address": {
                "street": "692 Lake Street",
                "city": "Marienthal",
                "state": "Guam"
            },
            "registered": "2015-06-22",
            "tags": [
                "mollit",
                "laboris",
                "deserunt",
                "sit",
                "excepteur",
                "ut",
                "ut"
            ]
        },
        {
            "_id": "57ef9cd88d03578a7c15a598",
            "index": 55,
            "guid": "46cd7eac-1353-4bd2-99cc-2a9b5264a966",
            "isActive": false,
            "balance": "$1,911.65",
            "picture": "http://placehold.it/32x32",
            "age": 24,
            "eyeColor": "green",
            "name": "Holland Hess",
            "gender": "male",
            "company": "IDEALIS",
            "email": "hollandhess@idealis.com",
            "phone": "+1 (867) 599-2608",
            "address": {
                "street": "934 Stoddard Place",
                "city": "Frizzleburg",
                "state": "Nebraska"
            },
            "registered": "2015-02-19",
            "tags": [
                "dolor",
                "sint",
                "ipsum",
                "ex",
                "et",
                "aute",
                "elit"
            ]
        },
        {
            "_id": "57ef9cd8a1f6180aec4821e5",
            "index": 56,
            "guid": "eb23120a-a47d-499d-a3a5-9a5cc0d40233",
            "isActive": true,
            "balance": "$3,547.64",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "eyeColor": "brown",
            "name": "Mckay Fields",
            "gender": "male",
            "company": "SLAX",
            "email": "mckayfields@slax.com",
            "phone": "+1 (802) 483-2694",
            "address": {
                "street": "595 Jerome Street",
                "city": "Oneida",
                "state": "Utah"
            },
            "registered": "2014-11-18",
            "tags": [
                "reprehenderit",
                "pariatur",
                "aliquip",
                "ullamco",
                "veniam",
                "labore",
                "velit"
            ]
        },
        {
            "_id": "57ef9cd8c473ecd605a3b6ca",
            "index": 57,
            "guid": "84c4fe9c-6917-49ce-a7a4-71ba9a7cba69",
            "isActive": true,
            "balance": "$1,731.31",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "blue",
            "name": "Melanie Austin",
            "gender": "female",
            "company": "ANDRYX",
            "email": "melanieaustin@andryx.com",
            "phone": "+1 (994) 412-2994",
            "address": {
                "street": "533 Saratoga Avenue",
                "city": "Bangor",
                "state": "Georgia"
            },
            "registered": "2014-03-09",
            "tags": [
                "mollit",
                "minim",
                "in",
                "in",
                "Lorem",
                "magna",
                "non"
            ]
        },
        {
            "_id": "57ef9cd891a61ccfd176aeef",
            "index": 58,
            "guid": "80295d78-5ce6-4dfe-b945-50e2ce602b44",
            "isActive": true,
            "balance": "$2,992.55",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "eyeColor": "blue",
            "name": "Peck Schneider",
            "gender": "male",
            "company": "COFINE",
            "email": "peckschneider@cofine.com",
            "phone": "+1 (913) 428-3201",
            "address": {
                "street": "441 Harbor Lane",
                "city": "Tolu",
                "state": "Pennsylvania"
            },
            "registered": "2016-05-29",
            "tags": [
                "Lorem",
                "voluptate",
                "ipsum",
                "dolore",
                "aliquip",
                "ad",
                "consequat"
            ]
        },
        {
            "_id": "57ef9cd8e58b17c583b460a7",
            "index": 59,
            "guid": "0b18fc0c-f18f-46e3-845a-cd7b15c55865",
            "isActive": false,
            "balance": "$1,502.40",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "green",
            "name": "Mcclain Rhodes",
            "gender": "male",
            "company": "RODEOCEAN",
            "email": "mcclainrhodes@rodeocean.com",
            "phone": "+1 (842) 446-2464",
            "address": {
                "street": "374 Amersfort Place",
                "city": "Romeville",
                "state": "Maine"
            },
            "registered": "2014-03-19",
            "tags": [
                "dolor",
                "eiusmod",
                "ad",
                "voluptate",
                "ea",
                "deserunt",
                "et"
            ]
        },
        {
            "_id": "57ef9cd8724c03c5ad8e4a8e",
            "index": 60,
            "guid": "326dce0c-4b47-499b-9489-36acd6dadff8",
            "isActive": true,
            "balance": "$1,747.38",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "eyeColor": "blue",
            "name": "Cervantes Bright",
            "gender": "male",
            "company": "VALPREAL",
            "email": "cervantesbright@valpreal.com",
            "phone": "+1 (873) 587-2025",
            "address": {
                "street": "132 Bliss Terrace",
                "city": "Winesburg",
                "state": "American Samoa"
            },
            "registered": "2016-03-18",
            "tags": [
                "magna",
                "dolore",
                "veniam",
                "veniam",
                "sint",
                "quis",
                "id"
            ]
        },
        {
            "_id": "57ef9cd8b398ed2934e4a722",
            "index": 61,
            "guid": "4b744dd7-3c86-4bce-a3c8-9eb4359ceed5",
            "isActive": false,
            "balance": "$3,697.92",
            "picture": "http://placehold.it/32x32",
            "age": 34,
            "eyeColor": "blue",
            "name": "Hardin Pittman",
            "gender": "male",
            "company": "SKINSERVE",
            "email": "hardinpittman@skinserve.com",
            "phone": "+1 (887) 454-3837",
            "address": {
                "street": "617 Robert Street",
                "city": "Stevens",
                "state": "Oregon"
            },
            "registered": "2015-04-25",
            "tags": [
                "sit",
                "anim",
                "proident",
                "minim",
                "adipisicing",
                "duis",
                "cillum"
            ]
        },
        {
            "_id": "57ef9cd89a9aa77a634b1a47",
            "index": 62,
            "guid": "971cfb58-9d8e-4a06-ab1c-c6bc120c1865",
            "isActive": false,
            "balance": "$1,121.41",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "blue",
            "name": "Anna Ortega",
            "gender": "female",
            "company": "PHUEL",
            "email": "annaortega@phuel.com",
            "phone": "+1 (887) 422-3308",
            "address": {
                "street": "809 Vandervoort Place",
                "city": "Gibsonia",
                "state": "Connecticut"
            },
            "registered": "2016-06-11",
            "tags": [
                "veniam",
                "commodo",
                "incididunt",
                "commodo",
                "ut",
                "irure",
                "aliqua"
            ]
        },
        {
            "_id": "57ef9cd8d4ea52c7b0fce734",
            "index": 63,
            "guid": "3e62c184-2c7d-4620-be08-4a10ac9f1bce",
            "isActive": true,
            "balance": "$3,080.98",
            "picture": "http://placehold.it/32x32",
            "age": 37,
            "eyeColor": "brown",
            "name": "Juliana Rios",
            "gender": "female",
            "company": "FIREWAX",
            "email": "julianarios@firewax.com",
            "phone": "+1 (978) 409-2654",
            "address": {
                "street": "893 Heyward Street",
                "city": "Fedora",
                "state": "Mississippi"
            },
            "registered": "2015-07-21",
            "tags": [
                "sit",
                "sint",
                "eu",
                "quis",
                "do",
                "mollit",
                "magna"
            ]
        },
        {
            "_id": "57ef9cd8faa17dc8818830e9",
            "index": 64,
            "guid": "d3de53e8-6012-43ea-8c6b-1546739f9455",
            "isActive": true,
            "balance": "$3,162.09",
            "picture": "http://placehold.it/32x32",
            "age": 24,
            "eyeColor": "green",
            "name": "Allison Collier",
            "gender": "male",
            "company": "ISOLOGICS",
            "email": "allisoncollier@isologics.com",
            "phone": "+1 (961) 458-2654",
            "address": {
                "street": "987 Story Street",
                "city": "Fairview",
                "state": "Hawaii"
            },
            "registered": "2014-04-11",
            "tags": [
                "nulla",
                "labore",
                "anim",
                "tempor",
                "enim",
                "aliqua",
                "culpa"
            ]
        },
        {
            "_id": "57ef9cd8414f04a3dafce7ef",
            "index": 65,
            "guid": "d45fc8d9-2f09-42cf-918c-5d9c9b9049fb",
            "isActive": false,
            "balance": "$2,228.33",
            "picture": "http://placehold.it/32x32",
            "age": 33,
            "eyeColor": "brown",
            "name": "Laurel Raymond",
            "gender": "female",
            "company": "FREAKIN",
            "email": "laurelraymond@freakin.com",
            "phone": "+1 (845) 411-2269",
            "address": {
                "street": "270 Alice Court",
                "city": "Bynum",
                "state": "Colorado"
            },
            "registered": "2014-09-18",
            "tags": [
                "sit",
                "dolore",
                "eiusmod",
                "dolor",
                "aliquip",
                "est",
                "reprehenderit"
            ]
        },
        {
            "_id": "57ef9cd8e744f8d49ef6d406",
            "index": 66,
            "guid": "8fd91938-f5a5-409d-8a97-bf4e683d76a1",
            "isActive": true,
            "balance": "$3,892.91",
            "picture": "http://placehold.it/32x32",
            "age": 38,
            "eyeColor": "brown",
            "name": "Althea Horn",
            "gender": "female",
            "company": "FILODYNE",
            "email": "altheahorn@filodyne.com",
            "phone": "+1 (950) 526-2536",
            "address": {
                "street": "666 Taylor Street",
                "city": "Driftwood",
                "state": "North Dakota"
            },
            "registered": "2016-01-13",
            "tags": [
                "cillum",
                "fugiat",
                "incididunt",
                "sunt",
                "proident",
                "et",
                "amet"
            ]
        },
        {
            "_id": "57ef9cd80d3bd026a5b14c3d",
            "index": 67,
            "guid": "4a617fa7-dc5a-440a-ab0b-13f6e6ad34fe",
            "isActive": false,
            "balance": "$1,371.59",
            "picture": "http://placehold.it/32x32",
            "age": 22,
            "eyeColor": "blue",
            "name": "Potter Cannon",
            "gender": "male",
            "company": "MONDICIL",
            "email": "pottercannon@mondicil.com",
            "phone": "+1 (913) 431-3765",
            "address": {
                "street": "762 Drew Street",
                "city": "Riceville",
                "state": "Michigan"
            },
            "registered": "2015-08-31",
            "tags": [
                "velit",
                "velit",
                "ex",
                "aliqua",
                "consequat",
                "esse",
                "irure"
            ]
        },
        {
            "_id": "57ef9cd8218b984cbcc2fcee",
            "index": 68,
            "guid": "ebe26092-53b1-4fd9-b48f-37f68a7008b9",
            "isActive": true,
            "balance": "$2,799.55",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "brown",
            "name": "Alyson Calhoun",
            "gender": "female",
            "company": "ZEPITOPE",
            "email": "alysoncalhoun@zepitope.com",
            "phone": "+1 (820) 510-3098",
            "address": {
                "street": "804 Rodney Street",
                "city": "Hatteras",
                "state": "Virginia"
            },
            "registered": "2014-09-25",
            "tags": [
                "occaecat",
                "officia",
                "enim",
                "eu",
                "ullamco",
                "eu",
                "pariatur"
            ]
        },
        {
            "_id": "57ef9cd88e11ec366ca17611",
            "index": 69,
            "guid": "2bb46e78-c42a-449c-93b2-204091ec8296",
            "isActive": false,
            "balance": "$3,754.62",
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "eyeColor": "brown",
            "name": "Zimmerman Hudson",
            "gender": "male",
            "company": "OVERPLEX",
            "email": "zimmermanhudson@overplex.com",
            "phone": "+1 (810) 589-3217",
            "address": {
                "street": "710 Lombardy Street",
                "city": "Tampico",
                "state": "New York"
            },
            "registered": "2015-12-05",
            "tags": [
                "aute",
                "Lorem",
                "magna",
                "ut",
                "esse",
                "tempor",
                "voluptate"
            ]
        },
        {
            "_id": "57ef9cd8c663c704beb3ba0f",
            "index": 70,
            "guid": "3fe808f0-0757-4862-93e1-033724b2d61e",
            "isActive": false,
            "balance": "$3,403.56",
            "picture": "http://placehold.it/32x32",
            "age": 38,
            "eyeColor": "green",
            "name": "Sharon Vargas",
            "gender": "female",
            "company": "SYNKGEN",
            "email": "sharonvargas@synkgen.com",
            "phone": "+1 (837) 452-3719",
            "address": {
                "street": "451 Eckford Street",
                "city": "Wyano",
                "state": "South Dakota"
            },
            "registered": "2015-11-19",
            "tags": [
                "consectetur",
                "sint",
                "ad",
                "sunt",
                "ea",
                "velit",
                "officia"
            ]
        },
        {
            "_id": "57ef9cd8c23f68e4099957d1",
            "index": 71,
            "guid": "79f80e61-d92e-4b97-bea7-0016fb3fbcdc",
            "isActive": false,
            "balance": "$1,738.35",
            "picture": "http://placehold.it/32x32",
            "age": 22,
            "eyeColor": "blue",
            "name": "Herman House",
            "gender": "male",
            "company": "FRENEX",
            "email": "hermanhouse@frenex.com",
            "phone": "+1 (928) 579-3978",
            "address": {
                "street": "770 Wyckoff Avenue",
                "city": "Trail",
                "state": "Louisiana"
            },
            "registered": "2015-03-20",
            "tags": [
                "elit",
                "voluptate",
                "sint",
                "laboris",
                "et",
                "nisi",
                "ad"
            ]
        },
        {
            "_id": "57ef9cd8f684a162c8263ed1",
            "index": 72,
            "guid": "3a82a0ae-ffaa-4833-a4c1-1947eaf2a22a",
            "isActive": false,
            "balance": "$3,451.10",
            "picture": "http://placehold.it/32x32",
            "age": 30,
            "eyeColor": "green",
            "name": "Lenore Hahn",
            "gender": "female",
            "company": "EXOSIS",
            "email": "lenorehahn@exosis.com",
            "phone": "+1 (917) 524-3275",
            "address": {
                "street": "838 Gold Street",
                "city": "Watchtower",
                "state": "Rhode Island"
            },
            "registered": "2015-05-28",
            "tags": [
                "id",
                "proident",
                "velit",
                "consequat",
                "non",
                "duis",
                "consectetur"
            ]
        },
        {
            "_id": "57ef9cd8a220db71c82724b6",
            "index": 73,
            "guid": "3715858a-2b15-40b2-bd25-4c5f27f8a242",
            "isActive": false,
            "balance": "$2,007.02",
            "picture": "http://placehold.it/32x32",
            "age": 40,
            "eyeColor": "brown",
            "name": "Mcfadden Stark",
            "gender": "male",
            "company": "GEEKOLA",
            "email": "mcfaddenstark@geekola.com",
            "phone": "+1 (996) 480-2189",
            "address": {
                "street": "422 Livonia Avenue",
                "city": "Allendale",
                "state": "Alabama"
            },
            "registered": "2016-06-04",
            "tags": [
                "qui",
                "consequat",
                "mollit",
                "magna",
                "Lorem",
                "officia",
                "reprehenderit"
            ]
        },
        {
            "_id": "57ef9cd8ce39d98040920aca",
            "index": 74,
            "guid": "015bb1b1-90c7-47a7-8439-1382355e2198",
            "isActive": false,
            "balance": "$2,762.45",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "brown",
            "name": "Haney Schwartz",
            "gender": "male",
            "company": "GEOSTELE",
            "email": "haneyschwartz@geostele.com",
            "phone": "+1 (845) 531-2525",
            "address": {
                "street": "308 Poplar Avenue",
                "city": "Wolcott",
                "state": "Palau"
            },
            "registered": "2016-05-11",
            "tags": [
                "proident",
                "enim",
                "sunt",
                "laborum",
                "exercitation",
                "dolore",
                "cillum"
            ]
        },
        {
            "_id": "57ef9cd890c774293d1b0fb4",
            "index": 75,
            "guid": "d073457d-da93-48aa-8c60-02d9d72ef8fb",
            "isActive": false,
            "balance": "$1,206.03",
            "picture": "http://placehold.it/32x32",
            "age": 34,
            "eyeColor": "brown",
            "name": "Bobbie Livingston",
            "gender": "female",
            "company": "CORPULSE",
            "email": "bobbielivingston@corpulse.com",
            "phone": "+1 (836) 495-2861",
            "address": {
                "street": "655 Laurel Avenue",
                "city": "Eastmont",
                "state": "Indiana"
            },
            "registered": "2015-09-02",
            "tags": [
                "proident",
                "laboris",
                "ut",
                "exercitation",
                "labore",
                "proident",
                "adipisicing"
            ]
        },
        {
            "_id": "57ef9cd8e27b869852bce881",
            "index": 76,
            "guid": "8f740d74-174c-4383-bf25-d97b57bae01d",
            "isActive": false,
            "balance": "$2,399.50",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "brown",
            "name": "Ball Talley",
            "gender": "male",
            "company": "GOKO",
            "email": "balltalley@goko.com",
            "phone": "+1 (994) 551-2840",
            "address": {
                "street": "271 Hanover Place",
                "city": "Kipp",
                "state": "Iowa"
            },
            "registered": "2016-04-07",
            "tags": [
                "nisi",
                "consequat",
                "labore",
                "occaecat",
                "magna",
                "duis",
                "ullamco"
            ]
        },
        {
            "_id": "57ef9cd8971d5bf7c2ba6a2e",
            "index": 77,
            "guid": "df18fc2c-8480-4396-93ea-4db26c228f7e",
            "isActive": true,
            "balance": "$3,772.45",
            "picture": "http://placehold.it/32x32",
            "age": 20,
            "eyeColor": "brown",
            "name": "Tara Mcknight",
            "gender": "female",
            "company": "COMTENT",
            "email": "taramcknight@comtent.com",
            "phone": "+1 (932) 574-3393",
            "address": {
                "street": "619 Argyle Road",
                "city": "Roulette",
                "state": "Northern Mariana Islands"
            },
            "registered": "2015-11-21",
            "tags": [
                "reprehenderit",
                "occaecat",
                "culpa",
                "anim",
                "eiusmod",
                "labore",
                "fugiat"
            ]
        },
        {
            "_id": "57ef9cd890abec4d44010eea",
            "index": 78,
            "guid": "74ee47e9-0a58-4a57-80d9-98571e613ae0",
            "isActive": true,
            "balance": "$1,971.96",
            "picture": "http://placehold.it/32x32",
            "age": 21,
            "eyeColor": "brown",
            "name": "Ebony Miller",
            "gender": "female",
            "company": "TETRATREX",
            "email": "ebonymiller@tetratrex.com",
            "phone": "+1 (953) 596-3683",
            "address": {
                "street": "451 Landis Court",
                "city": "Elrama",
                "state": "Tennessee"
            },
            "registered": "2015-05-06",
            "tags": [
                "reprehenderit",
                "voluptate",
                "ipsum",
                "Lorem",
                "ea",
                "deserunt",
                "duis"
            ]
        },
        {
            "_id": "57ef9cd8e8a49916e0eef4a3",
            "index": 79,
            "guid": "1a5eb28e-ba61-4abf-95d1-cf69373ac673",
            "isActive": true,
            "balance": "$3,136.92",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "green",
            "name": "Sexton James",
            "gender": "male",
            "company": "XLEEN",
            "email": "sextonjames@xleen.com",
            "phone": "+1 (886) 443-3743",
            "address": {
                "street": "565 Dobbin Street",
                "city": "Hessville",
                "state": "District Of Columbia"
            },
            "registered": "2016-03-23",
            "tags": [
                "ea",
                "veniam",
                "ut",
                "aute",
                "aliquip",
                "ea",
                "consectetur"
            ]
        },
        {
            "_id": "57ef9cd89c8e57302ca806f7",
            "index": 80,
            "guid": "ad19546d-5b93-4dd0-a19f-53e4eb4d79aa",
            "isActive": true,
            "balance": "$2,174.53",
            "picture": "http://placehold.it/32x32",
            "age": 40,
            "eyeColor": "brown",
            "name": "Barr Espinoza",
            "gender": "male",
            "company": "PETICULAR",
            "email": "barrespinoza@peticular.com",
            "phone": "+1 (863) 570-3563",
            "address": {
                "street": "492 Underhill Avenue",
                "city": "Gratton",
                "state": "Marshall Islands"
            },
            "registered": "2016-08-18",
            "tags": [
                "ullamco",
                "cillum",
                "ullamco",
                "exercitation",
                "irure",
                "esse",
                "aliquip"
            ]
        },
        {
            "_id": "57ef9cd84211c7823bf419cf",
            "index": 81,
            "guid": "9c75ad58-fbf9-49c3-a3cc-ec0e747cbc2c",
            "isActive": true,
            "balance": "$2,401.76",
            "picture": "http://placehold.it/32x32",
            "age": 29,
            "eyeColor": "green",
            "name": "Christa Lawson",
            "gender": "female",
            "company": "ENTALITY",
            "email": "christalawson@entality.com",
            "phone": "+1 (887) 449-2183",
            "address": {
                "street": "625 Grafton Street",
                "city": "Cresaptown",
                "state": "Florida"
            },
            "registered": "2014-03-09",
            "tags": [
                "in",
                "ea",
                "elit",
                "sit",
                "elit",
                "laboris",
                "labore"
            ]
        },
        {
            "_id": "57ef9cd8deb2a837eee99361",
            "index": 82,
            "guid": "439349b3-b4e5-4e22-b074-d3d8d053986c",
            "isActive": true,
            "balance": "$3,718.44",
            "picture": "http://placehold.it/32x32",
            "age": 38,
            "eyeColor": "blue",
            "name": "Carla Gray",
            "gender": "female",
            "company": "NETPLODE",
            "email": "carlagray@netplode.com",
            "phone": "+1 (831) 547-3290",
            "address": {
                "street": "129 Mill Street",
                "city": "Austinburg",
                "state": "Texas"
            },
            "registered": "2014-03-23",
            "tags": [
                "non",
                "tempor",
                "eu",
                "ipsum",
                "voluptate",
                "exercitation",
                "officia"
            ]
        },
        {
            "_id": "57ef9cd846d6320f8ee38cd6",
            "index": 83,
            "guid": "ff535f76-d5ed-4d07-9e5d-1426a6a649f1",
            "isActive": true,
            "balance": "$2,427.75",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "blue",
            "name": "Aurora Banks",
            "gender": "female",
            "company": "BEDDER",
            "email": "aurorabanks@bedder.com",
            "phone": "+1 (936) 433-3077",
            "address": {
                "street": "498 Louis Place",
                "city": "Canby",
                "state": "South Carolina"
            },
            "registered": "2015-08-29",
            "tags": [
                "eu",
                "mollit",
                "et",
                "mollit",
                "laborum",
                "incididunt",
                "aute"
            ]
        },
        {
            "_id": "57ef9cd893f2a82424d8f6ee",
            "index": 84,
            "guid": "8b007ae2-3474-4eff-bdad-17cd7c378867",
            "isActive": true,
            "balance": "$2,206.37",
            "picture": "http://placehold.it/32x32",
            "age": 28,
            "eyeColor": "green",
            "name": "Ruth Maxwell",
            "gender": "female",
            "company": "ZEAM",
            "email": "ruthmaxwell@zeam.com",
            "phone": "+1 (831) 492-3070",
            "address": {
                "street": "106 Utica Avenue",
                "city": "Norfolk",
                "state": "Nevada"
            },
            "registered": "2015-11-12",
            "tags": [
                "consectetur",
                "aliqua",
                "sit",
                "magna",
                "voluptate",
                "esse",
                "non"
            ]
        },
        {
            "_id": "57ef9cd8f8c3e6032c08eab0",
            "index": 85,
            "guid": "b9872ffe-a6dc-4525-ac91-75b356a43ac2",
            "isActive": false,
            "balance": "$1,234.70",
            "picture": "http://placehold.it/32x32",
            "age": 20,
            "eyeColor": "brown",
            "name": "Mayer Edwards",
            "gender": "male",
            "company": "POWERNET",
            "email": "mayeredwards@powernet.com",
            "phone": "+1 (823) 411-3607",
            "address": {
                "street": "539 Jay Street",
                "city": "Sena",
                "state": "Delaware"
            },
            "registered": "2015-06-07",
            "tags": [
                "officia",
                "occaecat",
                "proident",
                "Lorem",
                "aute",
                "et",
                "sit"
            ]
        },
        {
            "_id": "57ef9cd886542a15d66dc2a6",
            "index": 86,
            "guid": "a959a4e6-7e0c-41a8-912c-c1280609f486",
            "isActive": true,
            "balance": "$1,686.52",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "blue",
            "name": "Caroline Bass",
            "gender": "female",
            "company": "ARTWORLDS",
            "email": "carolinebass@artworlds.com",
            "phone": "+1 (932) 419-2973",
            "address": {
                "street": "858 Pershing Loop",
                "city": "Sidman",
                "state": "Kansas"
            },
            "registered": "2015-04-24",
            "tags": [
                "ea",
                "veniam",
                "nulla",
                "sint",
                "proident",
                "esse",
                "nisi"
            ]
        },
        {
            "_id": "57ef9cd8f1adf135eb8b5d4f",
            "index": 87,
            "guid": "1ae041da-fddc-4df5-8485-aff3eacbdcf4",
            "isActive": false,
            "balance": "$2,991.87",
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "eyeColor": "green",
            "name": "Walsh Mccarthy",
            "gender": "male",
            "company": "FARMAGE",
            "email": "walshmccarthy@farmage.com",
            "phone": "+1 (921) 500-3805",
            "address": {
                "street": "930 Banker Street",
                "city": "Nicholson",
                "state": "California"
            },
            "registered": "2014-10-18",
            "tags": [
                "laboris",
                "ad",
                "adipisicing",
                "esse",
                "sit",
                "consequat",
                "magna"
            ]
        },
        {
            "_id": "57ef9cd8e292916e52e972ec",
            "index": 88,
            "guid": "9207f1d2-870c-466e-a1ad-ed2b9af4ad65",
            "isActive": true,
            "balance": "$1,310.82",
            "picture": "http://placehold.it/32x32",
            "age": 37,
            "eyeColor": "brown",
            "name": "Natalie Bond",
            "gender": "female",
            "company": "GYNKO",
            "email": "nataliebond@gynko.com",
            "phone": "+1 (908) 587-2856",
            "address": {
                "street": "698 Madoc Avenue",
                "city": "Outlook",
                "state": "New Jersey"
            },
            "registered": "2016-03-30",
            "tags": [
                "aute",
                "magna",
                "eiusmod",
                "est",
                "officia",
                "adipisicing",
                "amet"
            ]
        },
        {
            "_id": "57ef9cd8ff15e5092584605b",
            "index": 89,
            "guid": "1cf9890d-2d89-4a98-ac4c-488b47f33ec7",
            "isActive": false,
            "balance": "$1,664.41",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "eyeColor": "green",
            "name": "Watts Kramer",
            "gender": "male",
            "company": "MARKETOID",
            "email": "wattskramer@marketoid.com",
            "phone": "+1 (981) 572-3764",
            "address": {
                "street": "460 Caton Place",
                "city": "Southmont",
                "state": "Wyoming"
            },
            "registered": "2015-02-16",
            "tags": [
                "occaecat",
                "sit",
                "amet",
                "non",
                "sit",
                "enim",
                "ex"
            ]
        },
        {
            "_id": "57ef9cd85d843de02021c7a4",
            "index": 90,
            "guid": "095bf361-65f5-42ae-aa51-1973d6ad6a2c",
            "isActive": true,
            "balance": "$1,981.37",
            "picture": "http://placehold.it/32x32",
            "age": 20,
            "eyeColor": "green",
            "name": "Iva Brady",
            "gender": "female",
            "company": "COMDOM",
            "email": "ivabrady@comdom.com",
            "phone": "+1 (942) 514-2261",
            "address": {
                "street": "525 Hoyts Lane",
                "city": "Waterloo",
                "state": "Massachusetts"
            },
            "registered": "2015-12-22",
            "tags": [
                "nisi",
                "quis",
                "adipisicing",
                "et",
                "quis",
                "esse",
                "consequat"
            ]
        },
        {
            "_id": "57ef9cd8bf5b4c18438c890c",
            "index": 91,
            "guid": "bfb1f645-a63e-4fc0-9a94-a208396e32f7",
            "isActive": true,
            "balance": "$2,694.33",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "blue",
            "name": "Estella Moses",
            "gender": "female",
            "company": "UNDERTAP",
            "email": "estellamoses@undertap.com",
            "phone": "+1 (999) 418-3031",
            "address": {
                "street": "127 Liberty Avenue",
                "city": "Roy",
                "state": "Kentucky"
            },
            "registered": "2014-08-10",
            "tags": [
                "ipsum",
                "ea",
                "eu",
                "duis",
                "enim",
                "consequat",
                "veniam"
            ]
        },
        {
            "_id": "57ef9cd895135c80288cf57e",
            "index": 92,
            "guid": "6470c22d-0086-4acf-9fdf-7d1762a17e08",
            "isActive": true,
            "balance": "$3,995.47",
            "picture": "http://placehold.it/32x32",
            "age": 40,
            "eyeColor": "brown",
            "name": "Anthony Knight",
            "gender": "male",
            "company": "EQUICOM",
            "email": "anthonyknight@equicom.com",
            "phone": "+1 (873) 569-3224",
            "address": {
                "street": "654 Greene Avenue",
                "city": "Chamizal",
                "state": "Arizona"
            },
            "registered": "2014-02-08",
            "tags": [
                "Lorem",
                "duis",
                "incididunt",
                "nulla",
                "Lorem",
                "dolor",
                "adipisicing"
            ]
        },
        {
            "_id": "57ef9cd8ca4056877bc2cb23",
            "index": 93,
            "guid": "fc8ea442-c629-42a1-87dd-c58609c0ebdb",
            "isActive": false,
            "balance": "$3,017.70",
            "picture": "http://placehold.it/32x32",
            "age": 40,
            "eyeColor": "blue",
            "name": "Russell Gilliam",
            "gender": "male",
            "company": "BLUEGRAIN",
            "email": "russellgilliam@bluegrain.com",
            "phone": "+1 (996) 465-2053",
            "address": {
                "street": "400 Columbia Place",
                "city": "Summerset",
                "state": "Maryland"
            },
            "registered": "2015-01-19",
            "tags": [
                "sit",
                "eu",
                "qui",
                "Lorem",
                "enim",
                "aliquip",
                "enim"
            ]
        },
        {
            "_id": "57ef9cd8723a1463115cbf16",
            "index": 94,
            "guid": "282ddfb3-7c52-4732-80a2-be8c436ee0c9",
            "isActive": true,
            "balance": "$1,448.23",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "brown",
            "name": "Mcmahon Reynolds",
            "gender": "male",
            "company": "PANZENT",
            "email": "mcmahonreynolds@panzent.com",
            "phone": "+1 (877) 512-2213",
            "address": {
                "street": "452 Kathleen Court",
                "city": "Barronett",
                "state": "Illinois"
            },
            "registered": "2015-04-03",
            "tags": [
                "qui",
                "in",
                "qui",
                "laboris",
                "et",
                "nulla",
                "id"
            ]
        },
        {
            "_id": "57ef9cd8d99535859969e271",
            "index": 95,
            "guid": "ac088fe2-019a-4fd7-bd8c-5d21eeb5e731",
            "isActive": false,
            "balance": "$2,204.60",
            "picture": "http://placehold.it/32x32",
            "age": 20,
            "eyeColor": "green",
            "name": "Rosa Myers",
            "gender": "female",
            "company": "LUNCHPAD",
            "email": "rosamyers@lunchpad.com",
            "phone": "+1 (847) 423-3501",
            "address": {
                "street": "913 Trucklemans Lane",
                "city": "Lynn",
                "state": "West Virginia"
            },
            "registered": "2016-06-10",
            "tags": [
                "veniam",
                "consectetur",
                "dolor",
                "quis",
                "anim",
                "do",
                "sit"
            ]
        },
        {
            "_id": "57ef9cd802b0ae83a4ed2495",
            "index": 96,
            "guid": "0507ff39-d0be-4f4d-afc0-01458a66d7a9",
            "isActive": true,
            "balance": "$3,655.93",
            "picture": "http://placehold.it/32x32",
            "age": 28,
            "eyeColor": "brown",
            "name": "Angeline Schroeder",
            "gender": "female",
            "company": "ZORROMOP",
            "email": "angelineschroeder@zorromop.com",
            "phone": "+1 (852) 421-2895",
            "address": {
                "street": "195 Sumpter Street",
                "city": "Washington",
                "state": "Alaska"
            },
            "registered": "2015-05-21",
            "tags": [
                "dolor",
                "dolor",
                "nulla",
                "id",
                "mollit",
                "eiusmod",
                "ut"
            ]
        },
        {
            "_id": "57ef9cd82e8295c9e6edee99",
            "index": 97,
            "guid": "322617dc-ac2f-4076-bec9-7539ec959ad2",
            "isActive": true,
            "balance": "$1,675.25",
            "picture": "http://placehold.it/32x32",
            "age": 24,
            "eyeColor": "brown",
            "name": "Hall Atkinson",
            "gender": "male",
            "company": "UNIA",
            "email": "hallatkinson@unia.com",
            "phone": "+1 (847) 412-2997",
            "address": {
                "street": "864 Pierrepont Street",
                "city": "Caroleen",
                "state": "Oklahoma"
            },
            "registered": "2016-01-02",
            "tags": [
                "quis",
                "id",
                "quis",
                "consequat",
                "enim",
                "esse",
                "elit"
            ]
        },
        {
            "_id": "57ef9cd8864bcc1330fa009c",
            "index": 98,
            "guid": "3c336f09-140a-423b-963d-e49a0864b214",
            "isActive": false,
            "balance": "$2,141.56",
            "picture": "http://placehold.it/32x32",
            "age": 28,
            "eyeColor": "brown",
            "name": "Paulette Sellers",
            "gender": "female",
            "company": "ARCTIQ",
            "email": "paulettesellers@arctiq.com",
            "phone": "+1 (937) 462-3359",
            "address": {
                "street": "130 Ovington Court",
                "city": "Diaperville",
                "state": "Federated States Of Micronesia"
            },
            "registered": "2014-10-28",
            "tags": [
                "aliqua",
                "occaecat",
                "ut",
                "dolor",
                "dolor",
                "irure",
                "pariatur"
            ]
        },
        {
            "_id": "57ef9cd88bbbbcdd7e59618f",
            "index": 99,
            "guid": "6854d791-09f7-46c2-b66c-bcc0ba82d654",
            "isActive": true,
            "balance": "$1,683.05",
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "eyeColor": "brown",
            "name": "Key Black",
            "gender": "male",
            "company": "MAINELAND",
            "email": "keyblack@maineland.com",
            "phone": "+1 (920) 536-2044",
            "address": {
                "street": "326 Melrose Street",
                "city": "Denio",
                "state": "Vermont"
            },
            "registered": "2016-08-06",
            "tags": [
                "tempor",
                "enim",
                "elit",
                "cupidatat",
                "ipsum",
                "ipsum",
                "in"
            ]
        }
    ];
    var contacts = [
        {
            id: getId(),
            firstName: 'John',
            lastName: 'Tolkien',
            email: 'tolkien@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Clive',
            lastName: 'Lewis',
            email: 'lewis@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Owen',
            lastName: 'Barfield',
            email: 'barfield@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Charles',
            lastName: 'Williams',
            email: 'williams@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Roger',
            lastName: 'Green',
            email: 'green@inklings.com',
            phoneNumber: '867-5309'
        }
    ];
    var WebAPI = (function () {
        function WebAPI() {
            this.isRequesting = false;
        }
        WebAPI.prototype.getUsers = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = users.map(function (x) {
                        return {
                            id: x._id,
                            name: x.name,
                            age: x.age,
                            email: x.email,
                            address: x.address,
                            isActive: x.isActive
                        };
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.getContactList = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = contacts.map(function (x) {
                        return {
                            id: x.id,
                            firstName: x.firstName,
                            lastName: x.lastName,
                            email: x.email
                        };
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.getContactDetails = function (id) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var found = contacts.filter(function (x) { return x.id == id; })[0];
                    resolve(JSON.parse(JSON.stringify(found)));
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.saveContact = function (contact) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var instance = JSON.parse(JSON.stringify(contact));
                    var found = contacts.filter(function (x) { return x.id == contact.id; })[0];
                    if (found) {
                        var index = contacts.indexOf(found);
                        contacts[index] = instance;
                    }
                    else {
                        instance.id = getId();
                        contacts.push(instance);
                    }
                    _this.isRequesting = false;
                    resolve(instance);
                }, latency);
            });
        };
        return WebAPI;
    }());
    exports.WebAPI = WebAPI;
});



define('dashboard/dashboard',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dashboard = (function () {
        function Dashboard() {
        }
        return Dashboard;
    }());
    exports.Dashboard = Dashboard;
});



define('form/form',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var form = (function () {
        function form() {
        }
        return form;
    }());
    exports.form = form;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('grid/grid',["require", "exports", "aurelia-framework", "../web-api", "aurelia-router"], function (require, exports, aurelia_framework_1, web_api_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Grid = (function () {
        function Grid(api, router) {
            var _this = this;
            this.api = api;
            this.router = router;
            this.filters = [
                { value: true, custom: this.inactiveFilter }
            ];
            this.pageSize = 10;
            this.api.getUsers().then(function (contacts) {
                _this.users = contacts;
                _this.users.forEach(function (user) {
                    user.detailUrl = _this.router.generate('detail', { id: user.id });
                });
            });
        }
        Grid.prototype.inactiveFilter = function (filterValue, row) {
            return filterValue || row.isActive;
        };
        Grid.prototype.nameLength = function (row) {
            return row.name.length;
        };
        Grid = __decorate([
            aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_router_1.Router),
            __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_router_1.Router])
        ], Grid);
        return Grid;
    }());
    exports.Grid = Grid;
});



define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources(['./elements/loading-indicator']);
    }
    exports.configure = configure;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/loading-indicator',["require", "exports", "nprogress", "aurelia-framework"], function (require, exports, nprogress, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoadingIndicator = (function () {
        function LoadingIndicator() {
            this.loading = false;
        }
        LoadingIndicator.prototype.loadingChanged = function (newValue) {
            if (newValue) {
                nprogress.start();
            }
            else {
                nprogress.done();
            }
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LoadingIndicator.prototype, "loading", void 0);
        LoadingIndicator = __decorate([
            aurelia_framework_1.noView(['nprogress/nprogress.css'])
        ], LoadingIndicator);
        return LoadingIndicator;
    }());
    exports.LoadingIndicator = LoadingIndicator;
});



define('form/detail',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Detail = (function () {
        function Detail() {
        }
        return Detail;
    }());
    exports.Detail = Detail;
});



define('childroute/detail',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Detail = (function () {
        function Detail() {
        }
        return Detail;
    }());
    exports.Detail = Detail;
});



define('childroute/form',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var form = (function () {
        function form() {
        }
        return form;
    }());
    exports.form = form;
});



define('childroute/childroute',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var form = (function () {
        function form() {
        }
        return form;
    }());
    exports.form = form;
});



define('grid/detail',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Detail = (function () {
        function Detail() {
        }
        return Detail;
    }());
    exports.Detail = Detail;
});



define('text!styles.css', ['module'], function(module) { module.exports = ".aut-sort:before{\r\n    font-family: FontAwesome;\r\n    padding-right: 0.5em;\r\n    width: 1.28571429em;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.aut-sortable:before{\r\n    content: \"\\f0dc\";\r\n}\r\n\r\n.aut-asc:before{\r\n    content: \"\\f160\";\r\n}\r\n\r\n.aut-desc:before{\r\n    content: \"\\f161\";\r\n}"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a href=\"#\" class=\"pull-left\"><img src=\"images\\test.png\"></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"route of router.navigation\" class=\"${route.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"route.href\">${route.title}</a></li></ul></div></div></nav><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-xs-2\">test</div><div class=\"col-xs-10\"><router-view></router-view></div></div></div></template>"; });
define('text!dashboard/dashboard.html', ['module'], function(module) { module.exports = "<template>Dashboard</template>"; });
define('text!form/form.html', ['module'], function(module) { module.exports = "<template>Form</template>"; });
define('text!grid/grid.html', ['module'], function(module) { module.exports = "<template><require from=\"font-awesome/css/font-awesome.min.css\"></require><require from=\"../styles.css\"></require><div class=\"checkbox\"><label><input type=\"checkbox\" checked.bind=\"filters[0].value\"> Show inactive</label></div><table class=\"table table-striped\" aurelia-table=\"data.bind: users; display-data.bind: $displayData;\r\n        current-page.bind: currentPage; page-size.bind: pageSize; total-items.bind: totalItems;\r\n            filters.bind: filters\"><thead><tr><th aut-sort=\"key.bind: nameLength\">Name</th><th aut-sort=\"key: age; default: desc\">Age</th><th>E-mail</th><th>Address</th><th aut-sort=\"key: isActive\">Active</th><th></th></tr></thead><tbody><tr repeat.for=\"user of $displayData\"><td>${user.name}</td><td>${user.age}</td><td><a href=\"mailto:${user.email}\">${user.email}</a></td><td>${user.address.street + ', ' + user.address.city}</td><td>${user.isActive}</td><td><a href.bind=\"user.detailUrl\" class=\"btn btn-primary\" role=\"button\">Detail</a></td></tr></tbody></table><div class=\"row\"><div class=\"col-md-9\"><aut-pagination current-page.bind=\"currentPage\" page-size.bind=\"pageSize\" total-items.bind=\"totalItems\" pagination-size.bind=\"5\" boundary-links.bind=\"true\"></aut-pagination></div><div class=\"col-md-3\"><div class=\"form-inline\"><div class=\"form-group pull-right\"><label for=\"pageSize\">Page Size:</label><select value.bind=\"pageSize\" id=\"pageSize\" class=\"form-control\"><option model.bind=\"5\">5</option><option model.bind=\"10\">10</option><option model.bind=\"20\">20</option><option model.bind=\"50\">50</option></select></div></div></div></div></template>"; });
define('text!form/detail.html', ['module'], function(module) { module.exports = "<template>test detail form</template>"; });
define('text!childroute/detail.html', ['module'], function(module) { module.exports = "<template>test detail form</template>"; });
define('text!childroute/form.html', ['module'], function(module) { module.exports = "<template>Form</template>"; });
define('text!childroute/childroute.html', ['module'], function(module) { module.exports = "<template>Form</template>"; });
define('text!grid/detail.html', ['module'], function(module) { module.exports = "<template>test detail form</template>"; });
//# sourceMappingURL=app-bundle.js.map