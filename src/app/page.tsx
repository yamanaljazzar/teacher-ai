import { redirect } from 'next/navigation';

import { paths } from 'src/routes/paths';

export default function Home() {
  return redirect(paths.login);
}
