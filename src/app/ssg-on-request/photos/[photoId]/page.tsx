import Image from "next/image";

type Props = {
  params: { photoId: string };
};

export function generateStaticParams() {
  // リクエスト時生成に限定する場合は空配列を返す
  return [];
}

export default async function Page({ params: { photoId } }: Props) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
  const data = await response.json();

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <Image src={data.url} alt="Sunset in the mountains" width={600} height={200} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">
          リクエスト時にサーバーサイドでキャッシュされるページです。
        </p>
      </div>
    </div>
  )
}
