import React from "react";
const ImageCard = ({ imageSrc }) => {
  return (
    <div>
      <div
        style={{
          margin: "auto",
          height: "256px",
          width: "256px",
          position: "relative",
        }}
        className="center"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            style={{ maxHeight: "256px", maxWidth: "256px" }}
            alt="Brak zdjęcia"
            src={imageSrc}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
