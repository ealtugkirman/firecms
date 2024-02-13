import { collection, getDocs } from "firebase/firestore";
import db from "./firebase"

const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "blog"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

export default fetchData;
