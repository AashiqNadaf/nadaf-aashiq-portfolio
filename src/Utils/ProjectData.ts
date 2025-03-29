export interface ProjectDataType {
  title?: string;
  technology?: string[];
  description?: string[];
  role?: string[];
  org?: string;
  start?: string;
  end?: string;
  imageValue: string;
}

export const projectData: ProjectDataType[] = [
  {
    title: 'Pan learn',
    technology: ['Next JS', 'JavaScript', 'HTML', 'CSS', 'Strapi'],
    description: [
      'Pan Learn is a dynamic e-learning platform designed to help users enhance their skills by purchasing domain-specific courses. The platform offers a seamless learning experience, allowing users to watch tutorials, take assessments, and track their progress through test scores. With an intuitive interface, learners can easily navigate through course materials and improve their expertise at their own pace.',
      "Mentors play a crucial role in guiding students by monitoring their performance and providing valuable insights. They can track learners' progress, analyze test scores, and offer personalized feedback to ensure better learning outcomes. Whether you're a student looking to upskill or a mentor aiming to support learners, Pan Learn provides an interactive and efficient educational environment.",
    ],
    role: [
      'Developed Pan Learn, an e-learning platform from scratch using Next.js, integrating Strapi for content management and API implementation to ensure a seamless learning experience.',
      'Designed a responsive and intuitive user interface, enhancing user engagement and accessibility across devices.',
    ],
    org: 'MSys Techologies PVT LTD',
    start: 'Dec 2021',
    end: 'Apr 2022',
    imageValue: 'https://res.cloudinary.com/dfau0jssn/image/upload/w_284,h_252,q_50/panLearn_dkliqk.jpg',
  },
  {
    title: 'Code ledger',
    technology: [
      'React JS',
      'Redux',
      'JavaScript',
      'HTML',
      'SASS',
      'Recharts',
      'Tailwind CSS',
      'Ant Design',
      'Material UI',
    ],
    description: [
      'Code Ledger is a developer tracking application that helps teams monitor contributions, track sprint progress, and identify risks using GitHub and Jira.',
      'It tracks GitHub activities like commits, pushes, pull requests, and merges while integrating with Jira to monitor assigned tickets, ensuring developers stay within estimated story points and highlighting overdue or risky tasks.',
      'The platform provides bar, line, and pie charts to visualize sprint movement, detect bottlenecks, and optimize workflows for better project efficiency.',
    ],
    role: [
      'Designed Code Ledger, a tracking system for GitHub repositories and Jira issues, providing insights into development progress and key project metrics.',
      'Developed the UI based on Figma designs, ensuring a seamless transition from design to development while maintaining consistency across the platform.',
      'Integrated Redux for state management, specifically used to store user details and utilize them throughout the app, along with Tailwind CSS, Ant Design, and Recharts for data visualization and interactive charts.',
      'Focused on performance optimization, improving load times and efficiency, while also writing unit test cases using Jest to ensure code reliability and stability.',
    ],
    org: 'MSys Techologies PVT LTD',
    start: 'May 2022',
    end: 'Feb 2023',
    imageValue: 'https://res.cloudinary.com/dfau0jssn/image/upload/w_284,h_252,q_50/code-ledger_ncizua.jpg',
  },
  {
    title: 'Digital wallet',
    technology: [
      'React JS',
      'JavaScript',
      'HTML',
      'CSS',
      'Recharts',
      'Ant Design',
    ],
    description: [
      'Digital Wallet is a secure and efficient payment solution designed for organizations to facilitate seamless financial transactions. It enables users to perform peer-to-peer wallet transfers, making money exchanges within the organization quick and hassle-free.',
      'The wallet also supports recharging funds using bank cards, ensuring users can top up their balances effortlessly. With a user-friendly interface and secure transaction processing, the Digital Wallet enhances convenience while maintaining financial transparency within the organization.',
    ],
    role: [
      'Designed and implemented a secure digital wallet application using React JS, offering features like user account creation, bank account linking, and money transfers.',
      'Integrated Plaid for backend transactions and implemented real-time balance tracking to enhance functionality and security.',
      'Developed a dynamic and user-friendly UI using Ant Design and Recharts, improving the overall user experience and providing interactive data visualizations.',
    ],
    org: 'MSys Techologies PVT LTD',
    start: 'Mar 2023',
    end: 'Oct 2023',
    imageValue: 'https://res.cloudinary.com/dfau0jssn/image/upload/w_284,h_252,q_50/digitalWallet_hawuid.jpg',
  },
  {
    title: 'Makro Horeca Academy',
    technology: [
      'React JS',
      'JavaScript',
      'JAVA spring boot',
      'PUG',
      'Tailwind CSS',
    ],
    description: [
      'MHA is a unique e-commerce and e-learning platform designed for cooking enthusiasts. Users can register to explore a variety of cooking recipes, access detailed instructions, and enhance their culinary skills. The platform also features interactive quizzes where users can earn points based on their performance, making the learning process engaging and rewarding.',
      'In addition to learning, MHA offers a seamless online grocery shopping experience. Users can browse and purchase essential ingredients needed for their favorite recipes. The platform provides a comprehensive list of items required for each dish, ensuring a hassle-free shopping experience.',
      'One of MHA’s standout features is its smart cart functionality, allowing users to automatically add all the necessary ingredients for a selected recipe to their cart with a single click. This integration streamlines the cooking process, making it easier to learn, shop, and cook all in one place.',
    ],
    role: [
      'Developed a E-commerce platform using React, Java, and Pug templating, offering a comprehensive solution for purchasing cooking supplies, accessing courses, recipe videos, and magazines.',
      'Implemented Single Sign-On (SSO) functionality with Java, ensuring secure and seamless user authentication across the platform.',
      'Enhanced the user interface using Tailwind CSS, focusing on improving navigation, accessibility, and overall user experience to meet evolving design requirements.',
    ],
    org: 'MSys Techologies PVT LTD',
    start: 'Nov 2023',
    end: 'May 2024',
    imageValue: 'https://res.cloudinary.com/dfau0jssn/image/upload/w_284,h_252,q_50/makro_l5tnye.jpg',
  },
  {
    title: 'FRM',
    technology: [
      'React JS',
      'TypeScript',
      'Zustand',
      'HTML',
      'Styled components',
      'Blade',
      'React-query',
      'CI/CD (Github actions)',
      'Docker',
      'Spinnaker',
    ],
    description: [
      'FRM is a powerful application designed to detect and manage fraudulent transactions. It applies a predefined set of rules to every transaction, and if any rule or multiple rule thresholds are breached, a case is automatically created. Bank agents can access detailed case information, including IP addresses, device details, transaction history, and patterns of repeated usage across the same device, card, or IP.',
      'Agents have the ability to classify transactions based on their legitimacy. They can mark a transaction as fraud or genuine, and accordingly, categorize cases as Fraud Confirmed, Suspected Fraud, Genuine Confirmed, or Appears Genuine. This helps in systematically managing fraudulent activities and reducing false positives in transaction monitoring.',
      'The application also allows agents to manage device, card, and IP listings. Suspicious entities can be blacklisted to prevent future fraudulent activities, while trusted entities can be whitelisted to avoid unnecessary transaction blocks. This ensures a more efficient and adaptive fraud detection system.',
      'Additionally, FRM provides visibility into all the fraud detection rules applied to transactions. It maintains a comprehensive list of blacklisted and whitelisted devices, cards, and IPs, offering a transparent and structured approach to fraud prevention and risk management.',
    ],
    role: [
      'Developed the FRM dashboard from scratch, setting up the entire project structure and implementing CI/CD pipelines, deploying via Spinnaker for seamless releases.',
      'Built an intuitive and efficient UI using the Blade library for components and Styled Components for styling, ensuring a modern and consistent user experience.',
      'Optimized API interactions with React Query, enhancing data fetching and state management while integrating robust fraud detection and reporting features.',
    ],
    org: 'Razorpay',
    start: 'Jun 2024',
    end: 'Current',
    imageValue: 'https://res.cloudinary.com/dfau0jssn/image/upload/w_284,h_252,q_50/frm_a78xwz.jpg',
  },
];
