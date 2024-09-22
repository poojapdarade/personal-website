import { PageLayout } from "../components/PageLayout";
import "./LearningReact.css";

export function LearningReact() {
  return (
    <PageLayout title="Deepening Expertise in React">
      <div class="learning-react" article>
        <h2>React Basics and Essential Concepts</h2>
        <ul>
          <li>
            JSX: JavaScript XML allows us to write HTML in React. It's syntactic
            sugar for React.createElement.
          </li>
          <li>
            Components: Building blocks of React applications. Can be functional
            or class-based.
            <ul>
              <li>
                Functional Components: Simpler, recommended for most use cases.
              </li>
              <li>
                Class Components: More complex, used for lifecycle methods
                before hooks were introduced.
              </li>
            </ul>
          </li>
          <li>
            Props: Short for properties, used to pass data between components.
            <ul>
              <li>Read-only in child components.</li>
            </ul>
          </li>
          <li>
            State: A built-in React object used to contain data or information
            about the component.
            <ul>
              <li>Managed using useState in functional components.</li>
              <li>Should be updated using the state setter function.</li>
            </ul>
          </li>
          <li>
            Lifecycle Methods: Methods that allow us to hook into specific
            moments in a component's lifecycle.
            <ul>
              <li>
                Common methods include componentDidMount, componentDidUpdate,
                and componentWillUnmount.
              </li>
              <li>
                In functional components take advantage of useEffect instead
              </li>
            </ul>
          </li>
          <li>
            Hooks: Functions that let us hook into React state and lifecycle
            features from functional components.
            <ul>
              <li>useState: Manages state in functional components.</li>
              <li>
                useEffect: Manages side effects, similar to lifecycle methods.
              </li>
              <li>
                Custom Hooks: Reusable hooks that can encapsulate complex logic.
              </li>
            </ul>
          </li>
          <li>
            Context API: Allows you to share values (like themes or user
            information) between components without prop drilling.
          </li>
          <li>
            React Router: A library for routing in React applications, enabling
            navigation between different views.
          </li>
          <li>
            State Management: Techniques for managing state in larger
            applications, such as:
            <ul>
              <li>Redux: A predictable state container for JavaScript apps.</li>
              <li>
                MobX: A simpler state management solution that uses observable
                states.
              </li>
              <li>
                Recoil: A state management library for React that offers a more
                flexible way to manage state.
              </li>
            </ul>
          </li>
          <li>
            Testing: Essential for ensuring code quality. Familiarize yourself
            with:
            <ul>
              <li>Jest: A JavaScript testing framework.</li>
              <li>
                React Testing Library: For testing React components in a way
                that mimics user behavior.
              </li>
            </ul>
          </li>
          <li>
            Performance Optimization: Techniques to enhance application
            performance:
            <ul>
              <li>React.memo for component memoization.</li>
              <li>useCallback and useMemo to optimize rendering.</li>
            </ul>
          </li>
          <li>
            Deployment: Basic understanding of deploying React applications
            using platforms like Vercel, Netlify, or traditional servers.
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
