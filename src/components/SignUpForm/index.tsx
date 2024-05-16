import React, { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, Input, Button, Flex, Item, Text } from "./styles";
import { IForm } from "./types";
import { Link, useNavigate } from "react-router-dom";
import { usersApi } from "@/api/users";

const SignUpForm: FC = () => {
   const {
      register,
      handleSubmit: HookHandleSubmit,
      formState: { errors, isValid, dirtyFields },
      reset,
   } = useForm<IForm>({
      mode: "onChange",
   });
   const navigate = useNavigate();
   const handleSubmit: SubmitHandler<IForm> = async (data) => {
      try {
         await usersApi.signUp<IForm>(data);
         reset();
         navigate("/signin");
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
            <Item<IForm> label="Email" name="email" rules={[{ required: true }]}>
               <Input
                  status={!dirtyFields?.email ? "default" : errors?.email ? "error" : "success"}
                  {...register("email", {
                     required: "Please input your email!",
                  })}
               />
               <div>{errors?.email && <Text type="danger">{errors?.email.message}</Text>}</div>
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
         <Link to="/signin">Уже есть аккаунт?</Link>
      </Flex>
   );
};
export default SignUpForm;
