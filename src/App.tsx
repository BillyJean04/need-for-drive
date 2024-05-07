import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { store } from "@/redux/store";
import { router } from "@/routes";
import { theme } from "@/styles/theme";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              duration: 3000,
              style: {
                background: "#363636",
                color: "#fff",
              },
              success: {
                duration: 3000,
              },
            }}
          />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
