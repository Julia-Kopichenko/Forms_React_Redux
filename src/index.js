import Log from "./log";
import Calc from "./calc";

const log = new Log();
const calc = new Calc();

log.log(calc.add(2, 3, 5));
