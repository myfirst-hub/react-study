// eslint-disable-next-line import/no-anonymous-default-export
export default {
  "type": "div",
  "props": {
    "id": "A1",
    "children": [
      {
        "type": "div",
        "props": {
          "id": "B1",
          "children": [
            {
              "type": "div",
              "props": {
                "id": "C1",
                "children": "C1"
              },
            },
            {
              "type": "div",
              "props": {
                "id": "C2",
                "children": "C2"
              },
            }
          ]
        },
      },
      {
        "type": "div",
        "props": {
          "id": "B2",
          "children": "B2"
        },
      }
    ]
  },
}