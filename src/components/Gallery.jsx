import React from "react";

const Gallery = () => {
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <i className="add-photo-button fas fa-plus-square"></i>
      </label>

      <section className="gallery">
        <div className="item">
          '<img src="" alt="" className="itemImage" />
        </div>
      </section>
    </>
  );
};

export default Gallery;
