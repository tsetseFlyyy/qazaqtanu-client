import { AppShell, Group, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";

const navbarCategories: string[] = [
  "history",
  "language",
  "traditions",
  "music",
  "folklore",
  "ethnogenesis",
  "cinematography",
  "nature_tourism",
  "religion",
];

const HeaderMain = () => {
  return (
    <AppShell.Header unstyled className="header" bg={"dark.8"} px={220} py={17}>
      <Group justify="space-between" align="center">
        <Link to="/">
          <Text className="logo">Qazaqtanu</Text>
        </Link>
        <nav>
          <Group gap={40}>
            {navbarCategories.map((item) => (
              <Link to={`/${item}`}>
                <Text className="navbar-item" size="15px">
                  {item}
                </Text>
              </Link>
            ))}
          </Group>
        </nav>
      </Group>
    </AppShell.Header>
  );
};

export default HeaderMain;
