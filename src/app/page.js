'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const data = [
    {
      name: "Nested-Comment",
      link: "comment",
      class: "text-blue-400",
    },
    {
      name: "Custom  Toaster",
      link: "custom-toaster",
      class: "text-yellow-400",
    },
    {
      name: "Drag And Drop",
      link: "draganddrop",
      class: "text-lime-400",
    },
    {
      name: "Frequently Asked Questions",
      link: "faq",
      class: "text-green-400",
    },
    {
      name: "File Explorer",
      link: "file-explorer",
      class: "text-teal-400",
    },
    {
      name: "Otp",
      link: "otp",
      class: "text-sky-400",
    },
    {
      name: "Pagination",
      link: "pagination",
      class: "text-indigo-400",
    },
    {
      name: "Progress Bar",
      link: "progress-bar",
      class: "text-purple-400",
    },
    {
      name: "Select All",
      link: "select-all",
      class: "text-rose-400",
    },
    {
      name: "Star",
      link: "star",
      class: "text-gray-400",
    },
    {
      name: "Stepper ",
      link: "stepper",
      class: "text-zinc-400",
    },
    {
      name: "Swap Tasks",
      link: "swap-tasks",
      class: "text-fuchsia-400",
    },
    {
      name: "Traffic-Lights",
      link: "trafficlight",
      class: "text-amber-400",
    },
  ];
  const router = useRouter();
  return (
    <div className="m-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        { data?.map((ele,i)=>(
          <div key={ele} className={`w-[300px] cursor-pointer hover:shadow-2xl h-[200px] shadow-md flex items-center justify-center ${ele?.class}`} onClick={()=> router.push(ele?.link)}>
             {ele?.name}
            </div>
        ))}
      </div>
    </div>
  );
}
