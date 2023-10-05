import { IFlow, IScript } from "../interfaces/flow";

export const allFlows: IFlow[] = [
  {
    "id": "0_Jv917c",
    "name": "主流程",
    "ownerId": "mole",
    "moduleId": "mole",
    "type": "normal",
    "metas": {
      "lines": [
        {
          "id": "-v00jBGR",
          "source": {
            "nodeId": "8678623f-32ed-43a0-ba44-83a842aaa725",
            "portId": "SwZM1_RN"
          },
          "target": {
            "nodeId": "e0d4c491-c80e-4169-a54a-336f29ada597",
            "portId": "no7ZNze6"
          }
        },
        {
          "id": "rPPUZHXW",
          "source": {
            "nodeId": "64241bdd-be57-4e04-81d5-f9eb73ec5d84",
            "portId": "XP2sTYBg"
          },
          "target": {
            "nodeId": "e0d4c491-c80e-4169-a54a-336f29ada597",
            "portId": "6JGk2cb0"
          }
        },
        {
          "id": "XCBT_EyK",
          "source": {
            "nodeId": "e0d4c491-c80e-4169-a54a-336f29ada597",
            "portId": "3rNhIWkA"
          },
          "target": {
            "nodeId": "64aa1596-bfce-4e29-b924-f5c3f5e7358b",
            "portId": "39gmGTNW"
          }
        },
        {
          "id": "EpKBN6oO",
          "source": {
            "nodeId": "d4f095cc-e0a6-4744-849a-36e94e0f3dc9",
            "portId": "fJC9H3Wk"
          },
          "target": {
            "nodeId": "64aa1596-bfce-4e29-b924-f5c3f5e7358b",
            "portId": "2yGRi_65"
          }
        },
        {
          "id": "Tg8h_KCx",
          "source": {
            "nodeId": "64aa1596-bfce-4e29-b924-f5c3f5e7358b",
            "portId": "0-0B6jEY"
          },
          "target": {
            "nodeId": "b77648e6-97bd-4468-b43b-f8c1819249a4",
            "portId": "eOc1fUzn"
          }
        },
        {
          "id": "gjZDk9eA",
          "source": {
            "nodeId": "8678623f-32ed-43a0-ba44-83a842aaa725",
            "portId": "SwZM1_RN"
          },
          "target": {
            "nodeId": "51f5320f-ea44-4648-ad2f-b61eebcbe3fc",
            "portId": "gHsz1xXT"
          }
        },
        {
          "id": "WYeSp0Sg",
          "source": {
            "nodeId": "8678623f-32ed-43a0-ba44-83a842aaa725",
            "portId": "SwZM1_RN"
          },
          "target": {
            "nodeId": "ac10e857-c210-4261-816a-dc4a1d543d71",
            "portId": "8TsgD2py"
          }
        },
        {
          "id": "AcQFhUug",
          "source": {
            "nodeId": "64241bdd-be57-4e04-81d5-f9eb73ec5d84",
            "portId": "XP2sTYBg"
          },
          "target": {
            "nodeId": "3a8c7ce0-3f7c-4aa4-8d1c-1ca061abbd89",
            "portId": "0aaCoOR2"
          }
        },
        {
          "id": "pLnCHxS2",
          "source": {
            "nodeId": "64241bdd-be57-4e04-81d5-f9eb73ec5d84",
            "portId": "XP2sTYBg"
          },
          "target": {
            "nodeId": "eed0538f-a982-4eb8-9336-d62c31d49ef9",
            "portId": "MzM-mwA9"
          }
        },
        {
          "id": "rFn-IqP6",
          "source": {
            "nodeId": "8678623f-32ed-43a0-ba44-83a842aaa725",
            "portId": "SwZM1_RN"
          },
          "target": {
            "nodeId": "748a3d7a-91a3-45c8-a450-d60ded58bc4a",
            "portId": "jjFAdOP-"
          }
        },
        {
          "id": "iF_tSwSV",
          "source": {
            "nodeId": "748a3d7a-91a3-45c8-a450-d60ded58bc4a",
            "portId": "d8vEFHaO"
          },
          "target": {
            "nodeId": "15eb624f-843b-428c-aa04-5cf4ec0abf62",
            "portId": "fRehak0w"
          }
        }
      ],
      "nodes": [
        {
          "id": "8678623f-32ed-43a0-ba44-83a842aaa725",
          "type": "Activity",
          "activityName": "system-react.event",
          "outPorts": [
            {
              "id": "SwZM1_RN",
              "name": "onClick",
              "label": "点击"
            }
          ],
          "config": {
            "param": {
              "controllerId": "uQPenUqJ"
            }
          },
          "x6Node": {
            "x": 70,
            "y": 180,
            "width": 116,
            "height": 32
          }
        },
        {
          "id": "e0d4c491-c80e-4169-a54a-336f29ada597",
          "label": "信号发生器",
          "type": "Activity",
          "activityName": "system.signals",
          "inPorts": [
            {
              "id": "no7ZNze6",
              "name": "startUp",
              "label": "启动"
            },
            {
              "id": "6JGk2cb0",
              "name": "stop",
              "label": "停止"
            }
          ],
          "outPorts": [
            {
              "id": "3rNhIWkA",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "interval": 1000
          },
          "x6Node": {
            "x": 290,
            "y": 230,
            "width": 130,
            "height": 32
          }
        },
        {
          "id": "b77648e6-97bd-4468-b43b-f8c1819249a4",
          "label": "活跃地鼠",
          "type": "Activity",
          "activityName": "system-react.setVariable",
          "inPorts": [
            {
              "id": "eOc1fUzn",
              "name": "input",
              "label": "$setValue"
            }
          ],
          "outPorts": [
            {
              "id": "3efAh5Qu",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "variable": "2AHnQ-ne"
            }
          },
          "x6Node": {
            "x": 720,
            "y": 240,
            "width": 116,
            "height": 32
          }
        },
        {
          "id": "64aa1596-bfce-4e29-b924-f5c3f5e7358b",
          "label": "随机数",
          "type": "Activity",
          "activityName": "system.random",
          "inPorts": [
            {
              "id": "39gmGTNW",
              "name": "startUp",
              "label": "启动"
            },
            {
              "id": "YjjWXhfb",
              "name": "minValue",
              "label": "最小值"
            },
            {
              "id": "2yGRi_65",
              "name": "maxValue",
              "label": "最大值"
            }
          ],
          "outPorts": [
            {
              "id": "0-0B6jEY",
              "name": "output",
              "label": ""
            }
          ],
          "config": {},
          "x6Node": {
            "x": 550,
            "y": 220,
            "width": 102,
            "height": 48
          }
        },
        {
          "id": "64241bdd-be57-4e04-81d5-f9eb73ec5d84",
          "type": "Activity",
          "activityName": "system-react.event",
          "outPorts": [
            {
              "id": "XP2sTYBg",
              "name": "onClick",
              "label": "点击"
            }
          ],
          "config": {
            "param": {
              "controllerId": "-V60Mne6"
            }
          },
          "x6Node": {
            "x": 60,
            "y": 270,
            "width": 116,
            "height": 32
          }
        },
        {
          "id": "d4f095cc-e0a6-4744-849a-36e94e0f3dc9",
          "label": "地鼠数量",
          "type": "Activity",
          "activityName": "system-react.setVariable",
          "outPorts": [
            {
              "id": "fJC9H3Wk",
              "name": "output",
              "label": "$valueChange"
            }
          ],
          "config": {
            "param": {
              "variable": "_-uxpUk0"
            }
          },
          "x6Node": {
            "x": 380,
            "y": 360,
            "width": 116,
            "height": 32
          }
        },
        {
          "id": "eed0538f-a982-4eb8-9336-d62c31d49ef9",
          "type": "Activity",
          "activityName": "system-react.reaction",
          "inPorts": [
            {
              "id": "MzM-mwA9",
              "name": "enable",
              "label": "有效"
            }
          ],
          "outPorts": [
            {
              "id": "6AGUb3u7",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "controllerId": "uQPenUqJ"
            }
          },
          "x6Node": {
            "x": 220,
            "y": 380,
            "width": 116,
            "height": 32
          }
        },
        {
          "id": "3a8c7ce0-3f7c-4aa4-8d1c-1ca061abbd89",
          "type": "Activity",
          "activityName": "system-react.reaction",
          "inPorts": [
            {
              "id": "0aaCoOR2",
              "name": "disable",
              "label": "无效"
            }
          ],
          "outPorts": [
            {
              "id": "NiNOKla_",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "controllerId": "-V60Mne6"
            }
          },
          "x6Node": {
            "x": 240,
            "y": 320,
            "width": 116,
            "height": 32
          }
        },
        {
          "id": "15eb624f-843b-428c-aa04-5cf4ec0abf62",
          "label": "成绩",
          "type": "Activity",
          "activityName": "system-react.setVariable",
          "inPorts": [
            {
              "id": "fRehak0w",
              "name": "input",
              "label": "$setValue"
            }
          ],
          "outPorts": [
            {
              "id": "mc6gS9DM",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "variable": "_G4SZqNV"
            }
          },
          "x6Node": {
            "x": 510,
            "y": 120,
            "width": 88,
            "height": 32
          }
        },
        {
          "id": "51f5320f-ea44-4648-ad2f-b61eebcbe3fc",
          "type": "Activity",
          "activityName": "system-react.reaction",
          "inPorts": [
            {
              "id": "gHsz1xXT",
              "name": "disable",
              "label": "无效"
            }
          ],
          "outPorts": [
            {
              "id": "myFKccDW",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "controllerId": "uQPenUqJ"
            }
          },
          "x6Node": {
            "x": 210,
            "y": 60,
            "width": 116,
            "height": 32
          }
        },
        {
          "id": "ac10e857-c210-4261-816a-dc4a1d543d71",
          "type": "Activity",
          "activityName": "system-react.reaction",
          "inPorts": [
            {
              "id": "8TsgD2py",
              "name": "enable",
              "label": "有效"
            }
          ],
          "outPorts": [
            {
              "id": "T6VTyQtp",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "controllerId": "-V60Mne6"
            }
          },
          "x6Node": {
            "x": 260,
            "y": 110,
            "width": 116,
            "height": 32
          }
        },
        {
          "id": "748a3d7a-91a3-45c8-a450-d60ded58bc4a",
          "label": "常量",
          "type": "Activity",
          "activityName": "system.constValue",
          "inPorts": [
            {
              "id": "jjFAdOP-",
              "name": "input",
              "label": ""
            }
          ],
          "outPorts": [
            {
              "id": "d8vEFHaO",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "value": 0
          },
          "x6Node": {
            "x": 310,
            "y": 160,
            "width": 88,
            "height": 32
          }
        }
      ]
    }
  },
  {
    "id": "flDIkz5T",
    "name": "地鼠",
    "ownerId": "KiE-KrsA",
    "moduleId": "mole",
    "type": "normal",
    "metas": {
      "lines": [
        {
          "id": "W7wFzBCw",
          "source": {
            "nodeId": "cbfd6ec2-fec0-40a8-bc01-a70e173ab8e4",
            "portId": "OAGW7k8o"
          },
          "target": {
            "nodeId": "96faabcc-cce5-4c79-999e-c3cde2ac46e4",
            "portId": "3OySi0VZ"
          }
        },
        {
          "id": "PdjqGYvL",
          "source": {
            "nodeId": "4df3a6e4-affd-4ef2-b6e0-d2328a1a6467",
            "portId": "sA1wfw3A"
          },
          "target": {
            "nodeId": "96faabcc-cce5-4c79-999e-c3cde2ac46e4",
            "portId": "hl-QMnwk"
          }
        },
        {
          "id": "jLP60ihm",
          "source": {
            "nodeId": "cbfd6ec2-fec0-40a8-bc01-a70e173ab8e4",
            "portId": "OAGW7k8o"
          },
          "target": {
            "nodeId": "4df3a6e4-affd-4ef2-b6e0-d2328a1a6467",
            "portId": "JLUTlow_"
          }
        },
        {
          "id": "npKawvoV",
          "source": {
            "nodeId": "96faabcc-cce5-4c79-999e-c3cde2ac46e4",
            "portId": "cH4f9uR0"
          },
          "target": {
            "nodeId": "fb331326-e46b-4af4-8e17-af581d1954c0",
            "portId": "KBiUNbEf"
          }
        },
        {
          "id": "4ELBLSMC",
          "source": {
            "nodeId": "96faabcc-cce5-4c79-999e-c3cde2ac46e4",
            "portId": "8lwUxiLJ"
          },
          "target": {
            "nodeId": "3abb5412-8532-45c4-974d-139ff31872c4",
            "portId": "WnJhSUQe"
          }
        },
        {
          "id": "swhgPpdE",
          "source": {
            "nodeId": "445863cf-3e50-4eba-ab07-0ec7417c3b70",
            "portId": "OH0o9Fqs"
          },
          "target": {
            "nodeId": "3d958f20-27b2-4415-8944-8ff368544a74",
            "portId": "QmpXIEGt"
          }
        },
        {
          "id": "GcwtO0JV",
          "source": {
            "nodeId": "3d958f20-27b2-4415-8944-8ff368544a74",
            "portId": "hvvpyn5R"
          },
          "target": {
            "nodeId": "88110723-823e-4639-bb2b-25973da20732",
            "portId": "ZnINPHgX"
          }
        },
        {
          "id": "RVftkC9V",
          "source": {
            "nodeId": "88110723-823e-4639-bb2b-25973da20732",
            "portId": "k9wyTebq"
          },
          "target": {
            "nodeId": "a5df6623-f384-49c9-bb1d-203fd3edaaed",
            "portId": "Dd03vun2"
          }
        },
        {
          "id": "7ek5w733",
          "source": {
            "nodeId": "a5df6623-f384-49c9-bb1d-203fd3edaaed",
            "portId": "wZjofJ25"
          },
          "target": {
            "nodeId": "ed2c7ea0-9627-43c3-bd58-b368b9b37780",
            "portId": "IHdqvqNa"
          }
        },
        {
          "id": "Dy_FT600",
          "source": {
            "nodeId": "ed2c7ea0-9627-43c3-bd58-b368b9b37780",
            "portId": "UKiis6EF"
          },
          "target": {
            "nodeId": "001a1e8d-b6ec-469d-a6a2-c662b00da219",
            "portId": "sfS1Cdbt"
          }
        },
        {
          "id": "p2GlqBZl",
          "source": {
            "nodeId": "6a67f403-503c-4804-b9c5-04371db63c75",
            "portId": "IbdW8WU8"
          },
          "target": {
            "nodeId": "21a4301e-ad8a-45ee-9a54-443f9c7c8a8c",
            "portId": "IHdqvqNa"
          }
        },
        {
          "id": "q74U8DNi",
          "source": {
            "nodeId": "21a4301e-ad8a-45ee-9a54-443f9c7c8a8c",
            "portId": "UKiis6EF"
          },
          "target": {
            "nodeId": "7da052c6-2146-40bf-b9ae-193ab77f2142",
            "portId": "OZpX14ip"
          }
        },
        {
          "id": "69KfiiR-",
          "source": {
            "nodeId": "a5df6623-f384-49c9-bb1d-203fd3edaaed",
            "portId": "wZjofJ25"
          },
          "target": {
            "nodeId": "6a67f403-503c-4804-b9c5-04371db63c75",
            "portId": "9FpaUfaD"
          }
        }
      ],
      "nodes": [
        {
          "id": "cbfd6ec2-fec0-40a8-bc01-a70e173ab8e4",
          "label": "活跃地鼠",
          "type": "Activity",
          "activityName": "system-react.setVariable",
          "outPorts": [
            {
              "id": "OAGW7k8o",
              "name": "output",
              "label": "$valueChange"
            }
          ],
          "config": {
            "param": {
              "variable": "2AHnQ-ne"
            }
          },
          "x6Node": {
            "x": 30,
            "y": 160,
            "width": 116,
            "height": 32
          }
        },
        {
          "id": "96faabcc-cce5-4c79-999e-c3cde2ac46e4",
          "label": "相等",
          "type": "Activity",
          "activityName": "system.condition",
          "inPorts": [
            {
              "id": "3OySi0VZ",
              "name": "input1",
              "label": ""
            },
            {
              "id": "hl-QMnwk",
              "name": "input2",
              "label": ""
            }
          ],
          "outPorts": [
            {
              "id": "cH4f9uR0",
              "name": "true",
              "label": "是"
            },
            {
              "id": "8lwUxiLJ",
              "name": "false",
              "label": "否"
            }
          ],
          "config": {},
          "x6Node": {
            "x": 460,
            "y": 140,
            "width": 88,
            "height": 32
          }
        },
        {
          "id": "4df3a6e4-affd-4ef2-b6e0-d2328a1a6467",
          "label": "读取当前索引",
          "type": "Activity",
          "activityName": "system-react.readArrayIndex",
          "inPorts": [
            {
              "id": "JLUTlow_",
              "name": "input",
              "label": ""
            }
          ],
          "outPorts": [
            {
              "id": "sA1wfw3A",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "controllerId": "KiE-KrsA"
            }
          },
          "x6Node": {
            "x": 220,
            "y": 230,
            "width": 144,
            "height": 48
          }
        },
        {
          "id": "fb331326-e46b-4af4-8e17-af581d1954c0",
          "type": "Activity",
          "activityName": "system-react.reaction",
          "inPorts": [
            {
              "id": "KBiUNbEf",
              "name": "enable",
              "label": "有效"
            }
          ],
          "outPorts": [
            {
              "id": "qu-glyML",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "controllerId": "NpLxKVZs"
            }
          },
          "x6Node": {
            "x": 680,
            "y": 80,
            "width": 88,
            "height": 32
          }
        },
        {
          "id": "3abb5412-8532-45c4-974d-139ff31872c4",
          "type": "Activity",
          "activityName": "system-react.reaction",
          "inPorts": [
            {
              "id": "WnJhSUQe",
              "name": "disable",
              "label": "无效"
            }
          ],
          "outPorts": [
            {
              "id": "tTbgoL29",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "controllerId": "NpLxKVZs"
            }
          },
          "x6Node": {
            "x": 680,
            "y": 160,
            "width": 88,
            "height": 32
          }
        },
        {
          "id": "445863cf-3e50-4eba-ab07-0ec7417c3b70",
          "type": "Activity",
          "activityName": "system-react.event",
          "outPorts": [
            {
              "id": "OH0o9Fqs",
              "name": "onClick",
              "label": "点击"
            }
          ],
          "config": {
            "param": {
              "controllerId": "NpLxKVZs"
            }
          },
          "x6Node": {
            "x": 30,
            "y": 330,
            "width": 88,
            "height": 32
          }
        },
        {
          "id": "3d958f20-27b2-4415-8944-8ff368544a74",
          "label": "成绩",
          "type": "Activity",
          "activityName": "system-react.readVariable",
          "inPorts": [
            {
              "id": "QmpXIEGt",
              "name": "input",
              "label": "$read"
            }
          ],
          "outPorts": [
            {
              "id": "hvvpyn5R",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "variable": "_G4SZqNV"
            }
          },
          "x6Node": {
            "x": 190,
            "y": 390,
            "width": 88,
            "height": 32
          }
        },
        {
          "id": "6a67f403-503c-4804-b9c5-04371db63c75",
          "label": "延时",
          "type": "Activity",
          "activityName": "system.delay",
          "inPorts": [
            {
              "id": "9FpaUfaD",
              "name": "input",
              "label": ""
            }
          ],
          "outPorts": [
            {
              "id": "IbdW8WU8",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "time": 500
          },
          "x6Node": {
            "x": 600,
            "y": 550,
            "width": 88,
            "height": 48
          }
        },
        {
          "id": "ed2c7ea0-9627-43c3-bd58-b368b9b37780",
          "label": "常量",
          "type": "Activity",
          "activityName": "system.constValue",
          "inPorts": [
            {
              "id": "IHdqvqNa",
              "name": "input",
              "label": ""
            }
          ],
          "outPorts": [
            {
              "id": "UKiis6EF",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "value": true
          },
          "x6Node": {
            "x": 580,
            "y": 410,
            "width": 88,
            "height": 32
          }
        },
        {
          "id": "21a4301e-ad8a-45ee-9a54-443f9c7c8a8c",
          "label": "常量",
          "type": "Activity",
          "activityName": "system.constValue",
          "inPorts": [
            {
              "id": "IHdqvqNa",
              "name": "input",
              "label": ""
            }
          ],
          "outPorts": [
            {
              "id": "UKiis6EF",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "value": false
          },
          "x6Node": {
            "x": 750,
            "y": 570,
            "width": 88,
            "height": 32
          }
        },
        {
          "id": "7da052c6-2146-40bf-b9ae-193ab77f2142",
          "type": "Activity",
          "activityName": "system-react.setProp",
          "inPorts": [
            {
              "id": "OZpX14ip",
              "name": "input",
              "label": "$props"
            }
          ],
          "outPorts": [
            {
              "id": "m_32oSv8",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "controllerId": "NpLxKVZs",
              "prop": "danger"
            }
          },
          "x6Node": {
            "x": 870,
            "y": 640,
            "width": 88,
            "height": 48
          }
        },
        {
          "id": "001a1e8d-b6ec-469d-a6a2-c662b00da219",
          "type": "Activity",
          "activityName": "system-react.setProp",
          "inPorts": [
            {
              "id": "sfS1Cdbt",
              "name": "input",
              "label": "$props"
            }
          ],
          "outPorts": [
            {
              "id": "hfMBb1qx",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "controllerId": "NpLxKVZs",
              "prop": "danger"
            }
          },
          "x6Node": {
            "x": 720,
            "y": 450,
            "width": 88,
            "height": 48
          }
        },
        {
          "id": "88110723-823e-4639-bb2b-25973da20732",
          "label": "递增",
          "type": "Activity",
          "activityName": "system.increase",
          "inPorts": [
            {
              "id": "ZnINPHgX",
              "name": "input",
              "label": ""
            }
          ],
          "outPorts": [
            {
              "id": "k9wyTebq",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "step": 1
          },
          "x6Node": {
            "x": 340,
            "y": 400,
            "width": 88,
            "height": 48
          }
        },
        {
          "id": "a5df6623-f384-49c9-bb1d-203fd3edaaed",
          "label": "成绩",
          "type": "Activity",
          "activityName": "system-react.setVariable",
          "inPorts": [
            {
              "id": "Dd03vun2",
              "name": "input",
              "label": "$setValue"
            }
          ],
          "outPorts": [
            {
              "id": "wZjofJ25",
              "name": "output",
              "label": ""
            }
          ],
          "config": {
            "param": {
              "variable": "_G4SZqNV"
            }
          },
          "x6Node": {
            "x": 460,
            "y": 500,
            "width": 88,
            "height": 32
          }
        }
      ]
    }
  }
] as any
export const allScripts: IScript[] = []
