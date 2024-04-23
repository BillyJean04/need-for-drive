import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Sidebar } from "@/components";
import MainLayout from "@/layouts/MainLayout";
import { router } from "@/routes";
import { theme } from "@/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </ThemeProvider>
  );
}
