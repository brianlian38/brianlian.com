import React from 'react';
import './Bookshelf.css';

const favoriteReadings = [
  { title: "Working in Public: The Making and Maintenance of Open Source Software", url: "https://www.goodreads.com/book/show/54140556-working-in-public"} ,
  { title: "Know My Name", url: "https://www.goodreads.com/book/show/50196744-know-my-name" },
  { title: "Bad Blood: Secrets and Lies in a Silicon Valley Startup", url: "https://www.goodreads.com/book/show/37976541-bad-blood" },
  { title: "The Diving Bell and the Butterfly", url: "https://www.goodreads.com/book/show/193755.The_Diving_Bell_and_the_Butterfly" },
  { title: "Jony Ive: The Genius Behind Apple's Greatest Products", url: "https://www.goodreads.com/book/show/17707768-jony-ive"},
  { title: "Zero to One", url: "https://www.goodreads.com/book/show/18050143-zero-to-one" },
  { title: "The History of the Future", url: "https://www.goodreads.com/en/book/show/34017056-the-history-of-the-future" },
  { title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future", url: "https://www.goodreads.com/book/show/25541028-elon-musk" },
  { title: "The Man Who Solved the Market", url: "https://www.goodreads.com/book/show/43889703-the-man-who-solved-the-market" },
  { title: "Blitzscaling", url: "https://www.goodreads.com/book/show/38398157-blitzscaling" },
  { title: "Amusing Ourselves to Death", url: "https://www.goodreads.com/book/show/74034.Amusing_Ourselves_to_Death" },
  { title: "Secrets of Sand Hill Road", url: "https://www.goodreads.com/en/book/show/42348376-secrets-of-sand-hill-road#:~:text=In%20Secrets%20of%20Sand%20Hill,of%20their%20relationships%20with%20VCs.&text=%2D%20Why%20the%20skill%20you%20need,to%20tell%20a%20compelling%20story." },
  { title: "Becoming", url: "https://www.goodreads.com/book/show/38746485-becoming" },
  { title: "The Everything Store", url: "https://www.goodreads.com/book/show/17660462-the-everything-store" },
  { title: "Man's Search for Meaning", url: "https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning" },
  { title: "Steve Jobs Biography", url: "https://www.goodreads.com/book/show/11084145-steve-jobs" },
  { title: "1984", url: "https://www.goodreads.com/book/show/40961427-1984" },
  { title: "Shoe Dog", url: "https://www.goodreads.com/book/show/27220736-shoe-dog" },
]

const readingList = [
  { title: "Analyzing Neural Time Series Data: Theory and Practice", url: "https://www.amazon.com/Analyzing-Neural-Time-Data-Practice/dp/0262019876" },
  { title: "The Structure of Scientific Revolutions", url: "https://www.amazon.com/Structure-Scientific-Revolutions-Thomas-Kuhn/dp/0226458083" },
  { title: "Atlas Shrugged", url: "https://www.goodreads.com/book/show/662.Atlas_Shrugged" },
  { title: "Return to the Little Kingdom", url: "https://www.goodreads.com/pt/book/show/6937258-return-to-the-little-kingdom" },
  { title: "When Genius Failed", url: "https://www.goodreads.com/book/show/10669.When_Genius_Failed" },
  { title: "The Rise and Fall of American Growth", url: "https://www.goodreads.com/book/show/26634594-the-rise-and-fall-of-american-growth" },
  { title: "The Autobiography of Benjamin Franklin", url: "https://www.goodreads.com/book/show/52309.The_Autobiography_of_Benjamin_Franklin" },
  { title: "A Culture of Growth", url: "https://www.goodreads.com/book/show/29452523-a-culture-of-growth#:~:text=In%20this%20groundbreaking%20book%2C%20celebrated,explosive%20technological%20and%20economic%20development." },
  { title: "The Art of Doing Science and Engineering", url: "https://www.goodreads.com/book/show/530415.The_Art_of_Doing_Science_and_Engineering "},
  { title: "Anthem", url: "https://www.goodreads.com/book/show/667.Anthem" },
  { title: "Where Wizards Stay Up Late", url: "https://www.goodreads.com/book/show/281818.Where_Wizards_Stay_Up_Late" },
  { title: "I am Malala", url: "https://www.goodreads.com/book/show/17851885-i-am-malala" },
  { title: "21 Lessons for the 21st Century", url: "https://www.goodreads.com/book/show/38820046-21-lessons-for-the-21st-century" },
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
  { title: "Poor Charlie's Almanack", url: "https://www.goodreads.com/book/show/944652.Poor_Charlie_s_Almanack" },
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
          I'm always excited to learn about new book recommendations from others. I'm currently interested in learning more about Asian American identity in America and brain machine interfaces.
        </p>
        <p>
          I haven't found a permanent tool to track my reading list, so I decided to upload it here instead. I've created two lists:
          1) my favorite readings and 2) my personal reading list, many of which have been
          recommendations from others. I tend to jump around and pick up different books I see fit.
        </p>
        <p>
          I'm currently reading&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/book/show/944652.Poor_Charlie_s_Almanack">Poor Charlie's Almanack</a>
          &nbsp;and&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/en/book/show/59696349">Build</a>.
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