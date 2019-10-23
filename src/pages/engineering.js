import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import styled from '@emotion/styled';
import TechnicalAuditsImage from '../components/img-components/technical-audits.img.js';
import ResourceEfficiencyImage from '../components/img-components/resource-efficiency.img';
import StaffAugmentationImage from '../components/img-components/staff-augmentation.img';
import JsFizzbuzzScreenshotImage from '../components/img-components/js-fizzbuzz.img';
import KeyPrinciplesHeader from './../components/generic-reusable-components/key-principle-header';
import KeyPrinciplesInfoBlock from './../components/generic-reusable-components/key-principles-info-block';
import ChangeGearsBlock from './../components/generic-reusable-components/change-gears-block';
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import ServicePageHero from './../components/generic-reusable-components/service-page-hero';
import StackableColumnsContainer from '../components/generic-reusable-components/stackable-columns-container';
import StackableColumn from '../components/generic-reusable-components/stackable-column';
import SecondServiceHero from '../components/generic-reusable-components/service-second-hero';
import ReadyToGetStartedSection from '../components/generic-reusable-components/ready-to-get-started-section';
import Global from "../components/Global"
import NodeJsFizzbuzzifiedStringImage from '../components/img-components/code-screenshots/node-js-fizzbuzzifies-strings-screenshot.img';

const EngineeringPageContainer = styled.div`
  font-family: 'e2-Raleway-Black';
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h1 {
    font-family: 'e2-Raleway-Black';
    font-size: 44px;
    max-width: 95vw;
    line-height: 140px;
    text-align: center;
    letter-spacing: 4px;
  }
  p {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 2px;
    font-family: 'e2-Raleway';
  }
`;

const SectionHero = styled.div`
  line-height: 85px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  @media only screen and (max-width: 10000px) {
    height: 800px;
    margin-top: 90px;
    min-height: 400px;
    }
  @media only screen and (max-width: 1800px) {
    height: 500px;
    min-height: 400px;
    }
  @media only screen and (max-width: 1300px) {
    height: 500px;
    min-height: 400px;
    }
  @media only screen and (max-width: 990px) {
    height: 500px;
    min-height: 400px;
    }
    @media only screen and (max-width: 660px) {
      height: 400px;
      min-height: 300px;
    }
    @media only screen and (max-width: 400px) {
      height: 300px;
      min-height: 200px;
    }


  h1 {
    max-width: 95vw;
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: center;
    
    margin-top: 100px;
    letter-spacing: 5px;
    line-height: 160px;
    font-size: 110px;
    
    @media only screen and (max-width: 10000px) {
      font-size: 160px;
      
    }
    @media only screen and (max-width: 1800px) {
      
      font-size: 140px;
    }
    @media only screen and (max-width: 1300px) {
      font-size: 110px;
      
    }
    @media only screen and (max-width: 990px) {
      font-size: 90px;
      
    }
    @media only screen and (max-width: 660px) {
      font-size: 50px;
      
    }
    @media only screen and (max-width: 400px) {
      font-size: 29px;
  
    }
    
  }
  
  p {
    opacity: 0.7;
    line-height: 40px;
    font-size: 36px;
    margin-top: 60px;
    
    @media only screen and (max-width: 10000px) {
      /* font-size: 160px; */
      
    }
    @media only screen and (max-width: 1800px) {
      
      /* font-size: 140px; */
    }
    @media only screen and (max-width: 1300px) {
      /* font-size: 110px; */
      
    }
    @media only screen and (max-width: 990px) {
      font-size: 36px;
      
    }
    @media only screen and (max-width: 660px) {
      font-size: 24px;
      
    }
    @media only screen and (max-width: 400px) {
      font-size: 15px;
  
    }
  }

`;

const WorkTogetherSection = styled.div`
  padding: 5px;
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  margin: 300px 100px;
  padding: 60px 20px;

  h1 {
    font-size: 90px;
    line-height: 115px;
    text-align: center;
    margin-bottom: 80px;
  }
  p {
    font-size: 30px;
    text-align: center;
    width: 100%;
    line-height: 60px;
    opacity: 0.7;
  }
`;

const LanguagesHeaderSection = styled.div`
  padding: 5px 20px;;
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 60px 40px;
  h1 {
    line-height: 55px;
    text-align: left;
    font-size: 80px;
    line-height: 168px;
  }
  p {
    text-align: left;
    width: 94%;
    font-size: 30px;
    line-height: 44px;
    letter-spacing: 2px;
    opacity: 0.8;
  }
`;

const LanguagePickerGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-auto-flow: column;
  width: 100%;
  @media only screen and (min-width: 660px) {
  }
  @media only screen and (min-width: 990px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-columns: 370px auto;
  }
`;

const LanguageOptionsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  padding-left: 20px;
  margin-left: 40px;
  @media only screen and (min-width: 990px) {
    /* grid-column-start: 1; */
    /* grid-column-end: 2; */
    height: 100%;
    grid-row: 1 / 4;
    /* grid-column: 1 / 2; */
  }
  ul {
    padding: 5px;
    text-align: left;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
  }
  li {
    font-size: 30px;
    padding: 10px;
    text-align: left;
    line-height: 58px;
    cursor: pointer;
    border-radius: 3rem;
    font-family: 'e2-Raleway-Bold';
    letter-spacing: 2px;
    @media only screen and (min-width: 660px) {
      /* font-size: 35px; */
      /* grid-column: 1 / 2; */
    }
    @media only screen and (min-width: 990px) {
      margin-top: 20px;
      margin-bottom: 20px;
      /* width: 370px; */
      /* flex: 1; */
      font-size: 35px;
      line-height: 56px;
      /* grid-column: 1 / 2; */
      /* grid-row: 1 / 1; */
    }
  }
  .li-selected {
    background-image: linear-gradient(
      90deg,
      rgba(27, 189, 189, 0),
      rgba(27, 189, 189, 0.08),
      rgba(27, 189, 189, 0.65)
    );
  }
`;

const LanguageInfoSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  grid-column: 1 / 1;
  grid-row: 2 / 2;
  h1 {
    font-size: 50px;
  }
  p {
    /* font-size:  */
    padding: 0 45px 40px;
    text-align: left;
    width: 94%;
    font-size: 20px;
    line-height: 37px;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    opacity: 0.8;
  }
  @media only screen and (min-width: 660px) {
  }
  @media only screen and (min-width: 990px) {
    grid-column: 2 / 2;
    grid-row: 1 / 2;
  }
`;

const LanguageIdeScreenshotContainer = styled.div`
  grid-row: 3 / 3;
  padding: 10px 60px;
  @media only screen and (min-width: 990px) {
    grid-column: 2 / 2;
    grid-row: 2 / 2;
  }
  img {
    text-align: center;
    height: 100%;
  }
`;

const BestStackForYouSection = styled.div`
  padding: 20px;
  h1 {
    margin: 50px 20px;
    line-height: 55px;
    text-align: left;
    font-size: 80px;
    line-height: 168px;
  }
  h2 {
    margin-top: 100px;
    padding-left: 20px;
    font-size: 44px;
  }
  p {
    margin: 30px 20px;
    text-align: left;
    font-size: 23px;
    line-height: 32px;
    letter-spacing: 2px;
    opacity: 0.8;
  }
`;

const StackBuilderResults = styled.div`
  h1 {
  }
`;

const BuildYourOwnStackSection = styled.div`
  /* justify-content: space-evenly; */
  /* padding: 5px; */
  /* background-color: #001a33; */
  /* color: white; */
  /* display: flex; */
  /* flex-direction: column; */
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  justify-content: center;
  min-height: 400px;
  padding: 25px 25px;
  @media only screen and (max-width: 990px) {
    align-items: center;
    flex-direction: column;
  }
  h2 {
    line-height: 55px;
    text-align: center;
    font-size: 60px;
    line-height: 168px;
    font-family: 'e2-Raleway-Bold';
  }
  h4 {
    font-size: 35px;
    margin-bottom: 40px;
    font-family: 'e2-Raleway-Black';
    text-align: left;
  }
  p {
    text-align: left;
    width: 100%;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 2px;
  }
  ul {
    padding: 5px;
    text-align: left;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    margin-right: -74px;
    /* width: 100%; */
  }
  li {
    font-size: 30px;
    padding: 10px;
    text-align: left;
    line-height: 58px;
    border-radius: 3rem;
    font-family: 'e2-Raleway-Semi-Bold';
    @media only screen and (min-width: 660px) {
      /* font-size: 35px; */
      /* grid-column: 1 / 2; */
    }
    @media only screen and (min-width: 990px) {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 27px;
      line-height: 38px;
    }
  }
  .li-hovered {
    background-image: linear-gradient(
      90deg,
      rgba(27, 189, 189, 0),
      rgba(27, 189, 189, 0.08),
      rgba(27, 189, 189, 0.65)
    );
  }
  .li-selected {
    background-image: linear-gradient(
      90deg,
      rgba(28, 220, 70, 0.3),
      rgba(28, 220, 70, 0.05),
      rgba(28, 220, 70, 0.65)
    );
  }

`;

const languageDescriptionsMap = {
  JavaScript:
    "JavaScript, though mercilessly mocked by programmers across the board for years, somehow rose above and evolve to become the king of the web. Though it's interpreted, dynamically-typed nature makes for very concise code, and it supports either a Class-based or a very functional style or writing. Today, some front-end JavaScript framework is an excellent choice for any website or web application, and there are probably more servers deployed these days running node.js than anything else!",
  TypeScript:
    "Ahh TypeScript- take all the things you like about JavaScript and add the ability to explicitly define interfaces, create enums, overload functions, etc. TypeScript gives developers syntactic sugar that should make development easier to write, read, and understand. TypeScript sometimes gets a bad rap for causing annoying little errors and even sometimes slowing devlepment in the short run, after working with Evaluates2 engineers on a project with it we believe almost anyone will learn to love TypeScript!",
  'Clojure / ClojureScript':
    "Clojure is a dialect of lisp, and it aims to frame programming as logical evaluation of functions and immutable data. It was created by Rich Hickey as way to run Lisp on the JVM (first released in 2007). The syntax is meant to be extremely terse as clear as to allow programmers to get things done correctly, quickly, and enjoyably. A version that targets the Node.js V8 runtime, referred to as ClojureScript, appeared later as a response to the growing interest in Nodejs. Here at Evaluates2 we appreciate the beauty and brevity of Clojure code, and we love building projects using this awesome language!",
  'Go Lang':
    "Go is an incredible run-time efficiency, statically-typed language that is great for server-side development. It is compiled directly to machine code, and was created within Google in 2007 to replace C++ code and improve developer productivity.",
  Rust:
    "Rust is an extremely fast language, static typed lanugage that emphasizes safe memory management. Created in 2006 within Mozilla to more easily develop safe systems, Rust has emerged as interesting, syntactically powerful language that can run at the speed of C & C++.",
  Swift:
    "Swift is a elegant and fast modern language. It is open source and was created by Apple in 2014 as a replacement for Objective-C. It's strict syntax encourages you to write clean and consistent code. While everyone knows it is THE language for native iOS development, it also has excellent performance as a server-side language.",
  Kotlin:
    "Kotlin is a syntatically beautiful, modern alternative to Java that targets JVM, JavaScript, Android, and other native platforms. It was developed by Jetbrains, officially released v1.0 in February 2016, and it is free & open-source. We love building android apps and serverless functions in Kotlin!",
  Python:
    "Python, originally developed in the late 1980s as a successor to the ABC language, has evolved considerably since then including majors upgrades Python 2 in 2000 and Python 3 in 2008. It is a general-purpose dynamic, garbage-collected language that is great for data science, machine-learning algorithms, and other staticial scratch-work.",
  Scala:
    "Scala is meant to be an extremely flexible alternative to Java that is both object-oriented and functional and runs on the JVM. It was created in 2004 by Martin Odersky and it a fantastic server-side language.",
  Haskell:
    "Haskell is a purely functional, statically-typed language. Developed by academic professors, it was first released in 2003 and used largely only in academia. However, we have successfully used Haskell for AWS Lambda functions, in analytics work, and other areas. If your engineering team has an interest in Haskell, we'd love to help build out test-driven Haskell services and applications.",
  Java:
    "Java, released in 1995, was very popular langague at the turn of the century. It's object-oriented principles and straightforward yet sometimes overly-verbose syntax has been enjoyed by many developers over the years, and although it's popularity has declined it is still a strong choice for many software projects.",
  'C#':
    "C# was initially meant to be a general purpose C-like object-oriented programming language for the .NET framework. It was created within Microsoft and appeared in the year 2000. Although windows forms UI has fallen somewhat out of style, C# is still a popular and fine choice for server-side development.",
  'Ruby':
    "Ruby is a language that was developed for programmer productivity with and idea that making programming should be fun for programmers. It was developed in Japan in the mid 1990s and is still a popular choice for building quick prototypes and as a general purpose language.",
  'C / C++':
    "If you need to squeeze out every possible last ounce of juice from your server, C and C++ will give the absolute most control. Although it is not the most concise and readable code, C and C++ has been running in production since its origins in the early 1970s, and raw C has truly withstood the test of time to establish itself as a valid consideration a a language even for new projects today.",
};

const keyPrinciplesData = {
  'CI & Multiple Environments': {

    header: 'The Use of Continuous Integration and Multiple Environments',
    paragraph1:
      'Each time an engineer makes a substantial change he or she will commit this change to GitHub (or the repository hosting service of your choice). Here at Evaluates2 we prefer to employ automated continuous delivery processes whereby any changes in GitHub (to specially designated branches) are detected at which point all builds are done, various automated tests are run, etc. If any step fails, all developers are notified immediately so that a fix can be made. After all commands exit successfully the continuous delivery system will then deploy these new changes directly to the staging environment.',
    paragraph2:
      'Here at Evaluates2 we prefer to maintain three environments when building applications: development, staging, and production. Development is connected to automated continuous deployment and should be rapidly changing. Staging is the "pre-release" environment where we a human can give a final check over of things before pushing to prod. Production is the live user-facing application environment! Code will finally be deployed here if all automted tests are passing and a QA engineer has given the "ok" for the new features / bugfixes in staging environment.'
  },
  'Test Driven Development': {
    header: 'The Importance of Test Driven Development (TDD)',
    paragraph1:
      'Here at Evaluate2 we have several core values that we insist on when working with a client, and one of those core values is the use of test-driven development. Test Driven Development, or "TDD" for short, is a software development process that builds up a suite of automated tests alongside the software source code. These tests run continuously to quickly ensure proper functionality and to reduce the presence of bugs.',
    paragraph2: 'In our opinion, testing is paramount for the future success of your project, and your future success is our main priority. By working in small red-green-refactor cycles we can be confident that our tests are passing only when they should be passing, and depending on the project we utilize a wide variety of automated tests including unit testing, end-to-end testing, UI testing, Behavior-driven testing, load testing, and smoke testing. We also prefer to take an outside-in approach where we begin with cucumber bdd tests whose step definition are mapped to UI tests (or end-to-end tests calling our routes for beckend REST server projects). We then try to make these tests pass by writing the implementation code with unit tests in a TDD fashion.'
  },
  'Healthy Dependencies': {
    header: 'Keeping a Project Robust & Fresh',
    paragraph1:
      'Third-party libraries are great to use, but there are a few considerations that must be carefully considered. Our engineers can help guide decision making in library selection and provide support for upgrading old libraries to newer versions.',
    paragraph2:
      'After years of development most large project will have significat amounts of technical tebt. Maybe the engineers just couldn\'t get those automated tests to work so they abandoned the pracice, or maybe the project works but there are tons of annoying warnings in the console. With the expertise from an Evaluates2 engineers these kinds of problems can be quickly addressed, the necessary modifications can be made, and your project can be reborn and as one that is a joy for users and developers alike.',
  },
};

const EngineeringPage = () => {
  const [lastLanguageClicked, setLastLanguageClicked] = useState('');
  const [lastLanguageHovered, setLastLanguageHovered] = useState('');
  const [languageSelected, setLanguageSelected] = useState('');

  const handleLanguageOptionHoverOver = newLanguageChoice => {
    setLastLanguageHovered(newLanguageChoice);
    if (lastLanguageClicked === '') {
      setLanguageSelected(newLanguageChoice);
    }
  };

  const handleLanguageOptionClick = (newLanguageChoice, event) => {
    event.stopPropagation();
    setLastLanguageClicked(newLanguageChoice);
    setLanguageSelected(newLanguageChoice);
  };

  const pageClicked = () => {
    setLastLanguageClicked('');
  };

  const handleLanguageOptionHoverOut = () => {
    setLastLanguageHovered('');

    if (lastLanguageClicked === '') setLanguageSelected('');
    /*
        Decided not to do anything here... :D
      */

  };

  return (
    <Global pageTitle={'Engineering'} path={'engineering'} description={'engineering'}>
      <Layout>

        <EngineeringPageContainer onClick={pageClicked}>
          <br />
          <br />
          <br />
          <br />
          <SectionHero>
            <h1>
              Engineering
          </h1>
            <p>Code crafted with care.
            </p>
          </SectionHero>
          {/* <ServicePageHero title="Engineering" description="Code crafted with care."></ServicePageHero> */}
          {/* <SecondServiceHero title="Ways we can work together" description="...to get your products built."></SecondServiceHero> */}

          <WorkTogetherSection>

            <h1>
              We Love Building Software
            </h1>
            <p>
              ...so if you have great ideas, let's make them happen!
              </p>
          </WorkTogetherSection>
          <StackableColumnsContainer>
            <StackableColumn>
              <TechnicalAuditsImage />
              <h1>Technical Audits</h1>
              <p>
                FREE introductory audit of your project's codebase & architecture!
              </p>
              <p>
                Audits may cover:
              </p>
              <ul>
                <li>
                  Code Quality
                </li>
                <li>
                  Automated Testing
                </li>
                <li>
                  User Experience
                </li>
                <li>
                  Full Platform Support
                </li>
                <li>
                  Security
                </li>
                <li>
                  Throughput & Scalability
                </li>
                <li>
                  Data Integrity
                </li>
              </ul>
            </StackableColumn>
            <StackableColumn>
              <StaffAugmentationImage />
              <h1>Staff Augmentation</h1>
              <p>
                Our clients work onsite in New York City or remotely. Here at Evaluates2 we can provide a full development team or individual engineers!
              </p>
              <p>
                During our initial consultantions we will work with you to determine the optimal number of Evaluates2 engineers to have on your team based on your current team and the project scope, timeline, and budget.
              </p>
            </StackableColumn>
            <StackableColumn>
              <ResourceEfficiencyImage />
              <h1>Resource Efficiency</h1>
              <p>
                When Evaluates2 engineers are integrated into other teams they can lead by example and improve the code from every other engineer.
              </p>
              <p>
                By instilling expert-level practices in things such as automated testing and deployment strategies, Evlauates2 engineers can act as an unbiased third-party to keep engineering teams honest and disciplined in their development practices.
              </p>
            </StackableColumn>
          </StackableColumnsContainer>

          <LanguagesHeaderSection>
            <h1>Languages</h1>
            <p>
              We're a test-obsessed team of polyglot engineers who strive to
              always use the best tools for the job. We specialize in functional
              programming, building beatifully interactive UIs, and putting up lean, lightning fast
              microservices all with an outside-in TDD approach.
          </p>
          </LanguagesHeaderSection>
          <LanguagePickerGrid>
            <LanguageOptionsColumn>
              <ul>
                <li
                  className={
                    languageSelected === 'JavaScript' ? 'li-selected' : ''
                  }
                  onClick={event => {
                    handleLanguageOptionClick('JavaScript', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('JavaScript');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  JavaScript
              </li>
                <li
                  className={
                    languageSelected === 'TypeScript' ? 'li-selected' : ''
                  }
                  onClick={event => {
                    handleLanguageOptionClick('TypeScript', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('TypeScript');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  TypeScript
              </li>
                <li
                  className={
                    languageSelected === 'Clojure / ClojureScript'
                      ? 'li-selected'
                      : ''
                  }
                  onClick={event => {
                    handleLanguageOptionClick('Clojure / ClojureScript', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Clojure / ClojureScript');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Clojure / ClojureScript
              </li>
                <li
                  className={languageSelected === 'Go Lang' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Go Lang', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Go Lang');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Go Lang
              </li>
                <li
                  className={languageSelected === 'Rust' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Rust', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Rust');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Rust
              </li>
                <li
                  className={languageSelected === 'Swift' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Swift', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Swift');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Swift
              </li>
                <li
                  className={languageSelected === 'Kotlin' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Kotlin', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Kotlin');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Kotlin
              </li>
                <li
                  className={languageSelected === 'Python' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Python', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Python');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Python
              </li>
                <li
                  className={languageSelected === 'Scala' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Scala', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Scala');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Scala
              </li>
                <li
                  className={languageSelected === 'Haskell' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Haskell', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Haskell');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Haskell
              </li>
                <li
                  className={languageSelected === 'Java' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Java', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Java');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Java
              </li>
                <li
                  className={languageSelected === 'C#' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('C#', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('C#');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  C#
              </li>
                <li
                  className={languageSelected === 'Ruby' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Ruby', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Ruby');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Ruby
              </li>
                <li
                  className={languageSelected === 'C / C++' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('C / C++', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('C / C++');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  C / C++
              </li>
              </ul>
            </LanguageOptionsColumn>
            <LanguageInfoSection>
              <h1>
                {lastLanguageClicked === ''
                  ? lastLanguageHovered
                  : lastLanguageClicked}
              </h1>
              <p>
                {
                  languageDescriptionsMap[
                  lastLanguageClicked === ''
                    ? lastLanguageHovered
                    : lastLanguageClicked
                  ]
                }
              </p>
            </LanguageInfoSection>

            <LanguageIdeScreenshotContainer>
              {languageSelected === 'JavaScript' && <NodeJsFizzbuzzifiedStringImage />}
              {/* TODO - Add screenshots for other languages */}
            </LanguageIdeScreenshotContainer>
          </LanguagePickerGrid>

          <BestStackForYouSection>
            <h1>We'll Use The Right Tech For YOUR Business.</h1>
            <h2>Choose Your Own Tech Stack Trio!</h2>
            <p>
              The tech stack for any of our software projects generally includes a
              front-end, back-end, and a database. There are many options from
              which to choose, and if you are at all unsure we can help you decide
              which combination should fit best for your team and product. Of
              course these are not fully exhaustive lists of all possible front-ends,
              backends, and databases, but these are the core competencies of the
              current Evaluates2 team!
          </p>
          </BestStackForYouSection>
          <BuildYourOwnStackSection>
            <StackableColumn>
              <h2>Frontends</h2>
              <ul>
                <li>React (JavaScript or TypeScript)</li>
                <li>Angular (TypeScript)</li>
                <li>Reagent (ClojureScript)</li>
                <li>Vue (JavaScript)</li>
                <li>Elm</li>
                <li>NativeScript</li>
                <li>Native Ios (Swift)</li>
                <li>Native Android (Kotlin)</li>
              </ul>
            </StackableColumn>
            <StackableColumn>
              <h2>Backends</h2>
              <ul>
                <li>NodeJS (Express + JavaScript)</li>
                <li>NodeJS (Express + TypeScript)</li>
                <li>NodeJS (Serverless JavaScript)</li>
                <li>NodeJS (Serverless TypeScript)</li>
                <li>NodeJS (Websocket Streams)</li>
                <br />
                <li>NodeJS (Serverless ClojureScript)</li>
                <li>JVM Clojure (Pedastal or Ring)</li>
                <br />
                <li>Go (Revel)</li>
                <li>Go (Serverless)</li>
                <br />
                <li>Java (Spring / Spark)</li>
                <li>NodeJS (Websocket Streams)</li>
                <li>Java (Serverless Java)</li>
                <br />
                <li>Python (Python Flask / Django)</li>
                <li>Python (Serverless Python)</li>
                <br />
                <li>C# (with NancyFx)</li>
                <li>C# (Serverless C#)</li>
              </ul>
            </StackableColumn>
            <StackableColumn>
              <h2>Databases</h2>
              <ul>
                <h4>(NoSQL)</h4>
                <li>MongoDB</li>
                <li>DynamoDB</li>
                <li>Redis</li>
                <li>Datomic</li>
                <li>Neo4J</li>
                <li>CosmosDB</li>
                <li>Cassandra</li>
                <h4>(Relational)</h4>
                <li>Postgres</li>
                <li>Google BigTable</li>
                <li>Amazon Aurora</li>
                <li>MySQL</li>
              </ul>
            </StackableColumn>
          </BuildYourOwnStackSection>

          <KeyPrinciplesHeader headerText="Continuous Integration & Multiple Environments"></KeyPrinciplesHeader>
          <KeyPrinciplesInfoBlock data={keyPrinciplesData['CI & Multiple Environments']}></KeyPrinciplesInfoBlock>

          <KeyPrinciplesHeader headerText="Test Driven Development"></KeyPrinciplesHeader>
          <KeyPrinciplesInfoBlock data={keyPrinciplesData['Test Driven Development']}></KeyPrinciplesInfoBlock>

          <KeyPrinciplesHeader headerText="Healthy Dependencies"></KeyPrinciplesHeader>
          <KeyPrinciplesInfoBlock data={keyPrinciplesData['Healthy Dependencies']}></KeyPrinciplesInfoBlock>

          <ChangeGearsBlock headerText='Find out more about how we work...' linkText='Product Management' linkTo='/product-management'></ChangeGearsBlock>
          <ReadyToGetStartedSection>
            <h1>Ready to partner with us?</h1>
            <Link to="/contact">Contact us today!</Link>
          </ReadyToGetStartedSection>
          <br />
          <br />
          <br />
          <br />
          <JoinOurTeamCornerBtn />

        </EngineeringPageContainer>
      </Layout>
    </Global>
  );
};
export default EngineeringPage;