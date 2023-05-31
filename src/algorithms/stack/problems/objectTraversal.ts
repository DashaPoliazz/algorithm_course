export type ObjectToTraverse = {
  [key: string]: number | Object;
};

export function objectTraversal(object: ObjectToTraverse) {
  for (const key in object) {
    if (!object.hasOwnProperty(key)) {
      return;
    }

    if (typeof object[key] === "number") {
      console.log(object[key]);
    } else if (typeof object[key] === "object") {
      objectTraversal(object[key] as ObjectToTraverse);
    }
  }
}
