import "./project-description.styles.scss";

import { projectsQuicklookData } from "../../data/data";
import mealifyImgUrl from "../../assets/images/mealify.png";

const ProjectDescription = () => {
  return (
    <section className="section-container">
      <img src={mealifyImgUrl} alt="website" />
      <div className="text-box">
        <h2 className="sub-header">Purpose and Objectives</h2>
        <p>
          The purpose of this project was to explore how to use the{" "}
          <a
            className="inline-link"
            href="https://www.themealdb.com/api.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meal API
          </a>{" "}
          to search for recipes based on a single ingredient. If the client
          entered ‘egg,’ then the application would yield the recipes that used
          eggs as an ingredient, based on what is currently available in the
          database. My objectives were to:
        </p>
        <ol className="indent-list-items">
          <li>Learn how to fetch an API and the basics of async and await</li>
          <li>
            Take the input value from the user and extract the information from
            the API
          </li>
          <li>
            Display search results with a button that opens a modal when clicked
            by the user
          </li>
          <li>
            Display the ingredients, meal preparation & cooking instructions,
            and link to a YouTube video for more information
          </li>
          <li>
            Allow the user to exit the modal by clicking on the close button,
            pressing escape, or clicking anywhere outside of the modal
          </li>
        </ol>
        <h2 className="sub-header">Challenges</h2>
        <p>
          I initially created the template and ensured the code for opening and
          closing the modal worked prior to writing the code for dynamically
          inserting elements. However, I did not take under consideration that
          the event listeners that were added prior to the rendering of the
          dynamic content would not fire. By the power of Google, I eventually
          learned how Event Delegation targeting the parent element would assist
          me overcoming this obstacle.
        </p>
        <p>
          Additionally, each Meal API recipe contains up to 20 ingredients
          (strIngredient1, strIngredient2, etc.). I experienced difficulties
          displaying all the ingredients because I could think of a way to loop
          through all the names in a single object. This was due to a habit of
          primarily using dot notation to access the name/value pair, versus
          using the bracket notation. Using a for loop and placing the iterator
          within the bracket notation (e.g. objectName[‘strIngredient’ + i]), I
          was able to push the object properties into an array, and then mapped
          the ingredients – as well as the quantity/measurements – individually.
        </p>
      </div>
    </section>
  );
};

export default ProjectDescription;
