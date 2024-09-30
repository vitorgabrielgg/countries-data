import { AiOutlineLoading } from "react-icons/ai";

export const Loading = () => {
  return (
    <div className="mt-5">
      <AiOutlineLoading className="animate-spin w-10 h-10 mx-auto dark:text-white transition-colors" />
    </div>
  );
};
