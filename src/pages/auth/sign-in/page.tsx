import {
  Button,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link } from "@tanstack/react-router";
import classes from "../style.module.css";
import { IconChevronDown } from "@tabler/icons-react";
import { useLogin } from "@/features/auth/sign-in/api/useLogin";

const SignInPage = () => {
  const { onSubmit, key, getInputProps } = useForm({ mode: "uncontrolled" });

  const { mutate: login, isLoading, error } = useLogin();

  const handleSubmit = (values: { email: string; password: string }) => {
    login(values);
  };

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <Stack className="auth" align="center" justify="center">
      <Stack className="auth__stack">
        <Title order={1} className="auth__stack-title">
          Qazaqtanu
        </Title>

        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack align="center" justify="center">
            <Stack gap={10} mb={20}>
              <TextInput
                classNames={{ input: classes.input }}
                key={key("email")}
                {...getInputProps("email")}
                placeholder="Введите email"
              />
              <TextInput
                classNames={{ input: classes.input }}
                key={key("password")}
                {...getInputProps("password")}
                placeholder="Введите пароль"
              />
            </Stack>
            <Button className="button" px={30} py={5} type="submit" unstyled>
              Войти
            </Button>
            <Stack gap={0} align="center">
              <Group>
                <Link to="/auth/sign-up">
                  <Text className="auth__stack-link" unstyled>
                    Нет аккаунта?
                  </Text>
                </Link>
                <Link to="/auth/recovery-password">
                  <Text className="auth__stack-link">Забыли пароль?</Text>
                </Link>
              </Group>
              <Group gap={0}>
                <Text c="#978661">Выбор языка:</Text>
                <Select
                  classNames={{
                    input: classes["select-input"],
                    section: classes.section,
                    wrapper: classes.wrapper,
                    dropdown: classes.dropdown,
                    option: classes.option,
                  }}
                  rightSection={
                    <IconChevronDown size={14} style={{ color: "#978661" }} />
                  }
                  defaultValue="Русский"
                  data={["Қазақ", "Русский", "English"]}
                />
              </Group>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default SignInPage;
