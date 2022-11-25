import React from "react";
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3_header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient text">
                    Lets Build Something Amazing with
                    Gpt-3 Open Ai
                    <p>Yet bed any for traveling assistance indulgence unpleasing.
                    <br />Not thoughts all exercise blessing.
                    <br />Indulgence Way, <br />
                    everything joy alteration boisterous the attachment.
                    <br />Party we yeats to order allow asked of.</p>
                </h1>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access</p>
                </div>
              </div>
            <div className="gpt3__header-image">
              <img src={ai} alt="ai" />
            </div>
         </div>
    )
}

export default Header