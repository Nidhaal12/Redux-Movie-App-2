import uuid from "uuid";
import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  GET_KEYWORD,
  GET_RATING
} from "../actions/types";

const initState = [
  {
    id: uuid(),
    name: "All the Bright Places",
    image:
      "https://cdn-static.egybest.net/serve/movies/art-2870918518-x300.jpg",
    rating: 5,
    year: "2020",
    description:
      "قصة (فيوليت ماركي) و(تيودور فينش) الذين يجتمعا ويغيرا حياة بعضهما البعض إلى الأبد، يحدث ذلك عندما يتصارعان مع الندوب العاطفية والجسدية لماضيهما، ثم يجتمعا ويكتشفا أن حتى أصغر الأماكن واللحظات يمكن أن تعني شيئًا ما. "
  },
  {
    id: uuid(),
    name: "Little Woman",
    image:
      "https://cdn-static.egybest.net/serve/movies/art-2804903322-x300.jpg ",
    rating: 4,
    year: "2019",
    description:
      "إعادة تقديم جديدة لرائعة الكاتبة الروائية لويزا ماي ألكوت الكلاسية الشهيرة (نساء صغيرات)، والذي يروي قصة نضوج أربع شقيقات من عائلة مارش عقب الحرب اﻷهلية اﻷمريكية. "
  },
  {
    id: uuid(),
    name: "Burning Bright",
    image:
      " https://cdn-static.egybest.net/serve/movies/art-0150499570-x300.jpg",
    rating: 2,
    year: "2010",
    description:
     "كيلى تايلور تستعد للرحيل إلى الجامعة، وتعتزم أن تأخذ أخاها الصغير؛ المصاب بمرض التوحد لإحدى الهيئات المتخصصة. تكتشف أن ليس لها أي رصيد في البنك، حينما تعود إلي المنزل، تكتشف أن زوج والدتها قام بسحب كل رصيدهم، ليقوم بشراء نمر من أجل عرض السفاري؛ الذي يجهز له، واستخدم بقية الأموال لتحصين المنزل ضد الأعاصير. تستيقظ كيلى ذات يوم لتجد نفسها محبوسة في المنزل هي وأخيها مع النمر في مكان واحد. وتبدأ الأحداث في التوالي في إطار تشويقي مثير."
  },
  {
    id: uuid(),
    name: "Lou",
    image:
      "https://cdn-static.egybest.net/serve/movies/art-1557402028-x300.jpg ",
    rating: 4,
    year: "2017",
    description:
      "تدور الأحداث حول صندوق كان ضائع ثم تم إيجاده، لكن الصندوق كان يحتوي على وحش خفي. "
  },
  {
    id: uuid(),
    name: "Sonic",
    image:
      "https://cdn-static.egybest.net/serve/movies/art-2838056871-x300.jpg ",
    rating: 5,
    year: "2020",
    description:
      "يقوم شرطي في بلدة جرين هيلز الريفية بمساعدة (سونيك القنفذ) على الهروب من الحكومة التي تتطلع للقبض عليه، لكن هل هذا له سبب طبيعي؟ ولم تطارده الحكومة من الأساس؟  "
  },
  {
    id: uuid(),
    name: "Zero",
    image:
      "https://cdn-static.egybest.net/serve/movies/art-2202615974-x300.jpg ",
    rating: 3,
    year: "2018",
    description:
      "تدور القصة حول القزم (باوا سينج)، المليء بالسحر وخفة الدم، مع قليل من الغطرسة، ولد (باوا) لعائلة ثرية وترعرع في بيئة من الترف والتساهل، فلم يخذله أحد أبدا، ولكن عندما يلتقي بالامرأتان (بابيتا)، و(عافية)، فإن تجاربه معهما تأخذه في رحلة لإكمال عدم اكتماله وتوسيع آفاقه للعثور على هدف لم يكن يعرفه أبدًا، وهو الحب، والذي قد يستلزمه دفع مقابل لم يكن يعرفه. "
  }
];


const MovieReducer = (
  state = { movies: initState, keyword: "", rating: 1 },
  action
) => {
  switch (action.type) {
    case GET_KEYWORD:
      return { ...state, keyword: action.payload };
    case GET_RATING:
      return { ...state, rating: action.payload };
    case ADD_MOVIE:
      return { ...state, movies: state.movies.concat(action.payload) };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(el => el.id !== action.payload)
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === action.payload.id
            ? { ...el, ...action.payload.upadatedMovie }
            : el
        )
      };
    default:
      return state;
  }
};
export default MovieReducer;
