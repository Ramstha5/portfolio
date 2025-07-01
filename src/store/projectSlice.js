import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_PRO = [
  {
    id: "1",
    year: "2025",
    project_image: "images/p1.png",
    title: "Build a Spotify Connected",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "abc.com",
  },
  {
    id: "2",
    year: "2020",
    project_image: "images/p1.png",
    title: "Build a Spotify Connected",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "example.com",
  },
  {
    id: "3",
    year: "2020",
    project_image: "images/p1.png",
    title: "Build a Spotify Connected",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "example.com",
  },
  {
    id: "4",
    year: "2020",
    project_image: "images/p1.png",
    title: "Build a Spotify Connected",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "example.com",
  },
  {
    id: "5",
    year: "2020",
    project_image: "images/p1.png",
    title: "Build a Spotify Connected",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "example.com",
  },
  {
    id: "6",
    year: "2020",
    project_image: "images/p1.png",
    title: "Build a Spotify Connected",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "python", "Bootstrap", "React", "JavaScript"],
    },
    link: "example.com",
  },
  {
    id: "7",
    year: "2020",
    project_image: "images/p1.png",
    title: "Build a Spotify Connected",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "JavaScript"],
    },
    link: "example.com",
  },
  {
    id: "8",
    year: "2020",
    project_image: "images/p1.png",
    title: "Build a Spotify Connected",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    made: "Upstatement",
    language: {
      language_name: ["HTML", "Bootstrap", "React", "React", "JavaScript"],
    },
    link: "example.com",
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
