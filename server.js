import { ApolloServer, gql } from "apollo-server";

const foods = [
  {
    id: "1",
    date: "월아",
    mainFood: "",
    sideFood1: "",
    sideFood2: "",
    sideFood3: "",
    soup: "",
    drink: "",
    salad: "",
    time: "아침",
    type: "",
    rice: "",
    waring: true,
    isTwo: true,
  },
  {
    id: "2",
    date: "월아",
    mainFood: "",
    sideFood1: "",
    sideFood2: "",
    sideFood3: "",
    soup: "",
    drink: "",
    salad: "",
    time: "아침",
    type: "",
    rice: "",
    waring: true,
    isTwo: false,
  },
  {
    id: "3",
    date: "월",
    mainFood: "백 순대볶음",
    sideFood1: "비엔나 브로컬리 볶음",
    sideFood2: "무생채",
    sideFood3: "석박지",
    soup: "대파육개장",
    drink: "고소한미숫가루",
    salad: "그린샐러드&드레싱3종",
    time: "점심",
    type: "종합",
    rice: "쌀밥",
    waring: false,
  },
  {
    id: "4",
    date: "월",
    mainFood: "산채비빔밥+수제계란후라이",
    sideFood1: "모둠튀김 + 초간장",
    sideFood2: "도토리물야채무침",
    sideFood3: "배추김치/콘샐러드",
    soup: "미소시루",
    drink: "요구르트",
    salad: "샐러드미제공",
    time: "저녁",
    type: "종합",
    rice: "수수밥",
    waring: false,
  },
  {
    id: "5",
    date: "화아",
    mainFood: "길거리토스트",
    sideFood1: "소시지 속 어묵 야채볶음",
    sideFood2: "절임 고추 무침",
    sideFood3: "포기김치",
    soup: "크림스프",
    drink: "누룽지",
    salad: "그린샐러드&드레싱3종",
    time: "아침",
    type: "한식",
    rice: "보리밥",
    waring: false,
    isTwo: true,
  },
  {
    id: "6",
    date: "화아",
    mainFood: "길거리토스트",
    sideFood1: "소시지 속 어묵 야채볶음",
    sideFood2: "절임 고추 무침",
    sideFood3: "포기김치",
    soup: "크림스프",
    drink: "누룽지",
    salad: "그린샐러드&드레싱3종",
    time: "아침",
    type: "한식",
    rice: "보리밥",
    waring: false,
    isTwo: false,
  },
  {
    id: "7",
    date: "화점",
    mainFood: "제육 두루치기",
    sideFood1: "치킨너겟+허니머스터드소스",
    sideFood2: "고구마줄기/무생채",
    sideFood3: "포기김치",
    soup: "시금치된장국",
    drink: "맛좋은 둥글레차",
    salad: "그린샐러드&드레싱3종",
    time: "점심",
    type: "종합",
    rice: "수수밥",
    waring: false,
    isTwo: true,
  },
  {
    id: "8",
    date: "화점",
    mainFood: "제육 두루치기",
    sideFood1: "치킨너겟+허니머스터드소스",
    sideFood2: "고구마줄기/무생채",
    sideFood3: "포기김치",
    soup: "시금치된장국",
    drink: "맛좋은 둥글레차",
    salad: "그린샐러드&드레싱3종",
    time: "점심",
    type: "종합",
    rice: "수수밥",
    waring: false,
    isTwo: false,
  },
  {
    id: "9",
    date: "화",
    mainFood: "제육 두루치기",
    sideFood1: "치킨너겟+허니머스터드소스",
    sideFood2: "고구마줄기/무생채",
    sideFood3: "포기김치",
    soup: "시금치된장국",
    drink: "맛좋은 둥글레차",
    salad: "그린샐러드&드레싱3종",
    time: "저녁",
    type: "종합",
    rice: "수수밥",
    waring: false,
  },
  {
    id: "10",
    date: "수아",
    mainFood: "감자가득 닭볶음탕",
    sideFood1: "소시지 속 어묵 야채볶음",
    sideFood2: "절임 고추 무침",
    sideFood3: "포기김치",
    soup: "맑은 콩나물국",
    drink: "누룽지",
    salad: "그린샐러드&드레싱3종",
    time: "아침",
    type: "한식",
    rice: "보리밥",
    waring: false,
    isTwo: true,
  },
  {
    id: "11",
    date: "수아",
    mainFood: "감자가득 닭볶음탕",
    sideFood1: "소시지 속 어묵 야채볶음",
    sideFood2: "절임 고추 무침",
    sideFood3: "포기김치",
    soup: "맑은 콩나물국",
    drink: "누룽지",
    salad: "그린샐러드&드레싱3종",
    time: "아침",
    type: "한식",
    rice: "보리밥",
    waring: false,
    isTwo: false,
  },
  {
    id: "12",
    date: "수",
    mainFood: "제육 두루치기",
    sideFood1: "치킨너겟+허니머스터드소스",
    sideFood2: "고구마줄기/무생채",
    sideFood3: "포기김치",
    soup: "시금치된장국",
    drink: "맛좋은 둥글레차",
    salad: "그린샐러드&드레싱3종",
    time: "점심",
    type: "종합",
    rice: "수수밥",
    waring: false,
  },
  {
    id: "13",
    date: "수",
    mainFood: "제육 두루치기",
    sideFood1: "치킨너겟+허니머스터드소스",
    sideFood2: "고구마줄기/무생채",
    sideFood3: "포기김치",
    soup: "시금치된장국",
    drink: "맛좋은 둥글레차",
    salad: "그린샐러드&드레싱3종",
    time: "저녁",
    type: "종합",
    rice: "수수밥",
    waring: false,
  },
  {
    id: "14",
    date: "목아",
    mainFood: "감자가득 닭볶음탕",
    sideFood1: "소시지 속 어묵 야채볶음",
    sideFood2: "절임 고추 무침",
    sideFood3: "포기김치",
    soup: "맑은 콩나물국",
    drink: "누룽지",
    salad: "그린샐러드&드레싱3종",
    time: "아침",
    type: "한식",
    rice: "보리밥",
    waring: false,
    isTwo: true,
  },
  {
    id: "15",
    date: "목아",
    mainFood: "감자가득 닭볶음탕",
    sideFood1: "소시지 속 어묵 야채볶음",
    sideFood2: "절임 고추 무침",
    sideFood3: "포기김치",
    soup: "맑은 콩나물국",
    drink: "누룽지",
    salad: "그린샐러드&드레싱3종",
    time: "아침",
    type: "한식",
    rice: "보리밥",
    waring: false,
    isTwo: false,
  },
  {
    id: "16",
    date: "목점",
    mainFood: "제육 두루치기",
    sideFood1: "치킨너겟+허니머스터드소스",
    sideFood2: "고구마줄기/무생채",
    sideFood3: "포기김치",
    soup: "시금치된장국",
    drink: "맛좋은 둥글레차",
    salad: "그린샐러드&드레싱3종",
    time: "점심",
    type: "종합",
    rice: "수수밥",
    waring: false,
    isTwo: true,
  },
  {
    id: "17",
    date: "목점",
    mainFood: "제육 두루치기",
    sideFood1: "치킨너겟+허니머스터드소스",
    sideFood2: "고구마줄기/무생채",
    sideFood3: "포기김치",
    soup: "시금치된장국",
    drink: "맛좋은 둥글레차",
    salad: "그린샐러드&드레싱3종",
    time: "점심",
    type: "종합",
    rice: "수수밥",
    waring: false,
    isTwo: false,
  },
  {
    id: "18",
    date: "목",
    mainFood: "제육 두루치기",
    sideFood1: "치킨너겟+허니머스터드소스",
    sideFood2: "고구마줄기/무생채",
    sideFood3: "포기김치",
    soup: "시금치된장국",
    drink: "맛좋은 둥글레차",
    salad: "그린샐러드&드레싱3종",
    time: "저녁",
    type: "종합",
    rice: "수수밥",
    waring: false,
  },
  {
    id: "19",
    date: "금아",
    mainFood: "감자가득 닭볶음탕",
    sideFood1: "소시지 속 어묵 야채볶음",
    sideFood2: "절임 고추 무침",
    sideFood3: "포기김치",
    soup: "맑은 콩나물국",
    drink: "누룽지",
    salad: "그린샐러드&드레싱3종",
    time: "아침",
    type: "한식",
    rice: "보리밥",
    waring: false,
    isTwo: true,
  },
  {
    id: "20",
    date: "금아",
    mainFood: "감자가득 닭볶음탕",
    sideFood1: "소시지 속 어묵 야채볶음",
    sideFood2: "절임 고추 무침",
    sideFood3: "포기김치",
    soup: "맑은 콩나물국",
    drink: "누룽지",
    salad: "그린샐러드&드레싱3종",
    time: "아침",
    type: "한식",
    rice: "보리밥",
    waring: false,
    isTwo: false,
  },
  {
    id: "21",
    date: "금",
    mainFood: "제육 두루치기",
    sideFood1: "치킨너겟+허니머스터드소스",
    sideFood2: "고구마줄기/무생채",
    sideFood3: "포기김치",
    soup: "시금치된장국",
    drink: "맛좋은 둥글레차",
    salad: "그린샐러드&드레싱3종",
    time: "점심",
    type: "종합",
    rice: "수수밥",
    waring: false,
  },
  {
    id: "22",
    date: "금",
    mainFood: "제육 두루치기",
    sideFood1: "치킨너겟+허니머스터드소스",
    sideFood2: "고구마줄기/무생채",
    sideFood3: "포기김치",
    soup: "시금치된장국",
    drink: "맛좋은 둥글레차",
    salad: "그린샐러드&드레싱3종",
    time: "저녁",
    type: "종합",
    rice: "수수밥",
    waring: false,
  },
];

const typeDefs = gql`
  type Food {
    id: ID
    date: String
    mainFood: String
    sideFood1: String
    sideFood2: String
    sideFood3: String
    soup: String
    drink: String
    salad: String
    time: String
    type: String
    rice: String
    waring: Boolean

    isTwo: Boolean
  }
  type Query {
    allFoods: [Food!]!
    food(id: ID!): Food!
  }
`;

const resolvers = {
  Query: {
    allFoods() {
      return foods;
    },
    food(root, { id }) {
      return foods.find((food) => food.id === id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
