import { ApolloServer, gql } from "apollo-server";

const foods = [
  {
    id: "1",
    mainFood: "감자가득 닭볶음탕",
    sideFood1: "소시지 속 어묵 야채볶음",
    sideFood2: "절임 고추 무침",
    sideFood3: "포기김치",
    soup: "맑은 콩나물국",
    drink: "누룽지",
    salad: "그린샐러드&드레싱3종",
    time: "점심",
    type: "한식",
    rice: "보리밥",
  },
  {
    id: "2",
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
  },
];

const typeDefs = gql`
  type Food {
    id: ID
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
