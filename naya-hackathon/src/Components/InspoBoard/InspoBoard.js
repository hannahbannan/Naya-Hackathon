import React from "react";
import "./InspoBoard.css";

function InspoBoard() {
  return (
    <div className="InspoBoard">
      <h2>Inspiration starts here!</h2>
      <div className="container">
        <div className="materials container">
          <h3>Materials</h3>
          <img
            className="thumb"
            src="https://res.cloudinary.com/hannahbannan/image/upload/v1602966593/Naya/Materials/0742_yynqu5.jpg"
            alt="oak"
          />
          <img
            className="thumb"
            src="https://res.cloudinary.com/hannahbannan/image/upload/v1602966566/Naya/Materials/0256_a9afxm.jpg"
            alt="copper"
          />
          <img
            className="thumb"
            src="https://res.cloudinary.com/hannahbannan/image/upload/v1602966551/Naya/Materials/0696_jonh1k.png"
            alt="oak with black"
          />
        </div>
        <div className="colors container">
          <h3>Colors</h3>
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967099/Naya/Colors/Screen_Shot_2020-10-17_at_1.37.48_PM_jpcn8d.png" alt="cafe noir" />
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967036/Naya/Colors/Screen_Shot_2020-10-17_at_1.36.30_PM_nf0m8v.png" alt="almond" />
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602966940/Naya/Colors/Screen_Shot_2020-10-17_at_1.35.14_PM_bobtpl.png" alt="space cadet" />
        </div>
        <div className="shapes container">
          <h3>Shapes</h3>
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967223/Naya/Shapes/caa194e88f7932cc5ac2dd68b5f5078d_z41zlh.jpg" alt="almond chaie" />
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967261/Naya/Shapes/b24a2e848687cc44dfd863840c1a45ab_zctgd7.jpg" alt="sharp cube chair" />
          
        </div>
        <div className="design-inspirations container">
          <h3>Design Inpirations</h3>
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967396/Naya/Design/1490389117-white-living-room-03_xbuf3b.jpg" alt="stripe chairs" />
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967347/Naya/Design/scandinavian_feeling_best_coffeetables_muuto_around_n65dca.jpg" alt="round coffee table" />
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967374/Naya/Design/leather-pulls-on-wooden-desk_os4jp8.jpg" alt="navy leather and wood office" />
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967332/Naya/Design/51499-Bok-dining-table-_-51490-Bok-dining-chairs-_7_2048px_zv7as2.jpg" alt="simple rustic dining table" />
        </div>
        <div className="your-space container">
          <h3>Your Space</h3>
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967616/Naya/Your%20Space/empty-dining-room2_x7fzov.jpg" alt="your room" />
        </div>
        <div className="style-words container">
          <h3>Style Words</h3>
          <ul>
              <li>Clean</li>
              <li>Bright</li>
              <li>Nautical</li>
              <li>Modern</li>
          </ul>
        </div>
        <div className="sketch container">
          <h3>Sketch</h3>
          <img className="thumb" src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967787/Naya/Sketch/Screen_Shot_2020-10-17_at_1.49.23_PM_mwrf4v.png" alt="table sketch" />
        </div>
      </div>
    </div>
  );
}

export default InspoBoard;
