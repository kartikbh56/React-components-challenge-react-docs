export function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
export function getAwardsNum() {
  return this.awards.length;
}
export const Profiles = [
  {
    name: "Maria Sklodowska-Curie",
    imgId: "szV5sdG",
    profession: "physicist and chemist",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovered: "Polonium (chemical element)",
  },
  {
    name: "Katsuko Saruhashi",
    imgId: "YfeOqp2",
    profession: "geochemist",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    awardsNum: function () {
      return this.awards.length;
    },
    discovered: "a method for measuring carbon dioxide in seawater",
  },
];
