import React from 'react';
// import React, { PropTypes } from 'react';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';
import Arrow from '../Arrow';
import Section from '../Section';
import Projects from '../Projects';
import {
  PROP_TYPES as PROJECT_PROP_TYPES,
  DEFAULT_PROPS as PROJECT_DEFAULT_PROPS,
} from '../../state/project';
// import Skill from '../Skill';
// import Testimonial from '../Testimonial';

const displayName = 'Home';
const propTypes = {
  projects: PROJECT_PROP_TYPES.items,
};
const defaultProps = {
  projects: PROJECT_DEFAULT_PROPS.items,
};

const Home = ({
  projects,
}) => {
  const skills = false;
  // (
  //   <Section
  //     {...c(s.projects)}
  //     id="skills"
  //     title="Skills"
  //     description="These are the concepts, languages, tools I use most often."
  //   >
  //     {skills.map(skill => <Skill {...skill} key={skill.id} />)}
  //   </Section>
  // );

  const testimonials = false;
  // (
  //   <Section
  //     {...c(s.projects)}
  //     id="testimonials"
  //     title="Testimonials"
  //     description="Here’s what people are saying about working with me."
  //   >
  //     {testimonials.map(testimonial => <Testimonial {...testimonial} key={testimonial.id} />)}
  //   </Section>
  // );

  return (
    <article {...c(s.container)}>
      <header {...c(s.header)}>
        <h1 {...c(s.title)}>
          <span {...c(s.line)}>UX Engineer</span>
          <span {...c(s.line)}>San Francisco, California</span>
        </h1>
        <picture {...c(s.picture)}>
          <source
            srcSet="http://images.thejase.com/covers/sf-bridge-architecture-bw.jpg 5184w,http://images.thejase.com/covers/sf-bridge-architecture-bw@0.75x.jpg 3888w,http://images.thejase.com/covers/sf-bridge-architecture-bw@0.5x.jpg 2592w,http://images.thejase.com/covers/sf-bridge-architecture-bw@0.25x.jpg 1296w,http://images.thejase.com/covers/sf-bridge-architecture-bw@0.2x.jpg 1037w,http://images.thejase.com/covers/sf-bridge-architecture-bw@0.15x.jpg 778w,http://images.thejase.com/covers/sf-bridge-architecture-bw@0.1x.jpg 518w,http://images.thejase.com/covers/sf-bridge-architecture-bw@0.05x.jpg 259w"
            sizes="(max-aspect-ratio: 5184/3456) calc(100vh * 5184/3456), 100vw"
          />
          <img
            {...c(s.img)}
            src="http://images.thejase.com/covers/sf-bridge-architecture-bw.jpg"
            width="5184"
            height="3456"
            alt=""
          />
        </picture>
        <p {...c(s.next)}>
          <Arrow href="#projects" title="Read more" />
        </p>
      </header>

      {projects.length && (
        <Section
          {...c(s.projects)}
          id="projects"
          title="Project"
          description={`
            I’m fortunate to work with some of the best lifestyle, commerce, and B2B groups in the industry.


            *The following is a selection of my favorite contributions.*
          `}
        >
          <Projects items={projects} />
        </Section>
      )}

      {testimonials}
      {skills}
    </article>
  );
};

Home.displayName = displayName;
Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
