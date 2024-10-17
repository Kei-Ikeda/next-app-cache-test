import { Suspense } from "react";
import Ssg from "@/app/_top/ssg";
import Isr from "@/app/_top/isr";
import Ssr from "@/app/_top/ssr";
import Button from "@/components/button";

export default function Home() {
  return (
    <div className="p-4">
      <p className="font-bold text-lg">
        ブラウザをリロードして動作を確認してください
      </p>
      <p className="font-bold">
        ポケモンが再レンダリングされる場合はサーバー側でAPIからの再取得が発生しています
      </p>
      <div className="mt-4 flex flex-col gap-y-2">
        <p>-------SSG-------</p>
        <Suspense fallback={<>Loading...</>}>
          <Ssg />
        </Suspense>
        <p className="text-sm">
          キャッシュクリアボタン押下後の画面リロードでサーバー側でAPIから再取得
        </p>
        <div className="max-w-[340px]">
          <Button target="ssg" text="SSGキャッシュをクリア" />
        </div>
        <p>-----------------</p>
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <p>-------Isr-------</p>
        <Suspense fallback={<>Loading...</>}>
          <Isr />
        </Suspense>
        <p className="text-sm">
          初回レンダリングまたは前回のリロードから20秒以上経過後のリロード時、
          またはキャッシュクリアボタン押下後の画面リロードでサーバー側でAPIから再取得
        </p>
        <div className="max-w-[340px]">
          <Button target="isr" text="ISRキャッシュをクリア" />
        </div>
        <p>-----------------</p>
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <p>-------Ssr-------</p>
        <Suspense fallback={<>Loading...</>}>
          <Ssr />
        </Suspense>
        <p className="text-sm">
          キャッシュなしなのでリロードの度にサーバー側でAPIから再取得
        </p>
        <p>-----------------</p>
      </div>
    </div>
  );
}
