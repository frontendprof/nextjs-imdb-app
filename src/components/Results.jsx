export default function ({ results }) {
  return (
    <>
      {results.map((item) => (
        <div>
          {item.original_title ? item.original_title : item.original_name}
        </div>
      ))}
    </>
  );
}
