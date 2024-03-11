import vanillaSprinkled from "@src/assets/donuts/vanilla-sprinkled.svg?base64";
import doubleChocolate from "@src/assets/donuts/double-chocolate.svg?base64";
import strawberrySprinkled from "@src/assets/donuts/strawberry-sprinkled.svg?base64";
import blueberryRound from "@src/assets/donuts/blueberry-round.svg?base64";
import raspberryFilled from "@src/assets/donuts/raspberry-filled.svg?base64";
import caramelRound from "@src/assets/donuts/caramel-round.svg?base64";
import pistachiosRound from "@src/assets/donuts/pistachios-round.svg?base64";

function toSvgUri(base64: string) {
  return `data:image/svg+xml;base64,${base64}`;
}

export const DonutPool = [
  {
    icon: toSvgUri(vanillaSprinkled),
    title: "Vanilla Sprinkled Donut",
    description: "Vanilla cream, sprinkles",
  },
  {
    icon: toSvgUri(doubleChocolate),
    title: "Double Chocolate Donut",
    description: "Chocolate chips, melted chocolate",
  },
  {
    icon: toSvgUri(strawberrySprinkled),
    title: "Strawberry Sprinkled Donut",
    description: "Strawberry cream, sprinkles, strawberry puree",
  },
  {
    icon: toSvgUri(blueberryRound),
    title: "Blueberry Round Donut",
    description: "Blueberry cream",
  },
  {
    icon: toSvgUri(raspberryFilled),
    title: "Raspberry Filled Donut",
    description: "Raspberry cream, raspberry puree",
  },
  {
    icon: toSvgUri(caramelRound),
    title: "Caramel Round Donut",
    description: "Caramel cream, caramel sauce",
  },
  {
    icon: toSvgUri(pistachiosRound),
    title: "Pistachios Round Donut",
    description: "Pistachios cream, powdered pistachios",
  },
];
