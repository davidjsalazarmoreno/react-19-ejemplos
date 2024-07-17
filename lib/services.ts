export const updateName = (name: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("");
      reject("Error updating name");
      console.log(name);
    }, 1000);
  });
};

export type Comment = {
  id: string;
  comment: string;
};

export const getComments = (): Promise<Comment[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   reject("Error getting comments");
      resolve([
        {
          id: "1",
          comment: "Comment 1",
        },
        {
          id: "2",
          comment: "Comment 2",
        },
      ]);
    }, 5000);
  });
};
