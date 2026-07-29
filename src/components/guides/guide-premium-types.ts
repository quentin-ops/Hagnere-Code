export interface GuidePremiumFaqItem {
  question: string;
  answer: string;
}

export interface GuidePremiumFaqCategory {
  key: string;
  num: string;
  label: string;
  items: GuidePremiumFaqItem[];
}
