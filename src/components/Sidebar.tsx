import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";

interface SidebarComponentProps  {
  userName: string;
  type?: "admin" |"student";
}
export type { SidebarComponentProps };
export default function Sidebar({ userName, type }: SidebarComponentProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
            <Group gap="1">
        <Indicator
          inline
          size={12}
          offset={7}
          position="bottom-end"
          color="cyan"
          withBorder
        >
          <Avatar
            size="md"
            radius="xl"
            src="get.jpg"
            alt="it's me"
            style={{ marginLeft: 15 }}
          />
        </Indicator>

        <Box p={20}>
          <Text fw={500} >User : {userName} : {type}</Text>
        </Box>
      </Group>
    </Stack>
  );
}