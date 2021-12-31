import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import Error from './pages/Error';
import BlogDetails from './components/BlogDetails';
const Projects = lazy(() => import('./pages/ProjectPage'));
const About = lazy(() => import('./pages/AboutPage'));
const Story = lazy(() => import('./pages/StoryPage'));
const Blog = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
// const BlogDetails = lazy(() => import('./layouts/BlogDetails'));
const CaseDetails = lazy(() => import('./components/CaseDetails'));

const Routes = () => {
  return (
    <section>
      <Suspense fallback={<p>loading</p>}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/projects/:slug">
            <CaseDetails />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/blogs" exact>
            <Blog />
          </Route>
          <Route path="/blogs/:slug">
            <BlogDetails />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Suspense>
    </section>
  );
};
export default Routes;
