import { PageLayout } from "../components/PageLayout";
import "./LearningReact.css";

export function LearningReact() {
  return (
    <PageLayout title="Deepening Expertise in React">
      <div class="learning-react">
        <h2>React Basics I've Learned</h2>
        <ul>
          <li>JSX: JavaScript XML allows us to write HTML in React.</li>
          <li>
            Components: Building blocks of React applications. Can be functional
            or class-based.
          </li>
          <li>
            Props: Short for properties, used to pass data between components.
          </li>
          <li>
            State: A built-in React object used to contain data or information
            about the component.
          </li>
          <li>
            Lifecycle Methods: Methods that allow us to hook into specific
            moments in a component's lifecycle.
          </li>
          <li>
            Hooks: Functions that let us hook into React state and lifecycle
            features from functional components (e.g., useState, useEffect).
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
