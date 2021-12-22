import Log from "./log";
import Calc from "./calc";
import img from "./world-flag.png";

const log = new Log();
const calc = new Calc();

log.log(calc.add(2, 3, 5));

const el = document.createElement("img");
el.src = img;
document.body.appendChild(el);
