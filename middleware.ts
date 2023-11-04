export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/isssues/new", "/issues/edit/:id+"],
};
