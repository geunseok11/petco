require("dotenv").config();
import { Resolvers } from "../../types";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import client from "../../client"
const resolvers: Resolvers = {
  Query:{
    signIn: async(_,{userId,password}):Promise<any>=>{
      if(!userId) return {flag:0 ,message: "아이디를 입력해 주세요"}
      if(!password) return {flag:0, message: "비밀번호를 입력해 주세요"}
      const user = await client.users.findFirst({ where:{ userId:userId } });
      if(!user) return {result:false, message:"등록된 아이디가 없습니다."};
      const result = bcrypt.compare(password,user.password);
      if(!result) return {result:false, message:"비밀번호가 틀렸습니다."}
      
      const token = jwt.sign({id:user.id, userId:user.userId},process.env.SECRET_KEY)      
      return {result:true, message:"로그인에 성공하였습니다.",token:token}
    }
  }
};

export default resolvers;