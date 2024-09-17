const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    const { age } = plan;
    const { languages } = plan.skills;
    let str = `мне ${age} и я владею языками `;
    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });
    return str;
  },
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
  let newExp = {};
  newExp = plan.skills;
  return newExp.exp;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
  let str = "";
  let { programmingLangs } = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return str;
}
showProgrammingLangs(personalPlanPeter);

