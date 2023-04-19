import getPhotoUrl from "get-photo-url";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { db } from "../dexie";

const Gallery = () => {
  const allPhotos = useLiveQuery(() => db.gallery.toArray(), []);
  const addPhoto = async () => {
    db.gallery.add({
      url: await getPhotoUrl("#addPhotoInput"),
    });
  };
  const removePhoto = (id) => {
    db.gallery.delete(id);
  };
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto} className="back">
        <i className="add-photo-button fas fa-plus-square"></i>
      </label>

      <section className="gallery">
        {!allPhotos && <p>Loading. . . </p>}
        {allPhotos?.map((photo) => (
          <div className="item" key={photo.id}>
            <img src={photo.url} alt="" className="itemImage" />
            <button
              className="delete-button"
              onClick={() => removePhoto(photo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallery;
