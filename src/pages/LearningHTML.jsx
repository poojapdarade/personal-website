import { PageLayout } from "../components/PageLayout";
import "./LearningHTML.css";

export function LearningHtml() {
  return (
    <PageLayout title="Gaining Competency in HTML">
      <div class="learning-html">
        <img
          class="article-image"
          src="/git-article.jpg"
          alt=" Cartoon girl studying technology"
        />
        <p>
          I am learning HTML and here I am documenting my progress. As a part of
          learning I am using HTML tags while making my website.
        </p>
        <ol>
          <li>Basic web architecture</li>
          <p>Web architecture is made up of three essential elements:</p>
          <ul>
            <li>
              Website: Frontend-Interface of an user application which is
              visible to user. Your browser started by loading the main HTML
              file, then css and Javascript.
            </li>
            <li>
              Server: Backend- Holds and manages all the data. Once you've
              developed your website you need to host it on a server to make it
              accessible on the internet.
            </li>
            <li>
              Address : Address assigned to website in order to accessible on
              internet. Website is hosted on IP Address
            </li>
          </ul>
          <p>
            <li>What is HTML?</li>
          </p>
          <p>
            HTML is a widely used markup language for developing web pages.It
            defines the structure of websites and formats web pages. Following
            are some elements of HTML:
          </p>
          <ul>
            <li>
              DOCTYPE: It is an instruction which indicates the browser that the
              document type to be served to the user is a HTML document. It
              should be included at very top of your HTML page.
            </li>
            <li>HTML: Contains all the webpage's code.</li>
            <li>
              Head: This is the first section of the code that contains all of
              the information the webpage's properties, links and more.It can
              have pages, title, description, CSS Code and meta tags.
            </li>
            <li>
              Body: Body tag contains all the displayable contents of your
              webpage including heading, paragraphs, div containers, tables and
              more.
            </li>
          </ul>
        </ol>
        <table class="content-table">
          <thead>
            <tr>
              <th>Tags</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heading tags</td>
              <td>H1 H2 H3 H4</td>
            </tr>
            <tr>
              <td>Image</td>
              <td>img</td>
            </tr>
            <tr>
              <td>table</td>
              <td>tbody td th tr</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
