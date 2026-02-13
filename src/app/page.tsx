import { redirect } from 'next/navigation';

import { paths } from 'src/routes/paths';

export default async function Home() {
  // this is just to show the splash screen
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return redirect(paths.login);
}
