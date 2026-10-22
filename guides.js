// Guías PDF de Life Skills por grado (Drive). Viven aquí, en la app de Life Skills, y no en el perfil del estudiante del SIS.
const DRIVE_VIEW = (id) => `https://drive.google.com/file/d/${id}/view`;
const BY_LEVEL = {
  'junior-1': '18_JEjr1lTGGhFnpNfSrTVImkzYEtZ2Pn', 'junior-2': '1sN9UFFJMl4Kkn8ZReW2e_Sv-DBR8EOe-', 'junior-3': '1iPv7JP2kQn-SzqLiRzKrNwvAe79ORw_y',
  'seedling-14': '1tuB-OX7-mwLIpHNHXPS0lSKaSRponaAk', 'explorer-15': '1g3_IWY44R3ucEFRnm_Ob1PoRRflsFJk7', 'builder-16': '15XGYvk63YWyy167LCJgAbNs5dlOk452V', 'launch-17': '1Y9J_TtpWVbHrVnlkmbucKfjaFntWn3fA',
};
const LEVEL_OF_GRADE = { 1: 'junior-1', 2: 'junior-1', 3: 'junior-1', 4: 'junior-2', 5: 'junior-2', 6: 'junior-3', 7: 'junior-3', 8: 'seedling-14', 9: 'seedling-14', 10: 'explorer-15', 11: 'builder-16', 12: 'launch-17' };
export const lifeSkillsGuideUrl = (grade) => { const id = BY_LEVEL[LEVEL_OF_GRADE[grade]]; return id ? DRIVE_VIEW(id) : null; };
