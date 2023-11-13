import { AuthContentLayout } from "./content.layout";
import { AuthFooterLayout } from "./footer.layout";
import AuthHeaderLayout from "./header.layout";
import AuthRootLayout from "./root.layout";

export const AuthLayout = Object.assign(
  AuthRootLayout,
  {
    header: AuthHeaderLayout,
    content: AuthContentLayout,
    footer: AuthFooterLayout
  },
)

