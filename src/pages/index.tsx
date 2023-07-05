import MenuToggle from "@/components/theme/MenuToggle";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen gap-4">
      <div className="flex justify-end p-6">
        <MenuToggle />
      </div>
      <h1 className="p-2 text-4xl font-bold  min-h-max h-[600px] flex justify-center items-center">Hello</h1>
    </div>
  );
}
