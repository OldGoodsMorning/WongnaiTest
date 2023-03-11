import React from "react";

interface NavImgProp {
  coverImg: string;
}

const NavImg: React.FC<NavImgProp> = (props: NavImgProp) => {
  return (
    <>
      <img
        src={props.coverImg}
        style={{
          minHeight: "350px",
          maxHeight: "400px",
          width: "100%",
          objectFit: "cover",
          backgroundPosition: "center",
        }}
      />
    </>
  );
};

export default NavImg;
