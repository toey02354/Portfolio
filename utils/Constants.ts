export enum themeConstants {
  LOCAL_STORAGE_KEY = 'toey-portfolio-theme',
  LIGHT = "light",
  DARK = "dark",
}

export const names = {
  firstName: "Natthaphol",
  lastName: "Uthumphirat",
  fullName: `Natthaphol Uthumphirat`,
  nickName: "Toey",
  jobTitle: "A fullstack developer",
  portfolio: "Portfolio"
};

export const pages = {
  home: `${names.nickName} ${names.portfolio}`,
  contact: `Contact ${names.nickName}`,
  experience: `Experiences`,
  experiment: `Experiment`,
  thanks: `Thank You!`
}
