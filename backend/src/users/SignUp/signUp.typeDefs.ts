import { gql } from "apollo-server";
export default gql`
  type SignUpPayLoad{
    result: Boolean
    message: String
    user:User
  }
  type Query{
    userIdDuplicateTest(userId:String): SignUpPayLoad
    emailDuplicateTest(email:String): SignUpPayLoad
  }
  type Mutation{
    signUp(
      userId:String
      email:String
      avatar:String
      password:String
      phone_number:String
      username:String
      is_valid:Boolean
    ): SignUpPayLoad
  }
`;
