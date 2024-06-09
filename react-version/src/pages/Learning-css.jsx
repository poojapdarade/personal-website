import { PageLayout } from "../components/PageLayout";
import "./Articles.css";
export function LearningCss() {
  return (
    <PageLayout title="Learning Css">
      <div className="learning-css">
        <h3>What is CSS?</h3>
        <ul>
          <li>
            CSS is a simple design language used for making web pages look good
            and presentable.
          </li>
          <li>
            It can be attached by any HTML element and style it or even position
            it according to developer's choice.
          </li>
        </ul>
        <p>CSS : Cascading style sheets. </p>
        <p>There are 3 different places you can write CSS:</p>
        <ol>
          <li>Internal</li>
          <li>External</li>
          <li>Inline</li>
        </ol>
        <p>syntax for css:</p>{" "}
        <p>selector &123;(property = property_value)&125;</p>
        <p>3 types of selectors:</p>
        <ol>
          <li>Element - Least specific </li>
          <li>Class - More specific</li>
          <li>ID - More specific than Class but not recommended</li>
        </ol>
        <ul>
          <li>
            !important : Overrides every other rule but it is not recommended to
            use for beginners{" "}
          </li>
        </ul>
        <section className="columns">
          <h3>What I have learned in CSS</h3>
          <p>
            What is selectors? In CSS, selectors are patterns that target HTML
            elements for styling. They can select elements by type, class, ID,
            attributes, or their relationship with other elements. Selectors
            help apply styles selectively to specific parts of a web page.
          </p>
          <p className="quote">
            &#8220;Where's my food, man? &#8221;{" "}
            <span className="nowrap">&#8212;The Dude</span>
          </p>
          <p>
            Colors: In CSS, colors define how elements look. You can use names
            (like red), hexadecimal (#ff0000), RGB (rgb(255, 0, 0)), or HSL
            (hsl(0, 100%, 50%)). Colors can also have transparency with RGBA or
            HSLA values.
          </p>
          <p>
            Unit &amp; Sizes: In CSS, units and sizes define measurements for
            properties like length and width. Common units include pixels
            (`px`), percentage (`%`), em (based on font size), rem (based on
            root font size), and viewport units (`vw` and `vh`). Absolute units
            like centimeters, millimeters, inches, points, and picas are also
            used for specific scenarios.
          </p>
          <p>
            Box Model: The CSS box model is a fundamental concept that defines
            the layout of elements on a web page. It consists of four main
            components:
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
          Understanding and manipulating these components allows for precise
          control over the spacing and layout of elements on a webpage.
        </section>
        <p>
          Typography: In CSS, typography refers to styling and formatting text
          on a webpage, including font properties (family, size, color), line
          height, letter spacing, and text alignment.
        </p>
      </div>
    </PageLayout>
  );
}
