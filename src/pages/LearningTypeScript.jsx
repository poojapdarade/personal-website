import { PageLayout } from "../components/PageLayout";
import "./LearningTypeScript.css";

export function LearningTypescript() {
  return (
    <PageLayout title="Discover TypeScript">
      <div className="learning-typescript">
        <h3>
          What is TypeScript? Why Do we need it? How it is different from
          Javascript?
        </h3>
        <p>
          TypeScript is a programming language to address the shortcomings of
          JavaScript.TypeScript is build on top of JavaScript so every
          JavaScript file is a valid TypeScript file.TypeScript adds various
          features to JavaScript that help us build more robust and maintainable
          applications in less time. Every typescript file has .ts extension.
        </p>
        <p>
          TypeScript is JavaScript with Type checking.With Typescript we
          explicitly set the type of variables. Once we pass TypeScript code to
          the typescript compiler,the complier will tell us if we are doing
          something wrong, so we can catch mistakes at compile time.
        </p>

        <h3>Benefits of TypeScript:</h3>
        <img
          className="typescript-images"
          src="/typescript-error-example.jpg"
          alt="typescript-compiler-throwing-error"
        />
        <ul>
          <li>Static typing.</li>
          <li>Code completion</li>
          <li>Refactoring</li>
          <li>Shorthand notations</li>
        </ul>

        <h3>Drawbacks of TypeScript:</h3>
        <img
          className="typescript-images"
          src="/typescript-complier-process.jpg"
          alt="typescript-complier-process"
        />
        <ul>
          <li>Compilation</li>
          <li>Discipline in coding</li>
        </ul>
        <h3>Fundamentals of TypeScript:</h3>
        <li>The any type</li>
        <li>Arrays</li>
        <li>Tuples</li>
        <li>Enums</li>
        <li>Functions</li>
        <li>Objects</li>

        <h3>Advanced Types</h3>
        <li>Types aliases</li>
        <img
          className="typescript-images"
          src="/typeAliasesExample.jpg"
          alt="Type aliases example"
        />
        <li>Unions and insertions</li>
        <li>Type narrowing</li>
        <li>Nullable types</li>
        <li>The unknown type</li>
        <li>The never type</li>
      </div>
    </PageLayout>
  );
}
