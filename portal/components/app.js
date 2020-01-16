

const app = new Vue({
  el: "#app",
  data() {
    // TODO put this in an actual json file
    const DEVICE_URLS = [ "moha-lamp1.fritz.box" ]

    // TODO retrieve this from the device
    const DEVICE_RESPONSES = [
      {
        "device": {
          "uuid": "d54e8c2d-c84e-456b-8e5b-87455d43195f",
          "platform": "ESP8266",
          "comment": "built into the red box"
        },
        "skills": [
          {
            "uuid": "b82ef140-c589-49bb-81fd-7c160be2ad16",
            "comment": "hard wired to the relay output 3",
            "type": "switch",
            "capabilities": ["http", "on/off"], // "brightness", "timer", "sleep-mode"
            "actions" : {
              "status":  { "http-path": "/moha/v1/switch1/status" },
              "on":  { "http-path": "/moha/v1/switch1/on" },
              "off": { "http-path": "/moha/v1/switch1/off" }
            }
          },
          {
            "uuid": "93acf110-eb0a-4334-a4bb-9ba0e305cf84",
            "comment": "hard wired to the relay output 3",
            "type": "switch",
            "capabilities": ["http", "on/off"], // "brightness", "timer", "sleep-mode"
            "actions" : {
              "status":  { "http-path": "/moha/v1/switch1/status" },
              "on":  { "http-path": "/moha/v1/switch1/on" },
              "off": { "http-path": "/moha/v1/switch1/off" }
            }
          }
        ]
      }
    ]
    return { devices: DEVICE_RESPONSES }
  }
})
