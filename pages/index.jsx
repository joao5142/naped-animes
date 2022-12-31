import styles from "./styles/auth.module.css";
import Input from "../src/components/presentation/Input";
import Button from "../src/components/presentation/Button";

import { useRouter } from "next/router";
import Seo from "../src/components/seo";

export default function LoginHome() {
  const router = useRouter();

  return (
    <>
      <Seo title="Naped Login" />
      <div className={styles["login-container"]}>
        <div className={styles["content-container"]}>
          <a className="logo">Naped</a>
          <h1 className={styles.title}>Entrar Na Conta</h1>
          <Input type="text" name="username" placeholder="Digite seu usuário" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Button onClick={() => router.push("/home")}>Logar na Conta</Button>
          <a
            className={styles["register-link"]}
            onClick={() => router.push("/register")}
          >
            Criar Conta
          </a>
        </div>
      </div>
    </>
  );
}
