const leftMostSlot = 221;
const slotSpacing = 125;
const railPos = 285;

const target = [];
for (let i = 0; i < 5; ++i) {
  target.push({x: leftMostSlot + slotSpacing*i, y: railPos});
}
target.push({});

// Tọa độ và số chỉ ban đầu của các toa được sinh ngẫu nhiên
const initials = [{
        wagons: {
            1: {
                y: 50,
                x: 47
            },
            2: {
                y: 98,
                x: 206
            },
            3: {
                y: 132,
                x: 361
            },
            4: {
                y: 166,
                x: 518
            },
            5: {
                y: 49,
                x: 675
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            1: {
                y: 56,
                x: 397
            },
            2: {
                y: 64.984375,
                x: 100.984375
            },
            3: {
                y: 48,
                x: 714
            },
            4: {
                y: 194.984375,
                x: 586
            },
            5: {
                y: 199.96875,
                x: 299.984375
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            1: {
                y: 57,
                x: 639
            },
            2: {
                y: 51,
                x: 396
            },
            3: {
                y: 182,
                x: 531
            },
            4: {
                y: 188,
                x: 296
            },
            5: {
                y: 56,
                x: 145
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            5: {
                y: 85,
                x: 75
            },
            6: {
                y: 56,
                x: 262
            },
            7: {
                y: 147,
                x: 638
            },
            8: {
                y: 184,
                x: 338
            },
            9: {
                y: 70,
                x: 468
            }
        },
        kind: "a",
        loco: 4
    }, {
        wagons: {
            5: {
                y: 55,
                x: 465
            },
            6: {
                y: 58,
                x: 678
            },
            7: {
                y: 159,
                x: 105
            },
            8: {
                y: 190,
                x: 577
            },
            9: {
                y: 59,
                x: 279
            }
        },
        kind: "a",
        loco: 4
    }, {
        wagons: {
            5: {
                y: 191,
                x: 249
            },
            6: {
                y: 71,
                x: 104
            },
            7: {
                y: 170,
                x: 591
            },
            8: {
                y: 56,
                x: 759
            },
            9: {
                y: 71,
                x: 401
            }
        },
        kind: "a",
        loco: 4
    }, {
        wagons: {
            2: {
                y: 194,
                x: 182
            },
            4: {
                y: 104,
                x: 353
            },
            6: {
                y: 193,
                x: 584
            },
            8: {
                y: 57,
                x: 125
            },
            9: {
                y: 52,
                x: 555
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            2: {
                y: 54,
                x: 517
            },
            4: {
                y: 184,
                x: 359
            },
            6: {
                y: 161,
                x: 106
            },
            8: {
                y: 44,
                x: 275
            },
            9: {
                y: 165,
                x: 628
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            2: {
                y: 96,
                x: 522
            },
            4: {
                y: 131,
                x: 229
            },
            6: {
                y: 196,
                x: 648
            },
            8: {
                y: 206,
                x: 92
            },
            9: {
                y: 48,
                x: 372
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            3: {
                y: 53,
                x: 573
            },
            5: {
                y: 51,
                x: 173
            },
            6: {
                y: 53,
                x: 381
            },
            7: {
                y: 201,
                x: 276
            },
            8: {
                y: 186,
                x: 513
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            3: {
                y: 189,
                x: 484
            },
            5: {
                y: 205,
                x: 265
            },
            6: {
                y: 66,
                x: 156
            },
            7: {
                y: 64,
                x: 593
            },
            8: {
                y: 56,
                x: 347
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            3: {
                y: 62,
                x: 767
            },
            5: {
                y: 130,
                x: 75
            },
            6: {
                y: 128,
                x: 278
            },
            7: {
                y: 117,
                x: 622
            },
            8: {
                y: 113,
                x: 446
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            3: {
                y: 188,
                x: 484
            },
            4: {
                y: 204,
                x: 255
            },
            7: {
                y: 64,
                x: 176
            },
            8: {
                y: 60,
                x: 575
            },
            9: {
                y: 60,
                x: 361
            }
        },
        kind: "a",
        loco: 2
    }, {
        wagons: {
            3: {
                y: 57,
                x: 273
            },
            4: {
                y: 196,
                x: 388
            },
            7: {
                y: 55,
                x: 466
            },
            8: {
                y: 194,
                x: 586
            },
            9: {
                y: 197,
                x: 175
            }
        },
        kind: "a",
        loco: 2
    }, {
        wagons: {
            3: {
                y: 198,
                x: 599
            },
            4: {
                y: 202,
                x: 174
            },
            7: {
                y: 49,
                x: 118
            },
            8: {
                y: 55,
                x: 594
            },
            9: {
                y: 117,
                x: 381
            }
        },
        kind: "a",
        loco: 2
    }, {
        wagons: {
            4: {
                y: 94,
                x: 111
            },
            5: {
                y: 187,
                x: 541
            },
            6: {
                y: 190,
                x: 337
            },
            7: {
                y: 51,
                x: 640
            },
            9: {
                y: 49,
                x: 383
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            4: {
                y: 54,
                x: 54
            },
            5: {
                y: 201,
                x: 353
            },
            6: {
                y: 51,
                x: 619
            },
            7: {
                y: 138,
                x: 192
            },
            9: {
                y: 147,
                x: 505
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            4: {
                y: 78,
                x: 53
            },
            5: {
                y: 199,
                x: 766
            },
            6: {
                y: 157,
                x: 247
            },
            7: {
                y: 65,
                x: 612
            },
            9: {
                y: 189,
                x: 402
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            0: {
                y: 59,
                x: 399
            },
            1: {
                y: 187,
                x: 285
            },
            2: {
                y: 63,
                x: 124
            },
            3: {
                y: 176,
                x: 567
            },
            4: {
                y: 56,
                x: 709
            }
        },
        kind: "b",
        loco: 5
    }, {
        wagons: {
            0: {
                y: 177,
                x: 374
            },
            1: {
                y: 56,
                x: 214
            },
            2: {
                y: 173,
                x: 685
            },
            3: {
                y: 173,
                x: 64
            },
            4: {
                y: 62,
                x: 525
            }
        },
        kind: "b",
        loco: 5
    }, {
        wagons: {
            0: {
                y: 53,
                x: 48
            },
            1: {
                y: 206,
                x: 655
            },
            2: {
                y: 147,
                x: 253
            },
            3: {
                y: 198,
                x: 409
            },
            4: {
                y: 47,
                x: 700
            }
        },
        kind: "b",
        loco: 5
    }, {
        wagons: {
            4: {
                y: 198,
                x: 322
            },
            5: {
                y: 186,
                x: 90
            },
            6: {
                y: 74,
                x: 440
            },
            7: {
                y: 139,
                x: 586
            },
            8: {
                y: 71,
                x: 224
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            4: {
                y: 53,
                x: 223
            },
            5: {
                y: 197,
                x: 651
            },
            6: {
                y: 177,
                x: 364
            },
            7: {
                y: 170,
                x: 125
            },
            8: {
                y: 65,
                x: 512
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            4: {
                y: 204,
                x: 724
            },
            5: {
                y: 125,
                x: 255
            },
            6: {
                y: 131,
                x: 557
            },
            7: {
                y: 203,
                x: 110
            },
            8: {
                y: 51,
                x: 379
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            3: {
                y: 106,
                x: 559
            },
            4: {
                y: 172,
                x: 239
            },
            5: {
                y: 58,
                x: 27
            },
            6: {
                y: 172,
                x: 386
            },
            7: {
                y: 51,
                x: 724
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            3: {
                y: 115,
                x: 569
            },
            4: {
                y: 54,
                x: 270
            },
            5: {
                y: 169,
                x: 108
            },
            6: {
                y: 103,
                x: 762
            },
            7: {
                y: 184,
                x: 397
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            3: {
                y: 201,
                x: 186
            },
            4: {
                y: 51,
                x: 531
            },
            5: {
                y: 205,
                x: 566
            },
            6: {
                y: 57,
                x: 169
            },
            7: {
                y: 116,
                x: 373
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            1: {
                y: 65,
                x: 28
            },
            3: {
                y: 180,
                x: 606
            },
            5: {
                y: 120,
                x: 221
            },
            7: {
                y: 67,
                x: 712
            },
            8: {
                y: 191,
                x: 407
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            1: {
                y: 70,
                x: 626
            },
            3: {
                y: 168,
                x: 530
            },
            5: {
                y: 79,
                x: 126
            },
            7: {
                y: 48,
                x: 401
            },
            8: {
                y: 172,
                x: 292
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            1: {
                y: 170,
                x: 219
            },
            3: {
                y: 58,
                x: 356
            },
            5: {
                y: 54,
                x: 68
            },
            7: {
                y: 132,
                x: 539
            },
            8: {
                y: 63,
                x: 688
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            0: {
                y: 126,
                x: 308
            },
            2: {
                y: 155,
                x: 577
            },
            4: {
                y: 54,
                x: 677
            },
            5: {
                y: 53,
                x: 167
            },
            8: {
                y: 212,
                x: 438
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            0: {
                y: 124,
                x: 284
            },
            2: {
                y: 81,
                x: 592
            },
            4: {
                y: 112,
                x: 436
            },
            5: {
                y: 52,
                x: 776
            },
            8: {
                y: 162,
                x: 93
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            0: {
                y: 62,
                x: 243
            },
            2: {
                y: 198,
                x: 250
            },
            4: {
                y: 47,
                x: 576
            },
            5: {
                y: 191,
                x: 574
            },
            8: {
                y: 123,
                x: 409
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            0: {
                y: 175,
                x: 566
            },
            4: {
                y: 205,
                x: 270
            },
            5: {
                y: 55,
                x: 412
            },
            7: {
                y: 53,
                x: 709
            },
            8: {
                y: 67,
                x: 122
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            0: {
                y: 69,
                x: 501
            },
            4: {
                y: 97,
                x: 306
            },
            5: {
                y: 205,
                x: 601
            },
            7: {
                y: 139,
                x: 119
            },
            8: {
                y: 53,
                x: 670
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            0: {
                y: 53,
                x: 230
            },
            4: {
                y: 196,
                x: 229
            },
            5: {
                y: 210,
                x: 549
            },
            7: {
                y: 43,
                x: 579
            },
            8: {
                y: 111,
                x: 378
            }
        },
        kind: "a",
        loco: 0
    }, {
        wagons: {
            3: {
                x: 230,
                y: 137
            },
            4: {
                x: 738,
                y: 90
            },
            6: {
                x: 387,
                y: 80
            },
            7: {
                x: 573,
                y: 162
            },
            9: {
                x: 60,
                y: 62
            }
        },
        kind: "a",
        loco: 1
    }, {
        wagons: {
            3: {
                x: 422,
                y: 108
            },
            4: {
                x: 30,
                y: 95
            },
            6: {
                x: 812,
                y: 176
            },
            7: {
                x: 220,
                y: 181
            },
            9: {
                x: 630,
                y: 66
            }
        },
        kind: "a",
        loco: 1
    }, {
        wagons: {
            3: {
                x: 607,
                y: 53
            },
            4: {
                x: 479,
                y: 158
            },
            6: {
                x: 800,
                y: 121
            },
            7: {
                x: 34,
                y: 159
            },
            9: {
                x: 266,
                y: 115
            }
        },
        kind: "a",
        loco: 1
    }, {
        wagons: {
            1: {
                x: 208,
                y: 62
            },
            2: {
                x: 763,
                y: 63
            },
            4: {
                x: 444,
                y: 97
            },
            5: {
                x: 91,
                y: 198
            },
            7: {
                x: 627,
                y: 201
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            1: {
                x: 43,
                y: 84
            },
            2: {
                x: 539,
                y: 163
            },
            4: {
                x: 710,
                y: 93
            },
            5: {
                x: 227,
                y: 164
            },
            7: {
                x: 386,
                y: 54
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            1: {
                x: 77,
                y: 155
            },
            2: {
                x: 643,
                y: 187
            },
            4: {
                x: 206,
                y: 54
            },
            5: {
                x: 736,
                y: 52
            },
            7: {
                x: 433,
                y: 147
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            0: {
                x: 434,
                y: 165
            },
            3: {
                x: 676,
                y: 196
            },
            4: {
                x: 90,
                y: 178
            },
            6: {
                x: 228,
                y: 77
            },
            7: {
                x: 766,
                y: 55
            }
        },
        kind: "b",
        loco: 8
    }, {
        wagons: {
            0: {
                x: 491,
                y: 180
            },
            3: {
                x: 289,
                y: 82
            },
            4: {
                x: 788,
                y: 193
            },
            6: {
                x: 126,
                y: 153
            },
            7: {
                x: 692,
                y: 70
            }
        },
        kind: "b",
        loco: 8
    }, {
        wagons: {
            0: {
                x: 64,
                y: 151
            },
            3: {
                x: 372,
                y: 198
            },
            4: {
                x: 601,
                y: 86
            },
            6: {
                x: 719,
                y: 186
            },
            7: {
                x: 272,
                y: 57
            }
        },
        kind: "b",
        loco: 8
    }, {
        wagons: {
            1: {
                x: 777,
                y: 128
            },
            3: {
                x: 216,
                y: 112
            },
            5: {
                x: 72,
                y: 198
            },
            7: {
                x: 478,
                y: 63
            },
            8: {
                x: 618,
                y: 202
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            1: {
                x: 96,
                y: 155
            },
            3: {
                x: 380,
                y: 198
            },
            5: {
                x: 535,
                y: 74
            },
            7: {
                x: 727,
                y: 129
            },
            8: {
                x: 232,
                y: 69
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            1: {
                x: 248,
                y: 50
            },
            3: {
                x: 762,
                y: 181
            },
            5: {
                x: 108,
                y: 143
            },
            7: {
                x: 377,
                y: 151
            },
            8: {
                x: 549,
                y: 70
            }
        },
        kind: "b",
        loco: 9
    }, {
        wagons: {
            6: {
                x: 209,
                y: 51
            },
            8: {
                x: 732,
                y: 179
            },
            10: {
                x: 576,
                y: 75
            },
            12: {
                x: 42,
                y: 151
            },
            16: {
                x: 393,
                y: 126
            }
        },
        kind: "a",
        loco: 2
    }, {
        wagons: {
            7: {
                x: 431,
                y: 186
            },
            11: {
                x: 208,
                y: 68
            },
            13: {
                x: 780,
                y: 150
            },
            15: {
                x: 58,
                y: 154
            },
            18: {
                x: 613,
                y: 66
            }
        },
        kind: "b",
        loco: 19
    }, {
        wagons: {
            10: {
                x: 413,
                y: 69
            },
            12: {
                x: 279,
                y: 187
            },
            13: {
                x: 759,
                y: 183
            },
            14: {
                x: 615,
                y: 67
            },
            16: {
                x: 126,
                y: 67
            }
        },
        kind: "b",
        loco: 17
    }, {
        wagons: {
            3: {
                x: 457,
                y: 185
            },
            5: {
                x: 710,
                y: 184
            },
            13: {
                x: 231,
                y: 56
            },
            15: {
                x: 599,
                y: 60
            },
            19: {
                x: 85,
                y: 142
            }
        },
        kind: "a",
        loco: 1
    }, {
        wagons: {
            9: {
                x: 249,
                y: 192
            },
            10: {
                x: 626,
                y: 188
            },
            12: {
                x: 427,
                y: 70
            },
            16: {
                x: 723,
                y: 43
            },
            20: {
                x: 62,
                y: 93
            }
        },
        kind: "a",
        loco: 5
    }, {
        wagons: {
            6: {
                x: 86,
                y: 81
            },
            7: {
                x: 507,
                y: 192
            },
            11: {
                x: 681,
                y: 83
            },
            14: {
                x: 255,
                y: 193
            },
            15: {
                x: 396,
                y: 62
            }
        },
        kind: "b",
        loco: 18
    }, {
        wagons: {
            13: {
                x: 600,
                y: 58
            },
            14: {
                x: 93,
                y: 74
            },
            15: {
                x: 421,
                y: 70
            },
            17: {
                x: 257,
                y: 170
            },
            20: {
                x: 785,
                y: 118
            }
        },
        kind: "a",
        loco: 11
    }, {
        wagons: {
            8: {
                x: 216,
                y: 190
            },
            9: {
                x: 804,
                y: 63
            },
            16: {
                x: 641,
                y: 182
            },
            18: {
                x: 83,
                y: 77
            },
            19: {
                x: 482,
                y: 74
            }
        },
        kind: "b",
        loco: 20
    }, {
        wagons: {
            28: {
                x: 272,
                y: 57
            },
            35: {
                x: 64,
                y: 151
            },
            46: {
                x: 372,
                y: 198
            },
            48: {
                x: 719,
                y: 186
            },
            65: {
                x: 601,
                y: 86
            }
        },
        kind: "a",
        loco: 15
    }, {
        wagons: {
            44: {
                x: 777,
                y: 128
            },
            45: {
                x: 216,
                y: 112
            },
            54: {
                x: 72,
                y: 198
            },
            55: {
                x: 478,
                y: 63
            },
            67: {
                x: 618,
                y: 202
            }
        },
        kind: "a",
        loco: 37
    }, {
        wagons: {
            36: {
                x: 96,
                y: 155
            },
            63: {
                x: 380,
                y: 198
            },
            66: {
                x: 535,
                y: 74
            },
            68: {
                x: 727,
                y: 129
            },
            86: {
                x: 232,
                y: 69
            }
        },
        kind: "a",
        loco: 34
    }, {
        wagons: {
            38: {
                x: 248,
                y: 50
            },
            39: {
                x: 762,
                y: 181
            },
            56: {
                x: 108,
                y: 143
            },
            57: {
                x: 377,
                y: 151
            },
            75: {
                x: 549,
                y: 70
            }
        },
        kind: "a",
        loco: 26
    }, {
        wagons: {
            76: {
                x: 209,
                y: 51
            },
            78: {
                x: 732,
                y: 179
            },
            87: {
                x: 576,
                y: 75
            },
            89: {
                x: 42,
                y: 151
            },
            96: {
                x: 393,
                y: 126
            }
        },
        kind: "a",
        loco: 69
    }, {
        wagons: {
            47: {
                x: 431,
                y: 186
            },
            49: {
                x: 208,
                y: 68
            },
            58: {
                x: 780,
                y: 150
            },
            74: {
                x: 58,
                y: 154
            },
            85: {
                x: 613,
                y: 66
            }
        },
        kind: "a",
        loco: 27
    }, {
        wagons: {
            13: {
                x: 413,
                y: 69
            },
            23: {
                x: 279,
                y: 187
            },
            32: {
                x: 759,
                y: 183
            },
            33: {
                x: 615,
                y: 67
            },
            43: {
                x: 126,
                y: 67
            }
        },
        kind: "a",
        loco: 12
    }, {
        wagons: {
            64: {
                x: 457,
                y: 185
            },
            77: {
                x: 710,
                y: 184
            },
            83: {
                x: 231,
                y: 56
            },
            88: {
                x: 599,
                y: 60
            },
            95: {
                x: 85,
                y: 142
            }
        },
        kind: "a",
        loco: 59
    }, {
        wagons: {
            41: {
                x: 249,
                y: 192
            },
            50: {
                x: 626,
                y: 188
            },
            53: {
                x: 427,
                y: 70
            },
            72: {
                x: 723,
                y: 43
            },
            73: {
                x: 62,
                y: 93
            }
        },
        kind: "a",
        loco: 25
    }, {
        wagons: {
            20: {
                x: 86,
                y: 81
            },
            21: {
                x: 507,
                y: 192
            },
            24: {
                x: 681,
                y: 83
            },
            40: {
                x: 255,
                y: 193
            },
            42: {
                x: 396,
                y: 62
            }
        },
        kind: "a",
        loco: 14
    }, {
        wagons: {
            70: {
                x: 600,
                y: 58
            },
            82: {
                x: 93,
                y: 74
            },
            84: {
                x: 421,
                y: 70
            },
            89: {
                x: 257,
                y: 170
            },
            94: {
                x: 785,
                y: 118
            }
        },
        kind: "a",
        loco: 52
    }, {
        wagons: {
            37: {
                x: 272,
                y: 57
            },
            48: {
                x: 64,
                y: 151
            },
            25: {
                x: 372,
                y: 198
            },
            76: {
                x: 719,
                y: 186
            },
            55: {
                x: 601,
                y: 86
            }
        },
        kind: "b",
        loco: 100
    }, {
        wagons: {
            13: {
                x: 777,
                y: 128
            },
            41: {
                x: 216,
                y: 112
            },
            33: {
                x: 72,
                y: 198
            },
            25: {
                x: 478,
                y: 63
            },
            28: {
                x: 618,
                y: 202
            }
        },
        kind: "b",
        loco: 45
    }, {
        wagons: {
            84: {
                x: 96,
                y: 155
            },
            68: {
                x: 380,
                y: 198
            },
            92: {
                x: 535,
                y: 74
            },
            89: {
                x: 727,
                y: 129
            },
            75: {
                x: 232,
                y: 69
            }
        },
        kind: "b",
        loco: 97
    }, {
        wagons: {
            72: {
                x: 248,
                y: 50
            },
            49: {
                x: 762,
                y: 181
            },
            38: {
                x: 108,
                y: 143
            },
            29: {
                x: 377,
                y: 151
            },
            56: {
                x: 549,
                y: 70
            }
        },
        kind: "b",
        loco: 80
    }, {
        wagons: {
            69: {
                x: 209,
                y: 51
            },
            67: {
                x: 732,
                y: 179
            },
            70: {
                x: 576,
                y: 75
            },
            64: {
                x: 42,
                y: 151
            },
            71: {
                x: 393,
                y: 126
            }
        },
        kind: "b",
        loco: 73
    }, {
        wagons: {
            44: {
                x: 431,
                y: 186
            },
            63: {
                x: 208,
                y: 68
            },
            47: {
                x: 780,
                y: 150
            },
            58: {
                x: 58,
                y: 154
            },
            36: {
                x: 613,
                y: 66
            }
        },
        kind: "b",
        loco: 65
    }, {
        wagons: {
            44: {
                x: 413,
                y: 69
            },
            63: {
                x: 279,
                y: 187
            },
            47: {
                x: 759,
                y: 183
            },
            58: {
                x: 615,
                y: 67
            },
            36: {
                x: 126,
                y: 67
            }
        },
        kind: "b",
        loco: 65
    }, {
        wagons: {
            60: {
                x: 457,
                y: 185
            },
            78: {
                x: 710,
                y: 184
            },
            81: {
                x: 231,
                y: 56
            },
            59: {
                x: 599,
                y: 60
            },
            83: {
                x: 85,
                y: 142
            }
        },
        kind: "b",
        loco: 88
    }, {
        wagons: {
            66: {
                x: 249,
                y: 192
            },
            52: {
                x: 626,
                y: 188
            },
            46: {
                x: 427,
                y: 70
            },
            62: {
                x: 723,
                y: 43
            },
            54: {
                x: 62,
                y: 93
            }
        },
        kind: "b",
        loco: 74
    }, {
        wagons: {
            30: {
                x: 86,
                y: 81
            },
            18: {
                x: 507,
                y: 192
            },
            34: {
                x: 681,
                y: 83
            },
            32: {
                x: 255,
                y: 193
            },
            26: {
                x: 396,
                y: 62
            }
        },
        kind: "b",
        loco: 34
    }, {
        wagons: {
            57: {
                x: 600,
                y: 58
            },
            43: {
                x: 93,
                y: 74
            },
            82: {
                x: 421,
                y: 70
            },
            50: {
                x: 257,
                y: 170
            },
            53: {
                x: 785,
                y: 118
            }
        },
        kind: "b",
        loco: 96
    }];

function init() {
	const rand = Math.floor(Math.random() * initials.length);
	const initial = initials[rand];
	const reversed = initial.kind == 'a' ? 1 : -1;

	return {
		wagons: Object.entries(initial.wagons)
			.sort((a, b) => reversed * (a[0] - b[0])),
		loco: initial.loco,
	};
}

export { target, init };
