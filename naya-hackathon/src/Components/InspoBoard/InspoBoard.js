import React from "react";
import "./InspoBoard.css";
import { SwatchesPicker } from "react-color";

function InspoBoard() {
  return (
    <div className="InspoBoard">
      <h1>Design Board</h1>
      <div className="outside">
        <div className="block">
          <div className="materials">
            <h3>Materials</h3>
            <div className="image container">
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
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1603051501/Naya/Materials/112138_3488172802153_7d4aa062_13ee_4a77_be22_90478cad464a_zgip0a.jpg"
                alt="blue epoxy"
              />
            </div>
            <button>Edit</button>
          </div>

          <div className="shapes">
            <h3>Shapes</h3>
            <div className="image container">
              <img
                className="thumb bigthumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967223/Naya/Shapes/caa194e88f7932cc5ac2dd68b5f5078d_z41zlh.jpg"
                alt="almond chaie"
              />
              <img
                className="thumb bigthumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967261/Naya/Shapes/b24a2e848687cc44dfd863840c1a45ab_zctgd7.jpg"
                alt="sharp cube chair"
              />
            </div>
            <img
              className="thumb bigthumb"
              src="https://res.cloudinary.com/hannahbannan/image/upload/v1603051662/Naya/Shapes/product_66767_wmn6fh.jpg"
              alt="rounded table"
            />
            <button>Edit</button>
          </div>
        </div>

        <div className="block">
          <div className="colors">
            <h3>Colors</h3>
            <div className="image container">
              <img
                className="thumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967099/Naya/Colors/Screen_Shot_2020-10-17_at_1.37.48_PM_jpcn8d.png"
                alt="cafe noir"
              />
              <img
                className="thumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967036/Naya/Colors/Screen_Shot_2020-10-17_at_1.36.30_PM_nf0m8v.png"
                alt="almond"
              />
              <img
                className="thumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602966940/Naya/Colors/Screen_Shot_2020-10-17_at_1.35.14_PM_bobtpl.png"
                alt="space cadet"
              />
            </div>
            <button>Edit</button>
          </div>
          <div className="sketch">
            <h3>Sketch</h3>
            <div className="image container">
              <img
                className="thumb bigthumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967787/Naya/Sketch/Screen_Shot_2020-10-17_at_1.49.23_PM_mwrf4v.png"
                alt="table sketch"
              />
            </div>
            <button>Edit</button>
          </div>
          <div className="your-space">
            <h3>Your Space</h3>
            <div className="image container">
              <img
                className="thumb bigthumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967616/Naya/Your%20Space/empty-dining-room2_x7fzov.jpg"
                alt="your room"
              />
            </div>
            <button>Edit</button>
          </div>
          <div className="style-words">
            <h3>Style Words</h3>
            <p>Clean</p>
            <p>Bright</p>
            <p>Nautical</p>
            <p>Modern</p>
            <button>Edit</button>
          </div>
        </div>

        <div className="block">
          <div className="design-inspirations">
            <h3>Design Inspirations</h3>
            <div className="image container">
              <img
                className="thumb bigthumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967396/Naya/Design/1490389117-white-living-room-03_xbuf3b.jpg"
                alt="stripe chairs"
              />
              <img
                className="thumb bigthumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967347/Naya/Design/scandinavian_feeling_best_coffeetables_muuto_around_n65dca.jpg"
                alt="round coffee table"
              />
              <img
                className="thumb bigthumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967374/Naya/Design/leather-pulls-on-wooden-desk_os4jp8.jpg"
                alt="navy leather and wood office"
              />
              <img
                className="thumb bigthumb"
                src="https://res.cloudinary.com/hannahbannan/image/upload/v1602967332/Naya/Design/51499-Bok-dining-table-_-51490-Bok-dining-chairs-_7_2048px_zv7as2.jpg"
                alt="simple rustic dining table"
              />
            </div>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InspoBoard;
