// import { PwaAddToHomescreen } from '@/components/pwa-add-to-home-screen/pwa-add-to-home-screen';
import Link from 'next/link';

import Button from '@/components/button/button';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main>
      <Button> Merhaba </Button>
      <Link href="/about">About Link</Link>
    </Main>
  );
};

export default Index;

// Index.getLayout = function getLayout(page: React.ReactElement) {
//   return <MainLayout>{page}</MainLayout>;
// };
