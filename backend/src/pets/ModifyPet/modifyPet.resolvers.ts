import {Resolvers} from "../../types"
import client from "../../client"

const resolvers:Resolvers={
  Mutation:{
    modifyPet: async (_,data):Promise<any>=>{
      const {id} = data
      delete data.id
      data.updated_at = new Date();
      const pet = await client.pets.update({
        data,
        where:{id}
      })
      .catch(err=> {return {result:false,message:"반려동물 정보수정에 실패하였습니다.",error:err}})
      return {result:true,pet:pet,message:"반려동물 정보수정에 성공하였습니다."}
    }
  }
}

export default resolvers;