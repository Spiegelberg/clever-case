export interface Step {
  title: string; // The title/question of the step
  options: { value: string; label: string }[]; // The checkbox options
  image: string; // Path to the image
}

// Define the steps
export const steps: Step[] = [
  {
    title: 'Har du mulighed for at få en ladeboks derhjemme?',
    options: [
      { value: 'yes', label: 'Ja, det har jeg' },
      { value: 'no', label: 'Nej, det har jeg ikke' },
    ],
    image: '/images/product-selector-steps/step1-image.png',
  },
  {
    title: 'Hvor forventer du at lade mest?',
    options: [
      { value: 'home', label: 'Primært hjemme' },
      { value: 'travel', label: 'Mest på farten' },
      { value: 'both', label: 'Både ude og hjemme' },
    ],
    image: '/images/product-selector-steps/step2-image.png',
  },
  {
    title: 'Har du muligheden for at lade på dit arbejde?',
    options: [
      { value: 'yes', label: 'Ja' },
      { value: 'no', label: 'Nej' },
    ],
    image: '/images/product-selector-steps/step3-image.png',
  },
  {
    title: 'Hvordan ønsker du at betale?',
    options: [
      { value: 'fixed', label: 'Fast beløb' },
      { value: 'usage', label: 'Forbrugsafregnet' },
    ],
    image: '/images/product-selector-steps/step4-image.png',
  },
];
