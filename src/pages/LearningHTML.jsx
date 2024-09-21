import { PageLayout } from "../components/PageLayout";
import "./LearningHTML.css";

export function LearningHtml() {
  return (
    <PageLayout title="Gaining Competency in HTML">
      <div class="learning-html article">
        <p>
          I’ve gained a solid understanding of HTML and am excited to document
          my journey! I’m applying my skills to build dynamic, well-structured
          pages across my projects.
        </p>
        <img
          class="article-image"
          src="/git-article.jpg"
          alt=" Cartoon girl studying technology"
        />
        <h3>Basic web architecture</h3>
        <p>Web architecture is made up of three essential elements:</p>
        <ul>
          <li>
            <h4>Website:</h4>
            Frontend-Interface of an user application which is visible to user.
            Your browser started by loading the main HTML file, then css and
            Javascript.
          </li>
          <li>
            <h4>Server:</h4>
            Once you've developed your website you need to host it on a server
            to make it accessible on the internet.
          </li>
          <li>
            <h4>Address:</h4>
            Address assigned to website in order to be accessible on the
            internet. Website is hosted on an IP Address.
          </li>
        </ul>
        <p>
          <h3>What is HTML?</h3>
        </p>
        <p>
          HTML is a widely used markup language for developing web pages. It
          defines the structure and content to the website. The following are
          some HTML elements:
        </p>
        <ul>
          <li>
            <h4>DOCTYPE:</h4>
            It is an instruction which indicates the browser that the document
            type to be served to the user is a HTML document. It should be
            included at very top of your HTML page.
          </li>
          <li>
            <h4>HTML:</h4>
            The top level root element that all other HTML tags are contained
            within.
          </li>
          <li>
            <h4>Head:</h4>
            This is the first section of the HTML that contains all of the
            information the webpage's properties, links and more. It can have
            meta-information about the page such as the title, description. It
            can also include styling information with a style tag.
          </li>
          <li>
            <h4>Body:</h4>
            Body tag contains all the displayable contents of your webpage
            including heading, paragraphs, div containers, tables and more.
          </li>
        </ul>
        <h2>HTML Tags List</h2>
        <h3>Basic Structure</h3>
        <pre>
          &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;Page
          Title&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;/body&gt;
          &lt;/html&gt;
        </pre>
        <h3>Metadata</h3>
        <ul>
          <li>&lt;meta&gt;: Defines metadata about an HTML document.</li>
          <li>&lt;link&gt;: Links to external resources (like CSS).</li>
          <li>&lt;style&gt;: Contains CSS styles.</li>
        </ul>
        <h3>Text Content</h3>
        <ul>
          <li>&lt;h1&gt; to &lt;h6&gt;: Header tags for headings.</li>
          <li>&lt;p&gt;: Paragraph tag.</li>
          <li>&lt;br&gt;: Line break.</li>
          <li>&lt;hr&gt;: Horizontal rule (line).</li>
          <li>&lt;strong&gt;: Important text (usually bold).</li>
          <li>&lt;em&gt;: Emphasized text (usually italic).</li>
          <li>&lt;blockquote&gt;: Quoted section.</li>
          <li>&lt;ul&gt;: Unordered list.</li>
          <li>&lt;ol&gt;: Ordered list.</li>
          <li>&lt;li&gt;: List item.</li>
          <li>&lt;div&gt;: Generic container.</li>
          <li>&lt;span&gt;: Inline container.</li>
        </ul>
        <h3>Links and Media</h3>
        <ul>
          <li>&lt;a&gt;: Anchor tag for links.</li>
          <li>&lt;img&gt;: Image tag.</li>
          <li>&lt;audio&gt;: Audio content.</li>
          <li>&lt;video&gt;: Video content.</li>
          <li>&lt;iframe&gt;: Inline frame for embedding other documents.</li>
        </ul>
        <h3>Tables</h3>
        <ul>
          <li>&lt;table&gt;: Defines a table.</li>
          <li>&lt;tr&gt;: Table row.</li>
          <li>&lt;td&gt;: Table cell.</li>
          <li>&lt;th&gt;: Table header cell.</li>
          <li>&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;: Table sections.</li>
        </ul>
        <h3>Forms</h3>
        <ul>
          <li>&lt;form&gt;: Form container.</li>
          <li>&lt;input&gt;: Input field.</li>
          <li>&lt;textarea&gt;: Multiline text input.</li>
          <li>&lt;button&gt;: Button.</li>
          <li>&lt;select&gt;: Dropdown list.</li>
          <li>&lt;option&gt;: Dropdown item.</li>
          <li>&lt;label&gt;: Label for form elements.</li>
        </ul>
        <h3>Semantic Elements</h3>
        <ul>
          <li>&lt;header&gt;: Header section of a document.</li>
          <li>&lt;nav&gt;: Navigation links.</li>
          <li>&lt;main&gt;: Main content area.</li>
          <li>&lt;article&gt;: Independent content.</li>
          <li>&lt;section&gt;: Thematic grouping of content.</li>
          <li>&lt;footer&gt;: Footer section of a document.</li>
        </ul>
        <h3>Scripting</h3>
        <ul>
          <li>&lt;script&gt;: JavaScript code.</li>
          <li>&lt;noscript&gt;: Content for browsers without JavaScript.</li>
        </ul>
        <h3>Other</h3>
        <ul>
          <li>&lt;meta&gt;: Metadata about the HTML document.</li>
          <li>&lt;link&gt;: Links to external stylesheets.</li>
        </ul>
      </div>
    </PageLayout>
  );
}
