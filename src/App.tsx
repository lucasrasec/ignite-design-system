import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { CheckBox } from "./components/CheckBox";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Text } from "./components/Text";
import { Logo } from "./Logo";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e começe a usar
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-sctretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-bold">Endereço de e-mail</Text>
          <Input.Root>
            <Input.Icon>
              <Envelope />
            </Input.Icon>
            <Input.Input
              type="email"
              id="email"
              placeholder="Digite seu E-mail"
            />
          </Input.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-bold">Endereço de e-mail</Text>
          <Input.Root>
            <Input.Icon>
              <Lock />
            </Input.Icon>
            <Input.Input
              type="password"
              id="password"
              placeholder="***********"
            />
          </Input.Root>
        </label>

        <label htmlFor="remenber" className="flex items-center gap-2">
          <CheckBox id="remenber" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
