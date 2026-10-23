// Chanak Teens 9-12: additive curriculum, isolated from Juniors and Chanak Flex.
export const TEENS_INTEGRATION_VERSION = '2026-10-23';
export const TEENS_LEVELS = Object.freeze(['seedling','explorer','builder','launch']);
const bilingual=(es,en)=>({es,en});
const units=[
['ai-stewardship','IA ética y mayordomía','Ethical AI & Stewardship','Investigar con fuentes verificadas; registrar prompts y declarar asistencia de IA.','Verify sources, document prompts and disclose AI assistance.','Registro de prompts + investigación contrastada'],
['career-portfolio','Vocación, CV y portafolio','Vocation, CV & Portfolio','Crear un CV apropiado a su edad, con privacidad, talentos y proyectos reales.','Create an age-appropriate CV reflecting authentic talents and work.','CV + portafolio con evidencias'],
['community-venture','Emprendimiento con impacto','Community Impact Venture','Detectar necesidad, presupuestar, planificar éticamente y defender un pitch grupal.','Identify a need, assess costs, plan ethically and deliver a team pitch.','Proyecto grupal + contribución individual']
];
export const TEENS_UNITS = Object.freeze(TEENS_LEVELS.flatMap((level,gradeIndex)=>units.map(([slug,es,en,descriptionEs,descriptionEn,evidence])=>({
 id:`teens-${level}-${slug}`, level, grade:gradeIndex+9,
 title:bilingual(es,en),description:bilingual(descriptionEs,descriptionEn),
 evidence_label:evidence, credit_status:'requires_academic_validation',
 stages:slug==='community-venture'?['local_need','feasibility','ethical_plan','team_pitch']:undefined
}))));
export function isDualDiplomaTeen(level,grade){
 return TEENS_LEVELS.includes(level)&&Number(grade)>=9&&Number(grade)<=12;
}
// Deliberately never import JUNIORS_RETOS or modify data.js.
