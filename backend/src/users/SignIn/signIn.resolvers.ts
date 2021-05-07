require("dotenv").config();
import { Resolvers } from "../../types";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const resolvers: Resolvers = {
  Query:{
    signIn: async(_,data,client):Promise<any>=>{
      try{

        const {email,password} = data;
        if(!email) return {result:false ,message: "이메일을 입력해 주세요"}
        if(!password) return {result:false, message: "비밀번호를 입력해 주세요"}
        const user = await client.users.findFirst({ where:{ email } });
        console.log(user)
        if(!user) return {result:false, message:"등록된 아이디가 없습니다."};
        const result = await bcrypt.compare(password,user.password);
        if(!result) return {result:false, message:"비밀번호가 틀렸습니다."}
      
        const token = jwt.sign(user,process.env.SECRET_KEY)
        return {result:true, message:"로그인에 성공하였습니다.",token}

      }catch(e){
        
      }
      
    }
  }
};

export default resolvers;