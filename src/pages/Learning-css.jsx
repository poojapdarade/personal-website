import { PageLayout } from "../components/PageLayout";
import "./LearningCss.css";

export function LearningCss() {
  return (
    <PageLayout title="Developing Skills in CSS">
      <div className="learning-css article">
        <p>
          I've learned CSS and now apply my skills to enhance the design and
          functionality of my projects. With CSS, I'm able to create visually
          appealing layouts and improve user experiences across my web
          applications.
        </p>
        <img
          className="article-image"
          src="/git-article.jpg"
          alt=" Cartoon girl studying technology"
        />
        <h3>What is CSS?</h3>
        <ul>
          <li>
            CSS is a design language used for making web pages look good and
            presentable.
          </li>
          <li>
            It can be attached to any HTML element and styled or positioned
            according to developer's choice.
          </li>
        </ul>
        <h4>CSS : Cascading style sheets. </h4>
        <p>There are 3 different places you can write CSS:</p>
        <ol>
          <li>Internal</li>
          <li>External</li>
          <li>Inline</li>
        </ol>
        <h4>Syntax for CSS:</h4> <p>selector (property = property_value) </p>
        <p>3 types of selectors:</p>
        <ol>
          <li>Element - Least specific </li>
          <li>Class - More specific</li>
          <li>ID - More specific than Class but not recommended</li>
        </ol>
        <p>
          !important : Overrides every other rule but it is not recommended to
          use for beginners.
        </p>
        <section>
          <h3>What I have learned in CSS:</h3>
          <h4>Selectors</h4>
          <p>
            {" "}
            In CSS, selectors are patterns that target HTML elements for
            styling. They can select elements by type, class, ID, attributes, or
            their relationship with other elements. Selectors help apply styles
            selectively to specific parts of a web page.
          </p>
          <p>
            &#8220;Where's my food, man? &#8221;
            <span> &#8212;The Dude</span>
          </p>
          <h4>Colors:</h4>{" "}
          <p>
            In CSS, colors define how elements look. You can use names (like
            red), hexadecimal (#ff0000), RGB (rgb(255, 0, 0)), or HSL (hsl(0,
            100%, 50%)). Colors can also have transparency with RGBA or HSLA
            values.
          </p>
          <h4>Unit &amp; Sizes:</h4>
          <p>
            {" "}
            In CSS, units and sizes define measurements for properties like
            length and width. Common units include pixels (`px`), percentage
            (`%`), em (based on font size), rem (based on root font size), and
            viewport units (`vw` and `vh`). Absolute units like centimeters,
            millimeters, inches, points, and picas are also used for specific
            scenarios.
          </p>
          <h4>Box Model:</h4>
          <p>
            {" "}
            The CSS box model is a fundamental concept that defines the layout
            of elements on a web page. It consists of four main components:
          </p>
          <ol>
            <li>Content: - The actual content or text of the element.</li>
            <li>
              Padding: - The space between the content and the element's border.
            </li>

            <li>Border: - A border surrounding the padding.</li>
            <li>
              Margin: - The space between the border and the neighboring
              elements.
            </li>
          </ol>
          <p>
            Understanding and manipulating these components allows for precise
            control over the spacing and layout of elements on a webpage.
          </p>
        </section>
        <h4>Typography:</h4>
        <p>
          {" "}
          In CSS, typography refers to styling and formatting text on a webpage,
          including font properties (family, size, color), line height, letter
          spacing, and text alignment.
        </p>
        <h4>Flexbox:</h4>
        <p>
          CSS Flexbox is a layout model that allows for responsive and efficient
          arrangement of elements in a one-dimensional space. It provides more
          control over alignment, direction, and spacing of items in a
          container.
        </p>
        <h4>Grid Layout:</h4>
        <p>
          CSS Grid Layout is a powerful two-dimensional layout system that
          enables developers to create complex layouts with rows and columns. It
          offers great flexibility in placing elements on a grid.
        </p>
        <h4>Media Queries:</h4>
        <p>
          Media queries are a feature of CSS that allows you to apply different
          styles based on device characteristics, such as screen size,
          resolution, or orientation. This is essential for responsive design.
        </p>
      </div>
    </PageLayout>
  );
}
