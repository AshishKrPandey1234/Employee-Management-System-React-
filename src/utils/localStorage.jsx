const employees = [
  {
    id: 1,
    firstName: "Ashish",
    email: "ashish@company.com",
    password: "139",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build dashboard UI",
        taskDescription: "Create responsive dashboard layout",
        taskDate: "2024-10-15",
        category: "Frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix login bug",
        taskDescription: "Resolve authentication issue",
        taskDate: "2024-10-14",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup project",
        taskDescription: "Initialize React project",
        taskDate: "2024-10-10",
        category: "Setup",
      },
    ],
  },

  {
    id: 2,
    firstName: "Sneha",
    email: "sneha@company.com",
    password: "213",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design landing page",
        taskDescription: "Create Figma design",
        taskDate: "2024-10-13",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update UI",
        taskDescription: "Improve button styles",
        taskDate: "2024-10-11",
        category: "UI",
      },
    ],
  },

  {
    id: 3,
    firstName: "Ravi",
    email: "ravi@company.com",
    password: "302",
    taskCounts: { active: 2, newTask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API integration",
        taskDescription: "Connect frontend with backend",
        taskDate: "2024-10-14",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review teammate PRs",
        taskDate: "2024-10-13",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Unit testing",
        taskDescription: "Write test cases",
        taskDate: "2024-10-10",
        category: "Testing",
      },
    ],
  },

  {
    id: 4,
    firstName: "Priya",
    email: "priya@company.com",
    password: "402",
    taskCounts: { active: 1, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Update project docs",
        taskDate: "2024-10-15",
        category: "Docs",
      },
    ],
  },

  {
    id: 5,
    firstName: "Karan",
    email: "karan@company.com",
    password: "501",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI redesign",
        taskDescription: "Improve UX",
        taskDate: "2024-10-14",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy app",
        taskDescription: "Push to production",
        taskDate: "2024-10-10",
        category: "DevOps",
      },
    ],
  },

  {
    id: 6,
    firstName: "John",
    email: "john@company.com",
    password: "113",
    taskCounts: { active: 1, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Security audit",
        taskDescription: "Check vulnerabilities",
        taskDate: "2024-10-15",
        category: "Security",
      },
    ],
  },

  {
    id: 7,
    firstName: "Emily",
    email: "emily@company.com",
    password: "210",
    taskCounts: { active: 1, newTask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client report",
        taskDescription: "Prepare weekly report",
        taskDate: "2024-10-12",
        category: "Report",
      },
    ],
  },

  {
    id: 8,
    firstName: "Aman",
    email: "aman@company.com",
    password: "382",
    taskCounts: { active: 2, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize performance",
        taskDescription: "Improve app speed",
        taskDate: "2024-10-15",
        category: "Optimization",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};