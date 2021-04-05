import { compareField } from "../../util";

const initialState = [
  {
    id: "7RHDMJVX",
    title: "The Art of War",
    category: "economics",
    description:
      "This classic Chinese text, the earliest known treatise on war, offers strategy and tactics that can be applied to every type of human conflict. Central to Sun Tzu's philosophy is the concept of using deception and superior intelligence to minimize risk, which has made his book required reading at military, business, and law schools around the world.",
    price: "27.95",
    media: "https://www.amazon.ca/images/I/615ol0I0SEL.jpg",
  },
  {
    id: "DJ6VJY6Q",
    title: "12 Rules for Life: An Antidote to Chaos",
    category: "self-help",
    description:
      "What does everyone in the modern world need to know? Renowned psychologist Jordan B. Peterson's answer to this most difficult of questions uniquely combines the hard-won truths of ancient tradition with the stunning revelations of cutting-edge scientific research.",
    price: "23.37",
    media: "https://www.amazon.ca/images/I/71DMt113sML.jpg",
  },
  {
    id: "VLDOP1KJ",
    title:
      "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
    category: "self-help",
    description:
      'In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people. For decades, we’ve been told that positive thinking is the key to a happy, rich life. "F**k positivity," Mark Manson says." Let’s be honest, shit is f**ked and we have to live with it." In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate.',
    price: "24.24",
    media: "https://www.amazon.ca/images/I/71QKQ9mwV7L.jpg",
  },
  {
    id: "4PPXMO65",
    title:
      "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
    category: "finance",
    description:
      "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
    price: "10.10",
    media: "https://www.amazon.ca/images/I/91VokXkn8hL.jpg",
  },
  {
    id: "HQ8XGO6Y",
    title:
      "Cracking the Coding Interview: 189 Programming Questions and Solutions",
    category: "coding",
    description:
      "I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer. Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best.",
    price: "41.15",
    media: "https://www.amazon.ca/images/I/619M-4xNINL.jpg",
  },
].sort(compareField("category"));

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK": {
      const book = action.payload;
      return [...state, book].sort(compareField("category"));
    }
    case "REMOVE_BOOK": {
      const id = action.payload;
      return state.filter((book) => book.id !== id);
    }
    case "EDIT_BOOK": {
      const { id, book } = action.payload;
      const index = state.findIndex((book) => book.id === id);
      const newState = [...state];
      newState[index] = { ...newState[index], ...book };
      return newState.sort(compareField("category"));
    }
    default:
      return state;
  }
}
