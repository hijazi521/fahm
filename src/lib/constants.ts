export interface Article {
  id: string;
  title: string;
  authors: string[];
  publicationDate: string;
  abstract: string;
  content: string;
  imageUrl: string;
  imageHint: string;
  category?: string;
}

export interface TeamMember {
  id:string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  imageHint: string;
}

export const DUMMY_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Future of Quantum Computing and Its Impact on Cryptography',
    authors: ['Dr. Alice Quantum', 'Dr. Bob Entangle'],
    publicationDate: '2024-03-15',
    abstract: 'Exploring the advancements in quantum computing and the potential vulnerabilities it introduces to current cryptographic standards.',
    content: 'Quantum computing represents a paradigm shift from classical computing. Unlike classical bits, which can be either 0 or 1, qubits can exist in a superposition of both states simultaneously. This property, along with entanglement, allows quantum computers to perform certain calculations exponentially faster than classical computers. One of the most significant implications of this power is its potential to break widely used cryptographic algorithms, such as RSA and ECC, which underpin much of modern digital security. This paper delves into the principles of quantum computing, discusses the leading quantum algorithms like Shor\'s algorithm (for factoring) and Grover\'s algorithm (for searching), and analyzes their impact on existing cryptographic systems. We also explore the development of quantum-resistant cryptography (QRC), also known as post-quantum cryptography (PQC), which aims to create new cryptographic methods secure against both quantum and classical computers. The transition to QRC is a major challenge, requiring standardization, infrastructure updates, and careful migration strategies. This research highlights the urgency and complexity of preparing for the quantum era to maintain information security.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'quantum computer',
    category: 'Technology',
  },
  {
    id: '2',
    title: 'Advancements in Renewable Energy Storage Solutions',
    authors: ['Dr. Eva Solar', 'Dr. Marcus Wind'],
    publicationDate: '2024-04-22',
    abstract: 'A comprehensive review of the latest breakthroughs in battery technology, hydrogen fuel cells, and other methods for storing renewable energy.',
    content: 'The intermittent nature of renewable energy sources like solar and wind necessitates efficient and scalable energy storage solutions. This paper reviews recent advancements across various storage technologies. Lithium-ion batteries continue to dominate due to their high energy density and decreasing costs, with ongoing research focusing on new chemistries (e.g., solid-state batteries) to improve safety, lifespan, and performance. Hydrogen fuel cells are emerging as a promising alternative for long-duration storage and heavy-duty transport, with innovations in electrolyzer efficiency and hydrogen storage materials. Pumped hydro storage remains a mature and cost-effective solution for large-scale applications, while other technologies like compressed air energy storage (CAES), flow batteries, and supercapacitors are finding niche applications. We analyze the technical specifications, economic viability, environmental impact, and scalability of these solutions. Furthermore, the integration of these storage systems with smart grid technologies and artificial intelligence for optimized energy management is discussed. The paper concludes that a diversified portfolio of storage technologies will be crucial for achieving a fully decarbonized energy sector.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'renewable energy',
    category: 'Energy',
  },
  {
    id: '3',
    title: 'Ethical Considerations in Artificial Intelligence Development',
    authors: ['Prof. Alan Ethicist', 'Dr. Iris Logic'],
    publicationDate: '2024-05-10',
    abstract: 'An in-depth analysis of the ethical challenges posed by AI, including bias, accountability, and the future of work.',
    content: 'Artificial intelligence (AI) is rapidly transforming various aspects of society, but its development and deployment raise significant ethical concerns. This paper examines key ethical challenges, including algorithmic bias, where AI systems perpetuate or amplify existing societal biases present in training data, leading to unfair or discriminatory outcomes. Accountability and transparency are also critical issues; determining responsibility when an AI system causes harm can be complex, and the "black box" nature of some AI models makes their decision-making processes opaque. The impact of AI on employment and the future of work is another major consideration, with potential for widespread job displacement alongside the creation of new roles. Privacy concerns arise from AI\'s ability to collect and analyze vast amounts of personal data. We discuss various frameworks and principles proposed for ethical AI development, such as fairness, accountability, transparency (FAT), and the importance of human oversight. The role of regulation, industry standards, and public discourse in shaping ethical AI is also explored. Ultimately, fostering responsible AI innovation requires a multi-stakeholder approach to ensure that AI technologies benefit humanity as a whole.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence ethics',
    category: 'Ethics & AI',
  },
];

export const DUMMY_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Dr. Aris Thorne',
    role: 'Lead Researcher & Founder',
    bio: 'Dr. Thorne is a visionary in AI-driven research dissemination, with over 15 years of experience in computational linguistics and information science. His work focuses on making complex knowledge accessible.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'scientist portrait',
  },
  {
    id: 'tm2',
    name: 'Samira Elara',
    role: 'Head of Engineering',
    bio: 'Elara leads the technological development of Fahm Insights. With a background in scalable systems and machine learning, she ensures our platform is robust and innovative.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'engineer woman',
  },
  {
    id: 'tm3',
    name: 'Kenji Tanaka',
    role: 'Chief Design Officer',
    bio: 'Kenji is the creative force behind Fahm Insights\' user experience. He believes in minimalist design that enhances understanding and engagement with research content.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'designer man',
  },
];
