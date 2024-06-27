import React from "react";

export default function Form() {
  const handleForm = (e) => {
    const obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      stock: e.target.stock.value,
      image: e.target.image.value,
      price: parseFloat(e.target.price.value).toFixed(2),
    };
    console.log(obj);
  };

  const form = [
    {
      title: "productTitle",
      type: "text",
      placeholder: "productTitle",
      name: "title",
    },

    {
      title: "productDescription",
      type: "textarea",
      placeholder: "productDescription",
      name: "description",
    },
    { title: "stock", type: "number", placeholder: "stock", name: "stock" },
    {
      title: "productImage",
      type: "file",
      placeholder: "productImage",
      name: "image",
    },
    {
      title: "productPrice",
      type: "text",
      placeholder: "productPrice",
      name: "price",
    },
    {
      title: "productSize",
      type: "radio",
      name: "size",
      options: [
        {
          id: 1,
          name: "sm",
          value: "sm",
        },
        {
          id: 2,
          name: "md",
          value: "md",
        },
        {
          id: 3,
          name: "lg",
          value: "lg",
        },
      ],
      placeholder: "productSize",
    },

    {
      title: "productColor",
      type: "radio",
      extends: "color",
      placeholder: "productColor",
      name: "color",
      options: [
        {
          id: 1,
          name: "#000000",
          value: "#000000",
        },
        {
          id: 2,
          name: "#222222",
          value: "#222222",
        },
        {
          id: 3,
          name: "#444444",
          value: "#444444",
        },
      ],
    },
  ];

  return (
    <>
      <h2>Form</h2>

      <form method="dialog" action="" onSubmit={(e) => handleForm(e)}>
        {form.map((data, index) => {
          const type = data?.type;
          let field;
          if (type !== "textarea" && type !== "radio") {
            field = (
              <label style={{ display: "block" }}>
                <span style={{ display: "block" }}>{data?.name}</span>
                <input
                  type={type}
                  placeholder={data?.placeholder}
                  name={data?.name}
                />
              </label>
            );
          } else if (type === "textarea") {
            field = (
              <>
                <span style={{ display: "block" }}>{data?.name}</span>

                <textarea
                  type={type}
                  placeholder={data?.placeholder}
                  name={data?.name}
                ></textarea>
              </>
            );
          } else if (type === "radio") {
            let options = [];
            data.options?.map((opt) => {
              options.push(
                <label style={{ display: "block" }}>
                  {data?.extends === "color" ? (
                    ""
                  ) : (
                    <span style={{ display: "block" }}>{opt.name}</span>
                  )}
                  <input
                    type={data?.extends || data?.type}
                    name={data.name}
                    defaultValue={opt.value}
                  />
                </label>
              );
            });
            field = (
              <div>
                <span style={{ display: "block" }}> {data?.name}</span>
                <div style={{ display: "flex", gap: 15 }}>{options}</div>
              </div>
            );
          }
          return field;
        })}
        <input type="submit" value={"submit"} />
      </form>
    </>
  );
}
