import { useAppSelector } from "@/redux/hooks";
import { URL } from "@/utils/api";
import Image from "next/image";

export default function Infor() {
  const { receiverUser } = useAppSelector((state) => state.userStore);
  return (
    <>
      {receiverUser ? (
        <div className="bg-white w-[25%] border p-4 ml-auto">
          <div className="flex flex-col justify-center items-center gap-3 mt-8">
            {/* avatar */}
            <div className="w-[150px] h-[150px] shadow-lg rounded-full overflow-hidden relative">
              <Image
                src={
                  receiverUser?.avatar
                    ? `${URL}/${receiverUser?.avatar}`
                    : "/avatar_none_user.svg"
                }
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-medium">{receiverUser?.username}</h2>
            <p className="text-xl">Vietnamese</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="rounded-full w-20 h-20 bg-[#e6effa] flex items-center justify-center">
              <Image src="/phone_chat.svg" width={40} height={40} alt="phone" />
            </div>
            <div className="w-[1px] h-20 bg-c-grey"></div>
            <div className="rounded-full w-20 h-20 bg-[#e6effa] flex items-center justify-center">
              <Image
                src="/camera_chat.svg"
                width={50}
                height={50}
                alt="phone"
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Image src="/person.svg" width={35} height={35} alt="phone" />
            <p>Thêm vào bạn bè</p>
          </div>
          <div className="mt-2 flex items-center justify-center gap-3">
            <Image
              src="/heart/heart_red.svg"
              width={35}
              height={35}
              alt="phone"
            />
            <p>Đã vào danh sách yêu thích</p>
          </div>

          <div className="mt-8 text-xl font-semibold">Tệp đính kèm</div>
          <div className="grid grid-cols-4 gap-6 mt-4">
            <div className="rounded-lg bg-[#477ef8] text-white text-center flex items-center justify-center text-lg aspect-[1/1]">
              PDF
            </div>
            <div className="rounded-lg bg-[#477ef8] text-white text-center flex items-center justify-center text-lg aspect-[1/1]">
              VIDEO
            </div>
            <div className="rounded-lg bg-[#477ef8] text-white text-center flex items-center justify-center text-lg aspect-[1/1]">
              MP3
            </div>
            <div className="rounded-lg bg-[#477ef8] text-white text-center flex items-center justify-center text-lg aspect-[1/1]">
              IMAGE
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white w-[25%] border text-2xl text-center font-semibold flex items-center justify-center">
          Bạn hãy một cuộc trò chuyện
        </div>
      )}
    </>
  );
}
