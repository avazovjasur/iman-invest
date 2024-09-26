import AimInner from "@/components/AimInner/AimInner"
import { useRouter } from "next/router";

const Aim = () => {
  const router = useRouter()
  const { id } = router.query;

  return <>
    <AimInner investmentId={id} />
  </>
}

export default Aim