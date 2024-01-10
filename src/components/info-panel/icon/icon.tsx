import React from "react";
import Image from "next/image";

function Icon(props: { src: string }) {
  const { src } = props;
  return (
    <Image
      className="mx-auto"
      src={src}
      alt="fire effectiveness"
      width={20}
      height={20}
    ></Image>
  );
}

export default Icon;
