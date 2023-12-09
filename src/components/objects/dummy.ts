export const tablesData = {
  tables: [
    {
      name: "users",
      columns: [
        {
          name: "id",
          type: "int",
          options: ["PK"],
        },
        {
          name: "name",
          type: "varchar",
          options: ["NN"],
        },
        {
          name: "email",
          type: "varchar",
          options: ["NN"],
        },
      ],
    },

    {
      name: "likes",
      columns: [
        {
          name: "id",
          type: "int",
          options: ["PK"],
        },
        {
          name: "to_user_id",
          type: "int",
          options: ["NN"],
        },
        {
          name: "from_user_id",
          type: "int",
          options: ["NN"],
        },
      ],
    },
  ],
  relations: [
    {
      id: "users.id,likes.id",
      from_col: "users.id",
      to_col: "likes.id",
    },
  ],
  enums: [
    {
      name: "hoge",
      fields: ["fuga", "foo", "bar"],
    },
  ],
};
