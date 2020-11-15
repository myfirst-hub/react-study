import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  let { id } = router.query;
  return (
    <>
     <h2>动态路由的参数是 === {id}</h2>
     <button onClick={() => router.push('../list')}>返回</button>
    </>
  )
}