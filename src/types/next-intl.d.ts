import type { Messages } from "./types/messages";

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
