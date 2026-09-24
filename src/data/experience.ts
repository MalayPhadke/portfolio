export type Experience = {
  institution: string;
  role: string;
  period: string;
  advisor?: string;
  advisorUrl?: string;
  summary: string;
  tags: string[];
};

export const researchExperience: Experience[] = [
  {
    institution: 'Indian Institute of Science (IISc)',
    role: 'Project Associate / Researcher',
    period: 'Aug 2025 — Present',
    advisor: 'Prof. Sriram Ganapathy',
    advisorUrl: 'https://eecs.iisc.ac.in/people/sriram-ganapathy/',
    summary:
      'Studying multimodal uncertainty, calibration and abstention, overconfident hallucinations, temporal reasoning in audio models, and mechanistic diagnosis of VideoLLM failures.',
    tags: ['reliability', 'multimodal', 'audio', 'interpretability']
  },
  {
    institution: 'Australian National University',
    role: 'Research Intern (Remote)',
    period: 'Apr 2025 — Aug 2025',
    advisor: 'Dr. Chirath Hettiarachchi',
    advisorUrl: 'https://comp.anu.edu.au/people/chirath-hettiarachchi/',
    summary:
      'Developed a post-hoc SHAP-based framework to extract clinically relevant explanations from reinforcement-learning policies for glucose monitoring.',
    tags: ['explainability', 'reinforcement learning', 'health']
  },
  {
    institution: 'University of Calgary / MITACS',
    role: 'Research Intern',
    period: 'Jun 2024 — Aug 2024',
    advisor: 'Dr. Mahdis Bisheban',
    advisorUrl: 'https://profiles.ucalgary.ca/mahdis-bisheban',
    summary:
      'Explored multi-agent reinforcement learning for cooperative UAV–UGV path planning using ROS, Gazebo, and AirSim.',
    tags: ['robotics', 'planning', 'simulation']
  },
  {
    institution: 'Indian Institute of Technology Bombay',
    role: 'Research Intern',
    period: 'Jan 2024 — May 2024',
    summary:
      'Built palmprint ROI extraction and deep Siamese matching pipelines using MediaPipe and Shearlet-based features.',
    tags: ['perception', 'biometrics', 'computer vision']
  }
];

export const industryExperience: Experience[] = [
  {
    institution: 'TANUH',
    role: 'Engineering Consultant',
    period: 'Jul 2026 — Present',
    summary: 'Working on AI models for oral-cancer screening.',
    tags: ['applied AI', 'health']
  },
  {
    institution: 'Vista IoT',
    role: 'Project Lead',
    period: 'Jan 2024 — May 2024',
    summary: 'Led development of an industrial IoT gateway supporting MODBUS, OPC-UA, and IEC protocols.',
    tags: ['embedded', 'IoT', 'systems']
  },
  {
    institution: 'Drona Aviation',
    role: 'Software Developer',
    period: 'Jun 2023 — Sep 2023',
    summary: 'Developed ROS/C++ drone-control, camera, tracking, and firmware systems.',
    tags: ['robotics', 'ROS', 'embedded']
  }
];

export const education = {
  institution: 'Sardar Patel Institute of Technology, Mumbai',
  degree: 'B.Tech in Electronics and Telecommunication Engineering',
  minor: 'Minor in Computer Engineering',
  period: '2021 — 2025',
  cgpa: '9.4/10',
  rank: '2/152'
};
