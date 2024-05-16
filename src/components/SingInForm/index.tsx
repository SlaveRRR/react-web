import React, { FC, useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, Input, Button, Flex, Item, Text } from "./styles";
import { IForm } from "./types";
import { Link, useNavigate } from "react-router-dom";
import { usersApi } from "@/api/users";
import { ctx } from "@/context";

const SignInForm: FC = () => {
   const {
      register,
      handleSubmit: HookHandleSubmit,
      formState: { errors, isValid, dirtyFields },
      reset,
   } = useForm<IForm>({
      mode: "onChange",
   });
   const navigate = useNavigate();
   const { setIsAuth } = useContext(ctx);

   const handleSubmit: SubmitHandler<IForm> = async (data) => {
      try {
         const response = await usersApi.signIn<IForm>(data);
         if (response.status === 200) {
            localStorage.setItem("token", response.headers.authorization);
            reset();
            setIsAuth(true);
            navigate("/");
            return;
         }
         throw new Error(response.data?.detail);
      } catch (error) {
         alert(error);
      }
   };

   return (
      <Flex gap={16} align="center" vertical justify="center">
         <Form onSubmit={HookHandleSubmit(handleSubmit)}>
            <Item<IForm> label="Username" name="username" rules={[{ required: true }]}>
               <Input
                  status={!dirtyFields?.username ? "default" : errors?.username ? "error" : "success"}
                  {...register("username", {
                     required: "Please input your username!",
                  })}
               />
               <div>{errors?.username && <Text type="danger">{errors?.username.message}</Text>}</div>
            </Item>

            <Item<IForm> label="Password" name="password" rules={[{ required: true }]}>
               <Input
                  type="password"
                  status={!dirtyFields?.password ? "default" : errors?.password ? "error" : "success"}
                  {...register("password", {
                     required: "Please input your password!",
                  })}
               />
               <div>{errors?.password && <Text type="danger">{errors?.password.message}</Text>}</div>
            </Item>
            <Item wrapperCol={{ offset: 8, span: 16 }}>
               <Button disabled={!isValid} type="primary" htmlType="submit">
                  Submit
               </Button>
            </Item>
         </Form>
         <Link to="/signup">Впервые здесь?</Link>
      </Flex>
   );
};
export default SignInForm;
