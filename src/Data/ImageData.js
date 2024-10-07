import Image1 from "../Data/image/chestpress.png";
import Image2 from "../Data/image/fly.png";
import Image3 from "../Data/image/pelvic-tilt.jpg";
import Image4 from "../Data/image/back-extension.png";
import Image5 from "../Data/image/schouders.png";
import Image6 from "../Data/image/dumbell-standing.jpg";
import Image7 from "../Data/image/triceps-press.png";
import Image8 from "../Data/image/leg-extension.png";
import Image9 from "../Data/image/dumbells-bovenbenen.png";
import Image10 from "../Data/image/pelvic-tilt.jpg";
import Image11 from "../Data/image/crunch-buik.png";
import Image12 from "../Data/image/pulldown.jpg";
import Image13 from "../Data/image/seated-row-wide-grip.jpg";
import Image14 from "../Data/image/seated-dumbbell-press.jpg";

const items = [
  {
    id: 1,
    src: Image1,
    title: "Chest press machine ",
    description: "Borst",
  },
  {
    id: 2,
    src: Image2,
    title: "fly",
    description: "Borst",
  },
  {
    id: 3,
    src: Image3,
    title: "Pusch up",
    description: "Borst",
  },
  {
    id: 4,
    src: Image4,
    title: "spinal extension",
    description: "OnderRug",
  },
  {
    id: 5,
    src: Image5,
    title: "sholder deltoid",
    description: "Shouders",
  },
  {
    id: 6,
    src: Image6,
    title: "Dumbell standing",
    description: "Biceps",
  },
  {
    id: 7,
    src: Image7,
    title: "Panatta dips press",
    description: "Triceps",
  },
  {
    id: 8,
    src: Image8,
    title: "life fitness circuitleg extension",
    description: "Bovenbenen",
  },
  {
    id: 9,
    src: Image9,
    title: "Squit Dumbbless",
    description: "Bovenbenen",
  },
  {
    id: 10,
    src: Image10,
    title: "One leg pelvic tilt,one side",
    description: "Bilspieren",
  },
  {
    id: 11,
    src: Image11,
    title: "Crunch machine",
    description: "Buik",
  },
  {
    id: 12,
    src: Image12,
    title: "hi-power vertical traction pull",
    description: "BovenRug",
  },
  {
    id: 13,
    src: Image13,
    title: "Drax seated row wide grip",
    description: "Bovenrug",
  },
  {
    id: 14,
    src: Image14,
    title: "Dumbbel press twist seated",
    description: "Schouders",
  },
];

export default items;

// Array.from({ length: 14 }).map((item, index) => (
//   <img key={index} src={item.image} alt={`Image ${index + 1}`} />
// ));
//  {Array.from({ length: 12 }).map((id,src,title) => (
//             <Col key={id}></Col>