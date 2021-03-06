import React, { FC } from "react";
import { Form } from "../../components/common/Form/Form";
import { IField } from "../../types/IField";
import { useRouter } from "next/router";
import { queryClient } from "../_app";
import { CreateStyle } from "../../components/common/CreateStyle/CreateStyle";

const Create: FC = () => {
  const router = useRouter();
  const fields: IField[] = [
    {
      label: "name",
      inputType: "text",
      placeholder: "Category",
      autofocus: true,
    },
  ];
  const onSubmit = (data: any) => {
    fetch("/api/categories/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, userId: 1 }), // TODO: user for tests
    })
      .then((response) => response.json())
      .then((item) => console.log(item));
    queryClient.refetchQueries("categories");
    router.push("/categories");
  };
  return (
    <CreateStyle>
      <Form
        title="New Category"
        fields={fields}
        btnText="Add New"
        onSubmit={onSubmit}
        back="/categories"
      />
    </CreateStyle>
  );
};

export default Create;
