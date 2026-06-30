import type { Lang } from './types';

import profileData from './profile/profile.json';
import socialsData from './socials/socials.json';

import summaryId from './summary/summary.id.json';
import summaryEn from './summary/summary.en.json';
import experiencesId from './experiences/experiences.id.json';
import experiencesEn from './experiences/experiences.en.json';
import portfolioId from './portfolio/portfolio.id.json';
import portfolioEn from './portfolio/portfolio.en.json';
import skillsId from './skills/skills.id.json';
import skillsEn from './skills/skills.en.json';
import educationId from './education/education.id.json';
import educationEn from './education/education.en.json';
import i18nId from './i18n/i18n.id.json';
import i18nEn from './i18n/i18n.en.json';

const pick = <T>(id: T, en: T, lang: Lang): T => (lang === 'en' ? en : id);

export const loadProfile = () => profileData;
export const loadSocials = () => socialsData;
export const loadSummary = (lang: Lang) => pick(summaryId, summaryEn, lang);
export const loadExperiences = (lang: Lang) => pick(experiencesId, experiencesEn, lang);
export const loadPortfolio = (lang: Lang) => pick(portfolioId, portfolioEn, lang);
export const loadSkills = (lang: Lang) => pick(skillsId, skillsEn, lang);
export const loadEducation = (lang: Lang) => pick(educationId, educationEn, lang);
export const loadI18n = (lang: Lang) => pick(i18nId, i18nEn, lang);
