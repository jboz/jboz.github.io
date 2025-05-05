import { Observer } from "tailwindcss-intersect";
import { contacts, sites } from "./contact";
import { experiences } from "./experiences";
import "./style.css";

Observer.start();
document.querySelector("#contacts").innerHTML += contacts();
document.querySelector("#networks").innerHTML += sites();
document.querySelector("#experiences").innerHTML += experiences();
