import { createContext } from "react";

const ColorContext = createContext({ color: "black" }); //provider를 사용하지 않았을 때 기본값

export default ColorContext;
