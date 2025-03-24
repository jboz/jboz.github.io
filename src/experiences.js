import { interpolate } from "./interpolate.util";

const exps = [
  {
    title: "Architect",
    subtitle: "La Mobilière - assurance vie",
    from: "2019",
    to: "auj.",
    description: `
      Conception d'architectures orientées microservices.<br/>
      Définition de composants et intégration dans une architecture d'entreprise.<br/>
      Migrations et rénovations techniques et fonctionnelles.<br/>
      Leadership dans un environnement agile SAFe/Scrum avec des feature teams, en fédérant les équipes autour d'objectifs communs.
    `,
    tasks: `
      <li>Conception pilotée par le domaine.</li>
      <li>Méthodes agiles.</li>
      <li>Analyse des exigences et uses cases.</li>
      <li>Planification.</li>
      <li>Amélioration des processus.</li>
      <li>TDD / BDD / DDD.</li>
      <li>Java / SQL / Web / Angular.</li>
      <li>Quarkus / Spring / Kafka / REST / Oracle / Sql Server.</li>
    `,
  },
  {
    title: "Scrum Master",
    subtitle: "La Mobilière - assurance vie",
    from: "2017",
    to: "2019",
    description: `
      Trouver des solutions, accompagner le changement agile dans l'organisation, coacher les équipes scrum.
      Sensible aux pratiques du management 3.0.
    `,
    tasks: `
      <li>Leadership.</li>
      <li>Méthodes agiles.</li>
      <li>problem Solver.</li>
      <li>Amélioration continue.</li>
    `,
  },
  {
    title: "Architect / Developper",
    subtitle: "La Mobilière - assurance vie",
    from: "2012",
    to: "2017",
    description: `
      Développement logicielle de vente.<br />
      Conseils, formations et développements.<br />
      Code review, leader technique.<br/>
    `,
    tasks: `
      <li>TDD / BDD / DDD.</li>
      <li>Java / SQL / HTMl / CSS / Javascript.</li>
      <li>JEE / Spring / Hibernate / JSF / Jboss / Oracle / SOAP / REST.</li>
    `,
  },
  {
    title: "Architect IT / Developper",
    subtitle: "Groupe Mutuel - assurance santé",
    from: "2010",
    to: "2012",
    description: `
      Développement, qualité, analyse et architecture dans les différents projets du service IT.<br/>
    `,
    tasks: `
      <li>TDD / BDD / DDD.</li>
      <li>Java / SQL.</li>
      <li>Spring / EJB / Hibernate / SOAP / Oracle / AS400 / WebSphere / SOA.</li>
    `,
  },
  {
    title: "Architect IT / Developper",
    subtitle: "Oevo - ESN",
    from: "2005",
    to: "2010",
    description: `
      Travaillé dans différents secteurs d'activités : banque, assurance, éditeur, industrie, pharmacie, ...<br />
      Toujours force de proposition tant au niveau technique que fonctionnel.<br />
      Dans mes différentes missions, j'ai participé à la conception et à l'implémentation de solutions informatiques.<br />
      Dans différentes phase du cycle de vie d'un projet : étude, spécification, architecture, développement, recette, maintenance, évolution.<br />
      Sur des projets de petites et moyennes tailles, au sein d'équipes allant jusqu'a 20 personnes.
    `,
    tasks: `
      <li>TDD / BDD / DDD.</li>
      <li>Spring / EJB / Hibernate / SOAP / Oracle / AS400 / WebSphere / SOA.</li>
    `,
  },
];

export const experiences = () => {
  const item = document.querySelector("#experience-item");
  const sep = document.querySelector("#experience-item-sep");
  return `
      ${exps.map((exp) => interpolate(item.innerHTML, exp)).join(sep.innerHTML)}
    `;
};
