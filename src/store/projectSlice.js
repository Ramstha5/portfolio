import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_PRO = [
  {
    id: "1",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
      "Developed a full-stack Online Food Ordering System using React and Django. Implemented features like user authentication, dynamic menus, and cart management. Focused on building a responsive, accessible, and user-friendly interface.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "abc.com",
  },
  {
    id: "2",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
      "Developed a full-stack Online Food Ordering System using React and Django. Implemented features like user authentication, dynamic menus, and cart management. Focused on building a responsive, accessible, and user-friendly interface.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "abc.com",
  },
  {
    id: "3",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
      "Developed a full-stack Online Food Ordering System using React and Django. Implemented features like user authentication, dynamic menus, and cart management. Focused on building a responsive, accessible, and user-friendly interface.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "abc.com",
  },
  {
    id: "4",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
      "Developed a full-stack Online Food Ordering System using React and Django. Implemented features like user authentication, dynamic menus, and cart management. Focused on building a responsive, accessible, and user-friendly interface.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "abc.com",
  },
  {
    id: "5",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
      "Developed a full-stack Online Food Ordering System using React and Django. Implemented features like user authentication, dynamic menus, and cart management. Focused on building a responsive, accessible, and user-friendly interface.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "abc.com",
  },
  {
    id: "6",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
      "Developed a full-stack Online Food Ordering System using React and Django. Implemented features like user authentication, dynamic menus, and cart management. Focused on building a responsive, accessible, and user-friendly interface.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "abc.com",
  },
  {
    id: "7",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
      "Developed a full-stack Online Food Ordering System using React and Django. Implemented features like user authentication, dynamic menus, and cart management. Focused on building a responsive, accessible, and user-friendly interface.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "abc.com",
  },
  {
    id: "8",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
      "Developed a full-stack Online Food Ordering System using React and Django. Implemented features like user authentication, dynamic menus, and cart management. Focused on building a responsive, accessible, and user-friendly interface.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "abc.com",
  },
  
];

const projectSlice = createSlice({
  name: "project",
  initialState: DEFAULT_PRO,
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});
export const projectAction = projectSlice.actions;
export default projectSlice;
