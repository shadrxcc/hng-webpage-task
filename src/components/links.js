import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <div className="nav">
        <div className="link-tag">
          <a
            className="links"
            id="btn-zuri"
            target="blank"
            href="https://twitter.com/shadrxcc/"
          >
            Twitter Link
          </a>
        </div>

        <div className="link-tag">
          <a
            className="links"
            id="btn-zuri"
            target="blank"
            href="https://training.zuri.team/"
          >
            Zuri Team
          </a>
        </div>

        <div className="link-tag">
          <a
            className="links"
            id="books"
            target="blank"
            href="http://books.zuri.team/"
          >
            Zuri Books
            <sub hidden>
              A directory where you find books about design and coding
            </sub>
          </a>
        </div>

        <div className="link-tag">
          <a
            className="links"
            id="book__python"
            target="blank"
            href="https://books.zuri.team/python-for-beginners?ref_id=<Shadrach Akaade>"
          >
            Python Books
            <sub hidden>
              A directory where you feature the book you want to selling
            </sub>
          </a>
        </div>

        <div className="link-tag">
          <a
            className="links"
            id="pitch"
            target="blank"
            href="https://background.zuri.team/"
          >
            Background Check for Coders
            <sub hidden>
              A directory where you pitch your services of doing background
              checks on coders
            </sub>
          </a>
        </div>

        <div className="link-tag">
          <a
            className="links"
            id="book__design"
            target="blank"
            href="https://books.zuri.team/design-rules"
          >
            Design Books
            <sub hidden>
              A directory where you pitch the free design book offered by Zuri
            </sub>
          </a>
        </div>

        <div className="link-tag">
          <a className="links" id="contact" target="blank" href="/contact">
            Contact Me
            <sub hidden>
              Reach out to me
            </sub>
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
