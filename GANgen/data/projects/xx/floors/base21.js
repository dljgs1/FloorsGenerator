main.floors.base21=
{
"floorId": "base21",
"title": "主塔-21",
"name": "-21",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  1,  0,  0,  0,  0,  0,255,254,255,  0,  0,  3],
    [  3,235,  0,  1,255,  1,  1,  1,  1,  1,  1,  0,  3],
    [  3,256,  1,  1, 81,  1, 21, 21,255,254,255,  0,  3],
    [  3,235,  0,  1, 81,  1,  1,  1,  1,  1,  1,  0,  3],
    [  3,  0,  0,  1, 81,  1,121,  0,  0, 28,  1,  0,  3],
    [  3,  0,  0,  1, 81,  1,235,  0,  1,  1,  1,255,  3],
    [  3,  1,331,  1, 81,  1, 88, 63, 81, 81, 81,236,  3],
    [  3,  1,331,  1, 81,  1,235,  0,  1,  1,  1,255,  3],
    [  3,331,331,  1, 81,  1,  0,  0,  0, 27,  1,  0,  3],
    [  3,228,  1,  1,  0,  1,  1,  1,  1,  1,  1,  0,  3],
    [  3, 32, 27,  1, 87,  1, 21, 21,254,256,254,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
"firstArrive": [],
"events": {
    "6,5": [
        "\t[老人,man]你的盾越强，防御临界就越低。你的剑越强，攻击临界就越高。"
    ]
},
"changeFloor": {
    "4,11": {
        "floorId": "base20",
        "stair": "downFloor"
    },
    "6,7": {
        "floorId": "base22",
        "stair": "upFloor"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}