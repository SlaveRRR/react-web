import React, { FC } from 'react'
import { Form as antdForm, Button, Typography } from 'antd';

import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { INew } from '../../types/news';

const { Item } = antdForm;
const { Text } = Typography





interface IForm {
    username: string;
    comment: string;
}

interface ValidateStatus {
    'success': 'green';
    'error': 'red';
    'default': '#d9d9d9'
}

const validateStatuses: ValidateStatus = {
    'success': 'green',
    'error': 'red',
    'default': '#d9d9d9'
}

interface StyledProps {
    status: keyof ValidateStatus;
}


const Input = styled('input') <StyledProps>`
   
    border-radius: 6px;
    padding:.5em .5em;
    &:focus{
        outline: none;
    }
    &:focus-visible{
        border-color:#4096ff;
    }
    

    border:${({ status }) => `1px solid ${validateStatuses[status]}`};
`

const Form = styled('form')`
    background:#b9b8b8;
    padding:.5em;
    border-radius:15px;
`



type Props = {
    setItems: React.Dispatch<React.SetStateAction<INew[]>>
}

const CreateNew: FC<Props> = ({ setItems }) => {
    const { register, handleSubmit: HookHandleSubmit, formState: { errors, isValid, dirtyFields, }, reset } = useForm<IForm>({
        mode: "onChange",
    })


    const handleSubmit: SubmitHandler<IForm> = (data) => {
        reset();
        setItems(prev => [data, ...prev])
    }

    return (
            <Form onSubmit={HookHandleSubmit(handleSubmit)}>
                <Item<IForm>
                    label="Username"
                    name="username"
                    rules={[{ required: true }]}

                >
                    <Input
                        status={!dirtyFields?.username ? 'default' : errors?.username ? 'error' : 'success'}
                        {...register('username', {
                            required: "Please input your username!",
                            validate: value => value.length >= 5 || `Required one more ${5 - value.length} symbols`
                        }
                        )} />
                    <div>{errors?.username && <Text type="danger">{errors?.username.message}</Text>}</div>

                </Item>

                <Item<IForm>
                    label="Comment"
                    name="comment"
                    rules={[{ required: true }]}
                >
                    <Input
                        status={!dirtyFields?.comment ? 'default' : errors?.comment ? 'error' : 'success'}
                        {...register('comment', {
                            required: "Please input your comment!",
                            validate: value => value.length >= 10 || `Required one more ${10 - value.length} symbols`
                        }
                        )} />
                    <div>{errors?.comment && <Text type="danger">{errors?.comment.message}</Text>}</div>
                </Item>

                <Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button disabled={!isValid} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Item>
            </Form>
    )
}

export default CreateNew