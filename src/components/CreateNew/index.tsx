import React, { FC, useEffect, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Form as antdForm, Button, Flex, Progress, Typography } from "antd";

import PdfDocument from "../PdfDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { Form, Input } from "./style";

import { IForm } from "./types";
import { INew } from "../News/types";

const { Item } = antdForm;
const { Text, Title } = Typography;

interface Props {
   setItems: React.Dispatch<React.SetStateAction<INew[]>>;
   items: INew[];
}

const CreateNew: FC<Props> = ({ setItems, items }) => {
   const [time, setTime] = useState<number>(60);

   const [isCreated, setIsCreated] = useState<boolean>(false);

   const {
      register,
      handleSubmit: HookHandleSubmit,
      formState: { errors, isValid, dirtyFields },
      reset,
   } = useForm<IForm>({
      mode: "onChange",
   });

   useEffect(() => {
      if (!isCreated) {
         return;
      }

      const id = setInterval(() => {
         setTime((prev) => prev - 1);
      }, 1000);

      setTimeout(() => {
         clearInterval(id);
         setIsCreated(false);
         setTime(60);
      }, 1000 * 60);
   }, [isCreated]);

   const handleSubmit: SubmitHandler<IForm> = (data) => {
      const reader = new FileReader();

      const { picture, username, comment } = data;

      reader.readAsDataURL(picture[0]);

      reader.onload = () => {
         const newItem = {
            username,
            comment,
            picture: reader.result as string,
         };
         reset();
         setItems((prev) => [newItem, ...prev]);
         setIsCreated(true);
      };
   };

   return (
      <Flex gap={16} align="center">
         <Form onSubmit={HookHandleSubmit(handleSubmit)}>
            <Item<IForm> label="Username" name="username" rules={[{ required: true }]}>
               <Input
                  status={!dirtyFields?.username ? "default" : errors?.username ? "error" : "success"}
                  {...register("username", {
                     required: "Please input your username!",
                     validate: (value) => value.length >= 5 || `Required one more ${5 - value.length} symbols`,
                  })}
               />
               <div>{errors?.username && <Text type="danger">{errors?.username.message}</Text>}</div>
            </Item>

            <Item<IForm> label="Comment" name="comment" rules={[{ required: true }]}>
               <Input
                  status={!dirtyFields?.comment ? "default" : errors?.comment ? "error" : "success"}
                  {...register("comment", {
                     required: "Please input your comment!",
                     validate: (value) => value.length >= 10 || `Required one more ${10 - value.length} symbols`,
                  })}
               />
               <div>{errors?.comment && <Text type="danger">{errors?.comment.message}</Text>}</div>
            </Item>

            <Item<IForm> label="Picture" name="picture" rules={[{ required: true }]}>
               <Input
                  type="file"
                  accept="image/*"
                  status={!dirtyFields?.picture ? "default" : errors?.picture ? "error" : "success"}
                  {...register("picture", {
                     required: "Please select picture!",
                  })}
               />
               <div>{errors?.picture && <Text type="danger">{errors?.picture.message}</Text>}</div>
            </Item>

            <Item wrapperCol={{ offset: 8, span: 16 }}>
               <Button disabled={!isValid} type="primary" htmlType="submit">
                  Submit
               </Button>
            </Item>
         </Form>
         {isCreated && (
            <Flex vertical gap={10} align="center">
               <Title level={4}>Save post to file</Title>
               <Progress type="circle" percent={time} format={(per) => `${per}`} />
               <PDFDownloadLink document={<PdfDocument document={items[0]} />} fileName="post.pdf">
                  {({ blob, url, loading, error }) => (loading ? "Loading..." : "Download")}
               </PDFDownloadLink>
            </Flex>
         )}
      </Flex>
   );
};

export default CreateNew;
