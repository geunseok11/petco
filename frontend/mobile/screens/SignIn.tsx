import React from "react";
import styled from "styled-components/native";
import { useRef } from "react";
import { AuthLayout, AuthButton, TextInputIcon } from "../components/auth";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const DefaultContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const InputContainer = styled(DefaultContainer)`
  margin-bottom: 18px;
`;

const RowTextContainer = styled(DefaultContainer)`
  flex-direction: row;
  margin-bottom: 20%;
`;

const ButtonContainer = styled(DefaultContainer)`
  margin-bottom: 19px;
`;

const TextInput = styled.TextInput`
  flex: 1;
  left: 40px;
`;

const Link = styled.TouchableOpacity``;

const RowText = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

export default function SignIn({ navigation }) {
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("userId");
    register("password");
  }, [register]);
  const goToHome = () => navigation.navigate("Home");
  const goToSignUp = () => navigation.navigate("SignUp");
  const onValid = (data: object) => {
    console.log(data);
    // TODO validation
    goToHome();
  };

  const passwordInputRef = useRef();
  const onTextInputNext = () => {
    const { current }: any = passwordInputRef;
    current?.focus();
  };

  return (
    <AuthLayout title={`펫코에${"\n"}로그인하기`}>
      <InputContainer>
        <TextInputIcon icon="person-outline">
          <TextInput
            placeholder="아이디를 입력해주세요."
            placeholderTextColor="#333"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            onSubmitEditing={onTextInputNext}
            blurOnSubmit={false}
            onChangeText={(text) => setValue("userId", text)}
          />
        </TextInputIcon>
        <TextInputIcon icon="lock-closed-outline">
          <TextInput
            ref={passwordInputRef}
            placeholder="비밀번호를 입력해주세요."
            placeholderTextColor="#333"
            returnKeyType="done"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            onSubmitEditing={handleSubmit(onValid)}
            onChangeText={(text) => setValue("password", text)}
          />
        </TextInputIcon>
      </InputContainer>
      <RowTextContainer>
        <Link style={{ paddingRight: 47 }}>
          <RowText>아이디 찾기</RowText>
        </Link>
        <Link>
          <RowText>비밀번호 찾기</RowText>
        </Link>
      </RowTextContainer>
      <ButtonContainer>
        <AuthButton
          onPress={handleSubmit(onValid)}
          text="로그인 하기"
          disabled={false}
        />
      </ButtonContainer>
      <RowTextContainer style={{ marginBottom: 0 }}>
        <RowText style={{ paddingRight: 16 }}>펫코가 처음이신가요?</RowText>
        <Link onPress={goToSignUp}>
          <RowText style={{ color: "#F5C01D" }}>회원가입하기</RowText>
        </Link>
      </RowTextContainer>
    </AuthLayout>
  );
}