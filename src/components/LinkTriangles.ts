import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
    name: "Link Triangles",
    particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 125,
          enable: true,
          opacity: 0.3,
          width: 3
        },
        move: {
          bounce: true,
          direction: "none",
          enable: true,
          out_mode: "out",
          random: false,
          speed: 1.25,
          straight: false
        },
        number: { density: { enable: true, area: 800 }, value: 75 },
        opacity: {
          value: 0.5
        },
        shape: {
          character: [
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Ala",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Arg",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Asn",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Asp",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Cys",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Gln",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Glu",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Gly",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "His",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Ile",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Leu",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Lys",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Met",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Phe",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Pro",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Ser",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Thr",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Trp",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Tyr",
                weight: "1"
            },
            {
                fill: true,
                font: "Courier New",
                style: "",
                value: "Val",
                weight: "1"
            },
          ],
          stroke: { color: "random", width: 1 },
          type: "char"
        },
        size: {
          value: 8
        }
      },
};

export default options;