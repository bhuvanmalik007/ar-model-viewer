import trooperIOS from "./St_Class.usdz";
import trooper from "./st_class.glb";
import predator from "./Predator_s.glb";
import predatorIOS from "./Predator_S.usdz";
interface model {
  name: string;
  src: string;
  iosSrc: string;
}
export const models: model[] = [
  {
    name: "Astronaut",
    src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    iosSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
  },
  {
    name: "Trooper",
    src: trooper,
    iosSrc: trooperIOS,
  },
  {
    name: "Chair",
    src: "https://237529.selcdn.ru//awespace/product/6190/8786.glb",
    iosSrc: "https://237529.selcdn.ru/faradise/product/6190/8786.usdz",
  },
  {
    name: "Predator",
    src: predator,
    iosSrc: predatorIOS,
  },
];
export const skyBoxImg: string =
  "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr";
