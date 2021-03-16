export const fetchEnties = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(Entires);
    }, 5000);
  });
};

export const createEntry = (title, content) => {
  return new Promise((res) => {
    setTimeout(() => {
      Entires.push({
        id: Math.floor(Math.random() * 100000),
        title,
        thoughts: content,
      });
      res()
    }, 500);
  });
};

// export default fetchEnties;
const Entires = [
  {
    id: 135345,
    title: "The wind rises in the east",
    thoughts:
      "poooop orem ipsum dolor sit  Lorem ipsum dolor sit Lorem ipsum dolor siLorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit   ",
  },
  {
    id: 23234234,
    title: "The sun rises in the sky",
    thoughts:
      "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
  },
  {
    id: 36675,
    title: "The sunny day",
    thoughts:
      "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit.",
  },
  {
    id: 443534534,
    title: "The rainy day",
    thoughts:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit.",
  },
];
