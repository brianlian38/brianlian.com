import React from 'react';
import './Bookshelf.css';

const favoriteReadings = [
  { title: "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma", url: "https://www.goodreads.com/en/book/show/18693771"} ,
  { title: "Bad Blood: Secrets and Lies in a Silicon Valley Startup", url: "https://www.goodreads.com/book/show/37976541-bad-blood" },
  { title: "1984", url: "https://www.goodreads.com/book/show/40961427-1984" }
]

const readingList = [
  { title: "Analyzing Neural Time Series Data: Theory and Practice", url: "https://www.amazon.com/Analyzing-Neural-Time-Data-Practice/dp/0262019876" },
  { title: "The Structure of Scientific Revolutions", url: "https://www.amazon.com/Structure-Scientific-Revolutions-Thomas-Kuhn/dp/0226458083" },
  { title: "Atlas Shrugged", url: "https://www.goodreads.com/book/show/662.Atlas_Shrugged" },
  {title: "21 Lessons for the 21st Century", url: "https://www.goodreads.com/book/show/38820046-21-lessons-for-the-21st-century" },
  { title: "High Output Management", url: "https://www.goodreads.com/book/show/324750.High_Output_Management" },
  { title: "The Catcher in the Rye", url: "https://www.goodreads.com/book/show/5107.The_Catcher_in_the_Rye" },
  { title: "The Making of Prince of Persia", url: "https://www.goodreads.com/en/book/show/12917506-the-making-of-prince-of-persia" },
  { title: "Toyota Production System", url: "https://www.goodreads.com/book/show/376237.Toyota_Production_System" },
  { title: "The Timeless Way of Building", url: "https://www.goodreads.com/book/show/106728.The_Timeless_Way_of_Building#:~:text=In%20The%20Timeless%20Way%20of,world%20from%20their%20own%20being." },
  { title: "How to Make a Spaceship", url: "https://www.goodreads.com/book/show/29358560-how-to-make-a-spaceship" },
  { title: "The Dream Machine", url: "https://www.goodreads.com/en/book/show/722412.The_Dream_Machine" },
  { title: "How Not to be Wrong: The Power of Mathematical Thinking", url: "https://www.goodreads.com/book/show/18693884-how-not-to-be-wrong" },
  { title: "Richard Feynman", url: "https://www.goodreads.com/book/show/56165.Richard_Feynman" },
  { title: "No Rules Rules", url: "https://www.goodreads.com/book/show/49099937-no-rules-rules" },
  { title: "The Selfish Gene", url: "https://www.goodreads.com/book/show/61535.The_Selfish_Gene" },
  { title: "Behind the Cloud", url: "https://www.goodreads.com/book/show/6659874-behind-the-cloud" },
  { title: "Loonshots", url: "https://www.goodreads.com/book/show/39863447-loonshots" },
  { title: "The Search", url: "https://www.goodreads.com/book/show/10146.The_Search" },
  { title: "Einstein: His Life and Universe", url: "https://www.goodreads.com/book/show/10884.Einstein" },
  { title: "Creation: Life and How to Make It", url: "https://www.goodreads.com/book/show/304444.Creation" },
  { title: "The Box", url: "https://www.goodreads.com/book/show/316767.The_Box" },
  { title: "Hackers & Painters", url: "https://www.goodreads.com/book/show/41793.Hackers_Painters" },
]

class Bookshelf extends React.Component {
  render() {
    return (
      <div className="parent">
        <h1 className="header">
          Bookshelf
        </h1>
        <p>
          I think my love for diving into data stems (somehow) from my love for diving into a new read. Theres something to be said about the learning of new knowledge that is so captivating.
          I am always excited to learn about new book recommendations from others. I'm currently interested in learning more about neuroscience and the psychology that drives us.
        </p>
        <p>
          I've only recently (2023) started tracking my reading list so pardon the emptiness. I hope to fill this page up with
          1) my favorite readings and 2) my personal reading list, many of which have been
          recommendations from others. I jump around from book to book to whatever feeds my current curiosity cravings.
        </p>
        <p>
          I'm currently reading&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/book/show/37976541-bad-blood">Bad Blood: Secrets and Lies in a Silicon Valley Startup</a>
          &nbsp;.
        </p>
        <h4 className="bodyTitles">
          Favorite readings
        </h4>
        {favoriteReadings.map((reading, index) => {
          return (
            <ul>
              <li key={index}>
                <a target="_blank" rel="noopener noreferrer" href={reading.url}>{reading.title}</a>
              </li>
            </ul>
          )
        })}
        <h4 className="bodyTitles">
          Reading List
        </h4>
        {readingList.map((reading, index) => {
          return (
            <ul>
              <li key={index}>
                <a target="_blank" rel="noopener noreferrer" href={reading.url}>{reading.title}</a>
              </li>
            </ul>
          )
        })}
      </div>
    );
  }
}

export default Bookshelf;