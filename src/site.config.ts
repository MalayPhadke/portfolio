export const site = {
  name: 'Malay Phadke',
  shortTitle: 'Malay Phadke',
  title: 'Researcher in Reliable Multimodal AI',
  institution: 'Indian Institute of Science',
  location: 'Bengaluru, India',
  tagline: 'I like intelligent systems. I especially like figuring out how they fail.',
  description:
    'Malay Phadke is a researcher at the Indian Institute of Science working on uncertainty, multimodal reasoning, interpretability, and failure modes of foundation models.',
  currently: 'research @ IISc · EMNLP 2026 · trustworthy multimodal models',
  conferenceStatus: "in Budapest for EMNLP ’26 · happy to chat about uncertainty & multimodal reliability",
  conferenceMode: false,
  lastVerified: 'Sep 2026',
  email: 'malayp003@gmail.com',
  links: {
    scholar: '',
    github: '',
    linkedin: 'https://linkedin.com/in/malay-phadke',
    cv: 'cv/Malay_Phadke_CV.pdf'
  },
  profileImage: 'images/profile.png',
  interests: [
    'Reliable foundation models',
    'Multimodal reasoning',
    'Uncertainty estimation',
    'Interpretability & failure modes'
  ]
} as const;

export const withBase = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return cleanPath ? `${base}/${cleanPath}` : `${base}/`;
};
