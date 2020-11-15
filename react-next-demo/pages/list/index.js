import Link from "next/link";

let arr = [1, 2, 3];
const List = () => {
  return (
    <div>
      <h2>List列表页</h2>
      <hr />
      {arr.map((item) => {
        return (
          <p>
            <Link href="./list/[id]" as={`./list/${item}`} key={item}>
              <a>新闻{item}</a>
            </Link>
          </p>
        );
      })}
    </div>
  );
};

export default List;
