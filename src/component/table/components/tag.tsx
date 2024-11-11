import Typography from "@/component/UI/typography";
import { ComponentPropsWithoutRef } from "react";

type TagPropsType = {
  tagText: string;
} & ComponentPropsWithoutRef<"span">;

const Tag = function ({ tagText, ...spanAttributes }: TagPropsType) {
  const { className, ...attributes } = spanAttributes;
  return (
    <span
      {...attributes}
      className={`border-solid border-2 rounded-full  border-blue-600 bg-blue-300 text-blue-600 px-4 py-2 ${
        className ?? ""
      }`}
    >
      <Typography>{tagText}</Typography>
    </span>
  );
};

export default Tag;
