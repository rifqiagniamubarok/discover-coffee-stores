import Link from 'next/link';
import { useRouter } from 'next/router';

const CoffeStore = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      CoffeStore {router.query.id}
      <div>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
};
export default CoffeStore;
