"use strict";

import { timeline } from "https://cdn.skypack.dev/motion";

const sequence = [
    [".ball",
        { transform: "translateX(400px)" + "rotate(200deg)" }],
    [".ball",
    { transform: "translateX(400px)" + "scale(0.01)" + "rotate(200deg)", transformOrigin: "bottom", at: "+2" }]
];

timeline(sequence, {duration: 2})