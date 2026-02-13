import MainSection from './main';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <MainSection>{children}</MainSection>;
}
