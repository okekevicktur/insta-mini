import React from "react";
import profileIcon1 from "../profileIcon1.png";
// import instaPro from "../instaPro.png";

const Bio = () => {
  const editForm = (
    <form className="eidt-bio">
      <input type="text" id="" placeholder="Your name" />
      <input type="text" id="" placeholder="About you" />
      <br />
      <button type="button" className="cancel-button">
        Cancel
      </button>
      <button type="button" className="save-button">
        Save
      </button>
    </form>
  );
  return (
    <>
      <section className="bioWrapper">
        <div className="imgwrap" role="button" title="Click to edit photo">
          <img src={profileIcon1} alt="profile" className="profileImage" />
        </div>

        <div className="biodetails">
          <p className="userName">Okeke Victor</p>
          <p className="about">
            Building Products while Learning Frontend Development
          </p>
          <button className="editBtn">Edit</button>
          {editForm}
        </div>
      </section>
    </>
  );
};

export default Bio;
