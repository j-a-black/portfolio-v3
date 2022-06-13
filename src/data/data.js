import LinkButton from "../components/link-button/link-button.component";

import Mealify from "../assets/images/mealify.webp";
import Brochure from "../assets/images/brochure.webp";
import Shoppe from "../assets/images/shoppe.webp";

export const projectsQuicklookData = [
  {
    id: 1,
    header: "Recipe Search App",
    tech: "HTML | CSS | Sass | JavaScript | React",
    description:
      "This application takes a single ingredient provided by the user and finds recipes that include the specified ingredient. A split screen layout is used to dynamically render recipe results and specific information such as ingredients, cooking instructions, and a link to a video with additional guidance. ",
    imgSrc: Mealify,
    imgAlt: "Recipe Search App",
    href: "https://cupboard.jasonanthonblack.com/",
    github: "https://github.com/j-a-black/cupboard-cra",
    content: [
      <img src={Mealify} alt="Recipe Search App" />,
      <h2 className="sub-header">Purpose and Objectives</h2>,
      <p>
        The purpose of this project was to explore how to use the{" "}
        <a
          className="inline-link"
          alt="The Meal Database"
          href="https://www.themealdb.com/api.php"
          target="_blank"
          rel="noreferrer"
        >
          Meal API
        </a>{" "}
        to search for recipes based on a single ingredient. If the client
        entered ‘egg,’ then the application would yield the recipes that used
        eggs as an ingredient, based on what is currently available in the
        database. My objectives were to:
      </p>,
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
          Display the ingredients, meal preparation & cooking instructions, and
          link to a YouTube video for more information
        </li>
        <li>
          Allow the user to exit the modal by clicking on the close button,
          pressing escape, or clicking anywhere outside of the modal
        </li>
      </ol>,
      <h2 className="sub-header">Challenges</h2>,
      <p>
        I initially created the template and ensured the code for opening and
        closing the modal worked prior to writing the code for dynamically
        inserting elements. However, I did not take under consideration that the
        event listeners that were added prior to the rendering of the dynamic
        content would not fire. By the power of Google, I eventually learned how
        Event Delegation targeting the parent element would assist me overcoming
        this obstacle.
      </p>,
      <p>
        Additionally, each Meal API recipe contains up to 20 ingredients
        (strIngredient1, strIngredient2, etc.). I experienced difficulties
        displaying all the ingredients because I could think of a way to loop
        through all the names in a single object. This was due to a habit of
        primarily using dot notation to access the name/value pair, versus using
        the bracket notation. Using a for loop and placing the iterator within
        the bracket notation (e.g. objectName[‘strIngredient’ + i], I was able
        to push the object properties into an array, and then mapped the
        ingredients – as well as the quantity/measurements – individually.
      </p>,
      <div>
        <LinkButton
          styleClassName="project-link-button"
          href="https://cupboard.jasonanthonblack.com/"
          linkButtonText="View Project"
          target="_blank"
          rel="noopener noreferrer"
        />
        <LinkButton
          styleClassName="project-link-button"
          href="https://github.com/j-a-black/cupboard-cra"
          linkButtonText="View GitHub"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>,
    ],
  },
  {
    id: 2,
    header: "Shopping Cart",
    tech: "HTML | CSS | Sass | JavaScript | React",
    description:
      "I created a shopping cart for a fictitious retail bakery that utilizes the web storage API. Users can add and remove products from the cart, adjust the quantities of products, and quickly view products through the landing page call to action. ",
    imgSrc: Shoppe,
    imgAlt: "Shopping Cart",
    href: "https://shoppe.jasonanthonblack.com/",
    github: "https://github.com/j-a-black/shoppe-cra-v4",
    content: [
      <img src={Shoppe} alt="Shopping Cart" />,
      <h2 className="sub-header">Purpose and Objectives</h2>,
      <p>
        The purpose of this project was to explore how to traverse the DOM,
        update and delete information within a shopping, and to craft a website
        layout based on a landing page design. My objectives were to:
      </p>,
      <ol className="indent-list-items">
        <li>
          Add items to the cart by utilizing for loops to iterate through a
          collection of class names and adding event listeners
        </li>
        <li>
          Remove items from the cart by developing a familiarity with selecting
          a parent element and removing all children nodes
        </li>
        <li>Utilize open source for website layout designs</li>
      </ol>,
      <h2 className="sub-header">Challenges</h2>,
      <p>
        Running a for loop that displays the numbers one through 10 is very
        straight forward compared to using a for loop to iterate through a
        collection of class names, then adding event listeners to each element,
        and subsequently using a high order function – like the addEventListener
        – to pass another function as an argument. This required research, trial
        and error, and plenty of console logs.
      </p>,
      <p>
        This process alone was very important to understand as it played an
        instrumental role in adding items to a cart, removing items from a cart,
        and updating the total price.
      </p>,
      <p>
        Website design was derived from{" "}
        <a
          className="inline-link"
          alt="Emporium Pies"
          href="https://emporiumpies.com/"
          target="_blank"
          rel="noreferrer"
        >
          Emporium Pies
        </a>{" "}
        and{" "}
        <a
          className="inline-link"
          alt="Mah Ze Dahr"
          href="https://mahzedahrbakery.com/"
          target="_blank"
          rel="noreferrer"
        >
          Mah Ze Dahr
        </a>
        .
      </p>,
      <div>
        <LinkButton
          styleClassName="project-link-button"
          href="https://shoppe.jasonanthonblack.com/"
          linkButtonText="View Project"
          target="_blank"
          rel="noopener noreferrer"
        />
        <LinkButton
          styleClassName="project-link-button"
          href="https://github.com/j-a-black/shoppe-cra-v4"
          linkButtonText="View GitHub"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>,
    ],
  },
  {
    id: 3,
    header: "Brochure Website",
    tech: "HTML | CSS | Sass | JavaScript | React",
    description: "Landing page for a fictitious private catering company.",
    imgSrc: Brochure,
    imgAlt: "Brochure Website",
    href: "https://oceansidecatering.jasonanthonblack.com/",
    github: "https://github.com/j-a-black/seaside-catering-cra",
    content: [
      <img src={Brochure} alt="Brochure Website" />,
      <h2 className="sub-header">Purpose and Objectives</h2>,
      <p>
        The purpose of this project was to become familiar with React by
        creating a simple landing page for a fictitious catering company. My
        objectives were to:
      </p>,
      <ol className="indent-list-items">
        <li>Develop a basic understanding of components</li>
        <li>
          Develop a basic understanding of passing props to child components
        </li>
        <li>Develop a basic understanding of hooks</li>
        <li>Use hooks to toggle mobile menu </li>
      </ol>,
      <p>
        {" "}
        This webpage will continue to develop and additional content will be
        added, but for the time being, the landing page will be the only content
        presented.{" "}
      </p>,

      <p>
        Website design was derived from{" "}
        <a
          className="inline-link"
          alt="The Highland Kitchen"
          href="https://www.thehighlandkitchen.com/"
          target="_blank"
          rel="noreferrer"
        >
          The Highland Kitchen
        </a>
        .
      </p>,
      <div>
        <LinkButton
          styleClassName="project-link-button"
          href="https://oceansidecatering.jasonanthonblack.com/"
          linkButtonText="View Project"
          target="_blank"
          rel="noopener noreferrer"
        />
        <LinkButton
          styleClassName="project-link-button"
          href="https://github.com/j-a-black/seaside-catering-cra"
          linkButtonText="View GitHub"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>,
    ],
  },
];
