import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

import { db } from "../firebase/config";

const productsRef = collection(db, "products");

// TRAE LOS PRODUCTOS//
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error al traer los productos:", error);
    return [];
  }
};

//TRAER PRODUCTOS POR ID//
export const getProductsById = async (id) => {
  try {
    const productRef = doc(db, "products", id);

    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer el producto por ID:", error);
    return null;
  }
};

//CREA PRODUCTOS//
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);

    return docRef.id; // opcional, por si quieren usar el id para algo
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};
