import { gql } from "apollo-server";
export default gql`
  type SignUpPayLoad{
    status:Int
    message: String
    user:User
  }
  type Mutation{
    signUp(
      email:String
      avatar:String
      password:String
      phone_number:String
      username:String
      is_valid:Boolean
    ): SignUpPayLoad
  }
`;
