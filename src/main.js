import { contacts } from "./contact";
import { experiences } from "./experiences";
import "./style.css";

document.querySelector("#contacts").innerHTML += contacts();
document.querySelector("#experiences").innerHTML += experiences();
