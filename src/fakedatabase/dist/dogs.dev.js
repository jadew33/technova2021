"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Cleo = _interopRequireDefault(require("../assets/Cleo.jpg"));

var _DrDoof = _interopRequireDefault(require("../assets/DrDoof.jpg"));

var _Alaska = _interopRequireDefault(require("../assets/Alaska.jpeg"));

var _Drip = _interopRequireDefault(require("../assets/Drip.jpg"));

var _Doge = _interopRequireDefault(require("../assets/Doge.jpeg"));

var _Starbucks = _interopRequireDefault(require("../assets/Starbucks.jpeg"));

var _DoggoWithKisses = _interopRequireDefault(require("../assets/DoggoWithKisses.jpg"));

var _Tobi = _interopRequireDefault(require("../assets/Tobi.jpg"));

var _Pom = _interopRequireDefault(require("../assets/Pom.jpg"));

var _Marly = _interopRequireDefault(require("../assets/Marly.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dogs = [{
  name: "Cleo",
  breed: "German Shepard",
  desc: "A super playful little pup who'll instantly melt your heart",
  id: "4223",
  pic: _Cleo["default"],
  personality: ["Outgoing", "Curious"],
  loc: "Pyramids of Giza",
  company: "Giza.Cleo"
}, {
  name: "Doof",
  breed: "Chihuhua",
  desc: "His sole purpose is to catch Perry the Platypus , along with playing fetch to bring a smile to your face.",
  pic: _DrDoof["default"],
  id: "9382",
  personality: ["Outgoing", "Adventurous"],
  loc: "City (location kept secret)",
  company: "Doofenshmirtz Inc"
}, {
  name: "Alaska",
  breed: "Siberian Husky",
  desc: "If royalty could be personified Alaska would be it. Absolutely majestic but also loving.",
  pic: _Alaska["default"],
  id: "3323",
  personality: ["Shy", "Gentle"],
  loc: "Near the Northern Lights",
  company: "Royal Canine"
}, {
  name: "Drip",
  breed: "Golden retriever",
  desc: "Your perfect candidate for a high school baseball team mascot. If your house isn't made of supreme bricks don't talk to me PEASANT",
  pic: _Drip["default"],
  personality: ["Sporty", "Laidback"],
  id: "8273",
  loc: "Malibu",
  company: "Supreme"
}, {
  name: "Doge",
  breed: "Shiba Inu",
  desc: "World Famous Doge.",
  pic: _Doge["default"],
  id: "4942",
  personality: ["Outgoing", "Curious"],
  loc: "Internet Land",
  company: "Youtube"
}, {
  name: "Starbucks Boy",
  breed: "A hybrid of Beagle and Husky",
  pic: _Starbucks["default"],
  desc: "Clearly got more money than us. Elite. Also skilled enough to lick your entire face till you become mushy.",
  personality: ["Reserved", "Laidback"],
  id: "3423",
  loc: "New Bork",
  company: "Borkbucks"
}, {
  name: "Calvin",
  breed: "Golden retriever",
  pic: _DoggoWithKisses["default"],
  desc: "Not the brand ambassador of Calvin and Klein,yet a lady's man. After all how could one not smother that cute face with kissess.",
  personality: ["Loving", "Adventurous"],
  id: "2851",
  loc: "Atlantis",
  company: "Krusty Krab"
}, {
  name: "Tobi",
  breed: "Shih Tzu",
  desc: "I am a KING, I won't ask for your food--you are expected to give me your food. So.. ig we done now since u always save Best for last. KAMUI- Tobi described in a gist",
  personality: ["Reserved"],
  id: "7244",
  pic: _Tobi["default"],
  loc: "Tobi Nation",
  company: "Royal Canine"
}, {
  name: "Marly",
  breed: "Indie",
  personality: ["Shy", "Curious"],
  desc: " This Caramel brown pup is bound to bring a smile to your face with her antics ",
  id: "1221",
  pic: _Marly["default"],
  loc: "Maldives",
  company: "Waterfilteration.inc"
}, {
  name: "Pom & Rom",
  breed: "Pomeranian",
  personality: ["Reserved", "Laidback"],
  desc: "Little fluffy furballs, perfect for cuddling and increasing your dopamine levels!",
  id: "2321",
  pic: _Pom["default"],
  loc: "Pom Pom Island",
  company: "Krusty Krab"
}];
var _default = dogs;
exports["default"] = _default;