import { gql } from "apollo-server";

export default gql`
  type ProfilePayload {
    result: Boolean
    user: User
    message:String
  }
  type Query {
    profile(id: Int): ProfilePayload
  }
`;
