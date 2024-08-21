import firestore from "./firebase";

import data from "./products.json";
const detailRef = firestore.collection("products");

data.forEach((item) => {
  detailRef
    .doc(item.id)
    .set(item)
    .then(() => console.count("item - "))
    .catch((error) => {
      console.log({
        item,
        msg: error.message,
      });
    });
});
