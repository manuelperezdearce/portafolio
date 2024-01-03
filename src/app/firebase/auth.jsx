import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./config";

const auth = getAuth(app);

const login = ({ email, password }) => signInWithEmailAndPassword(auth, email, password)


export { login }