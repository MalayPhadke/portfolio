export const researchThemes = [
  {
    number: '01',
    title: 'Reliable Foundation Models',
    description:
      'Uncertainty estimation, calibration, hallucination detection, selective prediction, and confident model failures.',
    related: 'BiG-SURE · multimodal open-text uncertainty · low-entropy mispredictions'
  },
  {
    number: '02',
    title: 'Multimodal Reasoning',
    description:
      'How language models reason over vision, audio, and video—and how failures in multimodal evidence propagate to answers.',
    related: 'VideoLLM failure analysis · multimodal uncertainty · medical applications'
  },
  {
    number: '03',
    title: 'Audio & Temporal Intelligence',
    description:
      'Temporal reasoning, audio-language models, speech and audio understanding, and compact multimodal models.',
    related: 'temporal reasoning · audio-language model research'
  },
  {
    number: '04',
    title: 'Interpretable & Failure-Aware Learning',
    description:
      'Post-hoc explanation, internal representations, probe reliability, and mechanistic diagnosis.',
    related: 'SHAP explainability · correctness probes · confidence shortcuts'
  }
] as const;

export const news = [
  { date: 'Sep 2026', text: 'BiG-SURE accepted to EMNLP 2026 Main Conference.' },
  { date: 'Jul 2026', text: 'Started consulting on AI models for oral-cancer screening at TANUH.' },
  { date: 'Aug 2025', text: 'Joined IISc as a Project Associate with Prof. Sriram Ganapathy.' },
  { date: 'Aug 2025', text: 'Completed a research internship at the Australian National University.' },
  { date: 'Aug 2024', text: 'Completed a MITACS Globalink Research Internship at the University of Calgary.' }
] as const;

export const projects = [
  {
    title: 'CLARIS',
    subtitle: 'Cluster Access and Job Management Platform',
    category: 'Research infrastructure',
    stack: 'FastAPI · Next.js · Docker',
    description:
      'A unified interface for multiple GPU clusters with job submission, logs, file inspection, terminal access, isolated sessions, and an assistant for diagnosing workloads.',
    highlights: ['Unified multi-cluster access', 'Docker-backed user sessions', 'LLM-assisted log inspection']
  },
  {
    title: 'Drones for Smart Agriculture',
    subtitle: 'IEEE AESS Global sponsored project',
    category: 'Robotics / applied AI',
    stack: 'UAV–UGV · Computer vision · NVIDIA Jetson',
    description:
      'A crop-health monitoring pipeline combining UAV–UGV collaboration, classical image processing, and deep perception models deployed for real-time inference.',
    highlights: ['$25k DSTEI support', 'Model benchmarking', 'Jetson Orin Nano deployment']
  },
  {
    title: 'Nano-drone Systems',
    subtitle: 'Drona Aviation',
    category: 'Robotics / embedded',
    stack: 'Python · C++ · ROS / ROS2 · MultiWii',
    description:
      'Drone-control and camera-streaming packages, gesture and object tracking, ROS1-to-ROS2 migration, and flight-control firmware optimization.',
    highlights: ['Real hardware deployment', 'Remote drone operation', 'Latency and stability work']
  },
  {
    title: 'Industrial IoT Gateway',
    subtitle: 'Vista IoT',
    category: 'Embedded infrastructure',
    stack: 'MODBUS · OPC-UA · IEC protocols',
    description:
      'A consulting-led gateway for connecting industrial applications across multiple communications standards.',
    highlights: ['Project leadership', 'Protocol interoperability', 'Industrial deployment focus']
  }
] as const;

export const trajectory = [
  { stage: 'Embedded', label: 'Robotics', detail: 'Drona Aviation · UAV–UGV research · smart agriculture' },
  { stage: 'Signals', label: 'DSP / Audio', detail: 'signal-processing foundations · audio models · temporal signals' },
  { stage: 'Perception', label: 'CV / VLMs', detail: 'palmprint biometrics · medical screening · vision-language systems' },
  { stage: 'Reasoning', label: 'LLMs / LALMs', detail: 'multimodal models · audio temporal reasoning · language models' },
  { stage: 'Reliability', label: 'UQ / XAI', detail: 'BiG-SURE · uncertainty · interpretability · failure analysis' }
] as const;
