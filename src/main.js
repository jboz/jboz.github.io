import { Observer } from "tailwindcss-intersect";
import { contacts } from "./contact";
import { experiences } from "./experiences";
import "./style.css";

Observer.start();
document.querySelector("#contacts").innerHTML += contacts();
document.querySelector("#experiences").innerHTML += experiences();
