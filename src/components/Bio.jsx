import { useEffect, useState } from "react";
import getPhotoUrl from "get-photo-url";
import React from "react";
import profileIcon1 from "../profileIcon1.png";
import { db } from "../dexie";

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Okeke Victor",
    about: "Building Products while Learning Frontend Development",
  });
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileIcon1);

  useEffect(() => {
    const setDataFromDb = async () => {
      const userDetailsFromDb = await db.bio.get("info");
      const profilePhotoFromDb = await db.bio.get("profilePht");
      userDetailsFromDb && setUserDetails(userDetailsFromDb);
      profilePhotoFromDb && setProfilePhoto(profilePhotoFromDb);
    };

    setDataFromDb();
  }, []);

  const updateUserDetails = async (event) => {
    const objectData = {
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    };
    event.preventDefault();
    setUserDetails(objectData);

    //update bio object store here
    await db.bio.put(objectData, "info");
    setEditFormIsOpen(false);
  };

  const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl("#profilePhoto");
    //get selected photo
    //update state here
    setProfilePhoto(newProfilePhoto);
    await db.bio.put(newProfilePhoto, "profilePht");
  };

  const editForm = (
    <form className="edit-bio" onSubmit={(e) => updateUserDetails(e)}>
      <input
        type="text"
        id=""
        name="nameOfUser"
        defaultValue={userDetails?.name}
        placeholder="Your name"
      />
      <input
        type="text"
        id=""
        name="aboutUser"
        defaultValue={userDetails?.about}
        placeholder="About you"
      />
      <br />
      <button
        type="button"
        className="cancel-button"
        onClick={() => setEditFormIsOpen(false)}
      >
        Cancel
      </button>
      <button type="submit" className="save-button">
        Save
      </button>
    </form>
  );

  const editButton = (
    <button onClick={() => setEditFormIsOpen(true)} className="editBtn">
      Edit
    </button>
  );

  return (
    <>
      <section className="bioWrapper">
        <input type="file" accept="image/*" name="photo" id="profilePhoto" />
        <label htmlFor="profilePhoto" onClick={updateProfilePhoto}>
          <div className="imgwrap" role="button" title="Click to edit photo">
            <img src={profilePhoto} alt="profile" className="profileImage" />
          </div>
        </label>

        <div className="biodetails">
          <p className="userName">{userDetails.name}</p>
          <p className="about">{userDetails.about}</p>

          {editFormIsOpen ? editForm : editButton}
        </div>
      </section>
    </>
  );
};

export default Bio;
