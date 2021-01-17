import React from "react";
import { Form, Field, Formik } from "formik";
import {
  Wrap,
  Box,
  Heading,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  const submitForm = (values, actions) => {
    console.log(values, actions);
  };

  const validateNotEmpty = (value) => {
    if (!value) {
      return "Este campo não pode ficar vazio.";
    }

    return;
  };

  const formInitialValues = {
    name: "",
    email: "",
    message: "",
  };

  const nameInput = ({ field, form }) => (
    <FormControl isRequired mb="3">
      <FormLabel htmlFor="name">Nome</FormLabel>
      <Input {...field} id="name" placeholder="Seu Nome" />
      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
    </FormControl>
  );

  const emailInput = ({ field, form }) => (
    <FormControl isRequired mb="3">
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <Input {...field} type="email" id="email" placeholder="Seu E-mail" />
      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
    </FormControl>
  );

  const messageInput = ({ field, form }) => (
    <FormControl isRequired mb="3">
      <FormLabel htmlFor="message">Mensagem</FormLabel>
      <Textarea {...field} id="message" placeholder="Sua Mensagem" />
      <FormErrorMessage>{form.errors.message}</FormErrorMessage>
    </FormControl>
  );

  return (
    <Wrap my="5">
      <Heading fontSize="4xl" textAlign="center" w="100%">
        Fala comigo
      </Heading>
      <Box w="100%" mt="4">
        <Formik onSubmit={submitForm} initialValues={formInitialValues}>
          {(props) => (
            <Form>
              <Field name="name" validate={validateNotEmpty}>
                {nameInput}
              </Field>
              <Field name="email" validate={validateNotEmpty}>
                {emailInput}
              </Field>
              <Field name="message" validate={validateNotEmpty}>
                {messageInput}
              </Field>
              <Box d="flex" flexDirection="column" w="100%">
                <Button isLoading={props.isSubmitting} type="submit" size="lg">
                  Enviar mensagem
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Wrap>
  );
};

export default Contact;
