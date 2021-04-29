import { gql } from "apollo-server";

export default gql`
  enum PetType{
    cat
    dog
  }
  type Pet {
    id: Int
    name: String
    avatar: String
    birth:  String
    gender: String
    weight: String
    type: PetType
    in_neutered: Boolean
    vaccinated: Boolean
    user_id: Int
    # TODO - type definitions
  }
`;
