import AngleLeft from "./angle-left";
import AngleRight from "./angle-right";
import DotsVertical from "./dots-vertical";
import DotsHorizon from "./dots-horizon";
import Search from "./search";

export type IconProps = {
  className: string;
};

const icons = {
  search: Search,
  angleLeft: AngleLeft,
  angleRight: AngleRight,
  dotsVertical: DotsVertical,
  dotsHorizon: DotsHorizon,
};

export default icons;