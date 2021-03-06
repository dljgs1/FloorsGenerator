main.floors.base5=
{
"floorId": "base5",
"title": "主塔-5",
"name": "-5",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0, 28, 27,  1,  0, 87,  1,122,  1,  0, 88,  3],
    [  3,  0,  0, 87,  1,  0,  0,  1,  0,  1,  0,  0,  3],
    [  3,  0,  0,  0,  1,  0,  0,  1,  0,214,  0,  0,  3],
    [  3,214,246,214,  1,246,246,  1,  1,  1,  1, 81,  3],
    [  3,  0,  0,  0,  1,246,246,  1, 32,  0,232,224,  3],
    [  3,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,232,  3],
    [  3,  0,  0,  0, 81,  0,  0,  1, 81,  1,  1,  1,  3],
    [  3,  1,  1, 81,  1,  1,  0,  1,214,  7,131,  8,  3],
    [  3,  0,246,246,246,  1, 81, 81,224,  0,  0, 22,  3],
    [  3,  0,  0,  0,  0,  1,224,  1,214,  0,  0, 21,  3],
    [  3, 28, 27, 31, 21,  1, 21,  1,  1,  1,  1,  1,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "8,1": [
        "\t[商人,women]告诉你吧，勇者之证必须至少安装一个增幅器才能发挥功效"
    ],
    "10,8": [
        {
            "type": "openShop",
            "id": "moneyShopB5F"
        }
    ]
},
"changeFloor": {
    "3,2": {
        "floorId": "base4",
        "loc": [
            3,
            2
        ]
    },
    "6,1": {
        "floorId": "base4",
        "loc": [
            6,
            1
        ]
    },
    "11,1": {
        "floorId": "base6",
        "loc": [
            11,
            1
        ]
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"upFloor": [
    6,
    1
],
}