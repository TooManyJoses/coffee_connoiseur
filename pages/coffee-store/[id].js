import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);

  return (
    <div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Back to page dynamic</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
