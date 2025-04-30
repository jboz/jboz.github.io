import { interpolate } from "./interpolate.util";

const exps = [
  {
    title: "Software Architect / Developper / Problem Solver",
    subtitle: "La Mobilière - assurance vie",
    from: "2019",
    to: "auj.",
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
      <li>TDD / BDD / DDD.</li>
      <li>PlantUML / Miro / Java / SQL / Typescript / Angular.</li>
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
      Sensibilté aux pratiques du management 3.0.
    `,
    tasks: `
      <li>Leadership.</li>
      <li>Méthodes agiles / JIRA / Kanban / Scrum / Miro.</li>
      <li>Problem Solver.</li>
      <li>Amélioration continue.</li>
    `,
    beforeClass: "",
  },
  {
    title: "Software Architect / Developper",
    subtitle: "La Mobilière - assurance vie",
    from: "2012",
    to: "2017",
    description: `
      Définition des composants et leurs intégrations, API REST.
      Conseils, formations et développements.<br />
      Code review, leader technique.<br/>
    `,
    tasks: `
      <li>TDD / BDD / DDD.</li>
      <li>Java / SQL / HTMl / CSS / Javascript.</li>
      <li>JEE / Spring / Hibernate / JSF / Jboss / Oracle / SOAP / REST.</li>
    `,
    beforeClass: "break-before-page print:pt-10",
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
