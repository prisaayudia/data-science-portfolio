// Update the profile, project links, skills, and experience here.
export const profile = {
  name: "Prisa Ayudia Ningtiyas",
  initials: "PA",
  role: "Aspiring Data Scientist",
  location: "Indonesia",
  email: "prisaa.n22@gmail.com",
  github: "https://github.com/prisaayudia",
  linkedin: "https://www.linkedin.com/in/prisaayudianingtiyas/",
  cvPath: "/cv.pdf", // Put your CV at public/cv.pdf, or change this path.
  intro:
    "I am an Information Systems student interested in turning complex data into clear insights and practical, data-driven solutions.",
  about:
    "My interests span data science, machine learning, analytics, and information systems. I enjoy exploring datasets, finding meaningful patterns, and communicating results through visualizations and applications. I am continuously building my technical skills through coursework, projects, and hands-on experience."
};

export const skills = [
  { group: "Programming", items: ["Python", "SQL", "JavaScript"] },
  { group: "Data & Machine Learning", items: ["Data Cleaning", "EDA", "Machine Learning", "Model Evaluation"] },
  { group: "Analytics & BI", items: ["Power BI / Looker Studio", "Data Visualization", "Excel"] },
  { group: "Tools & Platforms", items: ["Git & GitHub", "Jupyter Notebook", "PostgreSQL", "React + Vite"] }
];

// Replace example repository/demo URLs with your own before publishing.
export const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING",
    title: "Machine Learning Project",
    description:
      "An academic project exploring a dataset, preparing features, training a model, and evaluating its performance to answer a defined analytical question.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    icon: "brain",
    accent: "blue",
    status: "Academic project",
    github: "https://github.com/prisaayudia/MachineLearningTask-Prisa"
  },
  {
    number: "02",
    category: "MACHINE LEARNING",
    title: "Machine Learning Project",
    description:
      "An academic project exploring a dataset, preparing features, training a model, and evaluating its performance to answer a defined analytical question.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    icon: "brain",
    accent: "blue",
    status: "Staff EDM Project",
    github: "https://github.com/prisaayudia/FinalProjectUpskillingEDM/blob/main/FinalUpskillingEDM_Prisa.ipynb"
  },

  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "Machine Learning Project",
    description:
      "An academic project exploring a dataset, preparing features, training a model, and evaluating its performance to answer a defined analytical question.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    icon: "brain",
    accent: "blue",
    status: "CAAS Practikum Data Mining",
    github: "https://github.com/prisaayudia/life-expectancy-data-mining",
    link: "https://life-expectancy-data-mining-lghv4xawfe88jagagbet3e.streamlit.app/"
  },

  {
    number: "04",
    category: "DATA ANALYTICS",
    title: "Superstore Dashboard",
    description:
      "An analytics project to explore sales or review data, identify patterns, and present findings through charts and a dashboard for decision support.",
    tags: ["SQL", "Data Visualization", "Dashboard"],
    icon: "chart",
    accent: "green",
    status: "Academic project",
    github: "https://datastudio.google.com/u/0/reporting/e7bd2b8e-1a19-4586-9bea-04b0b85b5da2/page/fqH8F"
  },
  {
    number: "05",
    category: "DATA ENGINEERING · BI",
    title: "Superstore Data Warehouse",
    description:
      "A data warehouse exercise covering dimensional modeling, a star schema, ETL preparation, and analytical reporting for business intelligence.",
    tags: ["ETL", "Star Schema", "Pentaho", "SQL"],
    icon: "database",
    accent: "orange",
    status: "Asistant Practicum Project",
    github: "https://github.com/prisaayudia/superstore-etl/tree/main/DWBI_Prisa"
  }
];

export const experience = [
  {
    period: "Internship",
    title: "IT Development Intern",
    organization: "PT Pindad",
    description:
      "Contributed to the development of an existing Doorprize application for a company anniversary event, including requirements documentation, React + Vite frontend work, PostgreSQL/Prisma data handling, and functional testing."
  },
  {
    period: "Academic",
    title: "Information Systems Student",
    organization: "Undergraduate Study",
    description:
      "Building foundations in data analytics, databases, business intelligence, and software development while exploring a career path in data science and machine learning."
  }
];