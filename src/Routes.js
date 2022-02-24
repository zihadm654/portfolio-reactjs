import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Error from "./pages/Error";
import BlogDetails from "./components/BlogDetails";
import CaseDetails from "./components/CaseDetails";
const Projects = lazy(() => import("./pages/ProjectPage"));
const About = lazy(() => import("./pages/AboutPage"));
const Story = lazy(() => import("./pages/StoryPage"));
const Blog = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const pathes = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <Projects />
            </Suspense>
          }
        />
        <Route path="/projects/:slug" element={<CaseDetails />} />
        <Route
          path="/story"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <Story />
            </Suspense>
          }
        />
        <Route
          path="/blogs"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <Blog />
            </Suspense>
          }
        />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </section>
  );
};
export default pathes;
