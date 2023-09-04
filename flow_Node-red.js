[
    {
        "id": "57dcb14b1c0b7b4b",
        "type": "tab",
        "label": "44 - Drain Cleaner",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "adcc47603f4f2c35",
        "type": "mqtt in",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "topic": "sic4/info/sampah_terdeteksi",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "11ddcba0f77a3a71",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 200,
        "y": 100,
        "wires": [
            [
                "a5528dd9ede9ea4a"
            ]
        ]
    },
    {
        "id": "a5528dd9ede9ea4a",
        "type": "json",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 430,
        "y": 100,
        "wires": [
            [
                "a60d55869b72817e"
            ]
        ]
    },
    {
        "id": "a60d55869b72817e",
        "type": "ui_text",
        "z": "57dcb14b1c0b7b4b",
        "group": "d3dcebf45a106f30",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Sampah Terdeteksi",
        "format": "{{msg.payload.sampah_terdeteksi}}",
        "layout": "row-spread",
        "x": 610,
        "y": 100,
        "wires": []
    },
    {
        "id": "cf926a9da9db2a0e",
        "type": "mqtt in",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "topic": "sic4/info/sampah_penuh",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "11ddcba0f77a3a71",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 190,
        "y": 160,
        "wires": [
            [
                "fcda4a5b891b32ba"
            ]
        ]
    },
    {
        "id": "fcda4a5b891b32ba",
        "type": "json",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 430,
        "y": 160,
        "wires": [
            [
                "92ac87b005434164",
                "9b5615dcc10422ee"
            ]
        ]
    },
    {
        "id": "92ac87b005434164",
        "type": "ui_text",
        "z": "57dcb14b1c0b7b4b",
        "group": "d3dcebf45a106f30",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Sampah Penuh",
        "format": "{{msg.payload.sampah_penuh}}",
        "layout": "row-spread",
        "x": 600,
        "y": 160,
        "wires": []
    },
    {
        "id": "8534749a94d0df82",
        "type": "mqtt in",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "topic": "sic4/info/air_tinggi",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "11ddcba0f77a3a71",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 170,
        "y": 340,
        "wires": [
            [
                "61bda1c6d0581983"
            ]
        ]
    },
    {
        "id": "61bda1c6d0581983",
        "type": "json",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 370,
        "y": 340,
        "wires": [
            [
                "ba289da3409e5741",
                "021a134694cb971c"
            ]
        ]
    },
    {
        "id": "ba289da3409e5741",
        "type": "ui_text",
        "z": "57dcb14b1c0b7b4b",
        "group": "d3dcebf45a106f30",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Air Tinggi",
        "format": "{{msg.payload.air_tinggi}}",
        "layout": "row-spread",
        "x": 580,
        "y": 340,
        "wires": []
    },
    {
        "id": "e20c634f29e5574d",
        "type": "ui_chart",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "group": "d3dcebf45a106f30",
        "order": 3,
        "width": 0,
        "height": 0,
        "label": "Ketinggian Air",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 860,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "2aae4b39ed25cebf",
        "type": "ui_gauge",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "group": "d3dcebf45a106f30",
        "order": 2,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Ketinggian Air",
        "label": "cm",
        "format": "{{value | number:1}}cm",
        "min": "0",
        "max": "100.0",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 860,
        "y": 480,
        "wires": []
    },
    {
        "id": "1795514c08b41e82",
        "type": "mqtt in",
        "z": "57dcb14b1c0b7b4b",
        "name": "Ketinggian Air",
        "topic": "sic4/sensor/d3",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "11ddcba0f77a3a71",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 150,
        "y": 440,
        "wires": [
            [
                "8dc42f9f0754c48f"
            ]
        ]
    },
    {
        "id": "8dc42f9f0754c48f",
        "type": "json",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 330,
        "y": 440,
        "wires": [
            [
                "91408cc663663846"
            ]
        ]
    },
    {
        "id": "91408cc663663846",
        "type": "change",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload.distance_3",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 570,
        "y": 440,
        "wires": [
            [
                "e20c634f29e5574d",
                "2aae4b39ed25cebf"
            ]
        ]
    },
    {
        "id": "71526b52d10e9f34",
        "type": "telegram sender",
        "z": "57dcb14b1c0b7b4b",
        "name": "HOCAGEE_TELEGRAM",
        "bot": "a8ed8f6d64545019",
        "haserroroutput": false,
        "outputs": 1,
        "x": 970,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "da90a4c08b4118e5",
        "type": "trigger",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "op1": "{\"type\":\"message\",\"chatId\":\"1599102634\",\"content\":\"Ketinggian air melebihi batas normal\"}",
        "op2": "",
        "op1type": "json",
        "op2type": "nul",
        "duration": "5",
        "extend": false,
        "overrideDelay": false,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 720,
        "y": 280,
        "wires": [
            [
                "71526b52d10e9f34"
            ]
        ]
    },
    {
        "id": "021a134694cb971c",
        "type": "switch",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "property": "payload.air_tinggi",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 570,
        "y": 280,
        "wires": [
            [
                "da90a4c08b4118e5"
            ]
        ]
    },
    {
        "id": "9b5615dcc10422ee",
        "type": "switch",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "property": "payload.sampah_penuh",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 570,
        "y": 220,
        "wires": [
            [
                "66339f03bfaf47a2"
            ]
        ]
    },
    {
        "id": "66339f03bfaf47a2",
        "type": "trigger",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "op1": "{\"type\":\"message\",\"chatId\":\"1599102634\",\"content\":\"Sampah Penuh\"}",
        "op2": "",
        "op1type": "json",
        "op2type": "nul",
        "duration": "5",
        "extend": false,
        "overrideDelay": false,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 720,
        "y": 220,
        "wires": [
            [
                "71526b52d10e9f34"
            ]
        ]
    },
    {
        "id": "3f122464d22b3835",
        "type": "ui_chart",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "group": "50191c2605a80f25",
        "order": 3,
        "width": 0,
        "height": 0,
        "label": "Ketinggian Bak Sampah",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 890,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "1c95c2cac798adf9",
        "type": "ui_gauge",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "group": "50191c2605a80f25",
        "order": 2,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Ketinggian Bak Sampah",
        "label": "%",
        "format": "{{value | number:1}}%",
        "min": "0",
        "max": "100.0",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 890,
        "y": 560,
        "wires": []
    },
    {
        "id": "7da3104631edd6ea",
        "type": "mqtt in",
        "z": "57dcb14b1c0b7b4b",
        "name": "Ketinggian Bak Sampah",
        "topic": "sic4/sensor/d2",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "11ddcba0f77a3a71",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 120,
        "y": 520,
        "wires": [
            [
                "3234730110fa304e"
            ]
        ]
    },
    {
        "id": "3234730110fa304e",
        "type": "json",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 330,
        "y": 520,
        "wires": [
            [
                "2e1885e1f9874627"
            ]
        ]
    },
    {
        "id": "2e1885e1f9874627",
        "type": "change",
        "z": "57dcb14b1c0b7b4b",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload.distance_2",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 550,
        "y": 520,
        "wires": [
            [
                "3f122464d22b3835",
                "1c95c2cac798adf9"
            ]
        ]
    },
    {
        "id": "617d1762cf87e345",
        "type": "remote-access",
        "z": "57dcb14b1c0b7b4b",
        "confignode": "060c62a2e1e91d89",
        "name": "",
        "verbose": 0,
        "x": 1000,
        "y": 320,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "11ddcba0f77a3a71",
        "type": "mqtt-broker",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "userProps": "",
        "sessionExpiry": ""
    },
    {
        "id": "d3dcebf45a106f30",
        "type": "ui_group",
        "name": "Drain Celaner",
        "tab": "8e5ac1de0ae7e50f",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "a8ed8f6d64545019",
        "type": "telegram bot",
        "botname": "Hocagee_bot",
        "usernames": "Hocagee",
        "chatids": "1599102634",
        "baseapiurl": "",
        "updatemode": "polling",
        "pollinterval": "300",
        "usesocks": false,
        "sockshost": "",
        "socksprotocol": "socks5",
        "socksport": "6667",
        "socksusername": "anonymous",
        "sockspassword": "",
        "bothost": "",
        "botpath": "",
        "localbotport": "8443",
        "publicbotport": "8443",
        "privatekey": "",
        "certificate": "",
        "useselfsignedcertificate": false,
        "sslterminated": false,
        "verboselogging": false
    },
    {
        "id": "50191c2605a80f25",
        "type": "ui_group",
        "name": "Drain Celaner",
        "tab": "aed99dc677ef4c30",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "060c62a2e1e91d89",
        "type": "remote-config",
        "name": "Node-RED UI",
        "host": "localhost",
        "protocol": "http",
        "port": "1880",
        "baseurl": "/ui",
        "instancehash": "najzuuo5zqsibxwz71qdrmk15dvqw750mepebdqfobdxlflwctq6m6zir8ht69x1",
        "server": "nodered04.remote-red.com",
        "region": "de"
    },
    {
        "id": "8e5ac1de0ae7e50f",
        "type": "ui_tab",
        "name": "HOCAGEE",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    },
    {
        "id": "aed99dc677ef4c30",
        "type": "ui_tab",
        "name": "K44",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
