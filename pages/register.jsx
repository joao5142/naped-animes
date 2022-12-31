import styles from "./styles/auth.module.css";
import Input from "../src/components/presentation/Input";
import Button from "../src/components/presentation/Button";

import { useRouter } from "next/router";

export default function LoginHome() {
  const router = useRouter();

  return (
    <>
      <div className={styles["login-container"]}>
        <div className={styles["content-container"]}>
          <a className="logo">Naped</a>
          <h1 className={styles.title}>Faça sua Conta</h1>
          <Input type="text" name="username" placeholder="Digite seu usuário" />
          <Input type="email" name="username" placeholder="Digite seu email" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Input
            type="password"
            name="rp-password"
            placeholder="Digite novamente sua senha"
          />

          <Button onClick={() => router.push("/")}>Criar Conta</Button>
          <a
            className={styles["register-link"]}
            onClick={() => router.push("/")}
          >
            Ja tenho uma conta
          </a>
        </div>
      </div>
    </>
  );
}
