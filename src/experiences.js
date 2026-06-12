import { interpolate } from "./interpolate.util";

const exps = [
  {
    title: "Solution Architect",
    subtitle: "AVEM - Crédit Agricole",
    from: "07/2025",
    to: "auj",
    description: `
      Refonte de l'architecture d'entreprise pour soutenir les ambitions et objectifs de l'entreprise.<br/>
      Urbanisation du SI, mise en place d'une architecture agile et réactive.<br/>
      Participation à toutes les phases de RFI/RFP. Définition des composants, intégrations et interfaces.<br/>
      Définition des roadmaps de migration et de modernisation du SI.<br/>
      Participation aux activités du Groupe CA pour les sujets Innovation, IA et Data.
    `,
    tasks: `
      <li>Découpage en domaines et bounded-context du SI, alignement avec les objectifs métiers.</li>
      <li>Rédaction et alignement des capacités et fonctions portées par les différents domaines.</li>
      <li>Planification et priorisation des roadmap de migration.</li>
      <li>Mise en marche des brown migration.</li>
      <li>Expertise technique sur les sujets d'architecture.</li>
      <li>Soutiens aux équipes de développements.</li>
      <li>Business Owner pour la mise en plqce d'une nouvelle usine logicielle performante.</li>
    `,
    beforeClass: "",
  },
  {
    title: "Software Architect / Problem Solver",
    subtitle: "La Mobilière - assurance vie",
    from: "2019",
    to: "05/2025",
    description: `
      Conception d'architectures orientées microservices. Design API REST, messaging kafka.<br/>
      Définition des composants et intégrations dans une architecture d'entreprise.<br/>
      Migrations et rénovations techniques et fonctionnelles vers le cloud.<br/>
      Leadership dans un environnement agile SAFe/Scrum avec des feature teams, en fédérant les équipes autour d'objectifs communs.<br />
      Encadrement des développement.<br/>
      Developpement de projets d'innovations sur les technologies LLm, langchain4j, living-documentation, BDD, RDF.
    `,
    tasks: `
      <li>Conception pilotée par le domaine.</li>
      <li>Analyse des exigences et uses cases.</li>
      <li>Amélioration des processus / Prototypage / POC.</li>
      <li>Méthodes agiles / Planification SAFe / JIRA.</li>
      <li>Approche DDD pour l'architecture du domaine.</li>
      <li>PlantUML / Miro / Java / Kotlin / SQL / Typescript / Angular.</li>
      <li>Quarkus / Spring / Kafka / REST / Oracle / Sql Server.</li>
      <li>Cloud Azure / Kubernetes / Terraform / Gitlab / Bitbucket.</li>
    `,
    beforeClass: "",
  },
  {
    title: "Scrum Master",
    subtitle: "La Mobilière - assurance vie",
    from: "2017",
    to: "2019",
    description: `
      Résolution de problèmes, accompagnement aux changements agiles dans l'organisation, coacher les équipes scrum.
    `,
    tasks: `
    <li>Leadership. Problem Solver. Amélioration continue. Management 3.0.</li>
    <li>Méthodes agiles / JIRA / Kanban / Scrum / Miro.</li>
    `,
    beforeClass: "",
  },
  {
    title: "Software Architect / Developper",
    subtitle: "La Mobilière - assurance vie",
    from: "2012",
    to: "2017",
    description: `
      Définition des composants et leurs intégrations, API REST.<br />
      Conseils, formations et développements.<br />
      Code review, leader technique.<br/>
    `,
    tasks: `
      <li>TDD / BDD / DDD.</li>
      <li>Java / Kotlin / SQL / HTML / CSS / Javascript / Typescript.</li>
      <li>JEE / Spring / Hibernate / JSF / Jboss / Oracle / SOAP / REST.</li>
    `,
    beforeClass: "",
    // beforeClass: "break-before-page print:pt-10",
  },
  {
    title: "Architect IT / Developper",
    subtitle: "Groupe Mutuel - assurance santé",
    from: "2010",
    to: "2012",
    description: `
      Développement d'interfaces techniques et fonctionnelles.<br />
      Analyse des exigences et implémentation de nouvelles fonctionnalités.<br />
    `,
    tasks: `
      <li>Java / Spring / EJB / Hibernate / SOAP / Oracle / WebSphere.</li>
    `,
    beforeClass: "",
  },
  {
    title: "Architect IT / Developper",
    subtitle: "Oevo - ESN",
    from: "2005",
    to: "2010",
    description: `
      Différents secteurs d'activités : banque, assurance, éditeur, industrie, pharmacie, ...<br />
      Force de proposition tant au niveau technique que fonctionnel.<br />
      Conception et implémentation de solutions informatiques.<br />
      Dans différentes phase du cycle de vie d'un projet : étude, spécification, architecture, développement, recette, maintenance, évolution.<br />
    `,
    tasks: `
      <li>TDD / BDD / DDD.</li>
      <li>Java / Bash / SQL / HTML5 / Git / Maven / JIRA.</li>
      <li>JEE / Spring / EJB / Hibernate / REST / SOAP / Oracle.</li>
    `,
    beforeClass: "",
  },
];

export const experiences = () => {
  const item = document.querySelector("#experience-item");
  const sep = document.querySelector("#experience-item-sep");
  return `
      ${exps.map((exp) => interpolate(item.innerHTML, exp)).join(sep.innerHTML)}
    `;
};
