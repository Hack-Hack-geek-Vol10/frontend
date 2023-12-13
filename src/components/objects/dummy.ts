export const tablesData = {
  tables: [
    {
      name: "users",
      position: { x: 0, y: 0 },
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
      position: { x: 0, y: 0 },
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
      from: "users.id",
      to: "likes.id",
    },
  ],
};
